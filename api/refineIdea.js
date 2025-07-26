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
            // Parse delay like "29s", "2m", etc.
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

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ 
      message: 'API key not configured' 
    });
  }

  const { idea } = req.body;
  if (!idea) {
    return res.status(400).json({ message: 'Idea is required' });
  }

  console.log('🚀 Processing idea:', idea.substring(0, 50) + '...');

  try {
    // Use Gemini 1.5 Flash (higher rate limits)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
    
    const requestBody = {
      contents: [{
        parts: [{
          text: `Refine this startup idea: "${idea}". 
          
Please respond with ONLY valid JSON in this exact format:
{"oneLiner": "refined idea here", "targetAudience": "target audience here", "problem": "problem it solves here"}

No additional text, no markdown formatting, just the JSON object.`
        }]
      }]
    };

    console.log('🌐 Making request to Gemini Flash API...');
    
    const result = await callGeminiWithRetry(url, requestBody, 3);

    if (!result.ok) {
      if (result.isRateLimit) {
        return res.status(429).json({
          message: 'Rate limit exceeded',
          details: 'Please try again in a few moments. Consider upgrading to paid tier for higher limits.',
          retryAfter: 30
        });
      }

      let errorDetails;
      try {
        errorDetails = JSON.parse(result.text);
      } catch (e) {
        errorDetails = { rawError: result.text };
      }

      return res.status(500).json({
        message: 'Error from Gemini API',
        details: errorDetails
      });
    }

    const data = result.data;
    
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      return res.status(500).json({
        message: 'Invalid response structure',
        receivedData: data
      });
    }

    const aiText = data.candidates[0].content.parts[0].text;
    console.log('🤖 AI response:', aiText);

    // Parse the JSON response
    let parsedResponse;
    try {
      const cleanText = aiText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      parsedResponse = JSON.parse(cleanText);
    } catch (parseError) {
      console.error('❌ JSON parse error:', parseError);
      return res.status(500).json({
        message: 'AI response is not valid JSON',
        details: parseError.message,
        rawResponse: aiText
      });
    }

    // Validate required fields
    if (!parsedResponse.oneLiner || !parsedResponse.targetAudience || !parsedResponse.problem) {
      return res.status(500).json({
        message: 'AI response missing required fields',
        received: parsedResponse
      });
    }

    console.log('✅ Successfully processed idea');
    return res.status(200).json(parsedResponse);

  } catch (error) {
    console.error('💥 Unexpected error:', error);
    return res.status(500).json({
      message: 'Internal Server Error',
      details: error.message
    });
  }
}

export default allowCors(handler);