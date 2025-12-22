// Vercel API route to proxy chat requests to Hugging Face backend
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Forward the request to your Hugging Face Space backend
    const hfResponse = await fetch('https://muhammad92adnan-adnan-chatbot.hf.space/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (!hfResponse.ok) {
      const errorBody = await hfResponse.text();
      console.error('Hugging Face API error:', hfResponse.status, errorBody);
      throw new Error(`Hugging Face API responded with status ${hfResponse.status}: ${errorBody}`);
    }

    const data = await hfResponse.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};