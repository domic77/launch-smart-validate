const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );
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

  // Debug: Check if API key exists
  console.log('GEMINI_API_KEY exists:', !!process.env.GEMINI_API_KEY);
  console.log('GEMINI_API_KEY length:', process.env.GEMINI_API_KEY?.length || 0);

  if (!process.env.GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set in environment variables');
    return res.status(500).json({ 
      message: 'API key not configured',
      details: 'GEMINI_API_KEY environment variable is missing'
    });
  }

  const { idea } = req.body;

  if (!idea) {
    return res.status(400).json({ message: 'Idea is required' });
  }

  try {
    // FIXED: Use the correct URL format with API key as query parameter (using 1.5 Pro)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // REMOVED: Authorization header (not needed when using key in URL)
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Refine the following startup idea into a clear one-liner, its target audience, and the problem it solves. 

IMPORTANT: Respond ONLY with a valid JSON object, no markdown formatting, no additional text. The JSON should have exactly these keys: "oneLiner", "targetAudience", "problem".

Example format:
{"oneLiner": "Your refined idea here", "targetAudience": "Who this is for", "problem": "What problem it solves"}

Idea to refine: ${idea}`,
                },
              ],
            },
          ],
        }),
      }
    );

    console.log('Gemini API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API HTTP Error:', response.status, errorText);
      return res.status(500).json({ 
        message: 'Error from Gemini API', 
        details: `HTTP ${response.status}: ${errorText}` 
      });
    }

    const data = await response.json();
    console.log('Raw Gemini API response data:', JSON.stringify(data, null, 2));

    // Check for API errors in response
    if (data.error) {
      console.error('Gemini API Error in response:', data.error);
      return res.status(500).json({ 
        message: 'Error from Gemini API', 
        details: data.error 
      });
    }

    // Check if we have the expected response structure
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts) {
      console.error('Unexpected Gemini API response structure:', data);
      return res.status(500).json({ 
        message: 'Unexpected response from AI service',
        details: 'Response structure is invalid'
      });
    }

    const aiResponseText = data.candidates[0].content.parts[0].text;
    console.log('AI Response Text before parsing:', aiResponseText);

    // IMPROVED: Better JSON parsing with error handling
    let parsedResponse;
    try {
      // Clean the response text (remove markdown formatting if any)
      const cleanedText = aiResponseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      parsedResponse = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      console.error('Failed to parse text:', aiResponseText);
      
      // Fallback: try to extract JSON from the text
      const jsonMatch = aiResponseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          parsedResponse = JSON.parse(jsonMatch[0]);
        } catch (fallbackError) {
          return res.status(500).json({ 
            message: 'AI response is not valid JSON',
            details: `Parse error: ${parseError.message}`,
            rawResponse: aiResponseText
          });
        }
      } else {
        return res.status(500).json({ 
          message: 'AI response is not valid JSON',
          details: 'No JSON found in response',
          rawResponse: aiResponseText
        });
      }
    }

    // Validate required fields
    if (!parsedResponse.oneLiner || !parsedResponse.targetAudience || !parsedResponse.problem) {
      console.error('AI response missing required fields:', parsedResponse);
      return res.status(500).json({ 
        message: 'AI response missing required fields',
        details: 'Missing oneLiner, targetAudience, or problem',
        received: parsedResponse
      });
    }

    return res.status(200).json(parsedResponse);
  } catch (error) {
    console.error('API Error:', error);
    console.error('Error stack:', error.stack);
    return res.status(500).json({ 
      message: 'Internal Server Error', 
      details: error.message,
      timestamp: new Date().toISOString()
    });
  }
}

export default allowCors(handler);
