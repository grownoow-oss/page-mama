export default function TrustBar() {
  return (
    <div className="relative border-y border-gray-100 bg-[#FDFDFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-8 text-center divide-gray-100/50 md:divide-x">
          <div className="px-6 hover:translate-y-[-4px] transition-all duration-500">
            <div className="flex justify-center items-baseline gap-1 mb-3">
              <div id="counter1" className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter">2847</div>
              <span className="text-[#FFB800] text-2xl font-black">+</span>
            </div>
            <div className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em]">পেজ অ্যানালাইজড</div>
          </div>
          
          <div className="px-6 hover:translate-y-[-4px] transition-all duration-500 border-l border-gray-100/50 md:border-none">
            <div className="flex justify-center items-baseline gap-1 mb-3">
              <div id="counter2" className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter">31</div>
              <span className="text-[#FFB800] text-2xl font-black">%</span>
            </div>
            <div className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em]">গড় রিচ বৃদ্ধি</div>
          </div>
          
          <div className="px-6 hover:translate-y-[-4px] transition-all duration-500">
            <div className="flex justify-center items-center gap-1 mb-4">
              <div id="counter3" className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter">4.9</div>
              <div className="flex flex-col items-start leading-none ml-2">
                <div className="flex text-[#FFB800] text-xs">★★★★★</div>
                <div className="text-[10px] font-bold text-[#94A3B8] mt-1">REVIEWS</div>
              </div>
            </div>
            <div className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em]">ইউজার রেটিং</div>
          </div>
          
          <div className="px-6 hover:translate-y-[-4px] transition-all duration-500 border-l border-gray-100/50 md:border-none">
            <div className="flex justify-center items-baseline gap-1 mb-3">
              <div id="counter4" className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter">184</div>
              <span className="text-[#FFB800] text-2xl font-black">+</span>
            </div>
            <div className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em]">বাংলাদেশি পেজ</div>
          </div>
        </div>
      </div>
    </div>
  );
}

