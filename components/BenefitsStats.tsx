import { useLanguage } from '../context/LanguageContext'
import { motion } from 'framer-motion'

export default function BenefitsStats() {
  const { language } = useLanguage()

  const cards = [
    {
      title: 'দ্রুত রিচ কমার কারণ শনাক্ত করুন',
      desc: 'অটোমেটেড অ্যানালাইসিসের মাধ্যমে রিচ কমার আগাম সংকেত বুঝে নিন।',
      stat: '৩০×', statLabel: 'দ্রুত ইনসাইটস',
      chip: '৮.৩% ▲', chipSub: 'এনগেজমেন্ট',
      chipColor: '#22c55e', chipBg: 'rgba(34,197,94,0.1)',
      accent: '#FF4D00', span: 2,
    },
    {
      title: '২৪/৭ রিস্ক মনিটরিং',
      desc: 'Suspension বা policy ঝুঁকির যেকোনো সিগন্যাল সাথেসাথে শনাক্ত করি।',
      stat: '৩৬৫', statLabel: 'দিন মনিটর',
      chip: 'কম → মাঝাম', chipSub: 'ঝুঁকি মাত্রা',
      chipColor: '#f59e0b', chipBg: 'rgba(245,158,11,0.1)',
      accent: '#1877f2', span: 1,
    },
    {
      title: 'রিচ কমা থামান',
      desc: 'কোন পোস্ট রিচ কমাচ্ছে তা চিহ্নিত করুন।',
      stat: '২০×', statLabel: 'স্বচ্ছ সিগন্যাল',
      chip: '১৫.৮k', chipSub: 'কন্টেন্ট যাচাই',
      chipColor: '#FF4D00', chipBg: 'rgba(255,77,0,0.1)',
      accent: '#FF4D00', span: 1,
    },
    {
      title: 'অনুমানের বদলে সঠিক সিদ্ধান্ত',
      desc: 'পরিষ্কার সংকেত এবং পরবর্তী পদক্ষেপের গাইডলাইন।',
      stat: '১০.৮×', statLabel: 'সঠিক সিদ্ধান্ত',
      chip: '১০.৮x পরিষ্কার', chipSub: 'কনফিডেন্স স্কোর',
      chipColor: '#a855f7', chipBg: 'rgba(168,85,247,0.1)',
      accent: '#a855f7', span: 2,
    },
  ]

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }
  const cardVariants: any = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="benefits" style={{ padding: '120px 24px', background: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', right: '0', width: 400, height: 400, background: 'radial-gradient(circle,rgba(255,77,0,0.04) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,77,0,0.08)', color: '#FF4D00', padding: '6px 16px', borderRadius: 100, fontSize: '0.7rem', fontWeight: 700, marginBottom: 20, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Space Grotesk, sans-serif', border: '1px solid rgba(255,77,0,0.15)' }}>
            Key Benefits
          </div>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.7rem,5vw,2.6rem)', fontWeight: 700, color: '#111827', lineHeight: 1.1, marginBottom: 14, letterSpacing: '-0.03em' }}>
            আপনার পেজের পূর্ণ নিয়ন্ত্রণ
          </h2>
          <p style={{ color: '#4B5563', fontSize: '0.92rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.65, fontWeight: 500 }}>
            সঠিক ডেটা এবং AI এর মাধ্যমে আপনার কন্টেন্ট স্ট্র্যাটেজি উন্নত করুন।
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {cards.map((card, i) => (
            <motion.div key={i} variants={cardVariants} whileHover={{ y: -4, borderColor: `${card.accent}30` }}
              className={`benefits-card ${card.span === 2 ? 'span-2' : ''}`}
              style={{
                gridColumn: card.span === 2 ? 'span 2' : 'span 1',
                background: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                borderRadius: 24, padding: '32px',
                display: 'flex', flexDirection: 'column', minHeight: 240,
                position: 'relative', overflow: 'hidden', cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
              }}>
              {/* Accent line */}
              <div style={{ position: 'absolute', top: 0, left: 24, right: 24, height: 1, background: `linear-gradient(90deg,transparent,${card.accent}40,transparent)` }} />

              {/* Title + arrow */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#111827', lineHeight: 1.3, flex: 1, paddingRight: 16, letterSpacing: '-0.02em' }}>
                  {card.title}
                </h3>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.3s' }}>
                  <svg width="14" height="14" fill="none" stroke="rgba(0,0,0,0.5)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              <p style={{ color: '#4B5563', fontSize: '0.85rem', lineHeight: 1.6, fontFamily: 'Hind Siliguri, sans-serif', marginBottom: 24, fontWeight: 500 }}>
                {card.desc}
              </p>

              {/* Bottom: chip + stat */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto', gap: 16 }}>
                <div style={{ background: card.chipBg, borderRadius: 10, padding: '7px 13px', border: `1px solid ${card.chipColor}25` }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: card.chipColor, fontFamily: 'Space Grotesk, sans-serif' }}>{card.chip}</div>
                  <div style={{ fontSize: '0.67rem', color: '#6B7280', marginTop: 2, fontFamily: 'Hind Siliguri, sans-serif', fontWeight: 600 }}>{card.chipSub}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2.2rem,5vw,3.2rem)', fontWeight: 700, color: '#111827', lineHeight: 0.9, letterSpacing: '-0.05em' }}>
                    {card.stat}
                  </div>
                  <div style={{ fontSize: '0.67rem', color: '#6B7280', marginTop: 6, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {card.statLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          #benefits { padding: 70px 20px !important; }
          .benefits-grid { grid-template-columns: 1fr !important; }
          .span-2 { grid-column: span 1 !important; }
          .benefits-card { min-height: auto !important; padding: 24px !important; border-radius: 20px !important; }
        }
      `}</style>
    </section>
  )
}
