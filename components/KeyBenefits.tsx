import { TrendingDown, ShieldAlert, Clock, CheckCircle2 } from 'lucide-react';

export default function KeyBenefits() {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'রিচ কমার আসল কারণ',
      desc: 'আপনার শেষ ১৫টা পোস্ট থেকে কোন ৩টা কারণে রিচ কমেছে।',
      color: 'bg-rose-50',
      iconColor: 'text-rose-500',
    },
    {
      icon: ShieldAlert,
      title: 'স্প্যামি শব্দ লিস্ট',
      desc: 'যে ৭টা শব্দ এখন আপনার পেজকে ক্ষতি করছে।',
      color: 'bg-amber-50',
      iconColor: 'text-amber-500',
    },
    {
      icon: Clock,
      title: 'সেরা পোস্টিং টাইম',
      desc: 'আপনার অডিয়েন্স যখন সবচেয়ে বেশি অ্যাকটিভ।',
      color: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
    {
      icon: CheckCircle2,
      title: '৭ দিনের অ্যাকশন প্ল্যান',
      desc: 'কী পোস্ট করবেন, কী এড়াবেন — রেডি টু ইউজ।',
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-500',
    }
  ];

  return (
    <div id="benefits" className="relative py-20 md:py-32 border-t border-gray-100 bg-[#FAFAFA]">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFCE0B]/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A]">
            ৩০ সেকেন্ডে <span className="text-[#FFCE0B]">যা পাবেন</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${item.iconColor}`} />
                </div>
                <div>
                  <div className="font-extrabold text-xl sm:text-2xl text-[#0F172A] mb-2 sm:mb-3">{item.title}</div>
                  <p className="text-[#64748B] leading-relaxed text-base sm:text-lg font-medium">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

