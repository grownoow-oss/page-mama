import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Link2, TrendingUp, Activity, Sparkles, Play, X, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative min-h-[100dvh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#FFF9F5] to-[#FFF1E6]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF5E00] rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#FF5E00_1px,_transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 pt-10 lg:pt-0 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-x-2.5 bg-white/50 backdrop-blur-sm border border-orange-100 px-4 py-2 rounded-full mb-8 shadow-sm"
            >
              <div className="w-2 h-2 bg-[#FF5E00] rounded-full animate-pulse shadow-[0_0_8px_#FF5E00]" />
              <span className="text-xs font-bold text-[#FF5E00] tracking-wide uppercase">২০২৬-এর সেরা পেজ অ্যানালাইসিস টুল</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[42px] sm:text-[64px] lg:text-[82px] leading-[1.05] font-extrabold tracking-[-2px] mb-6 text-[#1A1A1A]"
            >
              আপনার পেজের<br />
              <span className="text-[#FF5E00]">রিচ কেন কমছে?</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6"
            >
              <h2 className="text-[20px] sm:text-[24px] font-bold text-[#334155] leading-tight mb-3">
                Meta Business Suite যা বলে না, <span className="text-[#FF5E00]">Page Mama</span> তা বলে — এবং সমাধান দেয়
              </h2>
              <p className="text-[17px] sm:text-[20px] text-gray-500 font-medium">
                ৩০ সেকেন্ডে জানুন + ঠিক কী করবেন — <span className="text-gray-900 font-bold">স্পষ্ট অ্যাকশন প্ল্যান</span> সহ
              </p>
            </motion.div>
            
            {/* Action Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid sm:grid-cols-2 gap-4 max-w-[580px] mx-auto lg:mx-0 mt-10"
            >
              {/* Safe Upload */}
              <button 
                onClick={() => window.dispatchEvent(new Event('open-safe-upload'))}
                className="group relative bg-white border border-orange-100 hover:border-[#FF5E00] shadow-[0_4px_20px_rgba(255,94,0,0.05)] hover:shadow-[0_10px_30px_rgba(255,94,0,0.12)] rounded-3xl p-6 transition-all duration-500 text-left overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full -mr-12 -mt-12 group-hover:bg-orange-100 transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-50 text-[#FF5E00] rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="font-extrabold text-[20px] text-[#1A1A1A] mb-1">সবচেয়ে নিরাপদ</div>
                  <div className="text-[#FF5E00] text-[11px] font-bold tracking-wider uppercase mb-3">100% প্রাইভেসি</div>
                  <div className="text-[14px] text-gray-500 leading-snug font-medium">স্ক্রিনশট বা PDF আপলোড করুন</div>
                </div>
              </button>
              
              {/* Quick Check */}
              <button 
                onClick={() => window.dispatchEvent(new Event('open-quick-check'))}
                className="group relative bg-[#1A1A1A] border border-[#1A1A1A] hover:bg-black shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-3xl p-6 transition-all duration-500 text-left overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <Link2 className="w-6 h-6" />
                  </div>
                  <div className="font-extrabold text-[20px] text-white mb-1">দ্রুত চেক</div>
                  <div className="text-orange-400 text-[11px] font-bold tracking-wider uppercase mb-3">মাত্র ২৫ সেকেন্ডে</div>
                  <div className="text-[14px] text-gray-400 leading-snug font-medium">পাবলিক লিংক দিয়ে চেক করুন</div>
                </div>
              </button>
            </motion.div>

            {/* Demo Video Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-10 justify-center lg:justify-start"
            >
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center gap-x-4 px-6 py-3 bg-white hover:bg-orange-50 border border-orange-100 rounded-full text-sm font-bold transition-all shadow-sm hover:shadow-md group"
              >
                <div className="w-8 h-8 bg-[#FF5E00] text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-[#1A1A1A]">Watch Demo Video</div>
                  <div className="text-[11px] text-gray-400 font-medium -mt-0.5">৪৭ সেকেন্ড</div>
                </div>
              </button>
            </motion.div>
          </div>
          
          {/* Right Visual: Live Analysis Card */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Premium Card Layout */}
              <div className="bg-white rounded-[40px] p-2 shadow-[0_32px_64px_-16px_rgba(255,94,0,0.12)] border border-white relative z-10 overflow-hidden">
                <div className="bg-[#1A1A1A] rounded-[34px] p-8 sm:p-10 text-white relative overflow-hidden h-[540px] flex flex-col justify-between">
                  
                  {/* Decorative Gradient */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5E00]/20 rounded-full blur-[80px] pointer-events-none -mr-32 -mt-32" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-12">
                      <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full flex items-center gap-2 border border-white/10">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-300">Live Analysis</span>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">Today's Rank</div>
                        <div className="text-3xl font-extrabold flex items-center justify-end gap-1">
                          #142 <span className="text-emerald-400 text-xl">↑</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-12">
                      <div className="text-[84px] sm:text-[100px] font-black leading-none tracking-tighter text-white mb-2">৮৭</div>
                      <div className="flex items-center gap-3">
                        <div className="text-sm font-bold text-gray-400">স্বাস্থ্য স্কোর</div>
                        <div className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-lg border border-emerald-500/10">
                          +12 <TrendingUp className="inline w-3 h-3 ml-0.5" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <div className="flex justify-between items-center text-xs font-bold mb-3">
                          <span className="text-gray-500 uppercase tracking-wider">Reach Potential</span>
                          <span className="text-[#FF5E00]">+34%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '68%' }}
                            transition={{ duration: 1.5, delay: 1 }}
                            className="h-full bg-gradient-to-r from-[#FF5E00] to-orange-400"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-2">Growth (last 7 days)</div>
                          <div className="text-4xl font-black text-white">+১২.৮%</div>
                        </div>
                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
                          <Activity className="w-6 h-6 text-orange-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-8 border-t border-white/5">
                    <div className="flex -space-x-3 mb-4">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1A1A1A] bg-gray-800" />
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-[#1A1A1A] bg-orange-500 flex items-center justify-center text-[10px] font-bold">
                        +12k
                      </div>
                    </div>
                    <div className="text-[12px] text-gray-500 font-bold">
                      <span className="text-white">১২,০০০+</span> পেজ অ্যাডমিন আমাদের ব্যবহার করছেন
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FF5E00]/5 rounded-full blur-[100px] -z-10" />
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
            className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[40px] w-full max-w-4xl overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-8 py-6 border-b border-gray-50">
                <div>
                  <h3 className="font-bold text-xl text-[#1A1A1A]">Page Mama কীভাবে কাজ করে?</h3>
                  <p className="text-sm text-gray-500 mt-1">৪৭ সেকেন্ডের এই ভিডিওটি আপনার পেজের মোড় ঘুরিয়ে দিতে পারে</p>
                </div>
                <button 
                  onClick={() => setIsVideoModalOpen(false)} 
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="aspect-video bg-gray-900 relative flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#FF5E00] rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-[#FF5E00]/20">
                    <Play className="w-8 h-8 ml-1 fill-white text-white" />
                  </div>
                  <p className="text-white font-bold text-lg">Demo Video</p>
                  <p className="text-gray-500 text-sm mt-1">এখানে আপনার ভিডিও এম্বেড হবে</p>
                </div>
              </div>
              
              <div className="px-8 py-6 bg-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="px-3 py-1 bg-white border border-gray-100 rounded-lg text-xs font-bold text-gray-600">বাংলায়</div>
                  <div className="text-sm text-gray-500 font-medium">৪৭ সেকেন্ড</div>
                </div>
                <button 
                  onClick={() => setIsVideoModalOpen(false)}
                  className="bg-[#FF5E00] text-white px-8 py-3 rounded-2xl font-bold text-sm hover:shadow-lg transition-all"
                >
                  বুঝেছি, অ্যানালাইসিস শুরু করি
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
