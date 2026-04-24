import { ArrowRight, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CaseStudy() {
  return (
    <div className="py-20 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-emerald-50 text-emerald-600 font-bold rounded-full text-xs tracking-wider uppercase mb-6 border border-emerald-100">
            বাস্তব ফলাফল
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tight mb-4">
            একজন ইউজারের গল্প
          </h2>
          <p className="text-[#64748B] text-lg font-medium">
            রাহাত ভাই, ঢাকা ফ্যাশন হাব (৬৮k followers)
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-[#FAFAFA] rounded-[40px] border border-gray-100 p-6 md:p-12 shadow-sm relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB800]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Stats */}
            <div className="space-y-8 relative z-10">
              <h3 className="text-2xl font-black text-[#0F172A] leading-tight">
                "১৪ দিন পর রিচ ৩৮% বেড়েছে, শুধুমাত্র ৩টি ছোট পরিবর্তনের কারণে।"
              </h3>
              
              <div className="space-y-6">
                {/* Before */}
                <div className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-400" />
                  <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">আগে (সমস্যা)</div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 font-medium text-sm">হেলথ স্কোর</span>
                    <span className="text-2xl font-black text-[#0F172A]">৬১</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    রিচ ও এঙ্গেজমেন্ট ক্রমাগত কমছিল
                  </div>
                </div>

                <div className="flex justify-center -my-3 relative z-20">
                  <div className="w-8 h-8 bg-[#FFB800] rounded-full flex items-center justify-center shadow-lg border-4 border-[#FAFAFA] text-white">
                    <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" />
                  </div>
                </div>

                {/* After */}
                <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400" />
                  <div className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2">১৪ দিন পর (ফলাফল)</div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 font-medium text-sm">হেলথ স্কোর</span>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold text-sm">↑ ২৮</span>
                      <span className="text-2xl font-black text-[#0F172A]">৮৯</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span className="font-bold text-emerald-600">রিচ +৩৮% বৃদ্ধি</span> (অর্গানিক)
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Mockups */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/50 to-[#FFB800]/10 rounded-[32px] transform rotate-3" />
              
              <div className="bg-white rounded-[32px] p-2 shadow-xl border border-gray-100 relative z-10 transform -rotate-1">
                <div className="bg-[#0F172A] rounded-[24px] p-6 text-white min-h-[300px] flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Rahat" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">ঢাকা ফ্যাশন হাব</div>
                      <div className="text-[10px] text-gray-400">Sponsored • 14 days ago</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-800 rounded w-3/4" />
                    <div className="h-4 bg-gray-800 rounded w-1/2" />
                    <div className="h-32 bg-gray-800 rounded-xl w-full mt-4 flex items-center justify-center text-gray-600">
                      <CheckCircle2 className="w-12 h-12 opacity-50" />
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-[11px] text-gray-400 font-bold mt-4 pt-4 border-t border-gray-800">
                    <span>12k Likes</span>
                    <span>430 Comments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
