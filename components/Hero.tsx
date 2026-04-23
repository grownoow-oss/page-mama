import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Link2, TrendingUp, Activity, Sparkles, Play, X } from 'lucide-react';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative min-h-[100dvh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#FFF9F5] to-[#FFF1E6]">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF5E00] rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FF5E00_1.5px,_transparent_1.5px)] [background-size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 pt-10 lg:pt-0 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-x-2.5 bg-white/60 backdrop-blur-md border border-orange-100 px-4 py-2 rounded-full mb-8 shadow-sm"
            >
              <div className="w-2 h-2 bg-[#FF5E00] rounded-full animate-pulse shadow-[0_0_8px_#FF5E00]" />
              <span className="text-[11px] font-bold text-[#FF5E00] tracking-widest uppercase">২০২৬-এর #1 পেজ হেলথ টুল</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[44px] sm:text-[64px] lg:text-[86px] leading-[1.02] font-black tracking-[-3px] mb-6 text-[#0F172A]"
            >
              আপনার পেজের<br />
              <span className="text-[#FF5E00] relative inline-block">
                রিচ কেন কমছে?
                <Sparkles className="absolute -right-10 -top-2 text-[#FF5E00] w-10 h-10 animate-pulse hidden lg:block" />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-10"
            >
              <h2 className="text-[20px] sm:text-[26px] font-bold text-[#334155] leading-tight mb-4">
                Meta Business Suite যা বলে না, <span className="text-[#FF5E00]">Page Mama</span> তা বলে — এবং সমাধান দেয়
              </h2>
              <p className="text-[18px] sm:text-[22px] text-gray-500 font-medium">
                ৩০ সেকেন্ডে জানুন + ঠিক কী করবেন — <span className="text-[#0F172A] font-bold">স্পষ্ট অ্যাকশন প্ল্যান</span> সহ
              </p>
            </motion.div>
            
            {/* Action Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid sm:grid-cols-2 gap-5 max-w-[620px] mx-auto lg:mx-0 mt-12"
            >
              {/* Safe Upload */}
              <button 
                onClick={() => window.dispatchEvent(new Event('open-safe-upload'))}
                className="group relative bg-white border border-orange-100 hover:border-[#FF5E00] shadow-[0_10px_30px_rgba(255,94,0,0.06)] hover:shadow-[0_20px_40px_rgba(255,94,0,0.12)] rounded-[32px] p-7 transition-all duration-500 text-left overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full -mr-12 -mt-12 group-hover:bg-orange-100 transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-orange-50 text-[#FF5E00] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div className="font-black text-[22px] text-[#0F172A] mb-1">সবচেয়ে নিরাপদ</div>
                  <div className="text-[#FF5E00] text-[11px] font-black tracking-widest uppercase mb-3">100% প্রাইভেসি</div>
                  <div className="text-[15px] text-gray-500 leading-snug font-medium">স্ক্রিনশট / PDF আপলোড করুন</div>
                </div>
              </button>
              
              {/* Quick Check */}
              <button 
                onClick={() => window.dispatchEvent(new Event('open-quick-check'))}
                className="group relative bg-[#0F172A] border border-[#0F172A] hover:bg-black shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-[32px] p-7 transition-all duration-500 text-left overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Link2 className="w-7 h-7" />
                  </div>
                  <div className="font-black text-[22px] text-white mb-1">দ্রুত চেক</div>
                  <div className="text-orange-400 text-[11px] font-black tracking-widest uppercase mb-3">মাত্র ২৫ সেকেন্ডে</div>
                  <div className="text-[15px] text-gray-400 leading-snug font-medium">পাবলিক লিংক দিয়ে চেক করুন</div>
                </div>
              </button>
            </motion.div>

            {/* Watch Demo Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center gap-5 mt-12 justify-center lg:justify-start"
            >
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center gap-x-5 px-8 py-4 bg-white hover:bg-orange-50 border border-orange-100 rounded-full text-sm font-bold transition-all shadow-sm hover:shadow-md group"
              >
                <div className="w-10 h-10 bg-[#FF5E00] text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 ml-1 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-[#0F172A] font-black text-[16px]">Watch Demo Video</div>
                  <div className="text-[12px] text-gray-400 font-bold -mt-1">৪৭ সেকেন্ড</div>
                </div>
              </button>
            </motion.div>
          </div>
          
          {/* Right Visual: Analysis Card */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Premium Dark Card */}
              <div className="bg-white rounded-[48px] p-2.5 shadow-[0_32px_80px_-20px_rgba(255,94,0,0.15)] border border-white relative z-10 overflow-hidden">
                <div className="bg-[#0F172A] rounded-[40px] p-10 sm:p-12 text-white relative overflow-hidden min-h-[580px] flex flex-col justify-between">
                  
                  {/* Decorative Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5E00]/15 rounded-full blur-[90px] pointer-events-none -mr-40 -mt-40" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-16">
                      <div className="px-4 py-1.5 bg-white/5 backdrop-blur-xl rounded-full flex items-center gap-2.5 border border-white/10">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34D399]" />
                        <span className="text-[11px] font-black tracking-widest uppercase text-gray-300">Live Analysis</span>
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] text-gray-500 font-black tracking-widest uppercase mb-1">Today's Rank</div>
                        <div className="text-4xl font-black flex items-center justify-end gap-1.5">
                          #142 <span className="text-emerald-400 text-2xl font-bold">↑</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-16">
                      <div className="text-[100px] sm:text-[120px] font-black leading-none tracking-tighter text-white mb-3">৮৭</div>
                      <div className="flex items-center gap-4">
                        <div className="text-[16px] font-bold text-gray-400">স্বাস্থ্য স্কোর</div>
                        <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-black rounded-lg border border-emerald-500/10">
                          +12 <TrendingUp className="inline w-3.5 h-3.5 ml-1" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-10">
                      <div>
                        <div className="flex justify-between items-center text-xs font-black mb-4 tracking-widest">
                          <span className="text-gray-500 uppercase">Reach Potential</span>
                          <span className="text-[#FF5E00]">+34%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
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
                          <div className="text-[11px] text-gray-500 font-black tracking-widest uppercase mb-3">Growth (last 7 days)</div>
                          <div className="text-5xl font-black text-white">+১২.৮%</div>
                        </div>
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
                          <Activity className="w-8 h-8 text-orange-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-10 border-t border-white/5">
                    <div className="text-sm text-gray-500 font-bold mb-1">আজকের অ্যানালাইসিস</div>
                    <div className="text-white font-black text-lg flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-emerald-400" /> ১২,০০০+ পেজ অ্যানালাইজড
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Glow Backdrop */}
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
            className="fixed inset-0 bg-[#0F172A]/95 z-[200] flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[48px] w-full max-w-4xl overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-10 py-8 border-b border-gray-50">
                <div>
                  <h3 className="font-black text-2xl text-[#0F172A]">Page Mama কীভাবে কাজ করে?</h3>
                  <p className="text-sm text-gray-500 mt-1">৪৭ সেকেন্ডের এই ভিডিওটি আপনার পেজের মোড় ঘুরিয়ে দিতে পারে</p>
                </div>
                <button 
                  onClick={() => setIsVideoModalOpen(false)} 
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-[#0F172A] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="aspect-video bg-[#0F172A] relative flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#FF5E00] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#FF5E00]/30">
                    <Play className="w-10 h-10 ml-1.5 fill-white text-white" />
                  </div>
                  <p className="text-white font-black text-xl">Demo Video</p>
                  <p className="text-gray-500 text-sm mt-1">এখানে আপনার ভিডিও এম্বেড হবে</p>
                </div>
              </div>
              
              <div className="px-10 py-8 bg-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="px-4 py-1.5 bg-white border border-gray-100 rounded-xl text-[11px] font-black text-gray-600 uppercase tracking-widest">বাংলায়</div>
                  <div className="text-sm text-gray-500 font-bold">৪৭ সেকেন্ড</div>
                </div>
                <button 
                  onClick={() => setIsVideoModalOpen(false)}
                  className="bg-[#FF5E00] text-white px-10 py-4 rounded-2xl font-black text-sm hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  বুঝেছি, শুরু করি
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
