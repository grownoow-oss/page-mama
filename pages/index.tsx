import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, ArrowRight, Sparkles } from 'lucide-react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import HowItWorks from '../components/HowItWorks'
import WhyFailSection from '../components/WhyFailSection'
import Pricing from '../components/Pricing'
import CaseStudy from '../components/CaseStudy'
import PostPaymentFlow from '../components/PostPaymentFlow'
import FAQ from '../components/FAQ'
import CTABottom from '../components/CTABottom'
import Footer from '../components/Footer'
import SafeUploadModal from '../components/SafeUploadModal'
import QuickCheckModal from '../components/QuickCheckModal'

export default function Home() {
  const router = useRouter();
  const [modalState, setModalState] = useState<'hidden' | 'loading' | 'success'>('hidden');
  const [isSafeUploadOpen, setIsSafeUploadOpen] = useState(false);
  const [isQuickCheckOpen, setIsQuickCheckOpen] = useState(false);

  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.15 });
    
    document.querySelectorAll('.fade-in-up').forEach(el => {
      observer.observe(el);
    });
    
    // Start Analysis Event Listener
    const handleStartAnalysis = () => {
      setModalState('loading');
      setTimeout(() => {
        setModalState('success');
      }, 2500);
    };
    window.addEventListener('start-analysis', handleStartAnalysis);

    const handleOpenSafeUpload = () => setIsSafeUploadOpen(true);
    window.addEventListener('open-safe-upload', handleOpenSafeUpload);

    const handleOpenQuickCheck = () => setIsQuickCheckOpen(true);
    window.addEventListener('open-quick-check', handleOpenQuickCheck);

    return () => {
      window.removeEventListener('start-analysis', handleStartAnalysis);
      window.removeEventListener('open-safe-upload', handleOpenSafeUpload);
      window.removeEventListener('open-quick-check', handleOpenQuickCheck);
    };
  }, []);

  // Handle Confetti
  useEffect(() => {
    if (modalState === 'success') {
      const container = document.getElementById('confetti-container');
      if (container) {
        const colors = ['#FF5E00', '#FF8A3D', '#22c55e', '#ef4444'];
        for (let i = 0; i < 60; i++) {
          const conf = document.createElement('div');
          conf.className = 'confetti';
          conf.style.left = Math.random() * 100 + '%';
          conf.style.background = colors[Math.floor(Math.random() * colors.length)];
          conf.style.animationDelay = Math.random() * 0.8 + 's';
          conf.style.width = conf.style.height = (Math.random() * 8 + 6) + 'px';
          container.appendChild(conf);
          
          setTimeout(() => conf.remove(), 2500);
        }
      }
    }
  }, [modalState]);

  return (
    <>
      <Head>
        <title>Page Mama • আপনার পেজের স্বাস্থ্য ৩০ সেকেন্ডে (২০২৬ আপডেট)</title>
        <meta name="description" content="আপনার পেজের রিচ কেন কমছে? ২০২৬ অ্যালগরিদম মেনে ৩-জোন অ্যানালাইসিস করুন। স্প্যামি শব্দ, ভুল সময়, অ্যালগরিদম রিস্ক — সব একসাথে।" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-background text-foreground overflow-x-hidden relative selection:bg-[#FF5E00]/30 selection:text-[#0F172A]">
        <Navbar />
        <Hero />
        <TrustBar />
        <HowItWorks />
        <WhyFailSection />
        <CaseStudy />
        <Pricing />
        <PostPaymentFlow />
        <FAQ />
        <CTABottom />
        <Footer />
        
        <SafeUploadModal 
          isOpen={isSafeUploadOpen} 
          onClose={() => setIsSafeUploadOpen(false)} 
        />
        
        <QuickCheckModal 
          isOpen={isQuickCheckOpen} 
          onClose={() => setIsQuickCheckOpen(false)} 
        />

        {/* Modal Simulation */}
        <AnimatePresence>
          {modalState !== 'hidden' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white/80 flex items-center justify-center z-[100] backdrop-blur-md p-4 sm:p-6"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full text-center relative overflow-hidden shadow-2xl shadow-black/10 border border-gray-100"
              >
                
                {modalState === 'loading' && (
                  <div className="py-8">
                    <Loader2 className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-[#FF5E00] animate-spin mb-6 sm:mb-8" />
                    <h3 className="text-2xl font-extrabold text-[#0F172A] mb-3">AI অ্যানালাইজ করছে...</h3>
                    <p className="text-[#64748B] font-medium">আপনার পেজের প্যাটার্ন স্ক্যান করা হচ্ছে</p>
                  </div>
                )}

                {modalState === 'success' && (
                  <>
                    {/* Confetti container */}
                    <div id="confetti-container" className="absolute inset-0 pointer-events-none z-50"></div>
                    
                    <div className="relative inline-block mb-6 sm:mb-8 mt-4">
                      <div className="absolute inset-0 bg-[#FF5E00] blur-2xl opacity-10 rounded-full"></div>
                      <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-[#FF5E00] rounded-full flex items-center justify-center shadow-lg relative z-10">
                        <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-2">অ্যানালাইসিস সম্পন্ন!</h3>
                    <p className="text-[#64748B] font-medium mb-8">
                      আপনার পেজ সফলভাবে অ্যানালাইজ করা হয়েছে। বিস্তারিত তথ্য নিচে দেখুন।
                    </p>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <button 
                        onClick={() => router.push('/demo')}
                        className="group w-full flex items-center justify-center gap-2 py-4 bg-[#FF5E00] text-white font-bold rounded-2xl shadow-lg shadow-[#FF5E00]/20 hover:bg-[#E65500] transition-all active:scale-[0.98]"
                      >
                        পূর্ণ রিপোর্ট দেখুন
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button 
                        onClick={() => setModalState('hidden')}
                        className="w-full py-4 text-[#64748B] hover:text-[#0F172A] hover:bg-gray-50 font-bold rounded-2xl transition-colors active:bg-gray-100"
                      >
                        পরে দেখব
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  )
}
