import { motion } from 'framer-motion';

export default function OverviewTab() {
  const insights = [
    { title: "Reach Drop-এর মূল কারণ", value: "Short Videos-এর অভাব", color: "text-red-600" },
    { title: "সবচেয়ে বড় শক্তি", value: "কমেন্ট এনগেজমেন্ট ৪.২%", color: "text-green-600" },
    { title: "সবচেয়ে বড় সুযোগ", value: "Reels/TikTok বাড়ালে +৩৫% Reach", color: "text-[#FFCE0B]" },
  ];

  return (
    <div className="space-y-10">
      {/* Executive Summary */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-50 p-10 rounded-3xl"
      >
        <h3 className="font-semibold text-xl mb-4">সারাংশ</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          আপনার পেজ ভালো কনটেন্ট তৈরি করছে, কিন্তু অ্যালগরিদমের সাথে তাল মিলিয়ে চলতে পারছে না। 
          বর্তমানে প্রতি সপ্তাহে মাত্র ৮টি পোস্ট করছেন। একই নিশে সফল পেজগুলো করছে ১৮–২২টি।
        </p>
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-100 text-[#FFCE0B] rounded-full text-sm font-medium">
          প্রধান সমস্যা: Reels/TikTok-এর অভাব + পোস্টিং অসামঞ্জস্যতা
        </div>
      </motion.div>

      {/* Key Insights Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-lg transition"
          >
            <div className="text-sm text-gray-500 mb-2">{insight.title}</div>
            <div className={`text-3xl font-semibold ${insight.color}`}>{insight.value}</div>
          </motion.div>
        ))}
      </div>

      {/* 7-Day Action Plan */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">পরবর্তী ৭ দিনের অ্যাকশন প্ল্যান</h3>
        
        <div className="space-y-4">
          {[
            { priority: "High", text: "প্রতি সপ্তাহে ৪টি Reels/TikTok পোস্ট করুন", impact: "+৩৫% Reach" },
            { priority: "High", text: "সব পোস্ট ৭:৪৫ PM – ৮:৪৫ PM এর মধ্যে করুন", impact: "+২২% Reach" },
            { priority: "Medium", text: "Content Mix: 60% Short Video | 25% Carousel | 15% Image", impact: "Long-term growth" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl border"
            >
              <div className={`px-3 py-1 text-xs font-bold rounded ${item.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
                {item.priority}
              </div>
              <div className="flex-1">
                <div className="font-medium">{item.text}</div>
                <div className="text-sm text-green-600 mt-1">{item.impact}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
