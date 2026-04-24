import { UploadCloud, BrainCircuit, ListChecks } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: UploadCloud,
      title: '১. আপলোড',
      desc: 'স্ক্রিনশট বা PDF আপলোড করুন। আমরা কখনো আপনার পেজে লগইন করি না।',
    },
    {
      icon: BrainCircuit,
      title: '২. AI অ্যানালাইসিস',
      desc: 'বাংলাদেশি পেজের রিয়েল ডেটা দিয়ে ট্রেইনড AI আপনার পেজ বিশ্লেষণ করে।',
    },
    {
      icon: ListChecks,
      title: '৩. অ্যাকশন প্ল্যান',
      desc: 'কী করবেন, কখন করবেন — ৭ দিনের স্পষ্ট প্ল্যান পাবেন।',
    }
  ];

  return (
    <div id="how" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-[#FFB800]/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="text-center mb-16 md:mb-20 relative z-10">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-yellow-100 bg-yellow-50 text-[#FFB800] font-bold tracking-wider text-xs uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse"></span>
          ৩০ সেকেন্ডের ম্যাজিক
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] mb-4 sm:mb-6">
          মাত্র তিন ধাপে<br />
          <span className="text-[#64748B]">পূর্ণ স্বাস্থ্য রিপোর্ট</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-yellow-50 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500">
              <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFB800]" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-3 sm:mb-4">{step.title}</div>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed font-medium">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

