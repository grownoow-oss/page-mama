import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, LogOut } from 'lucide-react';
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 md:py-3' : 'py-3 md:py-5'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`relative flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border border-gray-100' : 'bg-transparent'}`}>
            
            {/* Logo */}
            <Link href="/" className="group relative z-10 hover:opacity-95 transition-opacity">
              <Logo size="md" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-x-8 absolute left-1/2 -translate-x-1/2 z-10">
              {navLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href} 
                  className="text-sm font-bold text-[#64748B] hover:text-[#FFCE0B] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#FFCE0B] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-x-3 sm:gap-x-4 z-10">
              


              {user ? (
                <button
                  onClick={handleLogout}
                  className="hidden md:flex items-center gap-2 px-5 py-3 text-sm font-semibold border border-gray-200 text-gray-600 hover:text-red-500 hover:bg-gray-50 rounded-2xl transition-all"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              ) : (
                <button 
                  onClick={showLoginModal}
                  className="hidden md:flex items-center justify-center px-6 py-3 text-sm font-semibold border border-gray-200 text-[#475569] hover:text-[#0F172A] hover:bg-gray-50 rounded-2xl transition-all duration-300 active:scale-[0.985]"
                >
                  লগইন
                </button>
              )}
              


              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-[#475569] focus:outline-none hover:bg-gray-100 rounded-xl transition-colors active:scale-95"
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
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl p-5 shadow-2xl shadow-black/10 border border-gray-100"
            >
              <div className="flex flex-col gap-2 text-base font-bold">
                {navLinks.map((link, idx) => (
                  <Link 
                    key={idx} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-4 text-[#475569] hover:text-[#FFCE0B] hover:bg-yellow-50 rounded-2xl transition-colors active:bg-gray-100 flex items-center"
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
                  <button 
                    onClick={showLoginModal} 
                    className="w-full flex items-center justify-center py-4 border border-gray-200 text-[#475569] font-bold rounded-2xl active:bg-gray-50 transition-colors"
                  >
                    লগইন
                  </button>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}
