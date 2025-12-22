// Vercel API route to proxy chat requests to Hugging Face backend
export default async function handler(req, res) {
  console.log('API route hit:', req.method, req.url);
  console.log('Request body:', req.body);

  if (req.method !== 'POST') {
    console.log('Method not allowed');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Forwarding request to Hugging Face...');

    // Forward the request to your Hugging Face Space backend
    const hfResponse = await fetch('https://muhammad92adnan-adnan-chatbot.hf.space/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    console.log('Hugging Face response status:', hfResponse.status);

    if (!hfResponse.ok) {
      const errorBody = await hfResponse.text();
      console.error('Hugging Face API error:', hfResponse.status, errorBody);
      throw new Error(`Hugging Face API responded with status ${hfResponse.status}: ${errorBody}`);
    }

    const data = await hfResponse.json();
    console.log('Successfully got response from Hugging Face');
    res.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};