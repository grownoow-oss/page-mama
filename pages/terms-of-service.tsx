import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>ব্যবহারের শর্তাবলী — Page Mama</title>
      </Head>
      <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A2E] font-sans pt-24 sm:pt-32">
        <Navbar />
        
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="bg-white rounded-[2rem] p-8 sm:p-14 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-100">
            
            <div className="inline-block bg-[#FFF3E0] text-[#E85D04] text-[13px] font-bold px-4 py-1 rounded-full mb-6">
              আইনি দলিল
            </div>
            
            <h1 className="text-3xl sm:text-[40px] font-black leading-tight mb-3 text-[#0F172A]">ব্যবহারের শর্তাবলী</h1>
            <p className="text-sm text-[#6B7280] font-medium mb-10 pb-6 border-b border-[#F3F4F6]">
              সর্বশেষ আপডেট: এপ্রিল ২০২৬ &nbsp;|&nbsp; কার্যকর তারিখ: এপ্রিল ২০২৬
            </p>

            <div className="space-y-10 text-[15px] sm:text-[16px] leading-[1.8] text-[#374151]">
              <p>
                Page Mama ("পেজমামা") ব্যবহার করার আগে অনুগ্রহ করে এই শর্তাবলী মনোযোগ দিয়ে পড়ুন। সার্ভিস ব্যবহার করলে আপনি এই শর্তগুলো মেনে নিয়েছেন বলে গণ্য হবে।
              </p>

              {/* Section 1 */}
              <section>
                <h2 className="text-xl font-black text-[#1A1A2E] mb-5 flex items-center gap-3">
                  <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">🛠️</span>
                  ১. আমাদের সার্ভিস কী
                </h2>
                <p>Page Mama একটি AI-চালিত ফেসবুক পেজ অ্যানালাইসিস টুল। আমরা আপনার পেজের পাবলিক তথ্য বিশ্লেষণ করে রিপোর্ট ও অ্যাকশন প্ল্যান তৈরি করি।</p>
                
                <div className="bg-[#FFF8F0] border-l-4 border-[#E85D04] rounded-xl p-5 mt-6">
                  <p className="m-0 font-bold text-[#C2410C]">
                    ⚠️ Page Mama একটি ডায়াগনস্টিক টুল — আমরা পরামর্শ দিই, ফলাফলের নিশ্চয়তা দিই না। রিচ বা এঙ্গেজমেন্ট বাড়ানো নির্ভর করে আপনার কনটেন্ট, দর্শক, এবং Facebook এর অ্যালগরিদমের উপর।
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl font-black text-[#1A1A2E] mb-5 flex items-center gap-3">
                  <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">✅</span>
                  ২. আপনি যা করতে পারবেন
                </h2>
                <ul className="space-y-3">
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    নিজের ফেসবুক পেজ অ্যানালাইসিস করতে পারবেন
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    রিপোর্ট ডাউনলোড ও নিজের কাজে ব্যবহার করতে পারবেন
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    ক্লায়েন্টের পেজ অ্যানালাইসিস করতে পারবেন (প্রো প্ল্যান)
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    সাপোর্টের সাথে যোগাযোগ করে সমস্যা সমাধান করতে পারবেন
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl font-black text-[#1A1A2E] mb-5 flex items-center gap-3">
                  <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">🚫</span>
                  ৩. আপনি যা করতে পারবেন না
                </h2>
                <ul className="space-y-3">
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#DC2626] font-bold">✗</span>
                    অন্যের অনুমতি ছাড়া তাদের পেজ অ্যানালাইসিস করা
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#DC2626] font-bold">✗</span>
                    Page Mama এর রিপোর্ট বা কনটেন্ট পুনরায় বিক্রি করা
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#DC2626] font-bold">✗</span>
                    সার্ভিস ব্যবহার করে fake engagement বা spam তৈরি করা
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#DC2626] font-bold">✗</span>
                    আমাদের সিস্টেম হ্যাক বা রিভার্স ইঞ্জিনিয়ারিং করার চেষ্টা করা
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#DC2626] font-bold">✗</span>
                    ভুয়া তথ্য দিয়ে একাধিক অ্যাকাউন্ট খোলা
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#DC2626] font-bold">✗</span>
                    Facebook এর নিজস্ব Terms of Service লঙ্ঘন করে এমন কাজে আমাদের পরামর্শ ব্যবহার করা
                  </li>
                </ul>

                <div className="bg-[#FEF2F2] border-l-4 border-[#DC2626] rounded-xl p-5 mt-8">
                  <p className="m-0 font-bold text-[#991B1B]">
                    ❌ নিয়ম লঙ্ঘন করলে আমরা বিনা নোটিশে অ্যাকাউন্ট বন্ধ করার অধিকার রাখি। পেমেন্ট ফেরত দেওয়া হবে না।
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-xl font-black text-[#1A1A2E] mb-5 flex items-center gap-3">
                  <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">💳</span>
                  ৪. পেমেন্ট ও রিফান্ড
                </h2>
                <p className="mb-6">আমরা bKash ও Nagad এর মাধ্যমে পেমেন্ট গ্রহণ করি। পেমেন্ট সম্পন্ন হওয়ার পর সার্ভিস শুরু হয়।</p>

                <div className="overflow-hidden rounded-xl border border-gray-100 mb-6">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-[#F9FAFB] border-b border-gray-100">
                      <tr>
                        <th className="px-6 py-4 font-bold text-[#374151]">পরিস্থিতি</th>
                        <th className="px-6 py-4 font-bold text-[#374151]">রিফান্ড</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      <tr>
                        <td className="px-6 py-4">রিপোর্ট তৈরি হয়নি (আমাদের কারণে)</td>
                        <td className="px-6 py-4 font-bold text-[#16A34A]">✓ সম্পূর্ণ রিফান্ড</td>
                      </tr>
                      <tr className="bg-gray-50/30">
                        <td className="px-6 py-4">ভুল পেজের তথ্য দিয়েছেন</td>
                        <td className="px-6 py-4 font-bold text-[#DC2626]">✗ রিফান্ড নেই</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">পরামর্শ ফলো করার পরেও রিচ বাড়েনি</td>
                        <td className="px-6 py-4 font-bold text-[#DC2626]">✗ রিফান্ড নেই</td>
                      </tr>
                      <tr className="bg-gray-50/30">
                        <td className="px-6 py-4">প্রো প্ল্যান — মাসের মাঝে ক্যান্সেল</td>
                        <td className="px-6 py-4 font-bold text-[#DC2626]">✗ আংশিক রিফান্ড নেই</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>রিফান্ডের জন্য <strong className="text-[#0F172A]">support@pagemama.xyz</strong> এ ইমেইল করুন বা WhatsApp এ যোগাযোগ করুন।</p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-xl font-black text-[#1A1A2E] mb-5 flex items-center gap-3">
                  <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">🤖</span>
                  ৫. AI রিপোর্টের সীমাবদ্ধতা
                </h2>
                <p>আমাদের AI আপনার পেজের ডেটা প্যাটার্ন বিশ্লেষণ করে সম্ভাব্য কারণ ও পরামর্শ দেয়। তবে:</p>
                <ul className="space-y-3 mt-4">
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    Facebook এর অ্যালগরিদম সম্পূর্ণ প্রকাশিত নয় — তাই কোনো টুলই ১০০% নিশ্চিত কারণ বলতে পারে না
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    রিচ বৃদ্ধির পরিমাণ পেজ, নিশ ও কনটেন্টের মান অনুযায়ী ভিন্ন হয়
                  </li>
                  <li className="flex gap-3 pl-1">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    আমাদের পরামর্শ সহায়ক — চূড়ান্ত সিদ্ধান্ত আপনার
                  </li>
                </ul>
                <div className="bg-[#FFF8F0] border-l-4 border-[#E85D04] rounded-xl p-5 mt-6">
                  <p className="m-0 font-bold text-[#C2410C]">💡 আমরা ডাক্তারের মতো — রোগ নির্ণয় করি, সুস্থ হওয়ার নিশ্চয়তা দিই না।</p>
                </div>
              </section>

              {/* Section 6 - 10 */}
              <section className="space-y-10">
                <div>
                  <h2 className="text-xl font-black text-[#1A1A2E] mb-4 flex items-center gap-3">
                    <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">🔒</span>
                    ৬. আপনার ডেটার মালিকানা
                  </h2>
                  <p>আপনার পেজের ডেটা, স্ক্রিনশট, এবং তথ্যের মালিক আপনি। আমরা শুধু বিশ্লেষণের জন্য ব্যবহার করি — অন্য কোনো উদ্দেশ্যে নয়।</p>
                  <p className="mt-4">আমাদের তৈরি রিপোর্ট আপনি ব্যক্তিগত বা ব্যবসায়িক কাজে ব্যবহার করতে পারবেন। তবে রিপোর্ট পুনরায় বিক্রি বা পাবলিকলি শেয়ার করা যাবে না।</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-black text-[#1A1A2E] mb-4 flex items-center gap-3">
                    <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">⚡</span>
                    ৭. সার্ভিস পরিবর্তন ও বন্ধ
                  </h2>
                  <p>আমরা যেকোনো সময় সার্ভিসের ফিচার পরিবর্তন, আপগ্রেড, বা নতুন কিছু যোগ করতে পারি। বড় পরিবর্তনের ক্ষেত্রে আগে থেকে জানানো হবে।</p>
                  <p className="mt-4">অপ্রত্যাশিত কারণে সার্ভিস বন্ধ হলে (সার্ভার সমস্যা, Facebook API পরিবর্তন) আমরা যত দ্রুত সম্ভব সমাধান করব। দীর্ঘমেয়াদি বন্ধের ক্ষেত্রে রিফান্ড বিবেচনা করা হবে।</p>
                </div>

                <div>
                  <h2 className="text-xl font-black text-[#1A1A2E] mb-4 flex items-center gap-3">
                    <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">⚖️</span>
                    ৮. দায়বদ্ধতার সীমা
                  </h2>
                  <p>Page Mama নিম্নলিখিত বিষয়ে দায়বদ্ধ নয়:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex gap-3 pl-1">
                      <span className="text-[#DC2626] font-bold">✗</span>
                      আমাদের পরামর্শ অনুসরণ করার পরেও রিচ না বাড়লে
                    </li>
                    <li className="flex gap-3 pl-1">
                      <span className="text-[#DC2626] font-bold">✗</span>
                      Facebook এর নীতি পরিবর্তনের কারণে পেজের ক্ষতি হলে
                    </li>
                    <li className="flex gap-3 pl-1">
                      <span className="text-[#DC2626] font-bold">✗</span>
                      আপনার পেজের কনটেন্টের মান বা বৈধতার জন্য
                    </li>
                    <li className="flex gap-3 pl-1">
                      <span className="text-[#DC2626] font-bold">✗</span>
                      তৃতীয় পক্ষের টুলের (Apify, OpenAI) সমস্যার জন্য
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-black text-[#1A1A2E] mb-4 flex items-center gap-3">
                    <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">📋</span>
                    ৯. Facebook এর সাথে সম্পর্ক
                  </h2>
                  <p>Page Mama, Meta Platforms Inc. (Facebook) এর সাথে সম্পর্কিত নয়, অনুমোদিত নয়, বা অংশীদার নয়। আমরা স্বাধীনভাবে পরিচালিত একটি বাংলাদেশি সার্ভিস।</p>
                </div>

                <div>
                  <h2 className="text-xl font-black text-[#1A1A2E] mb-4 flex items-center gap-3">
                    <span className="w-9 h-9 bg-[#FFF3E0] rounded-xl flex items-center justify-center text-lg shrink-0">🔄</span>
                    ১০. শর্তাবলী পরিবর্তন
                  </h2>
                  <p>এই শর্তাবলী আপডেট হলে সাইটে নতুন তারিখ দিয়ে জানানো হবে। সার্ভিস ব্যবহার চালিয়ে গেলে আপনি নতুন শর্ত মেনে নিয়েছেন বলে গণ্য হবে।</p>
                </div>
              </section>

              <hr className="my-10 border-[#F3F4F6]" />
              <p className="text-sm text-[#6B7280] italic">এই শর্তাবলী বাংলাদেশের প্রচলিত আইন অনুযায়ী পরিচালিত। যেকোনো বিরোধ বাংলাদেশের আদালতে নিষ্পত্তি হবে।</p>

              {/* Contact Box */}
              <div className="bg-[#1A1A2E] rounded-3xl p-8 sm:p-12 text-center text-white mt-16 shadow-xl shadow-black/10">
                <h3 className="text-2xl font-bold mb-3">প্রশ্ন আছে?</h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">শর্তাবলী নিয়ে কোনো প্রশ্ন থাকলে সরাসরি যোগাযোগ করুন।</p>
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
