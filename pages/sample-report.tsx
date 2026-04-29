import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { 
  AlertTriangle, 
  CheckCircle, 
  BarChart2, 
  TrendingUp, 
  Calendar, 
  Users, 
  Video, 
  Clock, 
  Zap, 
  ShieldCheck, 
  MessageSquare, 
  ArrowRight,
  Sun,
  Moon,
  Info,
  ChevronRight,
  Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';

// --- Types ---
type Plan = 99 | 299 | 599;
type Theme = 'light' | 'dark';

export default function SampleReport() {
  const [activePlan, setActivePlan] = useState<Plan>(299);
  const [theme, setTheme] = useState<Theme>('light');
  const router = useRouter();

  // Handle plan change from query or default
  useEffect(() => {
    if (router.query.plan) {
      const plan = parseInt(router.query.plan as string);
      if (plan === 99 || plan === 299 || plan === 599) {
        setActivePlan(plan as Plan);
      }
    }
  }, [router.query.plan]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0F172A] text-white' : 'bg-[#F8FAFC] text-[#0F172A]'}`}>
      <Head>
        <title>নমুনা রিপোর্ট — পেজ মামা</title>
        <meta name="description" content="প্রতিটি প্ল্যানের নমুনা রিপোর্ট দেখুন এবং আপনার জন্য সঠিকটি বেছে নিন।" />
      </Head>

      <Navbar />

      <main className="pt-32 sm:pt-40 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header & Theme Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 text-center sm:text-left">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E00]/10 text-[#FF5E00] text-xs font-bold mb-3 uppercase tracking-wider"
              >
                <Zap size={14} />
                প্রিভিউ মোড
              </motion.div>
              <h1 className="text-3xl sm:text-4xl font-black mb-2">নমুনা রিপোর্ট</h1>
              <p className={`text-sm sm:text-base font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                আপনার জন্য কোন প্ল্যানটি সেরা, তা এখানে দেখে নিন।
              </p>
            </div>

            <button 
              onClick={toggleTheme}
              className={`p-3 rounded-2xl transition-all shadow-sm border ${
                theme === 'dark' 
                  ? 'bg-slate-800 border-slate-700 text-yellow-400' 
                  : 'bg-white border-slate-200 text-slate-600'
              }`}
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>

          {/* Tab System */}
          <div className={`p-1.5 rounded-2xl mb-12 flex flex-wrap gap-2 sticky top-[100px] sm:top-[120px] z-30 shadow-lg backdrop-blur-md ${
            theme === 'dark' ? 'bg-slate-900/80 border border-slate-800' : 'bg-white/80 border border-slate-100'
          }`}>
            {[
              { id: 99, name: '৯৯ টাকা', label: 'কুইক চেক', sub: 'মূল সমস্যা' },
              { id: 299, name: '২৯৯ টাকা', label: 'স্মার্ট গ্রোথ', sub: 'সবচেয়ে জনপ্রিয়', badge: 'Popular' },
              { id: 599, name: '৫৯৯ টাকা', label: 'প্রো', sub: 'প্রিমিয়াম' }
            ].map((plan) => (
              <button
                key={plan.id}
                onClick={() => setActivePlan(plan.id as Plan)}
                className={`flex-1 min-w-[100px] relative px-4 py-3 rounded-xl transition-all duration-300 text-center ${
                  activePlan === plan.id 
                    ? 'bg-[#FF5E00] text-white shadow-md' 
                    : theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-[#0F172A]'
                }`}
              >
                {plan.badge && activePlan !== plan.id && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">
                    সবচেয়ে জনপ্রিয়
                  </span>
                )}
                <div className={`text-xs font-black uppercase tracking-tighter mb-0.5 ${activePlan === plan.id ? 'opacity-90' : 'opacity-60'}`}>
                  {plan.name}
                </div>
                <div className="text-sm font-bold truncate">
                  {plan.label}
                </div>
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlan}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activePlan === 99 && <QuickCheckReport theme={theme} />}
              {activePlan === 299 && <SmartGrowthReport theme={theme} />}
              {activePlan === 599 && <ProReport theme={theme} />}
            </motion.div>
          </AnimatePresence>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <button 
              onClick={() => router.push('/#pricing')}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#FF5E00] hover:bg-[#E65500] text-white rounded-2xl text-xl font-black transition-all shadow-[0_10px_30px_-10px_rgba(255,94,0,0.5)] active:scale-[0.98] group"
            >
              এই প্ল্যানটি নিন — {activePlan} টাকা
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className={`mt-6 text-sm font-bold ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
              ১০০% সিকিউর পেমেন্ট • বিকাশ বা নগদে পেমেন্ট করুন
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}

// --- Sub-components for Reports ---

const ThreeZoneVisual = ({ theme }: { theme: Theme }) => (
  <div className="flex flex-col items-center gap-6 w-full max-w-sm">
    <div className="grid grid-cols-1 gap-4 w-full">
      <div className={`p-5 rounded-3xl border flex items-center justify-between ${theme === 'dark' ? 'bg-red-500/10 border-red-500/20' : 'bg-red-50 border-red-100'}`}>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
          <span className="font-bold text-sm">লাল জোন (রিস্ক)</span>
        </div>
        <span className="font-black text-red-600">৩টি সমস্যা</span>
      </div>
      <div className={`p-5 rounded-3xl border flex items-center justify-between ${theme === 'dark' ? 'bg-slate-500/10 border-slate-500/20' : 'bg-slate-50 border-slate-100'}`}>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-slate-400" />
          <span className="font-bold text-sm">ধূসর জোন (সুযোগ)</span>
        </div>
        <span className="font-black text-slate-600">২টি পয়েন্ট</span>
      </div>
      <div className={`p-5 rounded-3xl border flex items-center justify-between ${theme === 'dark' ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'}`}>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
          <span className="font-bold text-sm">সবুজ জোন (শক্তি)</span>
        </div>
        <span className="font-black text-emerald-600">১টি পয়েন্ট</span>
      </div>
    </div>
  </div>
);

const SectionHeading = ({ icon: Icon, title, theme }: { icon: any, title: string, theme: Theme }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className={`w-10 h-10 flex items-center justify-center rounded-xl ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-white text-[#0F172A] shadow-sm'}`}>
      <Icon size={20} />
    </div>
    <h3 className="text-xl font-black">{title}</h3>
  </div>
);

const Card = ({ children, theme, className = "" }: { children: React.ReactNode, theme: Theme, className?: string }) => (
  <div className={`rounded-3xl p-6 sm:p-8 border shadow-sm ${
    theme === 'dark' ? 'bg-slate-900 border-slate-800 shadow-none' : 'bg-white border-slate-100'
  } ${className}`}>
    {children}
  </div>
);

// --- 99 Plan ---
function QuickCheckReport({ theme }: { theme: Theme }) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black mb-1">কুইক চেক — নমুনা রিপোর্ট</h2>
        <p className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>জানুন কেন আপনার পোস্ট মরে যাচ্ছে</p>
        <p className="text-[10px] font-black text-[#FF5E00] mt-2 uppercase tracking-widest">১টি পেজ • ১ বার রিপোর্ট • ৩০ দিন অ্যাক্সেস</p>
      </div>

      <Card theme={theme} className="flex flex-col items-center py-12">
        <ThreeZoneVisual theme={theme} />
      </Card>

      <div className="grid sm:grid-cols-2 gap-6">
        <Card theme={theme}>
          <SectionHeading icon={AlertTriangle} title="টপ ৩ সমস্যা" theme={theme} />
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <p className="text-sm font-bold">স্প্যামি শব্দের অতিরিক্ত ব্যবহার (উদা: 'অফার', 'ডিসকাউন্ট')</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <p className="text-sm font-bold">ভুল পোস্টিং শিডিউল (সকাল ১০টায় রিচ সবচেয়ে কম)</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <p className="text-sm font-bold">ভিডিও কনটেন্টের অভাব (মাত্র ৫% ভিডিও)</p>
            </li>
          </ul>
        </Card>

        <Card theme={theme}>
          <SectionHeading icon={Zap} title="৩টি কনটেন্ট আইডিয়া" theme={theme} />
          <div className="space-y-3">
            {[
              "বিহাইন্ড দ্য সিন ভিডিও (১টি)",
              "কাস্টমার রিভিউ ইমেজ গ্যালারি",
              "১টি শিক্ষামূলক শর্ট ভিডিও (রিলস)"
            ].map((idea, i) => (
              <div key={i} className={`p-4 rounded-xl text-sm font-bold border ${theme === 'dark' ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                {idea}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// --- 299 Plan ---
function SmartGrowthReport({ theme }: { theme: Theme }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-block px-3 py-1 bg-indigo-500 text-white text-[10px] font-black rounded-full uppercase tracking-widest mb-3">সবচেয়ে জনপ্রিয়</div>
        <h2 className="text-2xl font-black mb-1">স্মার্ট গ্রোথ — নমুনা রিপোর্ট</h2>
        <p className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>৭ দিনের নির্দিষ্ট প্ল্যান পান আপনার পেজের জন্য</p>
        <p className="text-[10px] font-black text-[#FF5E00] mt-2 uppercase tracking-widest">১টি পেজ • ১ বার রিপোর্ট • ৩০ দিন অ্যাক্সেস</p>
      </div>

      <Card theme={theme} className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5E00]/5 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row items-center gap-10">
          <ThreeZoneVisual theme={theme} />
          <div className="flex-1 space-y-6 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-4 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
                <div className="text-xs font-black text-slate-500 uppercase mb-1">কখন পোস্ট করলে বেশি দেখা যাবে</div>
                <div className="text-lg font-black text-[#FF5E00]">রাত ৮:১৫</div>
              </div>
              <div className={`p-4 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
                <div className="text-xs font-black text-slate-500 uppercase mb-1">রিচ পটেনশিয়াল</div>
                <div className="text-lg font-black text-emerald-500">+৩৮%</div>
              </div>
            </div>
            
            <div className={`p-4 rounded-2xl border ${theme === 'dark' ? 'bg-red-500/10 border-red-500/20' : 'bg-red-50 border-red-100'}`}>
                <div className="text-xs font-black text-red-500 uppercase mb-1">রিচ মরছে এমন পোস্ট</div>
                <p className="text-sm font-bold italic">"ছবিসহ টেক্সট অনলি পোস্টগুলোতে এনগেজমেন্ট আশঙ্কাজনকভাবে কম।"</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card theme={theme}>
          <SectionHeading icon={CheckCircle} title="৭ দিনের অ্যাকশন প্ল্যান" theme={theme} />
          <div className="space-y-4">
            {[
              { day: 'Day 1', task: 'সব পোস্টে "ডিসকাউন্ট" শব্দ পরিহার করুন' },
              { day: 'Day 2', task: 'কমেন্টে প্রশ্নের উত্তর দিন ২ মিনিটের মধ্যে' },
              { day: 'Day 3', task: '১টি টিউটোরিয়াল ভিডিও (রিলস) পোস্ট করুন' },
              { day: 'Day 4', task: 'অডিয়েন্স পোল (Stories) চালু করুন' },
              { day: 'Day 5', task: 'ইউজার জেনারেটেড কনটেন্ট শেয়ার করুন' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-[10px] font-black uppercase ${theme === 'dark' ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
                  {item.day}
                </div>
                <div className="text-sm font-bold">{item.task}</div>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          <Card theme={theme} className="bg-gradient-to-br from-[#FF5E00] to-[#FF8A00] text-white border-none shadow-xl">
            <SectionHeading icon={Video} title="২টি রিলস আইডিয়া" theme={theme === 'dark' ? 'dark' : 'light'} />
            <div className="space-y-4">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                <div className="text-[10px] font-black uppercase mb-1 opacity-70">আইডিয়া ১: প্রডাক্ট হাউ-টু</div>
                <div className="text-sm font-bold mb-2">৫ সেকেন্ডে আপনার সার্ভিস যেভাবে কাজ করে</div>
              </div>
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                <div className="text-[10px] font-black uppercase mb-1 opacity-70">আইডিয়া ২: কাস্টমার সাকসেস</div>
                <div className="text-sm font-bold mb-2">একজন ইউজারের অবাক করা ফলাফল</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// --- 599 Plan ---
function ProReport({ theme }: { theme: Theme }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-block px-3 py-1 bg-[#FF5E00] text-white text-[10px] font-black rounded-full uppercase tracking-widest mb-3">প্রিমিয়াম প্ল্যান</div>
        <h2 className="text-2xl font-black mb-1">প্রো — নমুনা রিপোর্ট</h2>
        <p className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>প্রতি সপ্তাহে আপনার পেজ monitor হবে</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card theme={theme}>
            <SectionHeading icon={BarChart2} title="আপনার প্রতিদ্বন্দ্বীরা কী করছে" theme={theme} />
            <div className="overflow-x-auto -mx-6 sm:mx-0">
              <table className="w-full text-left min-w-[500px]">
                <thead>
                  <tr className={`border-b ${theme === 'dark' ? 'border-slate-800' : 'border-slate-100'}`}>
                    <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-500 tracking-widest">ম্যাট্রিক্স</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase text-[#FF5E00] tracking-widest">আপনার পেজ</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-500 tracking-widest">প্রতিদ্বন্দ্বী ১</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-500 tracking-widest">প্রতিদ্বন্দ্বী ২</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-bold">
                  <tr className={`border-b ${theme === 'dark' ? 'border-slate-800' : 'border-slate-100'}`}>
                    <td className="px-6 py-4">রিলস সংখ্যা (মাসিক)</td>
                    <td className="px-6 py-4 text-[#FF5E00]">৪টি</td>
                    <td className="px-6 py-4">১৮টি</td>
                    <td className="px-6 py-4">১২টি</td>
                  </tr>
                  <tr className={`border-b ${theme === 'dark' ? 'border-slate-800' : 'border-slate-100'}`}>
                    <td className="px-6 py-4">পোস্টিং ফ্রিকোয়েন্সি</td>
                    <td className="px-6 py-4 text-[#FF5E00]">২ দিন পর পর</td>
                    <td className="px-6 py-4">প্রতিদিন ৩টি</td>
                    <td className="px-6 py-4">প্রতিদিন ১টি</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">এনগেজমেন্ট রেট</td>
                    <td className="px-6 py-4 text-[#FF5E00]">১.২%</td>
                    <td className="px-6 py-4">৪.৮%</td>
                    <td className="px-6 py-4">৩.৫%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card theme={theme}>
            <SectionHeading icon={Calendar} title="পরের ১৫ দিন কী পোস্ট করবেন — পুরো লিস্ট" theme={theme} />
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[...Array(10)].map((_, i) => (
                <div key={i} className={`p-3 rounded-xl border text-center ${
                  i === 0 || i === 4 || i === 7 
                    ? 'bg-[#FF5E00]/10 border-[#FF5E00]/20' 
                    : theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'
                }`}>
                  <div className="text-[10px] font-black text-slate-500 uppercase mb-1">দিন {i+1}</div>
                  <div className={`text-[10px] font-bold ${i === 0 || i === 4 || i === 7 ? 'text-[#FF5E00]' : ''}`}>
                    {i === 0 || i === 4 || i === 7 ? 'ভিডিও পোস্ট' : 'ইমেজ/পোল'}
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center p-3 rounded-xl border border-dashed border-slate-300 text-[10px] font-black text-slate-400">
                +৫ দিন
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card theme={theme} className="bg-indigo-600 text-white border-none shadow-xl">
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Video size={32} />
              </div>
              <h4 className="text-lg font-black mb-2">১টি ১০ মিনিট ভিডিও কল</h4>
              <p className="text-xs font-medium opacity-80 mb-6">সরাসরি আমাদের এক্সপার্টের সাথে আপনার পেজ নিয়ে কথা বলুন।</p>
              <div className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase">মাসে একবার</div>
            </div>
          </Card>

          <Card theme={theme}>
            <SectionHeading icon={ShieldCheck} title="মাসিক ট্র্যাকিং" theme={theme} />
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                <p className="text-xs font-bold text-slate-500">প্রতি মাসে আপনার পেজ আবার অ্যানালাইসিস করা হবে।</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                <p className="text-xs font-bold text-slate-500">অ্যালগরিদমের কোনো আপডেট আসলে সাথে সাথে নোটিফিকেশন পাবেন।</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
