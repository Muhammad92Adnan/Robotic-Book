export default function handler(req, res) {
  res.status(200).json({ 
    message: 'API route is working!',
    timestamp: new Date().toISOString(),
    path: req.url,
    method: req.method
  });
}

export const config = {
  api: {
    bodyParser: true,
  },
};