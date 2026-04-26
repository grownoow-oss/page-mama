import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>সেবার শর্তাবলী ও রিফান্ড নীতি — Terms of Service | Page Mama</title>
      </Head>
      <div className="bg-white min-h-screen text-[#0F172A] font-sans pt-24 sm:pt-32">
        <Navbar />
        
        <main className="max-w-3xl mx-auto px-6 py-12 sm:py-20">
          <div className="bg-gray-50/50 rounded-[2.5rem] p-8 sm:p-12 border border-gray-100">
            <h1 className="text-3xl sm:text-4xl font-black mb-8 text-[#0F172A]">সেবার শর্তাবলী ও রিফান্ড নীতি (Terms of Service & Refund Policy)</h1>
            
            <div className="space-y-10 text-[15px] sm:text-[17px] leading-relaxed text-[#334155]">
              <p className="font-bold text-gray-400 uppercase tracking-widest text-xs">সর্বশেষ আপডেট: ২৬ এপ্রিল ২০২৬</p>
              
              <section>
                <h2 className="text-xl font-black text-[#0F172A] mb-4">১. সেবার ব্যবহার</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Page Mama একটি <strong>AI-ভিত্তিক পেজ অ্যানালাইসিস টুল</strong></li>
                  <li>আমরা <strong>সাজেশন</strong> দেই — ফলাফলের <strong>গ্যারান্টি</strong> দেই না</li>
                  <li>আপনি সেবা ব্যবহার করে স্বীকার করছেন যে ফলাফল বিভিন্ন ফ্যাক্টরের উপর নির্ভর করে</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-[#0F172A] mb-4">২. পেমেন্ট ও রিফান্ড</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>সকল পেমেন্ট <strong>bKash / Nagad</strong> এর মাধ্যমে নেওয়া হয়</li>
                  <li><strong>১৫ দিনের মানি-ব্যাক গ্যারান্টি</strong> আছে</li>
                  <li>রিফান্ড চাইলে ১৫ দিনের মধ্যে WhatsApp-এ যোগাযোগ করতে হবে</li>
                  <li>রিফান্ড শুধুমাত্র তখনই দেওয়া হবে যদি সেবা সঠিকভাবে ডেলিভারি না হয়</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-[#0F172A] mb-4">৩. দায়বদ্ধতা</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Page Mama কোনো <strong>সরাসরি আর্থিক ক্ষতি</strong> বা <strong>ব্যবসায়িক ক্ষতি</strong> এর জন্য দায়ী নয়</li>
                  <li>আমাদের সাজেশন ফলো করা সম্পূর্ণ আপনার নিজস্ব দায়িত্ব</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-[#0F172A] mb-4">৪. বুদ্ধিবৃত্তিক সম্পত্তি</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>সকল রিপোর্ট, ডিজাইন ও কনটেন্ট Page Mama-এর সম্পত্তি</li>
                  <li>আপনি এগুলো কমার্শিয়াল উদ্দেশ্যে ব্যবহার করতে পারবেন না</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-[#0F172A] mb-4">৫. যোগাযোগ</h2>
                <p>
                  <strong>WhatsApp:</strong> 017XXXXXXXX<br />
                  <strong>ইমেইল:</strong> support@pagemama.com
                </p>
              </section>

              <p className="pt-8 border-t border-gray-100 text-sm italic font-medium">
                এই শর্তাবলী ব্যবহার করে আপনি সকল নিয়ম মেনে নিচ্ছেন।
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
