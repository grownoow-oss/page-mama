'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, MessageCircle, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100002] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }} />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 32 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            style={{ position: 'relative', width: '100%', maxWidth: 420, background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 28, padding: '40px 36px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
          >
            {/* Top accent line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#FF4D00,#FF8C42)' }} />

            {/* Close btn */}
            <button onClick={onClose}
              style={{ position: 'absolute', top: 20, right: 20, width: 36, height: 36, background: '#F3F4F6', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s', color: '#6B7280' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#E5E7EB'; e.currentTarget.style.color = '#111827' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#F3F4F6'; e.currentTarget.style.color = '#6B7280' }}>
              <X size={16} strokeWidth={2.5} />
            </button>

            {/* Title */}
            <div style={{ textAlign: 'center', marginBottom: 32, marginTop: 8 }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: 8, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}>
                {t.faq.contact_modal.title}
              </h3>
              <p style={{ color: '#4B5563', fontWeight: 500, lineHeight: 1.6, fontFamily: 'Hind Siliguri, sans-serif', fontSize: '0.9rem' }}>
                {t.faq.contact_modal.subtitle}
              </p>
            </div>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {/* Email */}
              <a href={`mailto:${t.faq.contact_modal.email_address}`}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px', borderRadius: 18, border: '1px solid rgba(0,0,0,0.06)', background: '#FFFFFF', textDecoration: 'none', transition: 'all 0.25s', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(59,130,246,0.08)'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.25)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)' }}>
                <div style={{ width: 48, height: 48, background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} color="#3b82f6" strokeWidth={2} />
                </div>
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: '#9CA3AF', textTransform: 'uppercase', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 4 }}>
                    {t.faq.contact_modal.email_label}
                  </div>
                  <div style={{ fontWeight: 700, color: '#111827', fontSize: '0.95rem', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}>
                    {t.faq.contact_modal.email_address}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 500, marginTop: 2 }}>
                    {t.faq.contact_modal.email_hint}
                  </div>
                </div>
                <ArrowRight size={16} color="rgba(0,0,0,0.2)" />
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/8801700000000" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px', borderRadius: 18, border: '1px solid rgba(0,0,0,0.06)', background: '#FFFFFF', textDecoration: 'none', transition: 'all 0.25s', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,197,94,0.08)'; e.currentTarget.style.borderColor = 'rgba(34,197,94,0.25)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)' }}>
                <div style={{ width: 48, height: 48, background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MessageCircle size={20} color="#22c55e" strokeWidth={2} />
                </div>
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: '#9CA3AF', textTransform: 'uppercase', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 4 }}>
                    {t.faq.contact_modal.whatsapp_label}
                  </div>
                  <div style={{ fontWeight: 700, color: '#111827', fontSize: '0.95rem', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}>
                    {t.faq.contact_modal.whatsapp_number}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 500, marginTop: 2 }}>
                    {t.faq.contact_modal.whatsapp_hint}
                  </div>
                </div>
                <ArrowRight size={16} color="rgba(0,0,0,0.2)" />
              </a>
            </div>

            {/* Response badge */}
            <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,77,0,0.08)', border: '1px solid rgba(255,77,0,0.15)', borderRadius: 100, padding: '7px 16px' }}>
                <span style={{ position: 'relative', display: 'flex', height: 7, width: 7 }}>
                  <span style={{ position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', background: '#FF4D00', opacity: 0.7, animation: 'ping 1.5s ease infinite' }} />
                  <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', height: 7, width: 7, background: '#FF4D00' }} />
                </span>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#FF4D00', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {t.faq.contact_modal.response_time}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
