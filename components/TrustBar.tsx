export default function TrustBar() {
  return (
    <div className="relative border-y border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-4 text-center divide-gray-100 md:divide-x">
          <div className="px-4 hover:translate-y-[-2px] transition-transform duration-300">
            <div className="flex justify-center items-center gap-1 mb-2">
              <div id="counter1" className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tighter">2847</div>
              <span className="text-[#FFB800] text-3xl font-bold">+</span>
            </div>
            <div className="text-[10px] md:text-xs font-bold text-[#64748B] uppercase tracking-widest">পেজ অ্যানালাইজড</div>
          </div>
          
          <div className="px-4 hover:translate-y-[-2px] transition-transform duration-300 border-l border-gray-100 md:border-none">
            <div className="flex justify-center items-center gap-1 mb-2">
              <div id="counter2" className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tighter">31</div>
              <span className="text-[#FFB800] text-3xl font-bold">%</span>
            </div>
            <div className="text-[10px] md:text-xs font-bold text-[#64748B] uppercase tracking-widest">গড় রিচ বৃদ্ধি</div>
          </div>
          
          <div className="px-4 hover:translate-y-[-2px] transition-transform duration-300">
            <div className="flex justify-center items-center gap-1 mb-2">
              <div id="counter3" className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tighter">4.96</div>
            </div>
            <div className="flex justify-center text-[#FF9D00] text-sm md:text-base gap-1 mb-1">
              ★★★★★
            </div>
            <div className="text-[10px] md:text-xs font-bold text-[#64748B] uppercase tracking-widest">ইউজার রেটিং</div>
          </div>
          
          <div className="px-4 hover:translate-y-[-2px] transition-transform duration-300 border-l border-gray-100 md:border-none">
            <div className="flex justify-center items-center gap-1 mb-2">
              <div id="counter4" className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tighter">184</div>
              <span className="text-[#FFB800] text-3xl font-bold">+</span>
            </div>
            <div className="text-[10px] md:text-xs font-bold text-[#64748B] uppercase tracking-widest">বাংলাদেশি পেজ</div>
          </div>
        </div>
      </div>
    </div>
  );
}

