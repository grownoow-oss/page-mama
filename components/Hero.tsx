import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Link2, TrendingUp, Activity, Sparkles, Play, X } from 'lucide-react';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative min-h-[100dvh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FAFAFA] via-white to-[#FFF7ED]">
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[40%] rounded-full bg-[#FFCE0B]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[40%] rounded-full bg-[#FF9D00]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 pt-10 lg:pt-0 text-center sm:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-x-2 bg-[#F8FAFC] sm:bg-white border border-gray-200 px-4 sm:px-5 py-1.5 sm:py-2 rounded-3xl mb-6 sm:mb-8 shadow-sm mx-auto sm:mx-0"
            >
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              <span className="text-[11px] sm:text-xs font-bold text-emerald-600 tracking-wider sm:tracking-normal">২০২৬-এর #1 পেজ হেলথ টুল</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[38px] sm:text-[58px] lg:text-[76px] leading-[1.08] sm:leading-[1.02] font-extrabold tracking-[-1.5px] sm:tracking-[-4px] mb-4 sm:mb-6 text-[#0F172A] px-1 sm:px-0"
            >
              আপনার পেজের<br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-[#FFCE0B] via-orange-500 to-[#FF8A3D] sm:to-yellow-500 bg-clip-text text-transparent">রিচ কেন কমছে?</span>
                <Sparkles className="absolute -right-6 sm:-right-10 -top-2 sm:-top-4 text-[#FF9D00] w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[300px] sm:max-w-[520px] mx-auto sm:mx-0 text-[16px] sm:text-[21px] text-gray-600 leading-snug mb-9 sm:mb-10"
            >
              ৩০ সেকেন্ডে জানুন + ঠিক কী করবেন —<br className="hidden sm:block" />
              <span className="font-semibold text-gray-800">স্পষ্ট অ্যাকশন প্ল্যান</span> সহ।
            </motion.p>
            
            {/* Action Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-[340px] sm:max-w-[540px] mx-auto sm:mx-0"
            >
              {/* Safe Upload */}
              <div 
                onClick={() => window.dispatchEvent(new Event('open-safe-upload'))}
                className="group cursor-pointer bg-white border border-gray-200 sm:border-2 sm:border-[#FFCE0B] shadow-sm hover:shadow-md sm:hover:shadow-2xl rounded-3xl p-5 sm:p-6 transition-all duration-300 active:scale-[0.985] hover:-translate-y-1 text-left"
              >
                <div className="flex gap-x-4 items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFCE0B] to-yellow-500 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-none sm:shadow-lg sm:shadow-yellow-500/20 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="flex-1 pt-1 sm:pt-0">
                    <div className="font-extrabold text-[20px] sm:text-xl text-[#0F172A]">সবচেয়ে নিরাপদ</div>
                    <div className="text-emerald-600 text-[11px] font-bold tracking-wide uppercase mt-0.5">100% প্রাইভেসি</div>
                    <div className="mt-3 sm:mt-2.5 text-[14.5px] sm:text-sm text-gray-600 leading-tight sm:leading-normal font-medium">স্ক্রিনশট বা PDF আপলোড করুন</div>
                  </div>
                </div>
              </div>
              
              {/* Quick Check */}
              <div 
                onClick={() => window.dispatchEvent(new Event('open-quick-check'))}
                className="group cursor-pointer bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md sm:hover:shadow-xl rounded-3xl p-5 sm:p-6 transition-all duration-300 active:scale-[0.985] hover:-translate-y-1 text-left"
              >
                <div className="flex gap-x-4 items-start">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-black transition-all duration-300">
                    <Link2 className="w-6 h-6" />
                  </div>
                  <div className="flex-1 pt-1 sm:pt-0">
                    <div className="font-extrabold text-[20px] sm:text-xl text-[#0F172A]">দ্রুত চেক</div>
                    <div className="text-emerald-600 text-[11px] font-bold tracking-wide uppercase mt-0.5">মাত্র ২৫ সেকেন্ডে</div>
                    <div className="mt-3 sm:mt-2.5 text-[14.5px] sm:text-sm text-gray-600 leading-tight sm:leading-normal font-medium">পাবলিক লিংক দিয়ে</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Demo Video Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8 max-w-[320px] sm:max-w-none mx-auto sm:mx-0"
            >
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center justify-center sm:justify-start gap-x-3 px-6 py-[17px] sm:py-3.5 bg-white border border-gray-200 sm:border-gray-300 hover:border-gray-400 rounded-3xl sm:rounded-2xl text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-[0.985] w-full sm:w-auto group"
              >
                <div className="w-9 h-9 bg-[#FFCE0B] group-hover:bg-yellow-600 text-[#0F172A] rounded-2xl sm:rounded-xl flex items-center justify-center transition-colors">
                  <Play className="w-4 h-4 ml-0.5 fill-current" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-[#0F172A] text-[15px] sm:text-sm">Watch Demo Video</div>
                  <div className="text-xs text-gray-500 font-medium -mt-0.5 sm:mt-0">৪৭ সেকেন্ড <span className="sm:hidden">• বাংলায়</span></div>
                </div>
              </button>
              
              <div className="hidden sm:block text-[13px] sm:text-xs text-gray-500 font-medium text-center sm:text-left">
                দেখুন কীভাবে কাজ করে
              </div>
            </motion.div>
          </div>
          
          {/* Right Visual */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: [-8, 8, -8] }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.4 },
                scale: { duration: 0.8, delay: 0.4, type: "spring" },
                rotateX: { duration: 0.8, delay: 0.4, type: "spring" },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" } 
              }}
              style={{ perspective: 1000 }}
              className="relative z-10"
            >
              {/* Main Floating Card */}
              <div className="relative bg-white rounded-[2rem] p-2 shadow-2xl shadow-yellow-900/5 border border-gray-100">
                <div className="bg-[#0F172A] rounded-[1.5rem] p-6 sm:p-8 text-white relative overflow-hidden">
                  
                  {/* Subtle dark gradient background */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFCE0B]/10 rounded-full blur-[60px] pointer-events-none"></div>

                  {/* Live Header */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="flex items-center gap-x-3">
                      <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-2xl flex items-center gap-x-1.5 border border-emerald-500/10">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
                        LIVE
                      </div>
                      <span className="text-sm text-gray-400 font-medium">আজকের অ্যানালাইসিস</span>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-1">Today's Rank</div>
                      <div className="text-3xl sm:text-4xl font-extrabold flex items-center gap-x-1.5">
                        #142 <span className="text-emerald-400 text-xl sm:text-2xl">↑</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Health Score */}
                  <div className="flex items-end gap-x-4 mb-10 relative z-10">
                    <div>
                      <div className="text-7xl sm:text-[84px] font-extrabold leading-none tracking-tighter">৮৭</div>
                      <div className="text-sm text-gray-400 font-medium mt-1">স্বাস্থ্য স্কোর</div>
                    </div>
                    <div className="text-emerald-400 text-base sm:text-lg pb-2 font-bold flex items-center">
                      +12 <TrendingUp className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="space-y-6 relative z-10">
                    <div>
                      <div className="flex justify-between text-xs mb-2.5 font-medium">
                        <span className="text-gray-400">রিচ পটেনশিয়াল</span>
                        <span className="font-mono font-bold text-emerald-400">+34%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '68%' }}
                          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#FFCE0B] to-yellow-400"
                        >
                        </motion.div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <div>
                        <div className="text-xs text-gray-400 font-medium mb-1">গ্রোথ (গত ৭ দিনে)</div>
                        <div className="text-2xl sm:text-3xl font-extrabold">+১২.৮%</div>
                      </div>
                      <div className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold rounded-2xl tracking-wide">
                        GROWTH
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <motion.div 
                animate={{ y: [-6, 6, -6] }} 
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white p-4 sm:p-5 rounded-2xl shadow-xl shadow-black/10 border border-gray-100 z-20 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <TrendingUp className="text-emerald-500 w-5 h-5" />
                </div>
                <div>
                  <div className="text-[#0F172A] font-extrabold text-base">১,২৪৭ <span className="text-sm font-bold text-gray-600">পেজ</span></div>
                  <div className="text-[11px] text-gray-500 font-medium">আজ অ্যানালাইজড</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Demo Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-gray-100">
                <div>
                  <div className="font-bold text-xl text-[#0F172A]">Page Mama Demo Video</div>
                  <div className="text-sm text-gray-500 mt-0.5">কীভাবে ৩০ সেকেন্ডে আপনার পেজের স্বাস্থ্য জানবেন</div>
                </div>
                <button 
                  onClick={() => setIsVideoModalOpen(false)} 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Video Container */}
              <div className="aspect-video bg-black flex items-center justify-center relative group">
                <div className="text-center text-white relative z-10 group-hover:scale-105 transition-transform duration-300">
                  <div className="mx-auto w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/20">
                    <Play className="w-8 h-8 ml-1 fill-white" />
                  </div>
                  <div className="text-lg font-bold">Demo Video</div>
                  <div className="text-sm text-gray-400 mt-1">(এখানে আপনার ভিডিও এম্বেড হবে)</div>
                </div>
                
                {/* Real Video Embed Example */}
                {/* 
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
                */}
              </div>
              
              <div className="px-6 sm:px-8 py-5 bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-sm text-gray-600 font-medium">৪৭ সেকেন্ড • বাংলায়</div>
                <button 
                  onClick={() => setIsVideoModalOpen(false)}
                  className="text-[#FFCE0B] font-bold text-sm hover:underline"
                >
                  পরে দেখব
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
