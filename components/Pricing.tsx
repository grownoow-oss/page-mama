import { Check } from 'lucide-react';
import { useState } from 'react';
import CheckoutModal from './CheckoutModal';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (plan: any) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <div id="pricing" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-[#FFB800]/10 text-[#FFB800] font-bold rounded-full text-xs tracking-wider uppercase mb-6">
            Pricing Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            আপনার দরকার অনুযায়ী বেছে নিন
          </h2>
          <p className="text-[#64748B] text-lg">
            সার্থক মূল্যে শুরু করুন, আপনার প্রয়োজন অনুযায়ী আপগ্রেড করুন
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {/* Quick Check */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-2xl">
                🔍
              </div>
              <div>
                <h3 className="font-extrabold text-2xl text-[#0F172A]">কুইক চেক</h3>
                <p className="text-sm text-[#64748B] mt-1">নতুন পেজ বা টেস্টিং এর জন্য আদর্শ</p>
              </div>
            </div>
            
            <div className="mb-8">
              <span className="text-6xl font-extrabold text-[#0F172A]">৯৯</span>
              <span className="text-lg text-[#64748B] font-medium ml-1">/একবার</span>
            </div>
            
            <div className="text-xs font-bold text-[#94A3B8] tracking-wider uppercase mb-6">
              What's included
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 
                <span className="text-[#334155] font-medium">স্প্যামি শব্দ চিহ্নিতকরণ</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 
                <span className="text-[#334155] font-medium">Reach সমস্যা বিশ্লেষণ</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 
                <span className="text-[#334155] font-medium">বেসিক রিপোর্ট</span>
              </li>
            </ul>
            
            <button 
              onClick={() => handleOpenModal({
                name: 'কুইক চেক',
                price: '৯৯',
                period: 'একবার',
                features: ['স্প্যামি শব্দ চিহ্নিতকরণ', 'Reach সমস্যা বিশ্লেষণ', 'বেসিক রিপোর্ট'],
                popular: false
              })}
              className="w-full py-3.5 bg-white text-[#0F172A] font-bold rounded-2xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors mb-3"
            >
              শুরু করুন
            </button>
            <a href="/quick-check-demo" className="block text-center text-sm font-bold text-[#FFB800] hover:text-[#D4A809] transition-colors">
              নমুনা রিপোর্ট দেখুন
            </a>
          </div>

          
          {/* Smart Growth (Popular) */}
          <div className="relative bg-white rounded-3xl p-8 border-2 border-[#FFB800] shadow-xl shadow-[#FFB800]/5 scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFB800] text-[#0F172A] text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-2xl">
                ⚡
              </div>
              <div>
                <h3 className="font-extrabold text-2xl text-[#0F172A]">স্মার্ট গ্রোথ</h3>
                <p className="text-sm text-[#64748B] mt-1">সবচেয়ে জনপ্রিয় — সর্বাধিক ব্যবহৃত</p>
              </div>
            </div>
            
            <div className="mb-8">
              <span className="text-6xl font-extrabold text-[#0F172A]">২৯৯</span>
              <span className="text-lg text-[#64748B] font-medium ml-1">/একবার</span>
            </div>
            
            <div className="text-xs font-bold text-[#94A3B8] tracking-wider uppercase mb-6">
              What's included
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 
                <span className="text-[#334155] font-medium">স্প্যামি শব্দ + Reach বিশ্লেষণ</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 
                <span className="text-[#334155] font-medium">কনটেন্ট পারফরম্যান্স ইনসাইট</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 
                <span className="text-[#334155] font-medium">পোস্টিং স্ট্র্যাটেজি + টাইমিং</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 
                <span className="text-[#334155] font-medium">সাপ্তাহিক অ্যাকশন প্ল্যান</span>
              </li>
            </ul>
            
            <button 
              onClick={() => handleOpenModal({
                name: 'স্মার্ট গ্রোথ',
                price: '২৯৯',
                period: 'একবার',
                features: ['স্প্যামি শব্দ + Reach বিশ্লেষণ', 'কনটেন্ট পারফরম্যান্স ইনসাইট', 'পোস্টিং স্ট্র্যাটেজি + টাইমিং', 'সাপ্তাহিক অ্যাকশন প্ল্যান'],
                popular: true
              })}
              className="w-full py-3.5 bg-[#FFB800] hover:bg-[#FF7324] text-[#0F172A] font-bold rounded-2xl transition-colors shadow-lg shadow-[#FFB800]/20 mb-3"
            >
              স্মার্ট গ্রোথ শুরু করুন
            </button>
            <a href="/smart-growth-demo" className="block text-center text-sm font-bold text-[#64748B] hover:text-[#0F172A] transition-colors">
              নমুনা রিপোর্ট দেখুন
            </a>
          </div>
          
          {/* Pro */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-2xl">
                🚀
              </div>
              <div>
                <h3 className="font-extrabold text-2xl text-[#0F172A]">প্রো</h3>
                <p className="text-sm text-[#64748B] mt-1">সিরিয়াস গ্রোথ চাইলে</p>
              </div>
            </div>
            
            <div className="mb-8">
              <span className="text-6xl font-extrabold text-[#0F172A]">৫৯৯</span>
              <span className="text-lg text-[#64748B] font-medium ml-1">/মাস</span>
            </div>
            
            <div className="text-xs font-bold text-[#94A3B8] tracking-wider uppercase mb-6">
              What's included
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 
                <span className="text-[#334155] font-medium">স্মার্ট গ্রোথের সব সুবিধা</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 
                <span className="text-[#334155] font-medium">৩টি কম্পিটিটর অ্যানালাইসিস</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 
                <span className="text-[#334155] font-medium">WhatsApp রিয়েল-টাইম সাপোর্ট</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 
                <span className="text-[#334155] font-medium">সাপ্তাহিক PDF রিপোর্ট</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 
                <span className="text-[#334155] font-medium">প্রায়োরিটি সাপোর্ট</span>
              </li>
            </ul>
            
            <button 
              onClick={() => handleOpenModal({
                name: 'প্রো',
                price: '৫৯৯',
                period: 'মাস',
                features: ['স্মার্ট গ্রোথের সব সুবিধা', '৩টি কম্পিটিটর অ্যানালাইসিস', 'WhatsApp রিয়েল-টাইম সাপোর্ট', 'সাপ্তাহিক PDF রিপোর্ট', 'প্রায়োরিটি সাপোর্ট'],
                popular: false
              })}
              className="w-full py-3.5 bg-white text-[#0F172A] font-bold rounded-2xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors mb-3"
            >
              প্রিমিয়াম নিন
            </button>
            <a href="/pro-demo" className="block text-center text-sm font-bold text-[#FFB800] hover:text-[#D4A809] transition-colors">
              নমুনা রিপোর্ট দেখুন
            </a>
          </div>
        </div>
        
        <div className="text-center mt-12 text-[#94A3B8] font-medium text-sm">
          ১০০% সিকিউর পেমেন্ট • যেকোনো সময় ক্যান্সেল করুন
        </div>
      </div>
      
      <CheckoutModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
      />
    </div>
  );
}
