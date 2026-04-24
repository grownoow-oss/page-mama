import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function SocialProof() {
  const reviews = [
    {
      name: "রাহাত হোসেন",
      role: "ঢাকা ফ্যাশন • ৬৮k ফলোয়ার্স",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      text: "প্রথমবার অ্যানালাইসিস করে ৩টা শব্দ এড়ানোর পর ১১ দিনে উল্লেখযোগ্যভাবে রিচ বেড়েছে। এখন প্রতি সপ্তাহে চেক করি।"
    },
    {
      name: "তানিয়া ইসলাম",
      role: "নিউজ পেজ • ১.২ লাখ",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      text: "আমার পেজের রিচ হঠাৎ অনেক কমে গিয়েছিল। Page Mama বলে দিল — আমি অতিরিক্ত হ্যাশট্যাগ ব্যবহার করছিলাম। এখন স্বাভাবিক হয়েছে।"
    },
    {
      name: "সজল আহমেদ",
      role: "টেক রিভিউ • ৪৩k",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      text: "২৯৯ টাকায় যা পেয়েছি, তা ৫০০০ টাকার অ্যাডভাইজারের চেয়েও ভালো। সাজেশনগুলো অসাধারণ স্পেসিফিক।"
    }
  ];

  return (
    <div className="relative py-20 md:py-24 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">বাংলাদেশি পেজ অ্যাডমিনরা কী বলছেন</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-1 text-[#FF9D00]">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="text-[#64748B] text-sm font-bold sm:ml-2">৪.৯৬/৫ রেটিং (১৮৪+ পেজ)</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-[#FAFAFA] p-8 rounded-3xl border border-gray-100 hover:-translate-y-1 transition-all duration-300 relative group">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-black/[0.03] group-hover:text-[#FFB800]/10 transition-colors duration-500" />
              
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="relative">
                  <img src={review.img} className="w-14 h-14 rounded-full border-2 border-white shadow-sm" alt={review.name} />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#FFB800] rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-[#0F172A] text-lg">{review.name}</div>
                  <div className="text-[10px] font-bold text-[#FFB800] tracking-widest uppercase">{review.role}</div>
                </div>
              </div>
              <p className="text-[#475569] leading-relaxed text-base sm:text-lg font-medium italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

