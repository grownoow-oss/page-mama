import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Link2, TrendingUp, Activity, Sparkles, Play, X } from 'lucide-react';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative min-h-[100dvh] flex items-center pt-28 sm:pt-32 pb-20 overflow-hidden bg-[#FFFAF5]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FFB800]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FFB800]/5 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 pt-10 lg:pt-0 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex w-fit mx-auto lg:mx-0 items-center gap-x-2 bg-emerald-50 border border-emerald-100 px-4 py-1.5 rounded-full mb-6 shadow-sm"
            >
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[12px] font-bold text-emerald-600">২০২৬-এর #1 পেজ হেলথ টুল</span>
            </motion.div>
            
            <div className="relative inline-block text-center lg:text-left mb-6">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[48px] sm:text-[68px] lg:text-[84px] leading-[1.02] font-black tracking-[-2px] text-[#0F172A]"
              >
                আপনার পেজের<br />
                <span className="text-[#FFB800] relative">
                  রিচ কেন কমছে?
                  <Sparkles className="absolute -right-8 -top-2 text-[#FFB800] w-8 h-8 animate-pulse" />
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-10 space-y-3"
            >
              <h2 className="text-[20px] sm:text-[24px] font-bold text-[#334155] leading-tight">
                Meta Business Suite যা বলে না, <span className="text-[#FFB800]">Page Mama</span> তা বলে — এবং সমাধান দেয়
              </h2>
              <p className="text-[17px] sm:text-[20px] text-gray-500 font-medium">
                ৩০ সেকেন্ডে জানুন + ঠিক কী করবেন — <span className="text-[#0F172A] font-bold">স্পষ্ট অ্যাকশন প্ল্যান</span> সহ।
              </p>
            </motion.div>
            
            {/* Action Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4 max-w-[620px] mx-auto lg:mx-0"
            >
              {/* Safe Upload */}
              <button 
                onClick={() => window.dispatchEvent(new Event('open-safe-upload'))}
                className="flex-1 bg-white border-2 border-[#FFB800] shadow-[0_8px_30px_rgba(255,206,11,0.12)] rounded-[32px] p-6 text-left transition-all hover:shadow-[0_12px_40px_rgba(255,206,11,0.18)] hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFB800] text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#FFB800]/20">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-black text-xl text-[#0F172A]">সবচেয়ে নিরাপদ</div>
                    <div className="text-emerald-500 text-[10px] font-black tracking-widest uppercase mb-2">100% প্রাইভেসি</div>
                    <div className="text-[13px] text-gray-500 font-medium leading-snug">স্ক্রিনশট বা PDF আপলোড করুন</div>
                  </div>
                </div>
              </button>
              
              {/* Quick Check */}
              <button 
                onClick={() => window.dispatchEvent(new Event('open-quick-check'))}
                className="flex-1 bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[32px] p-6 text-left transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1A1A1A] text-white rounded-2xl flex items-center justify-center shrink-0">
                    <Link2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-black text-xl text-[#0F172A]">দ্রুত চেক</div>
                    <div className="text-emerald-500 text-[10px] font-black tracking-widest uppercase mb-2">মাত্র ২৫ সেকেন্ডে</div>
                    <div className="text-[13px] text-gray-500 font-medium leading-snug">পাবলিক লিংক দিয়ে</div>
                  </div>
                </div>
              </button>
            </motion.div>

            {/* Bottom Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-10 justify-center lg:justify-start"
            >
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center gap-x-4 px-6 py-3.5 bg-white border border-gray-100 rounded-3xl text-sm font-bold transition-all shadow-sm hover:shadow-md group w-full sm:w-auto justify-center"
              >
                <div className="w-9 h-9 bg-[#FFB800] text-white rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play className="w-4 h-4 ml-0.5 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-[#0F172A] font-black">Watch Demo Video</div>
                  <div className="text-[11px] text-gray-400 font-bold">৪৭ সেকেন্ড</div>
                </div>
              </button>

              <a 
                href="/sample-report"
                className="flex items-center justify-center px-8 py-4 bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-3xl text-[15px] font-black transition-all shadow-md hover:shadow-xl w-full sm:w-auto"
              >
                নমুনা রিপোর্ট দেখুন →
              </a>
            </motion.div>

            {/* WhatsApp Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex justify-center lg:justify-start"
            >
              <a 
                href="https://wa.me/8801700000000" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 text-[#25D366] rounded-full text-sm font-bold hover:bg-[#25D366]/20 transition-colors"
              >
                <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
                সাহায্য লাগলে WhatsApp করুন: 017XXXXXXXX
              </a>
            </motion.div>
          </div>
          
          {/* Right Visual */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 px-4 sm:px-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Analysis Card */}
              <div className="bg-white rounded-[40px] p-2 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white">
                <div className="bg-[#0F172A] rounded-[34px] p-8 sm:p-10 text-white relative overflow-hidden min-h-[500px] flex flex-col justify-between">
                  
                  {/* Subtle Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB800]/10 rounded-full blur-[80px] pointer-events-none -mr-32 -mt-32" />

                  <div>
                    <div className="flex items-center justify-between mb-12">
                      <div className="flex items-center gap-2.5">
                        <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-full flex items-center gap-1.5 border border-emerald-500/10">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                          LIVE
                        </div>
                        <span className="text-xs font-bold text-gray-400">আজকের অ্যানালাইসিস</span>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">Today's Rank</div>
                        <div className="text-3xl font-black flex items-center justify-end gap-1">
                          #142 <span className="text-emerald-400 text-xl">↑</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-12">
                      <div className="text-[90px] sm:text-[110px] font-black leading-none tracking-tighter text-white mb-2">৮৭</div>
                      <div className="flex items-center gap-3">
                        <div className="text-sm font-bold text-gray-400 tracking-wide">স্বাস্থ্য স্কোর</div>
                        <div className="text-emerald-400 text-sm font-bold flex items-center gap-1">
                          +12 <TrendingUp className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <div className="flex justify-between items-center text-[11px] font-bold mb-3 tracking-wide">
                          <span className="text-gray-400 uppercase">রিচ পটেনশিয়াল</span>
                          <span className="text-emerald-400 font-mono">+34%*</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '68%' }}
                            transition={{ duration: 1.5, delay: 1 }}
                            className="h-full bg-[#FFB800]"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-2">গ্রোথ (গত ৭ দিনে)</div>
                          <div className="text-4xl font-black text-white">+১২.৮%*</div>
                        </div>
                        <div className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black rounded-lg tracking-wider">
                          GROWTH
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-0 w-full text-center text-[10px] text-gray-500/50">*(বাস্তব ইউজারদের গড় ফলাফল)</div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-50 flex items-center gap-3 sm:gap-4 z-20 max-w-[180px] sm:max-w-none"
              >
                <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[#0F172A] font-black text-lg">১,২৪৭ <span className="text-sm font-bold text-gray-400">পেজ</span></div>
                  <div className="text-[11px] text-gray-400 font-bold">আজ অ্যানালাইজড</div>
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
                  <h3 className="font-bold text-xl text-[#0F172A]">Page Mama কীভাবে কাজ করে?</h3>
                  <p className="text-sm text-gray-500 mt-1">৪৭ সেকেন্ডের ভিডিওতে সব বুঝে নিন</p>
                </div>
                <button onClick={() => setIsVideoModalOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-gray-900 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video bg-[#0F172A] relative flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-[#FFB800]/20">
                    <Play className="w-8 h-8 ml-1 fill-white text-white" />
                  </div>
                  <p className="text-white font-bold text-lg">Demo Video</p>
                </div>
              </div>
              <div className="px-8 py-6 bg-gray-50 flex items-center justify-between">
                <div className="text-sm text-gray-500 font-bold">৪৭ সেকেন্ড • বাংলায়</div>
                <button onClick={() => setIsVideoModalOpen(false)} className="bg-[#FFB800] text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:shadow-lg transition-all active:scale-95">
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
