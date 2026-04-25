import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Link2, TrendingUp, Activity, Sparkles, Play, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative min-h-[100dvh] flex items-center pt-20 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#FFFAF5]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FFB800]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FFB800]/5 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 pt-6 lg:pt-0 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex w-fit mx-auto lg:mx-0 items-center gap-x-2.5 bg-white border border-gray-100 px-5 py-2 rounded-2xl mb-6 sm:mb-8 shadow-sm"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <span className="text-[13px] font-black text-[#334155] tracking-tight uppercase">২০২৬-এর <span className="text-[#FFB800]">#১</span> পেজ হেলথ টুল</span>
            </motion.div>

            <div className="relative inline-block text-center lg:text-left mb-4 sm:mb-6 mt-2 sm:mt-0">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[42px] sm:text-[68px] lg:text-[84px] leading-[1.1] sm:leading-[1.02] font-black tracking-tight sm:tracking-[-2px] text-[#0F172A]"
              >
                আপনার পেজের<br />
                <span className="text-[#FFB800] relative">
                  রিচ কেন কমছে?
                  <Sparkles className="absolute -right-8 -top-2 text-[#FFB800] w-8 h-8 animate-pulse hidden sm:block" />
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6 sm:mb-12 space-y-3 sm:space-y-4"
            >
              <h2 className="text-[19px] sm:text-[28px] font-bold text-[#334155] leading-[1.4] sm:leading-snug">
                <span className="text-[#0082FB]">Meta</span> দেখায় রিপোর্ট,<br className="sm:hidden" /> <span className="inline-flex items-center px-2 py-0.5 rounded-lg border border-[#0F172A]/10 bg-white/50 shadow-sm mx-1.5 translate-y-[1px]"><Logo textOnly size="inline" /></span> দেয় অ্যাকশন।
              </h2>
              <p className="text-[15px] sm:text-[20px] text-gray-500 font-medium leading-relaxed px-4 sm:px-0">
                ৩০ সেকেন্ডে জানুন + ঠিক কী করবেন — <span className="text-[#0F172A] font-bold">স্পষ্ট অ্যাকশন প্ল্যান</span> সহ।
              </p>
            </motion.div>

            {/* Primary Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="max-w-[550px] mx-auto lg:mx-0 px-2 sm:px-0"
            >
              <div className="w-full bg-[#FFB800] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-[0_20px_50px_rgba(255,184,0,0.15)] relative overflow-hidden group">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-[60px] -mr-20 -mt-20 pointer-events-none transition-transform group-hover:scale-110" />

                <div className="relative z-10">
                  <div className="mb-6 sm:mb-8 text-center sm:text-left">
                    <p className="text-black text-[15px] sm:text-[18px] font-black tracking-tight">শুধু পেজ লিংক দিন — ২৫ সেকেন্ডে রিপোর্ট</p>
                  </div>

                  {/* Minimal URL Input Box (Modal Trigger) */}
                  <div className="flex justify-center sm:justify-start">
                    <button
                      onClick={() => window.dispatchEvent(new Event('open-quick-check'))}
                      className="relative flex items-center w-full sm:w-[88%] group/trigger active:scale-[0.98] transition-transform"
                    >
                      <div className="relative w-full">
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-hover/trigger:text-[#FF5E00] transition-colors">
                          <Link2 className="w-4 h-4" />
                        </div>
                        <div className="w-full h-[46px] sm:h-[48px] pl-10 pr-[105px] sm:pr-[115px] bg-white border border-[#E2E8F0] rounded-[12px] text-[14px] font-medium text-gray-400 flex items-center shadow-sm group-hover/trigger:border-[#FF5E00]/30 transition-all">
                          পেজ লিংক দিন
                        </div>
                        <div className="absolute right-1.5 top-1/2 -translate-y-1/2 h-[34px] sm:h-[36px] px-4 sm:px-5 bg-[#FF5E00] group-hover/trigger:bg-[#E65500] text-white font-black text-[12px] sm:text-[13px] rounded-[9px] flex items-center transition-all shadow-md">
                          রিপোর্ট দেখুন
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-12 justify-center lg:justify-start px-2 sm:px-0"
            >
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center gap-x-4 px-6 sm:px-10 py-4 sm:py-5 bg-white border-2 border-[#FFB800] rounded-[24px] sm:rounded-[32px] text-base sm:text-lg font-black transition-all shadow-[0_15px_30px_rgba(255,184,0,0.1)] hover:shadow-[0_20px_40px_rgba(255,184,0,0.2)] hover:-translate-y-1 group w-full sm:w-auto justify-center"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFB800] text-white rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-1 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-[#0F172A] leading-tight text-sm sm:text-base">Watch Demo Video</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-wider">৪৭ সেকেন্ড • বাংলায়</div>
                </div>
              </button>

              <a
                href="/sample-report"
                className="flex items-center justify-center gap-2 px-8 py-2 text-[#64748B] font-bold text-[14px] sm:text-[15px] hover:text-[#0F172A] transition-all w-full sm:w-auto group"
              >
                নমুনা রিপোর্ট দেখুন
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0 px-2 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Analysis Card */}
              <div className="bg-white rounded-[32px] sm:rounded-[40px] p-1.5 sm:p-2 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white">
                <div className="bg-[#0F172A] rounded-[28px] sm:rounded-[34px] p-6 sm:p-10 text-white relative overflow-hidden min-h-[420px] sm:min-h-[500px] flex flex-col justify-between">
                  {/* Subtle Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB800]/10 rounded-full blur-[80px] pointer-events-none -mr-32 -mt-32" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full relative z-10">
                    {/* Metrics Section */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
                          <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-[9px] sm:text-[10px] font-bold rounded-full flex items-center gap-1.5 border border-emerald-500/10">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                            লাইভ অ্যানালাইসিস
                          </div>
                        </div>

                        <div className="mb-8 sm:mb-10 relative">
                          <div className="flex items-baseline gap-1">
                            <span className="text-[60px] sm:text-[100px] font-black leading-none tracking-tighter text-white">৮৭</span>
                            <span className="text-xl sm:text-2xl font-bold text-gray-500">/১০০</span>
                          </div>
                          <div className="flex items-center gap-3 mt-2">
                            <div className="text-[12px] sm:text-sm font-bold text-gray-400 tracking-wide">পেজ স্বাস্থ্য স্কোর</div>
                            <div className="text-emerald-400 text-[12px] sm:text-sm font-bold flex items-center gap-1">
                              +12% <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-5 sm:space-y-6">
                          <div>
                            <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-bold mb-2 tracking-wide">
                              <span className="text-gray-400 uppercase">রিচ পটেনশিয়াল</span>
                              <span className="text-emerald-400">+৩৪%</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '87%' }}
                                transition={{ duration: 1.5, delay: 1 }}
                                className="h-full bg-[#FFB800]"
                              />
                            </div>
                          </div>
                          <div className="pt-4 border-t border-white/5">
                            <div className="text-[9px] sm:text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">গ্রোথ (গত ৭ দিনে)</div>
                            <div className="text-2xl sm:text-3xl font-black text-white">+১২.৮%</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Plan Section */}
                    <div className="bg-white/5 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 border border-white/10 flex flex-col">
                      <div className="flex items-center justify-between mb-5 sm:mb-6">
                        <div className="text-[10px] sm:text-[11px] font-black text-[#FFB800] tracking-widest uppercase">Action Plan</div>
                        <Sparkles className="w-4 h-4 text-[#FFB800]" />
                      </div>

                      <div className="space-y-3.5 sm:space-y-4 flex-1">
                        {[
                          { text: 'ইনভ্যালিড কন্টেন্ট রিমুভ করুন', status: 'urgent' },
                          { text: 'সঠিক সময়ে পোস্ট করুন', status: 'next' },
                          { text: 'অডিয়েন্স রিটেনশন বাড়ান', status: 'next' }
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.2 + (i * 0.1) }}
                            className="flex items-center gap-3 group"
                          >
                            <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border ${item.status === 'urgent' ? 'border-[#FFB800] bg-[#FFB800]/20' : 'border-white/20'} flex items-center justify-center shrink-0`}>
                              {item.status === 'urgent' ? <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#FFB800] rounded-full" /> : null}
                            </div>
                            <span className={`text-[12px] sm:text-[13px] font-bold ${item.status === 'urgent' ? 'text-white' : 'text-gray-400'}`}>{item.text}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/5">
                        <div className="bg-white text-[#0F172A] text-[11px] sm:text-[12px] font-black py-2.5 sm:py-3 px-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-[#FFB800] hover:text-white transition-colors">
                          অ্যাকশন গাইড দেখুন
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center text-[9px] sm:text-[10px] text-gray-500/50">*(বাস্তব ইউজারদের গড় ফলাফল)</div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-50 flex items-center gap-3 sm:gap-4 z-20 max-w-[160px] sm:max-w-none"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-50 text-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[#0F172A] font-black text-base sm:text-lg">১২০+ <span className="text-[11px] sm:text-sm font-bold text-gray-400">পেজ</span></div>
                  <div className="text-[10px] sm:text-[11px] text-gray-400 font-bold">আজ অ্যানালাইজড</div>
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
