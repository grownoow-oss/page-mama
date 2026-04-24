import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { 
  RefreshCw, 
  Download, 
  ArrowUpRight, 
  Facebook, 
  Info, 
  Check,
  TrendingUp,
  Moon,
  Sun,
  Sunrise
} from 'lucide-react';
import Navbar from '../components/Navbar';

export default function DemoReport() {
  const router = useRouter();
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [actions, setActions] = useState([
    { id: 1, text: '“ডিসকাউন্ট” শব্দ ৭ দিনের জন্য একদম এড়ান', desc: 'এটি সবচেয়ে বড় সমস্যা', completed: false },
    { id: 2, text: 'পোস্ট করুন শুধু রাত ৮:১৫ - ৯:৩০', desc: 'আপনার অডিয়েন্সের সবচেয়ে অ্যাকটিভ টাইম', completed: false },
    { id: 3, text: 'প্রতি পোস্টে অন্তত ১টা ভিডিও যোগ করুন', desc: 'রিচ বাড়বে ৩৪%', completed: false },
    { id: 4, text: '“শুধু আজ” এর পরিবর্তে “সীমিত সময়” ব্যবহার করুন', desc: 'কম আক্রমণাত্মক', completed: false }
  ]);

  const handleRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      window.location.reload();
    }, 1400);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      alert("Demo PDF ডাউনলোড শুরু হয়েছে!\n(প্রোডাকশনে এখানে আসল PDF জেনারেট হবে)");
      setIsDownloading(false);
    }, 1600);
  };

  const toggleAction = (id: number) => {
    setActions(actions.map(action => 
      action.id === id ? { ...action, completed: !action.completed } : action
    ));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '?' && document.activeElement?.tagName === 'BODY') {
        e.preventDefault();
        handleRegenerate();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Head>
        <title>Demo Report • Page Mama</title>
      </Head>
      <div className="bg-[#F8FAFC] min-h-screen font-['Inter',_'Noto_Sans_Bengali',_sans-serif] text-[#111827]">
        
        <Navbar />

        {/* Demo top bar */}
        <div className="sticky top-[80px] z-40 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div className="bg-yellow-50 text-[#FFB800] text-[10px] sm:text-xs font-bold px-2 py-1 rounded-lg tracking-wider">DEMO REPORT</div>
            </div>
            <div className="flex items-center gap-x-2 sm:gap-x-4">
              <button 
                onClick={handleRegenerate}
                disabled={isRegenerating || isDownloading}
                className="hidden sm:flex items-center gap-x-2 px-4 py-2 text-sm font-bold border border-gray-200 hover:bg-gray-50 rounded-2xl transition-all disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isRegenerating ? 'animate-spin' : ''}`} />
                <span>{isRegenerating ? 'Regenerating...' : 'Regenerate'}</span>
              </button>
              <button 
                onClick={handleDownload}
                disabled={isRegenerating || isDownloading}
                className="flex items-center gap-x-2 px-4 sm:px-6 py-2 bg-[#FFB800] hover:bg-[#E5BA0A] text-[#0F172A] font-bold rounded-xl sm:rounded-2xl text-xs sm:text-sm transition-all disabled:opacity-50 shadow-md shadow-yellow-500/20"
              >
                <Download className={`w-4 h-4 ${isDownloading ? 'animate-pulse' : ''}`} />
                <span>{isDownloading ? 'Generating...' : 'Download PDF'}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-y-8 mb-10 md:mb-12">
            <div className="text-center md:text-left">
              <div className="text-xs sm:text-sm text-[#64748B] font-bold mb-2 uppercase tracking-widest">Demo Analysis • 22 April 2026</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">Dhaka Fashion Hub</h1>
              <div className="flex items-center justify-center md:justify-start gap-x-3 mt-4">
                <div className="flex items-center gap-x-1.5 text-sm font-bold text-[#475569]">
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                  <span>68,420 followers</span>
                </div>
                <div className="text-gray-300">•</div>
                <div className="text-sm text-emerald-600 font-bold">Last analyzed: 2 hours ago</div>
              </div>
            </div>
            
            {/* Health Score */}
            <div className="flex items-center justify-center gap-x-6 sm:gap-x-8">
              <div className="text-center">
                <div className="text-[10px] text-[#64748B] font-bold tracking-[0.2em] mb-2">HEALTH SCORE</div>
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[6px] border-yellow-50 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-[6px] border-[#FFB800] border-t-transparent -rotate-45"></div>
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-extrabold text-[#FFB800]">87</div>
                    <div className="text-[10px] text-[#64748B] font-bold">/ 100</div>
                  </div>
                </div>
              </div>
              
              <div className="text-sm">
                <div className="flex items-center gap-x-1.5 text-emerald-600 font-bold text-base">
                  <TrendingUp className="w-5 h-5" />
                  <span>+12 improvement</span>
                </div>
                <div className="text-xs text-[#64748B] mt-1 font-bold">Top 18% of similar pages</div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {[
              { label: 'Avg. Reach (7 days)', val: '4,872', change: '+29% improve', color: 'emerald' },
              { label: 'Engagement Rate', val: '6.8%', change: '+1.4% improve', color: 'emerald' },
              { label: 'Spammy Words', val: '7', change: 'High Risk', color: 'orange' },
              { label: 'Risk Level', val: 'Medium', change: 'Action needed', color: 'amber' }
            ].map((m, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="text-xs sm:text-sm text-[#64748B] font-bold mb-3 uppercase tracking-wider">{m.label}</div>
                <div className={`text-3xl sm:text-4xl font-extrabold text-[#0F172A] ${m.color === 'orange' ? 'text-yellow-500' : m.color === 'amber' ? 'text-amber-500' : ''}`}>{m.val}</div>
                <div className={`text-[11px] sm:text-xs font-bold mt-2 ${m.color === 'emerald' ? 'text-emerald-600' : 'text-yellow-600'}`}>{m.change}</div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 sm:gap-8">
              
              {/* Spammy Words */}
              <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">স্প্যামি শব্দ ডিটেকশন</h3>
                  <div className="inline-flex text-[10px] px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full font-bold tracking-widest self-start">7 WORDS FLAGGED</div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { word: 'ডিসকাউন্ট', count: 12, impact: '-18%' },
                    { word: 'লিমিটেড স্টক', count: 9, impact: '-12%' },
                    { word: 'অসাধারণ দাম', count: 7, impact: '-9%' },
                    { word: 'শুধু আজ', count: 5, impact: '-7%' }
                  ].map((s, i) => (
                    <div key={i} className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100/50 group hover:border-yellow-200 transition-colors">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-extrabold text-[#0F172A]">"{s.word}"</span>
                        <span className="text-[10px] font-bold text-[#64748B] uppercase">{s.count} বার</span>
                      </div>
                      <div className="text-[11px] font-bold text-yellow-600 uppercase tracking-tight">{s.impact} reach impact</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Reach Drop Analysis */}
              <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-8">রিচ কমার আসল কারণ</h3>
                
                <div className="space-y-8">
                  {[
                    { label: 'ভুল পোস্টিং টাইম', impact: 34 },
                    { label: 'স্প্যামি শব্দের অতিরিক্ত ব্যবহার', impact: 27 },
                    { label: 'কম ভিডিও কনটেন্ট', impact: 19 }
                  ].map((r, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm sm:text-base mb-3 font-bold text-[#475569]">
                        <span>{r.label}</span>
                        <span className="text-yellow-600">-{r.impact}%</span>
                      </div>
                      <div className="h-2.5 sm:h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full transition-all duration-1000" style={{ width: `${r.impact}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="lg:col-span-5 space-y-6 sm:gap-8">
              
              {/* Best Posting Times */}
              <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-2">সেরা পোস্টিং টাইম</h3>
                <p className="text-xs sm:text-sm text-[#64748B] font-bold mb-8 uppercase tracking-widest">আপনার অডিয়েন্সের অ্যাক্টিভিটি ভিত্তিক</p>
                
                <div className="space-y-4">
                  {[
                    { time: 'রাত ৮:১৫ - ৯:৩০', reach: '+41%', icon: Moon, color: 'indigo' },
                    { time: 'সকাল ১১:০০ - ১২:১৫', reach: '+29%', icon: Sun, color: 'orange' },
                    { time: 'বিকেল ৫:৪৫ - ৭:০০', reach: '+22%', icon: Sunrise, color: 'amber' }
                  ].map((t, i) => (
                    <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-gray-100 transition-all group">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                          <t.icon className={`w-5 h-5 text-${t.color}-500`} />
                        </div>
                        <span className="font-extrabold text-sm sm:text-base text-[#0F172A]">{t.time}</span>
                      </div>
                      <div className="text-emerald-600 font-extrabold text-xs sm:text-sm">{t.reach} reach</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Projected Improvement */}
              <div className="bg-[#0F172A] rounded-[2rem] p-8 sm:p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/20 blur-3xl -translate-y-16 translate-x-16 group-hover:bg-[#FFB800]/30 transition-colors"></div>
                <div className="relative z-10">
                  <div className="text-xs sm:text-sm font-bold text-amber-500 mb-6 uppercase tracking-[0.2em]">প্রজেক্টেড রেজাল্ট (৭ দিনে)</div>
                  <div className="text-5xl sm:text-6xl font-extrabold tracking-tighter mb-2">+2,140</div>
                  <div className="text-lg sm:text-xl font-bold text-gray-400">অতিরিক্ত রিচ</div>
                  
                  <div className="mt-10 p-4 bg-white/5 rounded-2xl border border-white/10 flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
                      যদি আপনি আমাদের দেওয়া সাজেশনগুলো সঠিকভাবে ফলো করেন, তবে এই বৃদ্ধি নিশ্চিত।
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 7-Day Action Plan */}
            <div className="lg:col-span-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-2">৭ দিনের অ্যাকশন প্ল্যান</h3>
                  <p className="text-[#64748B] font-bold text-sm">রিচ বাড়ানোর জন্য নিচের কাজগুলো সম্পন্ন করুন</p>
                </div>
                <div className="inline-flex text-[10px] px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full font-bold tracking-widest self-start">READY TO IMPLEMENT</div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                {actions.map(action => (
                  <div 
                    key={action.id}
                    onClick={() => toggleAction(action.id)}
                    className={`flex gap-4 sm:gap-6 p-6 sm:p-8 border-2 rounded-3xl cursor-pointer transition-all duration-300 ${action.completed ? 'border-gray-100 bg-gray-50' : 'border-gray-100 hover:border-[#FFB800]/30 hover:shadow-xl hover:shadow-black/5'}`}
                  >
                    <div className="shrink-0">
                      <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${action.completed ? 'bg-[#FFB800] border-[#FFB800] scale-110' : 'border-[#CBD5E1]'}`}>
                        {action.completed && <Check className="w-4 h-4 text-white" strokeWidth={4} />}
                      </div>
                    </div>
                    <div>
                      <div className={`font-extrabold text-lg sm:text-xl leading-tight mb-2 transition-all ${action.completed ? 'line-through text-[#94A3B8]' : 'text-[#0F172A]'}`}>{action.text}</div>
                      <div className={`text-sm sm:text-base font-medium ${action.completed ? 'text-[#CBD5E1]' : 'text-[#64748B]'}`}>{action.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="mt-20 text-center pb-12">
            <div className="inline-block bg-white border border-gray-100 p-8 sm:p-12 rounded-[3rem] shadow-2xl shadow-yellow-500/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#FFB800]"></div>
              <div className="font-bold text-[#94A3B8] mb-6 tracking-widest text-xs sm:text-sm uppercase">এটি শুধু একটি ডেমো রিপোর্ট</div>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-8 leading-tight">আপনার পেজের জন্য আসল<br className="sm:hidden" /> রিপোর্ট চান?</h4>
              <button 
                onClick={() => router.push('/')}
                className="w-full sm:w-auto px-10 sm:px-16 py-4 sm:py-5 bg-[#FFB800] hover:bg-[#D4A809] text-[#0F172A] font-extrabold rounded-2xl text-lg sm:text-xl transition-all shadow-xl shadow-yellow-500/20 active:scale-95 flex items-center justify-center gap-3"
              >
                <span>আসল রিপোর্ট নিন</span>
                <ArrowUpRight className="w-6 h-6" />
              </button>
              <p className="mt-6 text-sm text-[#64748B] font-bold">৯৯ টাকা থেকে শুরু • ফলাফল নিশ্চিত</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
