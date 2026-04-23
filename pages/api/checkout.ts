import type { NextApiRequest, NextApiResponse } from 'next'

// ── Rate Limiter ───────────────────────────────────────────────────────────
const rateMap = new Map<string, { count: number; reset: number }>()
function checkRate(key: string, limit = 3, windowMs = 60_000): boolean {
  const now = Date.now()
  const r = rateMap.get(key)
  if (!r || now > r.reset) {
    rateMap.set(key, { count: 1, reset: now + windowMs })
    return true
  }
  if (r.count >= limit) return false
  r.count++
  return true
}

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

  const { plan, email, phone, pageLink, userId, paymentMethod } = req.body

  // Validate required fields
  if (!plan || !email || !paymentMethod) {
    return res.status(400).json({ error: 'Required fields missing: plan, email, paymentMethod' })
  }

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
