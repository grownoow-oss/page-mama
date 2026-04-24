import { useState } from 'react';
import { ChevronDown, ArrowRight, X, Mail, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const faqs = [
    {
      q: "আমার ফেসবুক বা টিকটক পাসওয়ার্ড কি দিতে হবে?",
      a: "না, একদম না। আমরা কখনো আপনার পেজে লগইন করি না। শুধুমাত্র পাবলিক ডেটা অথবা আপনার দেওয়া স্ক্রিনশট দেখে অ্যানালাইসিস করি।"
    },
    {
      q: "মাত্র ৯৯ টাকায় কীভাবে এত ভালো অ্যানালাইসিস পাওয়া যায়?",
      a: "আমাদের এআই মডেল খুবই অপটিমাইজড। তাই আমরা কম খরচে উচ্চমানের অ্যানালাইসিস দিতে পারি। এটি আমাদের মূল লক্ষ্য — ছোট-মাঝারি পেজ মালিকদের জন্য সহজলভ্য করা।"
    },
    {
      q: "আপনারা কি পেজের রিচ কমে যাওয়ার আসল কারণ খুঁজে বের করতে পারেন?",
      a: "হ্যাঁ। আমরা আপনার পেজের স্প্যামি শব্দ, পোস্টিং টাইম, কনটেন্ট কোয়ালিটি এবং অ্যালগরিদমের সম্ভাব্য সমস্যা বিশ্লেষণ করে সঠিক কারণ চিহ্নিত করি।"
    },
    {
      q: "আমার পেজের রিচ বাড়াতে আপনারা কীভাবে সাহায্য করবেন?",
      a: "আমরা শুধু সমস্যা চিহ্নিত করি না, বরং ৭ দিনের অ্যাকশন প্ল্যান দিয়ে দেই — কোন শব্দ এড়াবেন, কখন পোস্ট করবেন, কোন কনটেন্ট বেশি কাজ করবে — সব বিস্তারিত।"
    },
    {
      q: "আমি নতুন পেজ শুরু করেছি। এই সার্ভিস কি আমার জন্য লাগবে?",
      a: "হ্যাঁ, একদম লাগবে। নতুন পেজ থেকেই সঠিকভাবে শুরু করলে পরবর্তীতে বড় সমস্যায় পড়তে হয় না। অনেক নতুন পেজ মালিক এখনই আমাদের সার্ভিস নিচ্ছেন।"
    },
    {
      q: "পেমেন্ট কীভাবে করব?",
      a: "শুধু বিকাশ এবং নগদ-এর মাধ্যমে পেমেন্ট করতে পারবেন। কোনো ব্যাংক কার্ড বা ক্রেডিট কার্ড লাগবে না।"
    },
    {
      q: "ফলাফল দেখতে কতদিন সময় লাগবে?",
      a: "অ্যানালাইসিস রিপোর্ট ৩০ সেকেন্ডের মধ্যে পেয়ে যাবেন। এবং অ্যাকশন প্ল্যান ফলো করলে সাধারণত ৭-১৪ দিনের মধ্যে রিচ বাড়তে শুরু করে।"
    },
    {
      q: "তোমাদের এআই কি ১০০% অ্যাকিউরেট?",
      a: "না, আমাদের AI শুধু আপনার পেজের ডেটা প্যাটার্ন দেখে সম্ভাব্য কারণ বের করে। এটি ৯০% সমস্যার ইঙ্গিত দিতে পারে, তবে শেষ সিদ্ধান্ত আপনার। আমরা কখনো বলি না যে এটি ম্যাজিক।"
    },
    {
      q: "তোমরা কি আমার ডেটা রাখবে?",
      a: "আপনি ফাইল আপলোড করার পরই আমরা প্রসেস করি এবং সর্বোচ্চ ১ ঘণ্টার মধ্যে তা সার্ভার থেকে মুছে দেই। আমরা কখনো ডেটা অন্য কোথাও শেয়ার বা বিক্রি করি না।"
    },
    {
      q: "এই অ্যাকশন প্ল্যান ব্যবহার করে ফেসবুক কি পেজ ব্লক করতে পারে?",
      a: "আমরা শুধু কন্টেন্ট কোয়ালিটি ও টাইমিং নিয়ে বলি। আমরা কখনো fake engagement, like-bait, বা পলিসি ভায়োলেশন করতে বলি না। ফলে ব্লক হওয়ার কারণ নেই।"
    }
  ];

  return (
    <>
      <div id="faq" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-yellow-50 border border-yellow-100">
            <span className="text-[11px] font-bold tracking-wider text-[#FFB800]">
              সাপোর্ট
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1] mb-4">
            আরও কোনো<br />প্রশ্ন আছে?
          </h2>
          
          <p className="text-[#64748B] font-medium text-lg mb-8">
            আমরা সাহায্য করতে এখানে আছি!
          </p>
          
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-[#0F172A] transition-all duration-300 bg-[#FFB800] border border-transparent rounded-full shadow-sm hover:bg-[#E5BA0A] hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB800]"
          >
            যেকোনো কিছু জিজ্ঞেস করুন
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-[#F8FAFC] border border-gray-100 rounded-2xl transition-all duration-300 ${openIndex === index ? 'shadow-sm' : ''}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 cursor-pointer flex justify-between items-center text-left focus:outline-none group"
              >
                <span className={`font-bold text-[15px] sm:text-base pr-4 transition-colors duration-200 ${openIndex === index ? 'text-[#0F172A]' : 'text-[#334155]'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${openIndex === index ? 'bg-white shadow-sm' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#FFB800]' : 'rotate-0 text-[#64748B]'}`}
                  />
                </div>
              </button>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-[#475569] font-medium text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      
      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setIsContactModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative p-6 sm:p-8"
            >
              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-100">
                  <MessageCircle className="w-8 h-8 text-[#FFB800]" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">যোগাযোগ করুন</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  আমরা সাধারণত সাথে সাথেই রিপ্লাই দিয়ে থাকি। যেকোনো প্রয়োজনে আমাদের মেসেজ দিন।
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="https://wa.me/8801700000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-0.5">WhatsApp</div>
                    <div className="text-[#0F172A] font-bold text-lg">+880 1700 000000</div>
                  </div>
                </a>

                <a 
                  href="mailto:support@pagemama.com" 
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#FFB800]/30 hover:bg-yellow-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center group-hover:bg-[#FFB800] group-hover:text-[#0F172A] transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-0.5">Email</div>
                    <div className="text-[#0F172A] font-bold text-lg">support@pagemama.com</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
