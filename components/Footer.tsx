import { Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#FAFAFA] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-10 md:mb-12 border-b border-gray-200 pb-10 md:pb-12">
          <div className="sm:col-span-2">
            <Link href="/" className="mb-4 sm:mb-6 block hover:opacity-95 transition-opacity">
              <Logo size="lg" />
            </Link>
            <p className="text-[#64748B] text-sm max-w-sm leading-relaxed">
              আপনার ফেসবুক পেজের স্বাস্থ্য এবং রিচ বৃদ্ধির জন্য বাংলাদেশের #১ এআই অ্যানালাইসিস টুল। ৩০ সেকেন্ডে জানুন আপনার পেজের সমস্যা।
            </p>
          </div>
          
          <div>
            <h4 className="text-[#0F172A] font-bold mb-4 sm:mb-6 uppercase tracking-wider text-xs sm:text-sm">কোম্পানি</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm text-[#64748B] font-medium">
              <li><Link href="/#how" className="hover:text-[#FFCE0B] transition-colors">কীভাবে কাজ করে</Link></li>
              <li><Link href="/#benefits" className="hover:text-[#FFCE0B] transition-colors">কী পাবেন</Link></li>
              <li><Link href="/#pricing" className="hover:text-[#FFCE0B] transition-colors">প্রাইসিং</Link></li>
              <li><Link href="/demo" className="hover:text-[#FFCE0B] transition-colors">লাইভ ডেমো</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#0F172A] font-bold mb-4 sm:mb-6 uppercase tracking-wider text-xs sm:text-sm">সাপোর্ট</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm text-[#64748B] font-medium">
              <li><Link href="/#faq" className="hover:text-[#FFCE0B] transition-colors">প্রায়শই জিজ্ঞাসিত প্রশ্ন</Link></li>
              <li><a href="#" className="hover:text-[#FFCE0B] transition-colors">প্রাইভেসি পলিসি</a></li>
              <li><a href="#" className="hover:text-[#FFCE0B] transition-colors">টার্মস অফ সার্ভিস</a></li>
              <li><a href="#" className="hover:text-[#FFCE0B] transition-colors">যোগাযোগ করুন</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="text-[#94A3B8] text-sm font-medium text-center md:text-left">
            © {new Date().getFullYear()} Page Mama. সব অধিকার সংরক্ষিত।
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#FFCE0B] hover:border-[#FFCE0B] hover:text-[#0F172A] text-[#64748B] transition-all duration-300 shadow-sm">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#FFCE0B] hover:border-[#FFCE0B] hover:text-[#0F172A] text-[#64748B] transition-all duration-300 shadow-sm">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#FFCE0B] hover:border-[#FFCE0B] hover:text-[#0F172A] text-[#64748B] transition-all duration-300 shadow-sm">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
          
          <div className="text-[#94A3B8] text-sm font-medium flex items-center gap-1.5">
            মেড উইথ <span className="text-red-500 animate-pulse">❤️</span> ইন বাংলাদেশ
          </div>
        </div>
      </div>
    </footer>
  );
}
