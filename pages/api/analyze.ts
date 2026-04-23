import type { NextApiRequest, NextApiResponse } from 'next'
import { LRUCache } from 'lru-cache'
import { z } from 'zod'

// ── Rate limiting ──────────────────────────────────────────────────────────
const rateLimit = new LRUCache<string, number>({
  max: 500,
  ttl: 60 * 1000, // 1 minute
})

function checkRateLimit(ip: string, limit = 5): boolean {
  const tokenCount = rateLimit.get(ip) || 0
  if (tokenCount >= limit) return false
  rateLimit.set(ip, tokenCount + 1)
  return true
}

// ── Validation Schema ──────────────────────────────────────────────────────
const analyzeSchema = z.object({
  url: z.string().url().max(500),
  plan: z.string().max(50).optional(),
  userId: z.string().max(100).optional(),
})

// ── Mock Analysis Engine (until N8n webhook is configured) ─────────────────
function generateMockAnalysis(url: string, plan: string) {
  const spammyWords = ['ডিসকাউন্ট', 'ফ্রি', 'জরুরি', 'লিমিটেড']
  const randomScore = Math.floor(Math.random() * 20) + 72 // 72-91

  return {
    healthScore: randomScore,
    scoreChange: `+${Math.floor(Math.random() * 15) + 5}`,
    reachPotential: `+${Math.floor(Math.random() * 30) + 20}%`,
    spammyRisk: randomScore > 85 ? 'Low' : randomScore > 75 ? 'Medium' : 'High',
    topProblems: [
      {
        title: '"ডিসকাউন্ট" শব্দ বেশি ব্যবহার',
        impact: '-18% reach impact',
        severity: 'high',
      },
      {
        title: 'ভুল পোস্টিং টাইম',
        impact: '-12% reach impact',
        severity: 'medium',
      },
    ],
    bestPostingTimes: [
      { time: 'রাত ৮:১৫ – ৯:৩০', boost: '+41%' },
      { time: 'সকাল ১১:০০ – ১২:১৫', boost: '+29%' },
    ],
    actionPlan: [
      {
        title: '"ডিসকাউন্ট" শব্দ এড়িয়ে "বিশেষ অফার" ব্যবহার করুন',
        description: 'এটি সবচেয়ে বড় সমস্যা। রিচ ১৮% পর্যন্ত বাড়তে পারে।',
      },
      {
        title: 'পোস্ট করুন শুধু রাত ৮:১৫ – ৯:৩০',
        description: 'আপনার অডিয়েন্স এই সময়ে সবচেয়ে বেশি অ্যাকটিভ।',
      },
    ],
    analyzedUrl: url,
    plan,
    generatedAt: new Date().toISOString(),
  }
}

// ── Handler ────────────────────────────────────────────────────────────────
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')

  // Rate limiting
  const ip =
    (req.headers['x-real-ip'] as string) ||
    (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
    req.socket.remoteAddress ||
    'unknown'

  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'অনেকবার চেষ্টা হয়েছে। কিছুক্ষণ পরে আবার চেষ্টা করুন।' })
  }

  const parsed = analyzeSchema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({ error: 'Invalid input data', details: parsed.error.format() })
  }
  const { url, plan, userId } = parsed.data

  // Try real N8n webhook first, fallback to mock
  const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL

  if (N8N_WEBHOOK_URL) {
    try {
      const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'PageMama-API/1.0',
        },
        body: JSON.stringify({
          url,
          plan: plan || 'Smart Growth',
          userId: userId || 'anonymous',
          timestamp: new Date().toISOString(),
          request_id: crypto.randomUUID(),
        }),
        signal: AbortSignal.timeout(15000), // 15s timeout
      })

      if (n8nResponse.ok) {
        const data = await n8nResponse.json()
        return res.status(200).json(data)
      }
    } catch (err) {
      console.warn('[analyze] N8n webhook failed, using mock:', err)
    }
  }

  // Return mock analysis
  const mockData = generateMockAnalysis(url, plan || 'Smart Growth')
  return res.status(200).json(mockData)
}
