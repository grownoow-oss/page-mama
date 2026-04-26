import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>প্রাইভেসি পলিসি — Page Mama</title>
      </Head>
      <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A2E] font-sans pt-24 sm:pt-32">
        <Navbar />
        
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="bg-white rounded-[2rem] p-8 sm:p-14 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-100">
            
            <div className="inline-block bg-[#FFF3E0] text-[#E85D04] text-[13px] font-bold px-4 py-1 rounded-full mb-6">
              আইনি দলিল
            </div>
            
            <h1 className="text-3xl sm:text-[40px] font-black leading-tight mb-3 text-[#0F172A]">প্রাইভেসি পলিসি</h1>
            <p className="text-sm text-[#6B7280] font-medium mb-10 pb-6 border-b border-[#F3F4F6]">
              সর্বশেষ আপডেট: এপ্রিল ২০২৬ &nbsp;|&nbsp; কার্যকর তারিখ: এপ্রিল ২০২৬
            </p>

            <div className="space-y-10 text-[15px] sm:text-[16px] leading-[1.8] text-[#374151]">
              <p>
                Page Mama ("পেজমামা", "আমরা", "আমাদের") আপনার গোপনীয়তাকে সম্মান করে। এই পলিসিতে আমরা স্পষ্ট করছি — আমরা কী তথ্য সংগ্রহ করি, কেন করি, এবং কীভাবে রক্ষা করি।
              </p>

              {/* Section 1 */}
              <section>
                <h2 className="text-xl font-black text-[#1A1A2E] mb-5 flex items-center gap-3">
                  <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">📋</span>
                  ১. আমরা কী তথ্য সংগ্রহ করি
                </h2>
                
                <div className="space-y-4">
                  <p className="font-bold text-[#0F172A] mb-2">আপনি যা দেন:</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 pl-1">
                      <span className="text-[#E85D04] font-bold">✓</span>
                      আপনার ফেসবুক পেজের পাবলিক লিংক
                    </li>
                    <li className="flex gap-3 pl-1">
                      <span className="text-[#E85D04] font-bold">✓</span>
                      পেজ ইনসাইটের স্ক্রিনশট বা PDF ফাইল
                    </li>
                    <li className="flex gap-3 pl-1">
                      <span className="text-[#E85D04] font-bold">✓</span>
                      পেমেন্টের সময় দেওয়া মোবাইল নম্বর (bKash/Nagad এর মাধ্যমে)
                    </li>
                    <li className="flex gap-3 pl-1">
                      <span className="text-[#E85D04] font-bold">✓</span>
                      আপনার ইমেইল ঠিকানা (যদি দেন)
                    </li>
                  </ul>

                  <p className="font-bold text-[#0F172A] mb-2 mt-6">স্বয়ংক্রিয়ভাবে যা সংগ্রহ হয়:</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 pl-1">
                      <span className="text-[#E85D04] font-bold">✓</span>
                      ব্রাউজারের ধরন ও ডিভাইসের তথ্য
                    </li>
                    <li className="flex gap-3 pl-1">
                      <span className="text-[#E85D04] font-bold">✓</span>
                      IP ঠিকানা (নিরাপত্তার জন্য)
                    </li>
                    <li className="flex gap-3 pl-1">
                      <span className="text-[#E85D04] font-bold">✓</span>
                      সাইট ভিজিটের সময় ও পেজ
                    </li>
                  </ul>
                </div>

                <div className="bg-[#FFF8F0] border-l-4 border-[#E85D04] rounded-xl p-5 mt-8">
                  <p className="m-0 font-bold text-[#C2410C]">
                    🔒 আমরা কখনো আপনার ফেসবুক পাসওয়ার্ড, লগইন তথ্য, বা ব্যক্তিগত বার্তা সংগ্রহ করি না।
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl font-black text-[#1A1A2E] mb-5 flex items-center gap-3">
                  <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">🎯</span>
                  ২. কেন এই তথ্য ব্যবহার করি
                </h2>
                <ul className="space-y-3">
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    আপনার পেজের AI অ্যানালাইসিস রিপোর্ট তৈরি করতে
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    পেমেন্ট নিশ্চিত করতে এবং রিপোর্ট পাঠাতে
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    কাস্টমার সাপোর্ট দিতে
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    সার্ভিস উন্নত করতে (ব্যক্তিগত তথ্য ছাড়া)
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    গুরুত্বপূর্ণ আপডেট জানাতে (আপনার অনুমতি সাপেক্ষে)
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl font-black text-[#1A1A2E] mb-5 flex items-center gap-3">
                  <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">⏱️</span>
                  ৩. তথ্য কতক্ষণ রাখি
                </h2>
                <p>
                  আপনার আপলোড করা স্ক্রিনশট বা PDF ফাইল অ্যানালাইসিস সম্পন্ন হওয়ার পর <strong>সর্বোচ্চ ১ ঘণ্টার মধ্যে আমাদের সার্ভার থেকে স্থায়ীভাবে মুছে দেওয়া হয়।</strong>
                </p>
                <p className="mt-4">
                  পেমেন্ট রেকর্ড এবং রিপোর্ট ইতিহাস আমরা সর্বোচ্চ ৯০ দিন রাখি — পরে তা মুছে ফেলা হয়।
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-xl font-black text-[#1A1A2E] mb-5 flex items-center gap-3">
                  <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">🤝</span>
                  ৪. তৃতীয় পক্ষের সাথে তথ্য শেয়ার
                </h2>
                <p>আমরা আপনার তথ্য বিক্রি করি না।</p>
                <p className="mt-4">
                  আইন প্রয়োগকারী সংস্থার বৈধ অনুরোধ ছাড়া আমরা কোনো সরকারি বা বেসরকারি প্রতিষ্ঠানের সাথে আপনার তথ্য শেয়ার করি না।
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-xl font-black text-[#1A1A2E] mb-5 flex items-center gap-3">
                  <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">🍪</span>
                  ৫. কুকিজ ও ট্র্যাকিং
                </h2>
                <p>আমরা সীমিত কুকিজ ব্যবহার করি — শুধুমাত্র লগইন সেশন ও সাইটের পারফরম্যান্স উন্নত করতে। আমরা কোনো থার্ড-পার্টি অ্যাডভার্টাইজিং কুকিজ ব্যবহার করি না।</p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-xl font-black text-[#1A1A2E] mb-5 flex items-center gap-3">
                  <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">👤</span>
                  ৬. আপনার অধিকার
                </h2>
                <ul className="space-y-3">
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    আপনার সম্পর্কে রাখা তথ্য দেখার অনুরোধ করতে পারেন
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    আপনার তথ্য মুছে ফেলার অনুরোধ করতে পারেন
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    মার্কেটিং ইমেইল থেকে যেকোনো সময় বের হয়ে যেতে পারেন
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    অ্যাকাউন্ট ও তথ্য সম্পূর্ণ ডিলিট করার অনুরোধ করতে পারেন
                  </li>
                </ul>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-xl font-black text-[#1A1A2E] mb-5 flex items-center gap-3">
                  <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">🔐</span>
                  ৭. নিরাপত্তা
                </h2>
                <p>আমরা HTTPS এনক্রিপশন এবং সীমিত অ্যাক্সেস নীতি ব্যবহার করি। আপনার তথ্য সুরক্ষিত রাখাই আমাদের অগ্রাধিকার। তবে ইন্টারনেটে ১০০% নিরাপত্তা নিশ্চিত করা কোনো সার্ভিসের পক্ষে সম্ভব নয় — সেটা আমরা সৎভাবে স্বীকার করি।</p>
              </section>

              {/* Section 10 - Contact Box */}
              <div className="bg-[#1A1A2E] rounded-3xl p-8 sm:p-12 text-center text-white mt-16 shadow-xl shadow-black/10">
                <h3 className="text-2xl font-bold mb-3">প্রশ্ন আছে? আমরা আছি।</h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">প্রাইভেসি সম্পর্কে যেকোনো প্রশ্ন বা তথ্য মুছে ফেলার অনুরোধ করতে সরাসরি যোগাযোগ করুন।</p>
                <a 
                  href="mailto:support@pagemama.xyz"
                  className="inline-block bg-[#E85D04] hover:bg-[#D45500] text-white font-black px-10 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 active:scale-95"
                >
                  support@pagemama.xyz
                </a>
                <p className="mt-6 text-sm text-gray-500 font-bold uppercase tracking-widest">অথবা WhatsApp করুন</p>
              </div>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
