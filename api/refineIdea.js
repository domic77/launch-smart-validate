

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

  const { idea } = req.body;

  if (!idea) {
    return res.status(400).json({ message: 'Idea is required' });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Refine the following startup idea into a clear one-liner, its target audience, and the problem it solves. Provide the output as a JSON object with keys: "oneLiner", "targetAudience", "problem".\n\nIdea: ${idea}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log('Raw Gemini API response data:', data);

    if (data.error) {
      console.error('Gemini API Error:', data.error);
      return res.status(500).json({ message: 'Error from Gemini API', details: data.error });
    }

    const aiResponseText = data.candidates[0].content.parts[0].text;
    console.log('AI Response Text before parsing:', aiResponseText);
    const parsedResponse = JSON.parse(aiResponseText);

    if (!parsedResponse.oneLiner || !parsedResponse.targetAudience || !parsedResponse.problem) {
      return res.status(500).json({ message: 'AI response missing required fields' });
    }

    return res.status(200).json(parsedResponse);
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ message: 'Internal Server Error', details: error.message });
  }
}

export default allowCors(handler);

