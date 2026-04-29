import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { url } = req.body

    const response = await fetch('https://pagemama.app.n8n.cloud/webhook/analyze-page', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    })

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).send(errorText || 'Error from n8n');
    }

    const data = await response.text()
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.status(200).send(data)
  } catch (error) {
    console.error('API proxy error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
