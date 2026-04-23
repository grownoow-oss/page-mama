import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogOut } from 'lucide-react';
import { useRouter } from 'next/router';
import AuthModal from './AuthModal';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showLoginModal = () => {
    setIsOpen(false);
    setIsAuthModalOpen(true);
  };

  const handleLogout = async () => {
    setIsOpen(false);
    await logout();
  };

  const navLinks = [
    { name: 'কীভাবে কাজ করে', href: '/#how' },
    { name: 'কী পাবেন', href: '/#benefits' },
    { name: 'প্রাইসিং', href: '/#pricing' },
    { name: 'প্রশ্নোত্তর', href: '/#faq' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
          scrolled 
            ? 'border-b border-[#F1F5F9] shadow-[0_1px_3px_rgba(0,0,0,0.02)] py-3' 
            : 'border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="relative z-10 hover:opacity-95 transition-opacity">
              <Logo size="md" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-x-10">
              {navLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href} 
                  className="text-sm font-semibold text-[#64748B] hover:text-[#FF5E00] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF5E00] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-x-4">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-bold border border-gray-100 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                >
                  <LogOut className="w-4 h-4" /> লগআউট
                </button>
              ) : (
                <button 
                  onClick={showLoginModal}
                  className="hidden md:flex items-center justify-center px-7 py-2.5 text-sm font-bold bg-[#F8FAFC] text-[#475569] hover:text-[#0F172A] hover:bg-gray-100 border border-gray-100 rounded-xl transition-all duration-300 active:scale-[0.985]"
                >
                  লগইন
                </button>
              )}

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-[#475569] focus:outline-none hover:bg-gray-50 rounded-xl transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-[#F1F5F9] overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link, idx) => (
                  <Link 
                    key={idx} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3.5 text-[#475569] font-bold hover:text-[#FF5E00] hover:bg-orange-50 rounded-xl transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="pt-4 mt-2 border-t border-gray-50">
                  <button 
                    onClick={showLoginModal} 
                    className="w-full flex items-center justify-center py-4 bg-[#F8FAFC] text-[#475569] font-bold rounded-xl active:bg-gray-100 transition-colors"
                  >
                    লগইন
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}
