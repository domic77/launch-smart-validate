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

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  console.log('🚀 Starting API call...');
  
  // Check environment variables
  if (!process.env.GEMINI_API_KEY) {
    console.error('❌ No API key found');
    return res.status(500).json({ 
      message: 'API key not configured',
      details: 'GEMINI_API_KEY environment variable is missing'
    });
  }

  console.log('✅ API key found, length:', process.env.GEMINI_API_KEY.length);
  console.log('✅ API key format check:', process.env.GEMINI_API_KEY.startsWith('AIzaSy'));

  const { idea } = req.body;
  if (!idea) {
    return res.status(400).json({ message: 'Idea is required' });
  }

  console.log('📝 Processing idea:', idea.substring(0, 50) + '...');

  try {
    // Try the simplest possible request first
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${process.env.GEMINI_API_KEY}`;
    
    console.log('🌐 Making request to Gemini API...');
    console.log('📍 URL (masked):', url.replace(/key=.*/g, 'key=***'));

    const requestBody = {
      contents: [{
        parts: [{
          text: `Hello, please respond with just: {"test": "success"}`
        }]
      }]
    };

    console.log('📦 Request body:', JSON.stringify(requestBody, null, 2));

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    console.log('📈 Response status:', response.status);
    console.log('📋 Response headers:', [...response.headers.entries()]);

    // Get the response text first
    const responseText = await response.text();
    console.log('📄 Raw response:', responseText);

    if (!response.ok) {
      console.error('❌ HTTP Error:', response.status);
      
      // Try to parse error as JSON
      let errorDetails;
      try {
        errorDetails = JSON.parse(responseText);
        console.error('❌ Parsed error:', errorDetails);
      } catch (parseErr) {
        console.error('❌ Could not parse error response');
        errorDetails = { rawError: responseText };
      }

      return res.status(500).json({
        message: 'Error from Gemini API',
        httpStatus: response.status,
        details: errorDetails,
        apiKeyLength: process.env.GEMINI_API_KEY.length,
        apiKeyFormat: process.env.GEMINI_API_KEY.startsWith('AIzaSy') ? 'correct' : 'incorrect'
      });
    }

    // Parse successful response
    let data;
    try {
      data = JSON.parse(responseText);
      console.log('✅ Parsed response:', data);
    } catch (parseErr) {
      console.error('❌ Could not parse success response');
      return res.status(500).json({
        message: 'Invalid JSON response from Gemini',
        rawResponse: responseText
      });
    }

    // Check response structure
    if (!data.candidates || !data.candidates[0]) {
      console.error('❌ Invalid response structure');
      return res.status(500).json({
        message: 'Invalid response structure',
        receivedData: data
      });
    }

    console.log('🎉 Success! Basic API call works');

    // Now try the actual business idea request
    const realRequestBody = {
      contents: [{
        parts: [{
          text: `Refine this startup idea: "${idea}". 
          
Please respond with ONLY valid JSON in this exact format:
{"oneLiner": "refined idea here", "targetAudience": "target audience here", "problem": "problem it solves here"}`
        }]
      }]
    };

    console.log('🎯 Making real request...');
    
    const realResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(realRequestBody)
    });

    const realResponseText = await realResponse.text();

    if (!realResponse.ok) {
      console.error('❌ Real request failed:', realResponse.status);
      let realErrorDetails;
      try {
        realErrorDetails = JSON.parse(realResponseText);
      } catch (e) {
        realErrorDetails = { rawError: realResponseText };
      }
      
      return res.status(500).json({
        message: 'Error from Gemini API on real request',
        details: realErrorDetails
      });
    }

    const realData = JSON.parse(realResponseText);
    const aiText = realData.candidates[0].content.parts[0].text;
    
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

    console.log('✅ Successfully parsed AI response');
    return res.status(200).json(parsedResponse);

  } catch (error) {
    console.error('💥 Unexpected error:', error);
    console.error('Stack:', error.stack);
    return res.status(500).json({
      message: 'Internal Server Error',
      details: error.message,
      stack: error.stack
    });
  }
}

export default allowCors(handler);