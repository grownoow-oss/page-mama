import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Link2, TrendingUp, Activity, Sparkles, Play, X, ArrowRight, Target } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative min-h-[100dvh] flex items-center pt-20 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#FFFAF5]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FF5E00]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF5E00]/5 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
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
              <span className="text-[13px] font-black text-[#334155] tracking-tight uppercase">বাংলাদেশে তৈরি, <span className="text-[#FF5E00]">বাংলাদেশি পেজের</span> জন্য</span>
            </motion.div>

            <div className="relative inline-block text-center lg:text-left mb-4 sm:mb-6 mt-2 sm:mt-0">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[42px] sm:text-[68px] lg:text-[84px] leading-[1.1] sm:leading-[1.02] font-black tracking-tight sm:tracking-[-2px] text-[#0F172A]"
              >
                আপনার পেজের<br />
                <span className="text-[#FF5E00] relative">
                  রিচ কেন কমছে?
                  <Sparkles className="absolute -right-8 -top-2 text-[#FF5E00] w-8 h-8 animate-pulse hidden sm:block" />
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
                <span className="text-[#0082FB]">মেটা</span> দেখায় রিপোর্ট,<br className="sm:hidden" /> <span className="inline-flex items-center px-2 py-0.5 rounded-lg border border-[#0F172A]/10 bg-white/50 shadow-sm mx-1.5 translate-y-[1px]"><Logo textOnly size="inline" /></span> দেয় অ্যাকশন।
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
              className="max-w-[600px] mx-auto lg:mx-0 px-2 sm:px-0"
            >
              <div className="w-full bg-white border border-gray-100 rounded-[20px] p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="mb-6 text-center sm:text-left">
                    <p className="text-[#0F172A] text-[18px] sm:text-[22px] font-bold tracking-tight leading-tight">
                      শুধু পেজ লিংক দিন।
                    </p>
                  </div>

                  {/* Premium URL Input Box */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="relative flex-1 w-full">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Link2 className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="আপনার পেজ লিংক দিন (facebook.com/yourpage)"
                        className="w-full h-[48px] pl-11 pr-4 bg-[#F8FAFC] border border-gray-200 rounded-xl text-[14px] font-medium text-[#0F172A] focus:outline-none focus:border-[#FF5E00]/30 focus:ring-4 focus:ring-[#FF5E00]/5 transition-all placeholder:text-gray-400 cursor-pointer"
                        onClick={() => window.dispatchEvent(new Event('open-quick-check'))}
                        readOnly
                      />
                    </div>
                    <button
                      onClick={() => window.dispatchEvent(new Event('open-quick-check'))}
                      className="h-[48px] px-8 bg-[#FF5E00] hover:bg-[#E65500] text-white font-bold text-[15px] rounded-xl transition-all shadow-lg shadow-[#FF5E00]/10 hover:shadow-[#FF5E00]/20 active:scale-[0.98] whitespace-nowrap w-full sm:w-auto flex items-center justify-center"
                    >
                      রিপোর্ট দেখুন
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-center lg:justify-start gap-2">
                    <Target className="w-3.5 h-3.5 text-[#FF5E00]" />
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest italic">
                      ২০+ পেজের বাস্তব তথ্য বিশ্লেষণ করা হয়েছে
                    </p>
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
                className="flex items-center gap-x-4 px-6 sm:px-10 py-4 sm:py-5 bg-white border-2 border-[#FF5E00]/10 rounded-[24px] sm:rounded-[32px] text-base sm:text-lg font-black transition-all shadow-[0_15px_30px_rgba(255,94,0,0.05)] hover:shadow-[0_20px_40px_rgba(255,94,0,0.1)] hover:-translate-y-1 group w-full sm:w-auto justify-center"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF5E00] text-white rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-1 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-[#0F172A] leading-tight text-sm sm:text-base">ডেমো ভিডিও দেখুন</div>
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
              <div className="bg-white rounded-[32px] sm:rounded-[40px] p-1.5 sm:p-2 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100">
                <div className="bg-white rounded-[28px] sm:rounded-[34px] p-6 sm:p-10 text-[#0F172A] relative overflow-hidden min-h-[420px] sm:min-h-[500px] flex flex-col justify-between border border-gray-50">
                  {/* Subtle Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5E00]/5 rounded-full blur-[80px] pointer-events-none -mr-32 -mt-32" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full relative z-10">
                    {/* Metrics Section */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
                          <div className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[9px] sm:text-[10px] font-bold rounded-full flex items-center gap-1.5 border border-emerald-100">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                            লাইভ অ্যানালাইসিস
                          </div>
                        </div>

                        <div className="mb-8 sm:mb-10 relative">
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                               <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.2)]" />
                               <span className="text-lg font-bold text-[#0F172A] tracking-tight">অ্যালগরিদম রিস্ক (লাল জোন)</span>
                            </div>
                            <div className="flex items-center gap-3">
                               <div className="w-4 h-4 rounded-full bg-slate-400" />
                               <span className="text-lg font-bold text-gray-500 tracking-tight">উন্নতির সুযোগ (ধূসর জোন)</span>
                            </div>
                            <div className="flex items-center gap-3">
                               <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.2)]" />
                               <span className="text-lg font-bold text-emerald-600 tracking-tight">পজিティブ পয়েন্ট (সবুজ জোন)</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-5 sm:space-y-6">
                          <div>
                            <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-bold mb-2 tracking-wide">
                              <span className="text-gray-400 uppercase tracking-widest">রিচ পটেনশিয়াল (আগামী ৩০ দিন)</span>
                              <span className="text-emerald-600">+৩৮%</span>
                            </div>
                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '92%' }}
                                transition={{ duration: 1.5, delay: 1 }}
                                className="h-full bg-[#FF5E00]"
                              />
                            </div>
                          </div>
                          <div className="pt-4 border-t border-gray-100">
                            <div className="text-[9px] sm:text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-1">অর্গানিক গ্রোথ ট্র্যাকিং</div>
                            <div className="text-2xl sm:text-3xl font-black text-[#0F172A]">লাইভ এনালাইসিস</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Plan Section */}
                    <div className="bg-gray-50 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 border border-gray-100 flex flex-col">
                      <div className="flex items-center justify-between mb-5 sm:mb-6">
                        <div className="text-[10px] sm:text-[11px] font-black text-[#FF5E00] tracking-widest uppercase">অ্যাকশন প্ল্যান</div>
                        <Sparkles className="w-4 h-4 text-[#FF5E00]" />
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
                            <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border ${item.status === 'urgent' ? 'border-[#FF5E00] bg-[#FF5E00]/20' : 'border-gray-200'} flex items-center justify-center shrink-0`}>
                              {item.status === 'urgent' ? <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#FF5E00] rounded-full" /> : null}
                            </div>
                            <span className={`text-[12px] sm:text-[13px] font-bold ${item.status === 'urgent' ? 'text-[#0F172A]' : 'text-gray-500'}`}>{item.text}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-200/50">
                        <div className="bg-white text-[#0F172A] text-[11px] sm:text-[12px] font-black py-2.5 sm:py-3 px-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-[#FF5E00] hover:text-white transition-colors border border-gray-100 shadow-sm">
                          অ্যাকশন গাইড দেখুন
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center text-[9px] sm:text-[10px] text-gray-400">*(বাস্তব ইউজারদের গড় ফলাফল)</div>
                </div>
              </div>old ${item.status === 'urgent' ? 'text-white' : 'text-gray-400'}`}>{item.text}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/5">
                        <div className="bg-white text-[#0F172A] text-[11px] sm:text-[12px] font-black py-2.5 sm:py-3 px-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-[#FF5E00] hover:text-white transition-colors">
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
                  <div className="w-20 h-20 bg-[#FF5E00] rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-[#FF5E00]/20">
                    <Play className="w-8 h-8 ml-1 fill-white text-white" />
                  </div>
                  <p className="text-white font-bold text-lg">Demo Video</p>
                </div>
              </div>
              <div className="px-8 py-6 bg-gray-50 flex items-center justify-between">
                <div className="text-sm text-gray-500 font-bold">৪৭ সেকেন্ড • বাংলায়</div>
                <button onClick={() => setIsVideoModalOpen(false)} className="bg-[#FF5E00] text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:shadow-lg transition-all active:scale-95">
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
