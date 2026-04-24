'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

export default function PremiumTrustBar() {
  const stats = [
    { 
      number: 1247, 
      suffix: "+", 
      label: "পোস্ট অ্যানালাইজড",
      color: "text-gray-900"
    },
    { 
      number: 27, 
      suffix: "%", 
      label: "গড় রিচ বৃদ্ধি",
      color: "text-[#FFB800]"
    },
    { 
      number: 4.8, 
      suffix: "/5", 
      label: "ইউজার রেটিং",
      color: "text-gray-900"
    },
    { 
      number: 180, 
      suffix: "+", 
      label: "দিন অ্যাক্টিভ",
      color: "text-gray-900"
    },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-xl border-y border-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="flex items-baseline gap-1">
                <span className={`text-5xl font-semibold tracking-tighter ${stat.color}`}>
                  <AnimatedCounter end={stat.number} />
                </span>
                <span className="text-4xl font-medium text-[#FFB800] group-hover:text-[#E5BA0A] transition-colors">
                  {stat.suffix}
                </span>
              </div>
              
              <div className="text-sm text-gray-500 mt-2 font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
