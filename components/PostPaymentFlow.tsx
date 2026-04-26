import { CreditCard, Link2, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PostPaymentFlow() {
  return (
    <div className="py-20 bg-[#FAFAFA] border-t border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tight mb-4">
            পেমেন্টের পর কী হবে?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

          {/* Step 1 */}
          <div className="relative z-10">
            <div className="bg-white rounded-[32px] p-8 text-center shadow-lg shadow-black/[0.03] border border-gray-100 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-100 relative">
                <CreditCard className="w-8 h-8" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FFB800] text-white rounded-full flex items-center justify-center font-black text-sm border-2 border-white shadow-sm">
                  ১
                </div>
              </div>
              <h3 className="text-xl font-black text-[#0F172A] mb-2">পেমেন্ট করুন</h3>
              <p className="text-[#64748B] text-sm font-medium">৯৯/২৯৯/৫৯৯ টাকা দিয়ে আপনার প্ল্যানটি কিনুন</p>
            </div>
          </div>

          {/* Step 2 - Highlighted */}
          <div className="relative z-10 md:scale-110">
            <div className="bg-white rounded-[32px] p-8 text-center shadow-[0_20px_50px_rgba(255,184,0,0.12)] border-2 border-[#FFB800]/30 hover:-translate-y-2 transition-all duration-300 relative">
              <div className="w-16 h-16 bg-yellow-50 text-[#FFB800] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-yellow-100 relative">
                <Link2 className="w-8 h-8" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#0F172A] text-white rounded-full flex items-center justify-center font-black text-sm border-2 border-white shadow-sm">
                  ২
                </div>
              </div>
              <h3 className="text-xl font-black text-[#0F172A] mb-2">পেজ লিংক দিন</h3>
              <p className="text-[#64748B] text-sm font-black leading-relaxed">
                শুধু আপনার পেজের লিংক দিন<br />
                <span className="text-[10px] text-gray-400 font-medium">(facebook.com/yourpage)</span>
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative z-10">
            <div className="bg-white rounded-[32px] p-8 text-center shadow-lg shadow-black/[0.03] border border-gray-100 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald-100 relative">
                <FileText className="w-8 h-8" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FFB800] text-white rounded-full flex items-center justify-center font-black text-sm border-2 border-white shadow-sm">
                  ৩
                </div>
              </div>
              <h3 className="text-xl font-black text-[#0F172A] mb-2">রিপোর্ট পেয়ে যান</h3>
              <p className="text-[#64748B] text-sm font-medium">৩০ সেকেন্ডের মধ্যে পূর্ণাঙ্গ রিপোর্ট রেডি</p>
            </div>
          </div>
        </div>


        <div className="text-center mt-12">
          <p className="text-[#0F172A] font-bold text-lg bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full inline-block border border-emerald-100">
            কোনো ঝামেলা নেই। ৩০ সেকেন্ডের মধ্যে রিপোর্ট রেডি।
          </p>
        </div>
      </div>
    </div>
  );
}
