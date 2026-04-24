import { motion } from 'framer-motion';

const ideas = [
  { title: "Reel/TikTok: Behind the Scenes", desc: "আপনার টিম কীভাবে কাজ করে — ১৫ সেকেন্ডের fast-paced video", reach: "+42%" },
  { title: "Carousel: Styling Tips", desc: "৫টি সহজ টিপস — কীভাবে শাড়ি পরবেন অফিসে", reach: "+31%" },
  { title: "Trend Video", desc: "বর্তমান ট্রেন্ডিং অডিও ব্যবহার করে নতুন কালেকশন প্রোমো", reach: "+58%" },
  { title: "Customer Story", desc: "একজন কাস্টমারের রিয়েল রিভিউ (Testimonial style)", reach: "+27%" },
  { title: "Educational Short", desc: "শাড়ির কাপড় চিনুন — ৩০ সেকেন্ডে", reach: "+39%" },
];

export default function ContentIdeasTab() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-8">আপনার পেজের জন্য ৫টি হাই-পারফর্মিং কনটেন্ট আইডিয়া</h3>
      
      <div className="grid gap-6">
        {ideas.map((idea, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="bg-white border border-gray-100 p-8 rounded-3xl flex gap-8 items-start hover:border-[#FFB800]/40 transition group"
          >
            <div className="text-4xl">💡</div>
            <div className="flex-1">
              <div className="font-semibold text-xl mb-2 group-hover:text-[#FFB800] transition">{idea.title}</div>
              <p className="text-gray-600">{idea.desc}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{idea.reach}</div>
              <div className="text-xs text-gray-500">Expected Reach Boost</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
