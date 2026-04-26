import Head from 'next/head';
import { useRouter } from 'next/router';
import { AlertTriangle, TrendingUp, BarChart2, CheckCircle, Video, Image as ImageIcon, Type, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

export default function SampleReport() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>নমুনা রিপোর্ট — বাস্তব উদাহরণ | Page Mama</title>
      </Head>
      <div className="bg-[#FFFAF5] min-h-screen text-[#0F172A] font-sans pb-20 pt-24 sm:pt-32">
        <Navbar />

        {/* Report badge sub-bar */}
        <div className="sticky top-[76px] z-40 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 h-12 flex items-center justify-between">
            <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              নমুনা রিপোর্ট
            </span>
            <span className="text-xs font-bold text-gray-400 hidden sm:inline-block">এটি একটি বাস্তব উদাহরণ</span>
          </div>
        </div>

        <main className="max-w-3xl mx-auto px-4 pt-8 sm:pt-12 space-y-6 sm:space-y-8">
          
          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFB800] to-[#FF8A3D]" />
            <h1 className="text-2xl sm:text-3xl font-black mb-1">ঢাকা ফ্যাশন হাব</h1>
            <div className="flex items-center justify-center gap-4 text-sm font-bold text-gray-500 mb-8">
              <span>৬৮,৪২০ ফলোয়ার্স</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>২৪ এপ্রিল ২০২৬</span>
            </div>

            <div className="inline-block relative mb-4">
              <div className="text-[80px] sm:text-[100px] font-black leading-none tracking-tighter text-[#0F172A]">৮৭</div>
              <div className="absolute -right-12 top-4 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-lg">
                +12
              </div>
            </div>
            
            <div className="text-sm font-bold text-gray-400 tracking-wide uppercase mb-4">হেলথ স্কোর</div>
            
            <div className="max-w-xs mx-auto">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-gray-500">স্ট্যাটাস</span>
                <span className="text-emerald-600">স্বাস্থ্য: ভালো</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[87%] rounded-full" />
              </div>
            </div>
          </div>

          {/* 1. মূল সমস্যা */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-black">মূল সমস্যা</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-red-50/50 rounded-2xl border border-red-100">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0F172A]">"ডিসকাউন্ট" শব্দ ১২ বার ব্যবহার হয়েছে</div>
                  <div className="text-sm text-red-600 font-medium mt-1">রিচ কমেছে: -১৮%</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-red-50/50 rounded-2xl border border-red-100">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0F172A]">ভুল পোস্টিং টাইম (সকাল ১০টা)</div>
                  <div className="text-sm text-red-600 font-medium mt-1">রিচ কমেছে: -৩৪%</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-orange-50/50 rounded-2xl border border-orange-100">
                <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0F172A]">অতিরিক্ত টেক্সট-অনলি পোস্ট</div>
                  <div className="text-sm text-orange-600 font-medium mt-1">এঙ্গেজমেন্ট কম</div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. স্প্যামি শব্দ সমূহ */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-black mb-6">স্প্যামি শব্দ সমূহ</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-sm text-gray-500">
                    <th className="pb-3 font-bold">শব্দ</th>
                    <th className="pb-3 font-bold">ব্যবহার</th>
                    <th className="pb-3 font-bold text-right">ইমপ্যাক্ট</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  <tr className="border-b border-gray-50">
                    <td className="py-4 text-[#0F172A] font-bold">ডিসকাউন্ট</td>
                    <td className="py-4 text-gray-500">১২ বার</td>
                    <td className="py-4 text-right text-red-500">-১৮%</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="py-4 text-[#0F172A] font-bold">সেল</td>
                    <td className="py-4 text-gray-500">৮ বার</td>
                    <td className="py-4 text-right text-red-500">-১২%</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-[#0F172A] font-bold">অফার</td>
                    <td className="py-4 text-gray-500">৭ বার</td>
                    <td className="py-4 text-right text-orange-500">-৯%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. রিচ অ্যানালাইসিস */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-black">রিচ অ্যানালাইসিস</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="text-sm font-bold text-gray-500 mb-4">গত ৭ দিনের রিচ ট্রেন্ড</div>
                {/* Fake Line Chart */}
                <div className="h-24 flex items-end gap-2">
                  <div className="w-full bg-[#FFB800]/20 rounded-t-sm h-[40%]" />
                  <div className="w-full bg-[#FFB800]/40 rounded-t-sm h-[30%]" />
                  <div className="w-full bg-[#FFB800]/60 rounded-t-sm h-[50%]" />
                  <div className="w-full bg-[#FFB800]/80 rounded-t-sm h-[70%]" />
                  <div className="w-full bg-[#FFB800] rounded-t-sm h-[100%]" />
                </div>
              </div>
              <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100">
                <div className="text-sm font-bold text-gray-500 mb-4">সেরা পোস্টিং টাইম</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span>রাত ৮:১৫</span>
                    <span className="text-emerald-600">+৪৫% রিচ</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span>দুপুর ২:৩০</span>
                    <span className="text-emerald-600">+২৮% রিচ</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span>সকাল ১১:০০</span>
                    <span className="text-emerald-600">+১৫% রিচ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. কনটেন্ট পারফরম্যান্স */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center">
                <BarChart2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-black">কনটেন্ট পারফরম্যান্স</h2>
            </div>
            
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-center text-sm font-bold mb-2">
                  <div className="flex items-center gap-2"><Video className="w-4 h-4 text-gray-400"/> ভিডিও পোস্ট</div>
                  <span>৬৮% রিচ</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[68%] rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center text-sm font-bold mb-2">
                  <div className="flex items-center gap-2"><ImageIcon className="w-4 h-4 text-gray-400"/> ইমেজ পোস্ট</div>
                  <span>২৪% রিচ</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 w-[24%] rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center text-sm font-bold mb-2">
                  <div className="flex items-center gap-2"><Type className="w-4 h-4 text-gray-400"/> টেক্সট পোস্ট</div>
                  <span>৮% রিচ</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-400 w-[8%] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* 5. ৭ দিনের অ্যাকশন প্ল্যান */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#FFB800]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/5 rounded-bl-full pointer-events-none" />
            
            <h2 className="text-xl font-black mb-6">৭ দিনের অ্যাকশন প্ল্যান</h2>
            <div className="space-y-4">
              {[
                { title: '"ডিসকাউন্ট" শব্দ ৭ দিনের জন্য এড়ান', reason: 'অ্যালগরিদম স্প্যাম ফিল্টার থেকে বাঁচতে' },
                { title: 'পোস্ট করুন শুধু রাত ৮:১৫ - ৯:৩০', reason: 'আপনার অডিয়েন্স এই সময়ে সবচেয়ে বেশি অ্যাক্টিভ' },
                { title: 'প্রতি পোস্টে অন্তত ১টা ভিডিও যোগ করুন', reason: 'ভিডিওতে রিচ ৬৮% বেশি' },
                { title: 'কমেন্টের উত্তর ১ ঘণ্টার মধ্যে দিন', reason: 'পেজের রেসপন্স রেট বাড়াতে' },
                { title: 'সপ্তাহে ৩টা কনটেস্ট/গিফট পোস্ট করুন', reason: 'অর্গানিক শেয়ার ও এঙ্গেজমেন্ট বাড়াতে' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#0F172A]">{item.title}</div>
                    <div className="text-xs text-gray-500 font-medium mt-1">কেন করবেন: {item.reason}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. প্রত্যাশিত ফলাফল */}
          <div className="bg-[#0F172A] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFB800]/10 rounded-full blur-2xl pointer-events-none" />
            
            <h2 className="text-xl font-black mb-2">প্রত্যাশিত ফলাফল</h2>
            <p className="text-sm text-gray-400 font-bold mb-6">যদি ৭ দিনের প্ল্যান ফলো করেন:</p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 text-center">
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Health</div>
                <div className="text-xl sm:text-2xl font-black text-white">৮৭ → ৯৪</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 text-center">
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Reach</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400">+৩৮%*</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 text-center">
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Engagement</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400">+২৯%*</div>
              </div>
            </div>
            <div className="mt-4 text-center text-[10px] text-gray-500">*(বাস্তব ইউজারদের গড় ফলাফল)</div>
          </div>

          {/* Bottom CTA */}
          <div className="pt-8 text-center">
            <button onClick={() => router.push('/#pricing')} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFB800] hover:bg-[#D4A809] text-[#0F172A] rounded-2xl text-lg font-black transition-all shadow-lg hover:shadow-xl w-full sm:w-auto active:scale-[0.98]">
              স্মার্ট গ্রোথে আপগ্রেড করুন (২৯৯ টাকা)
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="text-sm text-gray-500 font-bold mt-4">
              ১০০% সিকিউর পেমেন্ট • কোনো কার্ড লাগবে না
            </div>
          </div>
          
        </main>
        
        <footer className="mt-16 text-center text-xs text-gray-400 font-medium px-4">
          এই রিপোর্টটি আসল ইউজারের ডেটা থেকে তৈরি করা হয়েছে (নাম পরিবর্তন করা হয়েছে)
        </footer>
      </div>
    </>
  );
}
