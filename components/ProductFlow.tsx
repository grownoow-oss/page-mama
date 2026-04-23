import { useLanguage } from '../context/LanguageContext'
import { motion } from 'framer-motion'

export default function ProductFlow() {
  const { t } = useLanguage()

  const cards = [
    { icon: '🔍', accent: '#1877f2', accentBg: 'rgba(24,119,242,0.12)', title: t.product_flow.card_1_title, desc: t.product_flow.card_1_desc },
    { icon: '📉', accent: '#FF4D00', accentBg: 'rgba(255,77,0,0.12)', title: t.product_flow.card_2_title, desc: t.product_flow.card_2_desc },
    { icon: '✅', accent: '#22c55e', accentBg: 'rgba(34,197,94,0.12)', title: t.product_flow.card_3_title, desc: t.product_flow.card_3_desc },
    { icon: '🔔', accent: '#f59e0b', accentBg: 'rgba(245,158,11,0.12)', title: t.product_flow.card_4_title, desc: t.product_flow.card_4_desc },
  ]

  return (
    <section id="features" style={{ padding: '120px 24px', background: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: 800, height: 300, background: 'radial-gradient(ellipse,rgba(255,77,0,0.04) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,77,0,0.08)', color: '#FF4D00', padding: '6px 16px', borderRadius: 100, fontSize: '0.7rem', fontWeight: 700, marginBottom: 20, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Space Grotesk, sans-serif', border: '1px solid rgba(255,77,0,0.15)' }}>
            Features
          </div>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.7rem,5vw,2.6rem)', fontWeight: 700, color: '#111827', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            {t.product_flow.headline}
          </h2>
        </motion.div>

        {/* Hero feature card */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          whileHover={{ y: -4, borderColor: 'rgba(255,77,0,0.3)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
          className="product-hero-card"
          style={{ background: '#F9FAFB', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 28, padding: '48px', marginBottom: 16, transition: 'all 0.35s ease', cursor: 'default', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 'clamp(1.4rem,4vw,2rem)', color: '#111827', lineHeight: 1.15, marginBottom: 14, letterSpacing: '-0.03em' }}>
              শুরু করতে আপনার<br />
              <span style={{ color: '#FF4D00', position: 'relative', display: 'inline-block' }}>
                পেজ লিঙ্ক (URL)
                <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 0.8, delay: 0.5 }}
                  style={{ position: 'absolute', bottom: 2, left: 0, height: 3, background: 'rgba(255,77,0,0.25)', borderRadius: 2, zIndex: -1 }} />
              </span><br />
              পেস্ট করুন
            </h3>
            <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: 1.65, fontWeight: 500, maxWidth: 420, fontFamily: 'Hind Siliguri, sans-serif' }}>
              বুস্টিংয়ের পেছনে টাকা নষ্ট করা বন্ধ করুন। আমাদের AI কে খুঁজে বের করতে দিন কেন আপনার reach কমছে।
            </p>
          </div>
          <div className="product-badges" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { icon: '🛡️', text: 'No login credentials needed.', color: '#22c55e', bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.15)' },
              { icon: '⚡', text: 'Results in less than 60 seconds.', color: '#FF4D00', bg: 'rgba(255,77,0,0.08)', border: 'rgba(255,77,0,0.15)' },
            ].map((b, i) => (
              <motion.div key={i} whileHover={{ x: 4 }}
                style={{ display: 'flex', alignItems: 'center', gap: 10, background: b.bg, borderRadius: 14, padding: '13px 16px', border: `1px solid ${b.border}`, fontSize: '0.8rem', color: b.color, fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', transition: 'transform 0.2s' }}>
                <span style={{ fontSize: '1rem' }}>{b.icon}</span>
                {b.text}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature cards grid */}
        <div className="product-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
          {cards.map((card, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -4, borderColor: `${card.accent}40`, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
              style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', borderRadius: 22, padding: '28px', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 16, right: 16, height: 1, background: `linear-gradient(90deg,transparent,${card.accent}40,transparent)` }} />
              <div style={{ width: 44, height: 44, borderRadius: 14, background: card.accentBg, border: `1px solid ${card.accent}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', marginBottom: 18 }}>
                {card.icon}
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#111827', marginBottom: 10, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                {card.title}
              </h3>
              <p style={{ color: '#6B7280', fontSize: '0.82rem', lineHeight: 1.65, fontWeight: 500, whiteSpace: 'pre-line', fontFamily: 'Hind Siliguri, sans-serif' }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          #features { padding: 70px 20px !important; }
          .product-hero-card { grid-template-columns: 1fr !important; gap: 24px !important; padding: 28px !important; border-radius: 22px !important; }
          .product-badges { grid-template-columns: 1fr 1fr !important; }
          .product-cards-grid { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
        }
        @media (max-width: 560px) {
          .product-cards-grid { grid-template-columns: 1fr !important; }
          .product-badges { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
