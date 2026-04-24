import Head from 'next/head';
import { useRouter } from 'next/router';
import { Crown, Download, ShieldAlert, BarChart2, CheckCircle, TrendingUp, Users, AlertTriangle, MessageCircle, ArrowRight, Zap, Target, Star, MapPin, Clock, Video, ImageIcon, Type } from 'lucide-react';
import DemoPlanSelector from '../components/DemoPlanSelector';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

export default function ProDemo() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>প্রো রিপোর্ট — নমুনা | Page Mama</title>
      </Head>
      <div className="bg-[#0F172A] min-h-screen text-gray-200 font-sans pb-20">
        
        <Navbar />

        {/* Pro plan badge sub-bar */}
        <div className="sticky top-[76px] z-40 bg-[#1E293B] border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 h-12 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/20 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                <Crown className="w-3 h-3" /> PRO
              </span>
              <span className="hidden md:block text-sm font-bold text-gray-400">প্রো রিপোর্ট — ঢাকা ফ্যাশন হাব</span>
            </div>
            <button className="hidden sm:flex items-center gap-2 bg-[#1E293B] hover:bg-gray-800 border border-gray-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
              <Download className="w-4 h-4" /> PDF
            </button>
          </div>
        </div>

        <div className="bg-[#1E293B] border-b border-gray-800">
          <DemoPlanSelector dark={true} />
        </div>

        <main className="max-w-3xl mx-auto px-4 pt-8 sm:pt-12 space-y-6 sm:space-y-8">
          
          {/* Top Section — Health Score */}
          <div className="bg-[#1E293B] rounded-3xl p-6 sm:p-8 border border-gray-800 text-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#FFB800]" />
            
            <div className="mb-4 inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <CheckCircle className="w-3.5 h-3.5" />
              আপনার পেজের স্বাস্থ্য: চমৎকার
            </div>
            
            <div className="relative inline-flex items-center justify-center w-48 h-48 mb-6 mt-4">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                <circle className="text-gray-800 stroke-current" strokeWidth="4" cx="50" cy="50" r="46" fill="transparent"></circle>
                <circle className="text-[#FFB800] stroke-current" strokeWidth="6" strokeLinecap="round" cx="50" cy="50" r="46" fill="transparent" strokeDasharray="289.026" strokeDashoffset="26.01"></circle>
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-6xl font-black text-white">৯১</span>
                <span className="text-emerald-400 font-bold text-sm mt-1 flex items-center gap-1">+১৯ this month</span>
              </div>
            </div>
            
            <h1 className="text-xl font-bold text-gray-400">ওভারঅল পেজ হেলথ স্কোর</h1>
          </div>

          {/* 1. প্রতিদ্বন্দ্বী তুলনা */}
          <div className="bg-[#1E293B] rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-sm">
            <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3">
              <Target className="w-5 h-5 text-[#FFB800]" />
              প্রতিদ্বন্দ্বী তুলনা
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#0F172A] rounded-2xl p-4 border border-gray-800 text-center">
                <div className="text-xs text-gray-500 mb-2 font-bold">Style Zone</div>
                <div className="text-3xl font-black text-gray-400">৭৮</div>
              </div>
              
              <div className="bg-[#0F172A] rounded-2xl p-4 border border-[#FFB800]/50 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFB800] text-[#0F172A] text-[10px] font-black px-2 py-0.5 rounded-full uppercase whitespace-nowrap">
                  এগিয়ে আছেন
                </div>
                <div className="text-xs text-[#FFB800] mb-2 font-bold mt-1">আপনার পেজ</div>
                <div className="text-3xl font-black text-white">৯১</div>
              </div>
              
              <div className="bg-[#0F172A] rounded-2xl p-4 border border-gray-800 text-center">
                <div className="text-xs text-gray-500 mb-2 font-bold">Deshi Wear</div>
                <div className="text-3xl font-black text-gray-400">৮৪</div>
              </div>
            </div>
          </div>

          {/* 2. স্প্যামি শব্দ + Reach Impact */}
          <div className="bg-[#1E293B] rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-sm">
            <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              স্প্যামি শব্দ ও রিচ ইমপ্যাক্ট
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-800 text-sm text-gray-500">
                    <th className="pb-3 font-bold">স্প্যাম শব্দ</th>
                    <th className="pb-3 font-bold">ব্যবহার</th>
                    <th className="pb-3 font-bold text-right">ইমপ্যাক্ট</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  <tr className="border-b border-gray-800/50">
                    <td className="py-4 text-white font-bold">ডিসকাউন্ট</td>
                    <td className="py-4 text-gray-400">১৮ বার</td>
                    <td className="py-4 text-red-400 text-right">-১২% রিচ</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-4 text-white font-bold">অফার</td>
                    <td className="py-4 text-gray-400">১৪ বার</td>
                    <td className="py-4 text-red-400 text-right">-৮% রিচ</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-4 text-white font-bold">ফ্রি</td>
                    <td className="py-4 text-gray-400">১২ বার</td>
                    <td className="py-4 text-orange-400 text-right">-৫% রিচ</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-4 text-white font-bold">অর্ডার করতে ইনবক্স করুন</td>
                    <td className="py-4 text-gray-400">৯ বার</td>
                    <td className="py-4 text-yellow-500 text-right">-৩% রিচ</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-4 text-white font-bold">শেয়ার করুন</td>
                    <td className="py-4 text-gray-400">৭ বার</td>
                    <td className="py-4 text-yellow-500 text-right">-২% রিচ</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-white font-bold">দাম জানতে ইনবক্স</td>
                    <td className="py-4 text-gray-400">৫ বার</td>
                    <td className="py-4 text-gray-400 text-right">-১% রিচ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. রিচ অ্যানালাইসিস */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#1E293B] rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-sm">
              <h2 className="text-lg font-black text-white mb-6 flex items-center gap-3">
                <BarChart2 className="w-5 h-5 text-[#FFB800]" />
                রিচ ট্রেন্ড (৭ দিন)
              </h2>
              <div className="h-32 relative flex items-end gap-2">
                {[40, 55, 35, 70, 90, 60, 85].map((val, i) => (
                  <div key={i} className="w-full bg-gray-800 rounded-t-sm relative" style={{height: `${val}%`}}>
                    {val === 90 && <div className="absolute -top-1 w-full h-1 bg-[#FFB800]"></div>}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[10px] text-gray-500 font-bold uppercase">
                <span>রবি</span><span>সোম</span><span>মঙ্গল</span><span>বুধ</span><span>বৃহ</span><span>শুক্র</span><span>শনি</span>
              </div>
            </div>

            <div className="bg-[#1E293B] rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-sm">
              <h2 className="text-lg font-black text-white mb-6 flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#FFB800]" />
                বেস্ট পোস্টিং টাইম
              </h2>
              <div className="flex flex-col justify-center space-y-3">
                <div className="bg-[#0F172A] p-3 rounded-xl border border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-bold text-white text-sm">রাত ৮:১৫ - ৯:০০</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">+১৫%</span>
                </div>
                <div className="bg-[#0F172A] p-3 rounded-xl border border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-bold text-white text-sm">দুপুর ২:৩০ - ৩:১৫</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">+১০%</span>
                </div>
                <div className="bg-[#0F172A] p-3 rounded-xl border border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-500" />
                    <span className="font-bold text-white text-sm">সকাল ১১:০০ - ১১:৪৫</span>
                  </div>
                  <span className="text-xs font-bold text-gray-400">+5%</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. কনটেন্ট পারফরম্যান্স */}
          <div className="bg-[#1E293B] rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-sm">
            <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3">
              <Zap className="w-5 h-5 text-[#FFB800]" /> কনটেন্ট পারফরম্যান্স
            </h2>
             
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#0F172A] rounded-xl p-4 border border-gray-800 flex flex-col items-center justify-center text-center">
                <Video className="w-5 h-5 text-gray-400 mb-2" />
                <div className="text-2xl font-black text-white mb-1">৬৮%</div>
                <div className="text-xs font-bold text-gray-500">ভিডিও</div>
              </div>
               
              <div className="bg-[#0F172A] rounded-xl p-4 border border-gray-800 flex flex-col items-center justify-center text-center">
                <ImageIcon className="w-5 h-5 text-gray-400 mb-2" />
                <div className="text-2xl font-black text-white mb-1">২৪%</div>
                <div className="text-xs font-bold text-gray-500">ইমেজ</div>
              </div>

              <div className="bg-[#0F172A] rounded-xl p-4 border border-gray-800 flex flex-col items-center justify-center text-center">
                <Type className="w-5 h-5 text-gray-400 mb-2" />
                <div className="text-2xl font-black text-white mb-1">৮%</div>
                <div className="text-xs font-bold text-gray-500">টেক্সট</div>
              </div>
            </div>
          </div>

          {/* 5. ৭ দিনের অ্যাকশন প্ল্যান */}
          <div className="bg-[#1E293B] rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-sm">
            <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3">
              <Target className="w-5 h-5 text-[#FFB800]" />
              ৭ দিনের অ্যাকশন প্ল্যান
            </h2>

            <div className="space-y-3 mb-6">
              {[
                { t: "কন্টেন্ট ফরম্যাট বদলান", d: "স্ট্যাটিক ইমেজের বদলে রিলস ফোকাস করুন।", p: "High" },
                { t: "স্প্যাম শব্দ রিমুভ করুন", d: "৭ দিন 'অফার' বা 'ডিসকাউন্ট' ব্যবহার করবেন না।", p: "High" },
                { t: "পোস্টিং শিডিউল", d: "রাত ৮:১৫ থেকে ৯:৩০ এর মধ্যে আপলোড করুন।", p: "High" },
                { t: "হুক অপটিমাইজেশন", d: "ভিডিওর প্রথম ৩ সেকেন্ডে আকর্ষণীয় টেক্সট ব্যবহার করুন।", p: "Medium" },
                { t: "অর্গানিক এনগেজমেন্ট", d: "পোস্ট করার প্রথম ১০ মিনিটে কমেন্টের রিপ্লাই দিন।", p: "Medium" },
                { t: "ক্যারোজেল পোস্ট", d: "ডিটেইলস এর জন্য ৪-৫ স্লাইডের ক্যারোজেল দিন।", p: "Medium" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-[#0F172A] rounded-xl border border-gray-800">
                  <CheckCircle className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold text-gray-200 text-sm">{item.t}</span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${item.p === 'High' ? 'bg-red-500/10 text-red-400' : 'bg-gray-800 text-gray-400'}`}>Priority: {item.p}</span>
                    </div>
                    <div className="text-xs text-gray-500">{item.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#FFB800]/5 border border-[#FFB800]/10 rounded-xl p-4">
              <h3 className="font-bold text-[#FFB800] text-sm mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" /> টিমের জন্য টাস্ক
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FFB800]/50 shrink-0 mt-0.5" />
                  <div className="text-xs text-gray-400"><span className="font-bold text-gray-300">রেসপন্স টাইম:</span> ম্যাসেজ আসার ৫ মিনিটের মধ্যে রিপ্লাই দেওয়ার চেষ্টা করুন।</div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FFB800]/50 shrink-0 mt-0.5" />
                  <div className="text-xs text-gray-400"><span className="font-bold text-gray-300">অটো-রিপ্লাই:</span> ফ্রেন্ডলি টোন ব্যবহার করে আপডেট করুন।</div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. প্রত্যাশিত ফলাফল (১৪ দিন পর) */}
          <div className="bg-[#1E293B] rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black mb-2 text-white">প্রত্যাশিত ফলাফল (১৪ দিন পর)</h2>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-[#0F172A] rounded-2xl p-4 text-center border border-gray-800">
                <div className="text-gray-500 text-xs font-bold uppercase mb-2">হেলথ স্কোর</div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xl font-black text-gray-600 line-through">৯১</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="text-3xl font-black text-white">৯৫</span>
                </div>
              </div>
              <div className="bg-[#0F172A] rounded-2xl p-4 text-center border border-gray-800">
                <div className="text-gray-500 text-xs font-bold uppercase mb-2">রিচ</div>
                <div className="text-3xl font-black text-white">+২৮%</div>
              </div>
              <div className="bg-[#0F172A] rounded-2xl p-4 text-center border border-gray-800">
                <div className="text-gray-500 text-xs font-bold uppercase mb-2">এনগেজমেন্ট</div>
                <div className="text-3xl font-black text-white">+২২%</div>
              </div>
            </div>

            <div className="text-center">
              <span className="text-xs text-gray-500 font-medium">
                বাস্তব ইউজারদের গড় ফলাফলের উপর ভিত্তি করে
              </span>
            </div>
          </div>

          {/* Extra Premium Features */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-[#1E293B] rounded-xl p-4 border border-gray-800 flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">প্রায়োরিটি সাপোর্ট</div>
                <div className="text-xs text-gray-500 mt-0.5">এক্সপার্ট টিমের সাথে আলোচনা</div>
              </div>
            </div>
            <div className="bg-[#1E293B] rounded-xl p-4 border border-gray-800 flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FFB800]/10 rounded-full flex items-center justify-center text-[#FFB800] shrink-0">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">কাস্টমাইজড রিপোর্ট</div>
                <div className="text-xs text-gray-500 mt-0.5">বিশেষভাবে তৈরি গাইডলাইন</div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="pt-6 pb-8 text-center">
            <button className="bg-[#FFB800] hover:bg-[#D4A809] text-[#0F172A] text-lg font-black px-8 py-4 rounded-2xl transition-colors shadow-lg w-full sm:w-auto active:scale-[0.98]">
              এখনই প্রো শুরু করুন — ৫৯৯ টাকায়
            </button>
            <div className="text-gray-500 text-xs font-medium flex items-center justify-center gap-1.5 mt-4">
              <ShieldAlert className="w-3 h-3 text-gray-400" /> ১৫ দিনের মানি-ব্যাক গ্যারান্টি
            </div>
          </div>

        </main>
      </div>
    </>
  );
}
