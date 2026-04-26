import { motion } from 'framer-motion'

const marqueeItems = [
  "১২০+ পেজ অ্যানালাইজড",
  "৪.৮ ইউজার রেটিং (১২০+ রিভিউ)",
  "✍️ ভাইরাল কন্টেন্ট আইডিয়া",
  "🛡️ স্প্যামি শব্দ ডিটেকশন",
  "📊 গ্রোথ স্কোর জানুন",
  "🚀 রিচ ড্রপ ডিটেক্ট করুন",
  "🧠 AI ইনসাইট পান",
  "🔍 কম্পিটিটর অ্যানালাইসিস",
  "⏰ বেস্ট পোস্টিং টাইম",
  "📈 অ্যাকশন প্ল্যান পান"
];

export default function TrustBar() {
  return (
    <div className="relative border-y border-gray-100 bg-[#FDFDFD] py-6 md:py-12 overflow-hidden">
      {/* Scrolling Marquee Section */}
      <div className="relative py-1">
        {/* Gradient overlays for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-64 bg-gradient-to-r from-[#FDFDFD] via-[#FDFDFD]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-64 bg-gradient-to-l from-[#FDFDFD] via-[#FDFDFD]/80 to-transparent z-10 pointer-events-none" />
        
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex whitespace-nowrap gap-3 md:gap-6 py-4 px-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-2.5 px-5 py-3 md:px-10 md:py-5 rounded-xl md:rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:border-[#FF5E00]/30 hover:shadow-[0_8px_30px_rgb(255,94,0,0.08)] hover:-translate-y-0.5 md:hover:-translate-y-1 transition-all duration-300 cursor-default group ${
                  item.includes('১২০+') || item.includes('৪.৮') ? 'border-[#FF5E00]/20' : ''
                }`}
              >
                <span className={`text-[15px] md:text-xl font-bold group-hover:text-[#0F172A] ${
                  item.includes('১২০+') || item.includes('৪.৮') ? 'text-[#FF5E00]' : 'text-[#334155]'
                }`}>
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>

  );
}
