const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

// Simple in-memory storage for rate limiting
// In production, you'd use Redis or a database
const dailyUsage = new Map();
const DAILY_LIMIT_PER_IP = 5;

// Helper function to get client IP
function getClientIP(req) {
  return req.headers['x-forwarded-for']?.split(',')[0] || 
         req.headers['x-real-ip'] || 
         req.connection?.remoteAddress || 
         req.socket?.remoteAddress ||
         'unknown';
}

// Helper function to check and update usage
function checkDailyLimit(ip) {
  const today = new Date().toDateString();
  const userKey = `${ip}_${today}`;
  
  const currentUsage = dailyUsage.get(userKey) || 0;
  
  if (currentUsage >= DAILY_LIMIT_PER_IP) {
    return { allowed: false, usage: currentUsage, remaining: 0 };
  }
  
  // Increment usage
  dailyUsage.set(userKey, currentUsage + 1);
  
  return { 
    allowed: true, 
    usage: currentUsage + 1, 
    remaining: DAILY_LIMIT_PER_IP - (currentUsage + 1) 
  };
}

// Clean up old entries (run occasionally)
function cleanupOldEntries() {
  const today = new Date().toDateString();
  for (const [key] of dailyUsage) {
    if (!key.endsWith(today)) {
      dailyUsage.delete(key);
    }
  }
}

// Helper function to wait
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to make API call with retry
async function callGeminiWithRetry(url, requestBody, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    console.log(`🔄 Attempt ${attempt}/${maxRetries}`);
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      const responseText = await response.text();
      console.log(`📈 Response status: ${response.status}`);

      if (response.status === 429) {
        console.log('⏳ Rate limited, parsing retry delay...');
        
        let retryDelay = 30000; // Default 30 seconds
        try {
          const errorData = JSON.parse(responseText);
          const retryInfo = errorData.error?.details?.find(detail => 
            detail['@type'] === 'type.googleapis.com/google.rpc.RetryInfo'
          );
          
          if (retryInfo?.retryDelay) {
            const delayStr = retryInfo.retryDelay;
            if (delayStr.endsWith('s')) {
              retryDelay = parseInt(delayStr) * 1000;
            } else if (delayStr.endsWith('m')) {
              retryDelay = parseInt(delayStr) * 60 * 1000;
            }
          }
        } catch (parseErr) {
          console.log('Could not parse retry delay, using default');
        }

        if (attempt < maxRetries) {
          console.log(`⏰ Waiting ${retryDelay/1000} seconds before retry...`);
          await wait(retryDelay);
          continue;
        } else {
          console.log('❌ Max retries reached');
          return {
            ok: false,
            status: 429,
            text: responseText,
            isRateLimit: true
          };
        }
      }

      return {
        ok: response.ok,
        status: response.status,
        text: responseText,
        data: response.ok ? JSON.parse(responseText) : null
      };

    } catch (error) {
      console.error(`❌ Attempt ${attempt} failed:`, error.message);
      
      if (attempt < maxRetries) {
        const backoffDelay = Math.pow(2, attempt) * 1000; // Exponential backoff
        console.log(`⏰ Waiting ${backoffDelay/1000} seconds before retry...`);
        await wait(backoffDelay);
      } else {
        throw error;
      }
    }
  }
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Clean up old entries occasionally (1% chance per request)
  if (Math.random() < 0.01) {
    cleanupOldEntries();
  }

  // Check daily limit per IP
  const clientIP = getClientIP(req);
  const limitCheck = checkDailyLimit(clientIP);
  
  console.log(`📊 IP: ${clientIP}, Usage: ${limitCheck.usage}/${DAILY_LIMIT_PER_IP}`);

  if (!limitCheck.allowed) {
    console.log(`❌ Daily limit exceeded for IP: ${clientIP}`);
    return res.status(429).json({
      message: 'Daily limit exceeded',
      details: `You have reached the daily limit of ${DAILY_LIMIT_PER_IP} idea validations. Please try again tomorrow.`,
      usage: limitCheck.usage,
      limit: DAILY_LIMIT_PER_IP,
      resetTime: 'Tomorrow at midnight UTC'
    });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ 
      message: 'API key not configured' 
    });
  }

  const { idea } = req.body;
  if (!idea) {
    return res.status(400).json({ message: 'Idea is required' });
  }

  if (idea.length > 500) {
    return res.status(400).json({ message: 'Idea must be 500 characters or less' });
  }

  console.log(`🚀 Processing idea for IP ${clientIP}:`, idea.substring(0, 50) + '...');

  try {
    // Use Gemini 1.5 Flash (higher rate limits)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
    
    const requestBody = {
      contents: [{
        parts: [{
          text: `Refine this startup idea: "${idea}". 

IMPORTANT: Respond with ONLY valid JSON in this exact format. No markdown, no additional text:

{"oneLiner": "A clear, compelling one-sentence description of the refined idea", "targetAudience": "Specific target market and user demographics", "problem": "The main problem this startup solves"}

Ensure the JSON is properly formatted and contains all three fields.`
        }]
      }]
    };

    console.log('🌐 Making request to Gemini Flash API...');
    
    const result = await callGeminiWithRetry(url, requestBody, 3);

    if (!result.ok) {
      if (result.isRateLimit) {
        return res.status(429).json({
          message: 'API rate limit exceeded',
          details: 'Our AI service is temporarily busy. Please try again in a few moments.',
          retryAfter: 30,
          usage: limitCheck.usage,
          remaining: limitCheck.remaining
        });
      }

      let errorDetails;
      try {
        errorDetails = JSON.parse(result.text);
      } catch (e) {
        errorDetails = { rawError: result.text };
      }

      return res.status(500).json({
        message: 'Error from AI service',
        details: errorDetails
      });
    }

    const data = result.data;
    
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      return res.status(500).json({
        message: 'Invalid response from AI service',
        details: 'No content in response'
      });
    }

    const aiText = data.candidates[0].content.parts[0].text;
    console.log('🤖 AI response:', aiText);

    // Parse the JSON response
    let parsedResponse;
    try {
      // Clean the response text (remove any markdown formatting)
      const cleanText = aiText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      parsedResponse = JSON.parse(cleanText);
    } catch (parseError) {
      console.error('❌ JSON parse error:', parseError);
      console.error('Raw AI response:', aiText);
      
      return res.status(500).json({
        message: 'Invalid response format from AI',
        details: 'The AI response could not be parsed as JSON',
        rawResponse: aiText.substring(0, 200) + '...'
      });
    }

    // Validate required fields
    if (!parsedResponse.oneLiner || !parsedResponse.targetAudience || !parsedResponse.problem) {
      console.error('❌ Missing required fields:', parsedResponse);
      return res.status(500).json({
        message: 'Incomplete response from AI',
        details: 'Missing required fields: oneLiner, targetAudience, or problem',
        received: Object.keys(parsedResponse)
      });
    }

    console.log(`✅ Successfully processed idea for IP ${clientIP}`);
    
    // Return success with usage info
    return res.status(200).json({
      ...parsedResponse,
      usage: {
        current: limitCheck.usage,
        limit: DAILY_LIMIT_PER_IP,
        remaining: limitCheck.remaining
      }
    });

  } catch (error) {
    console.error('💥 Unexpected error:', error);
    return res.status(500).json({
      message: 'Internal Server Error',
      details: error.message,
      timestamp: new Date().toISOString()
    });
  }
}

export default allowCors(handler);