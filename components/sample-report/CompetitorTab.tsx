import { motion } from 'framer-motion';

const competitors = [
  { name: "Urban Deshi", posts: 8, reels: "12%", reach: "4.2k", engagement: "2.1%" },
  { name: "DeshiWear BD", posts: 19, reels: "61%", reach: "11.8k", engagement: "4.7%" },
  { name: "SareeHut", posts: 22, reels: "55%", reach: "9.4k", engagement: "3.9%" },
  { name: "FashionBD", posts: 15, reels: "48%", reach: "7.1k", engagement: "3.4%" },
];

export default function CompetitorTab() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-8">একই নিশের সফল পেজগুলোর সাথে তুলনা</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left text-sm text-gray-500">
              <th className="py-4">Page</th>
              <th className="py-4">Weekly Posts</th>
              <th className="py-4">Short Video %</th>
              <th className="py-4">Avg Reach/Post</th>
              <th className="py-4">Engagement</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((comp, i) => (
              <motion.tr 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={i === 0 ? "bg-yellow-50 font-semibold" : "border-b hover:bg-gray-50"}
              >
                <td className="py-5">{comp.name}</td>
                <td className="py-5">{comp.posts}</td>
                <td className="py-5">{comp.reels}</td>
                <td className="py-5">{comp.reach}</td>
                <td className="py-5">{comp.engagement}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-6 bg-green-50 rounded-2xl text-sm">
        <strong>Insight:</strong> আপনি Top ১৮% পেজের থেকে পিছিয়ে আছেন। শুধু Short Videos-এর অনুপাত ৬০% করলেই আপনি Top ৩৫%-এ চলে যাবেন।
      </div>
    </div>
  );
}
