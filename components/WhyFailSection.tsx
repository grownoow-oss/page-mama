import { motion } from 'framer-motion';
import { TrendingDown, Users, Zap, Search, Layers } from 'lucide-react';

export default function WhyFailSection() {
  const stats = [
    {
      icon: Search,
      label: 'অ্যালগরিদম আপডেট',
      title: 'এখন ফেসবুক একটি ডিসকভারি ইঞ্জিন',
      desc: 'ফেসবুক এখন ফলোয়ারের চেয়ে নতুন মানুষের কাছে কনটেন্ট পৌঁছানোকে বেশি গুরুত্ব দিচ্ছে। রিলস আর শেয়ারযোগ্য পোস্ট না থাকলে আপনি অদৃশ্য।',
      color: 'bg-orange-50',
      iconColor: 'text-orange-500'
    },
    {
      icon: Zap,
      label: 'অর্গানিক রিচ',
      title: 'গড় অর্গানিক রিচ এখন মাত্র ১.৬৫%',
      desc: 'গড় অর্গানিক রিচ মারাত্মক কমেছে। শুধু পোস্ট করলেই হবে না, অ্যালগরিদমের ভ্যালু রুল মানতে হবে — কমেন্ট, সেভ এবং শেয়ার।',
      color: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      icon: Layers,
      label: 'সফলতার সূত্র',
      title: 'রিলস + গ্রুপ + ভ্যালু কনটেন্ট',
      desc: '২০২৪-এর পর শুধু পেজ-অনলি পোস্টিং কাজ করে না। এখন ভ্যালু কনটেন্ট এবং ভিডিওর সঠিক মিক্স প্রয়োজন।',
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-500'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF5E00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-black leading-[1.1] mb-8 text-gray-900">
                কেন ২০২৬-এ <br />
                <span className="text-[#FF5E00]">বেশিরভাগ পেজ ফেল</span> করে?
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 text-lg font-medium leading-relaxed italic">
                  "২০২৪-এর পর অ্যালগরিদম বদলেছে — আগে যা কাজ করত, এখন সেটাই রিচ কমায়।"
                </p>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#FF5E00]/10 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-[#FF5E00]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">গড় অর্গানিক রিচ</div>
                    <div className="text-2xl font-black text-gray-900">~১.৬৫%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white hover:shadow-xl hover:shadow-orange-500/5 border border-gray-100 p-6 sm:p-8 rounded-[32px] transition-all duration-300 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shrink-0 border border-transparent group-hover:border-orange-100 transition-colors`}>
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-[#FF5E00] tracking-widest uppercase mb-2">{item.label}</div>
                    <h3 className="text-xl sm:text-2xl font-black mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
