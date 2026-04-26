import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>গোপনীয়তা নীতি — Privacy Policy | Page Mama</title>
      </Head>
      <div className="bg-white min-h-screen text-[#0F172A] font-sans pt-24 sm:pt-32">
        <Navbar />
        
        <main className="max-w-3xl mx-auto px-6 py-12 sm:py-20">
          <div className="bg-gray-50/50 rounded-[2.5rem] p-8 sm:p-12 border border-gray-100">
            <h1 className="text-3xl sm:text-4xl font-black mb-8 text-[#0F172A]">গোপনীয়তা নীতি (Privacy Policy)</h1>
            
            <div className="space-y-10 text-[15px] sm:text-[17px] leading-relaxed text-[#334155]">
              <p className="font-bold text-gray-400 uppercase tracking-widest text-xs">সর্বশেষ আপডেট: ২৬ এপ্রিল ২০২৬</p>
              
              <p>
                <strong>Page Mama</strong> ("আমরা", "আমাদের") আপনার গোপনীয়তা রক্ষা করতে প্রতিশ্রুতিবদ্ধ। এই নীতি ব্যাখ্যা করে যে আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষা করি।
              </p>

              <section>
                <h2 className="text-xl font-black text-[#0F172A] mb-4">১. আমরা কী তথ্য সংগ্রহ করি?</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>পেজ লিংক (যা আপনি দেন)</li>
                  <li>স্ক্রিনশট / PDF (যদি আপলোড করেন)</li>
                  <li>ইমেইল অ্যাড্রেস ও ফোন নম্বর (পেমেন্ট ও যোগাযোগের জন্য)</li>
                  <li>পেমেন্ট তথ্য (bKash / Nagad নম্বর — শুধুমাত্র লেনদেনের জন্য)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-[#0F172A] mb-4">২. আমরা আপনার তথ্য কীভাবে ব্যবহার করি?</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>আপনার পেজের অ্যানালাইসিস রিপোর্ট তৈরি করতে</li>
                  <li>পেমেন্ট প্রসেস করতে</li>
                  <li>সাপোর্ট ও যোগাযোগের জন্য</li>
                  <li>সার্ভিস উন্নত করতে (অ্যানোনিমাস ডেটা)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-[#0F172A] mb-4">৩. আমরা আপনার তথ্য কার সাথে শেয়ার করি?</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>শুধুমাত্র</strong> আমাদের টিম এবং n8n অটোমেশন সিস্টেমের সাথে</li>
                  <li>কোনো থার্ড পার্টির সাথে বিক্রি বা শেয়ার করা হয় না</li>
                  <li>আইনি প্রয়োজনে শুধুমাত্র সরকারি সংস্থার সাথে</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-[#0F172A] mb-4">৪. আপনার তথ্য কতদিন রাখা হয়?</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>রিপোর্ট তৈরির পর <strong>৩০ দিন</strong> পর্যন্ত রাখা হয়</li>
                  <li>তারপর স্বয়ংক্রিয়ভাবে মুছে ফেলা হয় (যদি না আপনি অন্যথায় অনুরোধ করেন)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-[#0F172A] mb-4">৫. আপনার অধিকার</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>আপনি যেকোনো সময় আপনার ডেটা মুছে ফেলার অনুরোধ করতে পারেন</li>
                  <li>আপনার রিপোর্ট ডাউনলোড করে নিতে পারেন</li>
                  <li>যোগাযোগ: support@pagemama.com</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-[#0F172A] mb-4">৬. যোগাযোগ</h2>
                <p>
                  <strong>WhatsApp:</strong> 017XXXXXXXX<br />
                  <strong>ইমেইল:</strong> support@pagemama.com
                </p>
              </section>

              <p className="pt-8 border-t border-gray-100 text-sm italic font-medium">
                এই নীতি পরিবর্তন হলে আমরা আপনাকে জানাবো।
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
