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
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav 
          className={`pointer-events-auto transition-all duration-400 bg-white/95 backdrop-blur-md w-full max-w-[1100px] overflow-hidden ${
            isOpen ? 'rounded-[2rem]' : 'rounded-full'
          } ${
            scrolled 
              ? 'shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 py-2.5' 
              : 'shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-50 py-3.5'
          }`}
        >
          <div className="px-5 md:px-8 w-full flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="relative z-10 hover:opacity-95 transition-opacity shrink-0">
              <Logo size="md" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center justify-center flex-1 gap-x-10">
              {navLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href} 
                  className="text-sm font-bold text-[#475569] hover:text-[#FFB800] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FFB800] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-x-4 shrink-0">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="hidden md:flex items-center gap-2 px-6 py-2.5 text-sm font-bold bg-[#F8FAFC] border border-gray-100 text-[#475569] hover:text-red-500 hover:bg-red-50 hover:border-red-100 rounded-full transition-all shadow-sm"
                >
                  <LogOut className="w-4 h-4" /> লগআউট
                </button>
              ) : (
                <button 
                  onClick={showLoginModal}
                  className="hidden md:flex items-center justify-center px-8 py-3 text-sm font-black bg-[#FFB800] text-white hover:shadow-[0_8px_20px_rgba(255,184,0,0.25)] hover:-translate-y-0.5 rounded-full transition-all duration-300 active:scale-[0.98]"
                >
                  লগইন
                </button>
              )}

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-[#475569] focus:outline-none hover:bg-gray-50 rounded-full transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white/95"
              >
                <div className="px-6 py-6 pb-8 space-y-2 border-t border-gray-50 mt-2">
                  {navLinks.map((link, idx) => (
                    <Link 
                      key={idx} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3.5 text-[#475569] font-bold hover:text-[#FFB800] hover:bg-yellow-50/50 rounded-2xl transition-colors text-center"
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 mt-4 border-t border-gray-50">
                    <button 
                      onClick={showLoginModal} 
                      className="w-full flex items-center justify-center py-4 bg-[#FFB800] text-white font-black rounded-full active:scale-[0.98] transition-all shadow-md shadow-[#FFB800]/20"
                    >
                      লগইন
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}
