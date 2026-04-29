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

  const handleSubmit = async () => {
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
    
    try {
      const response = await fetch('/api/n8n-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: trimmedUrl }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const htmlContent = await response.text();

      // Open result in new tab
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(htmlContent);
        newWindow.document.close();
      } else {
        alert('অনুগ্রহ করে পপ-আপ ব্লকার (Pop-up Blocker) বন্ধ করুন।');
      }
      
      onClose();
    } catch (e: any) {
      console.error('Error:', e);
      alert('দুঃখিত! কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।');
      setIsSubmitting(false);
    }
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
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FF5E00]" />

            <div className="p-8 relative">
              <button 
                onClick={onClose}
                disabled={isSubmitting}
                className={`absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 transition-colors ${isSubmitting ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-200 hover:text-gray-900'}`}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-x-4 mb-8 pr-8">
                <div className="w-12 h-12 bg-gray-50 text-[#FF5E00] rounded-2xl flex items-center justify-center flex-shrink-0 border border-[#FF5E00]/10 shadow-sm">
                  <LinkIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-extrabold text-2xl text-[#0F172A] tracking-tight">দ্রুত চেক</div>
                  <div className="text-emerald-600 text-sm font-bold flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    মাত্র ২৫ সেকেন্ডে
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="text-[#64748B] text-sm mb-6 leading-relaxed font-medium">
                শুধু পেজ লিংক দিন। আমরা শুধু <span className="font-bold text-[#0F172A]">পাবলিক পোস্ট</span> দেখব।
              </div>


              {/* URL Input */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-[#0F172A] mb-2.5">পেজের লিংক দিন</label>
                
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <LinkIcon className="w-4 h-4" />
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
                    placeholder="facebook.com/yourpage"
                    className={`w-full h-[48px] pl-11 pr-5 border ${error ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#FF5E00]/30 focus:ring-4 focus:ring-[#FF5E00]/5'} rounded-xl text-sm font-medium placeholder:text-gray-400 focus:outline-none transition-all bg-[#F8FAFC] focus:bg-white`}
                  />
                </div>
                
                {error ? (
                  <div className="text-xs text-red-500 mt-2 px-1 font-bold">{error}</div>
                ) : (
                  <div className="text-[11px] text-[#64748B] mt-2.5 px-1 font-medium flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    উদাহরণ: facebook.com/DhakaFashionHub
                  </div>
                )}
              </div>

              {/* Start Button */}
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`mt-6 w-full h-[52px] text-white font-bold rounded-xl text-base transition-all flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-gray-800 cursor-wait' 
                    : 'bg-[#FF5E00] hover:bg-[#E65500] active:scale-[0.98] shadow-lg shadow-[#FF5E00]/20'
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
