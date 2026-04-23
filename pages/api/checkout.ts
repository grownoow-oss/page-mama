import type { NextApiRequest, NextApiResponse } from 'next'
import { LRUCache } from 'lru-cache'
import { z } from 'zod'

// ── Rate Limiter ───────────────────────────────────────────────────────────
const rateLimit = new LRUCache<string, number>({
  max: 500,
  ttl: 60 * 1000, // 1 minute
})

function checkRate(ip: string, limit = 5): boolean {
  const tokenCount = rateLimit.get(ip) || 0
  if (tokenCount >= limit) return false
  rateLimit.set(ip, tokenCount + 1)
  return true
}

// ── Validation Schema ──────────────────────────────────────────────────────
const checkoutSchema = z.object({
  plan: z.string().min(1).max(50),
  email: z.string().email().max(100),
  phone: z.string().max(20).optional(),
  pageLink: z.string().url().max(500).optional().or(z.literal('')),
  userId: z.string().max(100).optional(),
  paymentMethod: z.enum(['bkash', 'nagad', 'card']),
})

const planMap: Record<string, string> = {
  'কুইক চেক': 'Quick Check',
  'স্মার্ট গ্রোথ': 'Smart Growth',
  'প্রো': 'Pro',
}

const priceMap: Record<string, number> = {
  'Quick Check': 99,
  'Smart Growth': 299,
  'Pro': 599,
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

  if (!checkRate(ip)) {
    return res.status(429).json({ error: 'অনেকবার চেষ্টা হয়েছে। কিছুক্ষণ পরে আবার চেষ্টা করুন।' })
  }

  // Validate Input
  const parsed = checkoutSchema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({ error: 'Invalid input data', details: parsed.error.format() })
  }
  const { plan, email, phone, pageLink, userId, paymentMethod } = parsed.data

  // Normalize plan name
  const canonicalPlan = planMap[plan] || plan
  const validPlans = ['Quick Check', 'Smart Growth', 'Pro']
  if (!validPlans.includes(canonicalPlan)) {
    return res.status(400).json({ error: 'Invalid plan selected' })
  }

  // Generate order ID
  const orderId = `PM-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`

  const order = {
    orderId,
    plan: canonicalPlan,
    price: priceMap[canonicalPlan] || 0,
    email,
    phone: phone || '',
    pageLink: pageLink || '',
    userId: userId || 'guest',
    paymentMethod,
    status: 'confirmed', // demo: auto-confirm. Production: integrate bKash/Nagad/SSLCommerz
    createdAt: new Date().toISOString(),
  }

  // Optional: Save to Firestore via client-side SDK (via separate endpoint)
  // or use Firebase Admin with service account when ready

  // Simulate slight processing delay
  await new Promise((r) => setTimeout(r, 800))

  return res.status(200).json({
    success: true,
    orderId,
    plan: canonicalPlan,
    price: order.price,
    message: 'অর্ডার সফলভাবে গ্রহণ করা হয়েছে।',
  })
}
