import Head from 'next/head';
import { useRouter } from 'next/router';
import { AlertTriangle, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import DemoPlanSelector from '../components/DemoPlanSelector';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

export default function QuickCheckDemo() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>কুইক চেক রিপোর্ট — নমুনা | Page Mama</title>
      </Head>
      <div className="bg-[#FFFAF5] min-h-screen text-[#0F172A] font-sans pb-20 pt-32 sm:pt-40">
        <Navbar />

        {/* Plan badge sub-bar */}
        <div className="sticky top-[100px] sm:top-[120px] z-40 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 h-12 flex items-center gap-3">
            <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
              <Zap className="w-3 h-3" /> Quick Check
            </span>
            <span className="text-xs font-bold text-gray-400">এটি একটি বাস্তব উদাহরণ</span>
          </div>
        </div>

        <DemoPlanSelector />

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
              <div className="text-[80px] sm:text-[100px] font-black leading-none tracking-tighter text-[#0F172A]">৭৯</div>
              <div className="absolute -right-12 top-4 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-lg">
                +5
              </div>
            </div>
            
            <div className="text-sm font-bold text-gray-400 tracking-wide uppercase mb-4">হেলথ স্কোর</div>
            
            <div className="max-w-xs mx-auto">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-gray-500">স্ট্যাটাস</span>
                <span className="text-amber-600">স্বাস্থ্য: মোটামুটি</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-[79%] rounded-full" />
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
                  <div className="font-bold text-[#0F172A]">"ডিসকাউন্ট" শব্দের অতিরিক্ত ব্যবহার</div>
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
                  <div className="font-bold text-[#0F172A]">ভিডিও কনটেন্টের অভাব</div>
                  <div className="text-sm text-orange-600 font-medium mt-1">অর্গানিক গ্রোথ বাধাগ্রস্ত</div>
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
                  <tr className="border-b border-gray-50">
                    <td className="py-4 text-[#0F172A] font-bold">অফার</td>
                    <td className="py-4 text-gray-500">৭ বার</td>
                    <td className="py-4 text-right text-orange-500">-৯%</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-[#0F172A] font-bold">ফ্রি ডেলিভারি</td>
                    <td className="py-4 text-gray-500">৫ বার</td>
                    <td className="py-4 text-right text-orange-500">-৬%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. ৭ দিনের অ্যাকশন প্ল্যান */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#FFB800]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/5 rounded-bl-full pointer-events-none" />
            
            <h2 className="text-xl font-black mb-6">৭ দিনের অ্যাকশন প্ল্যান</h2>
            <div className="space-y-4">
              {[
                { title: '"ডিসকাউন্ট" শব্দ ৭ দিনের জন্য এড়ান', reason: 'অ্যালগরিদম স্প্যাম ফিল্টার থেকে বাঁচতে' },
                { title: 'পোস্ট করুন শুধু রাত ৮:১৫ - ৯:৩০', reason: 'আপনার অডিয়েন্স এই সময়ে সবচেয়ে বেশি অ্যাক্টিভ' },
                { title: 'প্রতি পোস্টে অন্তত ১টা ভিডিও যোগ করুন', reason: 'ভিডিওতে রিচ ৬৮% বেশি' },
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

          {/* Bottom CTA */}
          <div className="pt-8 text-center">
            <button onClick={() => router.push('/#pricing')} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFB800] hover:bg-[#D4A809] text-[#0F172A] rounded-2xl text-lg font-black transition-all shadow-lg hover:shadow-xl w-full sm:w-auto active:scale-[0.98]">
              স্মার্ট গ্রোথে আপগ্রেড করুন (২৯৯ টাকা)
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="text-sm text-gray-500 font-bold mt-4">
              আরও ডিটেইলস অ্যানালাইসিস এবং ইনসাইট পেতে
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
