import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Link as LinkIcon, Facebook, ShieldCheck, Loader2 } from 'lucide-react'

interface QuickCheckModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuickCheckModal({ isOpen, onClose }: QuickCheckModalProps) {
  const [url, setUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setUrl('');
        setIsSubmitting(false);
        setError('');
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = () => {
    setError('');
    const trimmedUrl = url.trim();
    
    if (!trimmedUrl) {
      setError("দয়া করে পেজের লিংক দিন");
      return;
    }
    
    if (!trimmedUrl.includes('facebook.com')) {
      setError("শুধু Facebook পেজের লিংক দিন");
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      onClose();
      window.dispatchEvent(new Event('start-analysis'));
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={!isSubmitting ? onClose : undefined}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[480px] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-900" />

            <div className="p-8 relative">
              <button 
                onClick={onClose}
                disabled={isSubmitting}
                className={`absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 transition-colors ${isSubmitting ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-200 hover:text-gray-900'}`}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-x-3 mb-6 pr-8">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  <LinkIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-extrabold text-2xl text-[#0F172A]">দ্রুত চেক</div>
                  <div className="text-emerald-600 text-sm font-bold">মাত্র ২৫ সেকেন্ডে</div>
                </div>
              </div>

              {/* Description */}
              <div className="text-[#64748B] text-sm mb-6 leading-relaxed font-medium">
                শুধু আপনার পেজের লিংক দিন। আমরা শুধু <span className="font-bold text-[#0F172A]">পাবলিক পোস্ট</span> দেখব।
              </div>

              {/* URL Input */}
              <div className="mb-5">
                <label className="block text-sm font-bold text-[#0F172A] mb-2">পেজের লিংক দিন</label>
                
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Facebook className="w-5 h-5" />
                  </div>
                  
                  <input 
                    type="url" 
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                      if (error) setError('');
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    disabled={isSubmitting}
                    placeholder="https://www.facebook.com/yourpage"
                    className={`w-full pl-12 pr-5 py-4 border ${error ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#FFB800]'} rounded-2xl text-sm font-medium placeholder:text-gray-400 focus:outline-none transition-colors bg-gray-50/50 focus:bg-white`}
                  />
                </div>
                
                {error ? (
                  <div className="text-xs text-red-500 mt-2 px-1 font-bold">{error}</div>
                ) : (
                  <div className="text-xs text-[#64748B] mt-2 px-1 font-medium">
                    উদাহরণ: facebook.com/DhakaFashionHub
                  </div>
                )}
              </div>

              {/* Start Button */}
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`mt-6 w-full py-4 text-white font-bold rounded-2xl text-lg transition-all flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-gray-800 cursor-wait' 
                    : 'bg-gray-900 hover:bg-black active:scale-[0.98] shadow-lg shadow-gray-900/20'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    অ্যানালাইসিস চলছে...
                  </>
                ) : (
                  'অ্যানালাইসিস শুরু করুন'
                )}
              </button>

              {/* Trust Note */}
              <div className="mt-5 flex items-center justify-center gap-x-2 text-xs text-[#64748B] font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>শুধু পাবলিক পোস্ট দেখা হবে</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
