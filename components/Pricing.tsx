import { Check, Sparkles, Zap, Rocket, Search } from 'lucide-react';
import { useState } from 'react';
import CheckoutModal from './CheckoutModal';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (plan: any) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const plans = [
    {
      name: 'Quick Check',
      nameBn: 'কুইক চেক',
      price: '৯৯',
      period: 'একবার',
      desc: 'জানুন কেন আপনার পোস্ট মরে যাচ্ছে',
      icon: Search,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-500',
      features: [
        'থ্রি জোন বিশ্লেষণ (লাল, ধূসর, সবুজ)',
        'টপ ৩টা সমস্যা চিহ্নিত হবে',
        '৩টি কন্টেন্ট আইডিয়া পাবেন',
        '১টি পেজ, ১ বার রিপোর্ট, ৩০ দিন দেখতে পারবেন'
      ],
      cta: 'শুরু করুন',
      popular: false,
      demoLink: '/sample-report?plan=99'
    },
    {
      name: 'Smart Growth',
      nameBn: 'স্মার্ট গ্রোথ',
      price: '২৯৯',
      period: 'একবার',
      desc: '৭ দিনের নির্দিষ্ট প্ল্যান পান আপনার পেজের জন্য',
      icon: Zap,
      iconBg: 'bg-orange-100',
      iconColor: 'text-[#FF5E00]',
      features: [
        'পূর্ণ থ্রি জোন বিশ্লেষণ (লাল, ধূসর, সবুজ)',
        'কোন পোস্টে রিচ মরছে তা চিহ্নিত হবে',
        '৭ দিনের নির্দিষ্ট অ্যাকশন প্ল্যান',
        'কখন পোস্ট করলে বেশি দেখা যাবে',
        '২টি রিলস/ক্যারোজেল আইডিয়া',
        '১টি পেজ, ১ বার রিপোর্ট, ৩০ দিন দেখতে পারবেন'
      ],
      cta: 'স্মার্ট গ্রোথ শুরু করুন',
      popular: true,
      demoLink: '/sample-report?plan=299'
    },
    {
      name: 'Pro',
      nameBn: 'প্রো',
      price: '৫৯৯',
      period: 'মাসিক',
      desc: 'প্রতি সপ্তাহে আপনার পেজ monitor হবে',
      icon: Rocket,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
      features: [
        'Smart Growth-এর সবকিছু',
        'আপনার প্রতিদ্বন্দ্বীরা কী করছে, তা জানতে পারবেন',
        'মাসে একবার পেজ মনিটর করা হবে',
        'মাসে ১টি ১০ মিনিট ভিডিও কল',
        'পরের ১৫ দিন কী পোস্ট করবেন — পুরো লিস্ট পাবেন'
      ],
      cta: 'প্রিমিয়াম গ্রোথ নিন',
      popular: false,
      demoLink: '/sample-report?plan=599'
    }
  ];

  return (
    <div id="pricing" className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF5E00]/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF5E00]/10 text-[#FF5E00] font-bold rounded-full text-xs tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Pricing Plans
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tight mb-6 leading-tight">
            আপনার পেজের জন্য <br className="hidden sm:block" /> সেরা প্ল্যানটি বেছে নিন
          </h2>
          <p className="text-[#64748B] text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            কোনো লুকুচুরি নেই। বাস্তবসম্মত লক্ষ্য এবং দীর্ঘস্থায়ী উন্নতির জন্য আমাদের রেডিমেড প্ল্যান।
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative bg-white rounded-[40px] p-8 sm:p-10 border transition-all duration-500 flex flex-col ${
                plan.popular 
                ? 'border-[#FF5E00] shadow-2xl shadow-[#FF5E00]/10 lg:scale-105 z-10' 
                : 'border-gray-100 shadow-sm hover:shadow-xl hover:shadow-black/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FF5E00] text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-[#FF5E00]/30 whitespace-nowrap">
                  সবচেয়ে জনপ্রিয়
                </div>
              )}
              
              <div className="flex items-center gap-5 mb-8">
                <div className={`w-14 h-14 rounded-2xl ${plan.iconBg} flex items-center justify-center`}>
                  <plan.icon className={`w-7 h-7 ${plan.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-black text-2xl text-[#0F172A] leading-tight">{plan.nameBn}</h3>
                  <p className="text-sm text-[#64748B] font-medium">{plan.desc}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-[#0F172A] tracking-tighter">{plan.price}</span>
                  <span className="text-xl text-[#0F172A] font-bold">টাকা</span>
                  <span className="text-[#64748B] font-bold ml-1">/{plan.period}</span>
                </div>
              </div>
              
              <div className="text-[10px] font-black text-[#94A3B8] tracking-widest uppercase mb-6">
                আপনার যা পাবেন
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className={`mt-1 w-5 h-5 rounded-full ${plan.popular ? 'bg-[#FF5E00]/10 text-[#FF5E00]' : 'bg-emerald-50 text-emerald-500'} flex items-center justify-center shrink-0`}>
                      <Check className="w-3 h-3 stroke-[3px]" /> 
                    </div>
                    <span className="text-[#334155] font-bold text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-4">
                <button 
                  onClick={() => handleOpenModal({
                    name: plan.nameBn,
                    price: plan.price,
                    period: plan.period,
                    features: plan.features,
                    popular: plan.popular
                  })}
                  className={`w-full py-5 font-black rounded-[24px] transition-all duration-300 active:scale-[0.98] ${
                    plan.popular 
                    ? 'bg-[#FF5E00] text-white shadow-xl shadow-[#FF5E00]/20 hover:bg-[#E65500] hover:shadow-[#FF5E00]/30' 
                    : 'bg-white text-[#0F172A] border-2 border-gray-100 hover:border-[#FF5E00]/30 hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                </button>
                <a 
                  href={plan.demoLink} 
                  className={`block text-center text-sm font-black transition-colors ${
                    plan.popular ? 'text-[#FF5E00] hover:text-[#E65500]' : 'text-gray-400 hover:text-[#0F172A]'
                  }`}
                >
                  নমুনা রিপোর্ট দেখুন →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 space-y-4">
          <p className="text-[#94A3B8] font-bold text-sm uppercase tracking-widest">
            ১০০% সিকিউর পেমেন্ট • বিকাশ / নগদ / রকেট
          </p>
          <p className="text-gray-400 text-xs italic font-bold">
            রেজাল্ট আপনার পেজের ক্যাটাগরি এবং কনটেন্ট কোয়ালিটির ওপর নির্ভর করবে।
          </p>
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
