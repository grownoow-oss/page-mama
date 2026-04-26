import { ArrowRight, CheckCircle2, TrendingUp, AlertTriangle, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CaseStudy() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] tracking-tight mb-3">
            একজন ইউজারের গল্প
          </h2>
          <p className="text-[#64748B] text-sm md:text-base font-medium flex items-center justify-center gap-2">
            রাহাত ভাই <span className="w-1 h-1 bg-gray-300 rounded-full" /> ঢাকা ফ্যাশন হাব (৬৮k followers)
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Results & Quote */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Elegant Quote */}
              <div className="relative">
                <Quote className="absolute -top-8 -left-6 w-16 h-16 text-[#FFB800]/10" />
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0F172A] leading-[1.15] tracking-tight relative z-10">
                  "১৪ দিন পর রিচ <span className="text-[#FFB800]">উল্লেখযোগ্যভাবে বেড়েছে</span>। শুধুমাত্র কয়েকটা ছোট পরিবর্তনের কারণে।"
                </h3>
              </div>

              {/* Comparison Cards */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  
                  {/* Before Card */}
                  <div className="w-full bg-[#FFF5F5] rounded-3xl p-6 md:p-8 border border-red-100/50 shadow-sm transition-transform hover:scale-[1.02]">
                    <div className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-6 opacity-70">Before (সমস্যা)</div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-gray-500">হেলথ স্কোর</span>
                      <span className="text-5xl font-black text-[#0F172A]">৬১</span>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-red-600/70">
                      <AlertTriangle className="w-4 h-4" />
                      রিচ ক্রমাগত কমছিল
                    </div>
                  </div>

                  {/* Arrow Icon (Mobile: Down, Desktop: Right) */}
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center z-10 border border-gray-50 -my-6 md:my-0 md:-mx-8">
                    <ArrowRight className="w-6 h-6 text-[#FFB800] rotate-90 md:rotate-0" />
                  </div>

                  {/* After Card */}
                  <div className="w-full bg-[#F5FFF9] rounded-3xl p-6 md:p-8 border border-emerald-100/50 shadow-sm transition-transform hover:scale-[1.02]">
                    <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-6 opacity-70">After (১৪ দিন পর)</div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-gray-500">হেলথ স্কোর</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-black text-[#0F172A]">৮৫</span>
                        <span className="text-emerald-500 font-black text-lg">↑২৪</span>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-emerald-600/70">
                      <TrendingUp className="w-4 h-4" />
                      রিচ উল্লেখযোগ্যভাবে বেড়েছে (অর্গানিক)
                    </div>
                  </div>
                </div>
                
                {/* Real-world disclaimer */}
                <p className="mt-8 text-center md:text-left text-[11px] text-[#94A3B8] font-bold uppercase tracking-widest opacity-80">
                  ফলাফল প্রত্যেকের ক্ষেত্রে ভিন্ন হতে পারে।
                </p>


              </div>

            </div>

            {/* Right Column: Realistic Post Preview */}
            <div className="lg:col-span-5 relative group">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFB800]/10 to-transparent blur-3xl -z-10 rounded-full scale-110 opacity-50 transition-opacity group-hover:opacity-100" />
              
              <div className="bg-white rounded-[2.5rem] p-3 shadow-2xl shadow-black/5 border border-gray-100 max-w-sm mx-auto transform rotate-1 transition-transform group-hover:rotate-0 duration-500">
                <div className="bg-[#0F172A] rounded-[2rem] p-6 text-white min-h-[380px] flex flex-col">
                  {/* Post Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden border border-white/10">
                      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="User Profile" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Dhaka Fashion Hub</div>
                      <div className="text-[10px] text-gray-500 font-medium">Sponsored • 14 days ago</div>
                    </div>
                  </div>

                  {/* Post Content Skeleton */}
                  <div className="space-y-3 flex-1">
                    <div className="h-3 bg-white/10 rounded-full w-4/5" />
                    <div className="h-3 bg-white/10 rounded-full w-2/3" />
                    
                    <div className="mt-6 aspect-square bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/5 flex items-center justify-center text-white/20">
                      <CheckCircle2 className="w-16 h-16" />
                    </div>
                  </div>

                  {/* Post Stats */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    <span>12k Likes</span>
                    <span>430 Comments</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
