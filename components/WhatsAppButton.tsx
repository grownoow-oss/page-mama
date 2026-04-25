import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '8801700000000'; // Replace with real number (country code + number, no +)
const DISPLAY_NUMBER = '017XXXXXXXX';     // Replace with display number

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPulsed, setHasPulsed] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Auto-pulse once after 3 seconds to draw attention
  useEffect(() => {
    const timer = setTimeout(() => setHasPulsed(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div
      ref={popupRef}
      className="wa-float-container"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '20px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px',
      }}
    >
      {/* Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            style={{
              background: 'white',
              borderRadius: '20px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.14)',
              padding: '20px',
              width: '260px',
              border: '1px solid #f0f0f0',
              transformOrigin: 'bottom right',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    background: '#25D366',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* WhatsApp SVG logo */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '14px', color: '#0F172A', lineHeight: 1.2 }}>Customer Support</div>
                  <div style={{ fontSize: '11px', color: '#25D366', fontWeight: 700 }}>● Online</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: '#f5f5f5',
                  border: 'none',
                  borderRadius: '8px',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#888',
                }}
              >
                <X size={14} />
              </button>
            </div>

            {/* Message bubble */}
            <div
              style={{
                background: '#f0fdf4',
                border: '1px solid #dcfce7',
                borderRadius: '14px',
                padding: '12px 14px',
                marginBottom: '14px',
              }}
            >
              <p style={{ fontSize: '13px', color: '#334155', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                যেকোনো দরকারে WhatsApp-এ ঢুঁ মারুন 📲<br />আমরা আছি ফুল অন একটিভ—রিপ্লাই ফাস্ট! 🚀
              </p>
            </div>

            {/* Number + CTA */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>WhatsApp Number</div>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A', letterSpacing: '0.02em' }}>{DISPLAY_NUMBER}</div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: '#25D366',
                color: 'white',
                borderRadius: '14px',
                padding: '12px',
                fontWeight: 800,
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1ebe5d')}
              onMouseLeave={e => (e.currentTarget.style.background = '#25D366')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp-এ চ্যাট করুন
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: '56px',
          height: '56px',
          background: '#25D366',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(37,211,102,0.45)',
          position: 'relative',
          flexShrink: 0,
        }}
        aria-label="WhatsApp Customer Support"
      >
        {/* Ripple ring on first appear */}
        {hasPulsed && !isOpen && (
          <motion.span
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.7, opacity: 0 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: '#25D366',
              pointerEvents: 'none',
            }}
          />
        )}
        {/* Tooltip label */}
        {!isOpen && (
          <div
            style={{
              position: 'absolute',
              right: '68px',
              background: '#0F172A',
              color: 'white',
              fontSize: '12px',
              fontWeight: 700,
              padding: '6px 12px',
              borderRadius: '10px',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              opacity: 0,
              transform: 'translateX(4px)',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            className="wa-tooltip"
          >
            Customer Support
            <div
              style={{
                position: 'absolute',
                right: '-5px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent',
                borderLeft: '5px solid #0F172A',
              }}
            />
          </div>
        )}
        {/* WhatsApp SVG */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.button>

      {/* Tooltip show on hover via CSS */}
      <style>{`
        .wa-float-container button:hover .wa-tooltip {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        @media (max-width: 640px) {
          .wa-tooltip { display: none !important; }
        }
      `}</style>
    </div>
  );
}
