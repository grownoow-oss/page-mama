import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [tab, setTab] = useState<'login' | 'signup'>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { loginWithEmail, signupWithEmail, loginWithGoogle } = useAuth();

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleClose = () => {
    setError('');
    onClose();
  };

  const getFirebaseErrorMessage = (code: string): string => {
    const messages: Record<string, string> = {
      'auth/user-not-found': 'এই ইমেইলে কোনো অ্যাকাউন্ট নেই।',
      'auth/wrong-password': 'পাসওয়ার্ড ভুল হয়েছে।',
      'auth/invalid-credential': 'ইমেইল বা পাসওয়ার্ড ভুল।',
      'auth/email-already-in-use': 'এই ইমেইল দিয়ে ইতিমধ্যে অ্যাকাউন্ট আছে।',
      'auth/weak-password': 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।',
      'auth/too-many-requests': 'অনেকবার চেষ্টা হয়েছে। কিছুক্ষণ পরে আবার চেষ্টা করুন।',
      'auth/popup-closed-by-user': 'Google লগইন বাতিল করা হয়েছে।',
    };
    return messages[code] || 'কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।';
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await loginWithEmail(loginEmail, loginPassword);
      handleClose();
      router.push('/dashboard');
    } catch (err: any) {
      setError(getFirebaseErrorMessage(err.code));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await signupWithEmail(signupName, signupEmail, signupPassword, signupPhone);
      handleClose();
      router.push('/dashboard');
    } catch (err: any) {
      setError(getFirebaseErrorMessage(err.code));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError('');
    setIsLoading(true);
    try {
      await loginWithGoogle();
      handleClose();
      router.push('/dashboard');
    } catch (err: any) {
      setError(getFirebaseErrorMessage(err.code));
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    'w-full border border-gray-200 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/20 outline-none px-5 py-3.5 rounded-2xl text-gray-900 placeholder:text-gray-400 transition-all bg-white text-sm';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[400]"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[401] px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-md rounded-[1.5rem] overflow-hidden pointer-events-auto shadow-2xl"
            >
              <div className="relative p-8">
                {/* Close */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Header */}
                <div className="text-center mb-6">
                  <div className="font-extrabold text-2xl text-gray-900 tracking-tight">
                    স্বাগতম PageMama-তে
                  </div>
                  <div className="text-gray-500 text-sm mt-1 font-medium">
                    আপনার পেজের স্বাস্থ্য দেখুন
                  </div>
                </div>

                {/* Google Button */}
                <button
                  onClick={handleGoogle}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-2xl mb-4 hover:bg-gray-50 transition-colors font-semibold text-gray-700 text-sm disabled:opacity-60"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google দিয়ে লগইন
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 h-px bg-gray-100" />
                  <span className="text-xs text-gray-400 font-medium">অথবা ইমেইল দিয়ে</span>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-100 mb-6">
                  {(['login', 'signup'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => { setTab(t); setError(''); }}
                      className={`flex-1 text-center py-2.5 font-bold text-sm transition-all relative ${
                        tab === t ? 'text-[#FFB800]' : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {t === 'login' ? 'লগইন' : 'সাইন আপ'}
                      {tab === t && (
                        <motion.div
                          layoutId="auth-tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFB800] rounded-t-full"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Error */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 text-sm font-medium px-4 py-3 rounded-2xl mb-4"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Forms */}
                <AnimatePresence mode="wait">
                  {tab === 'login' ? (
                    <motion.form
                      key="login"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      transition={{ duration: 0.18 }}
                      onSubmit={handleLogin}
                      className="space-y-3"
                    >
                      <input
                        type="email"
                        required
                        placeholder="ইমেইল"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className={inputClass}
                      />
                      <input
                        type="password"
                        required
                        placeholder="পাসওয়ার্ড"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className={inputClass}
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-[#FFB800] hover:bg-[#E5BA0A] text-[#0F172A] font-bold rounded-2xl transition-colors shadow-lg shadow-yellow-500/30 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
                      >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'লগইন করুন'}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.form
                      key="signup"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.18 }}
                      onSubmit={handleSignup}
                      className="space-y-3"
                    >
                      <input
                        type="text"
                        required
                        placeholder="আপনার নাম"
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        className={inputClass}
                      />
                      <input
                        type="email"
                        required
                        placeholder="ইমেইল"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        className={inputClass}
                      />
                      <input
                        type="tel"
                        placeholder="ফোন নম্বর (অপশনাল)"
                        value={signupPhone}
                        onChange={(e) => setSignupPhone(e.target.value)}
                        className={inputClass}
                      />
                      <input
                        type="password"
                        required
                        minLength={6}
                        placeholder="পাসওয়ার্ড (কমপক্ষে ৬ অক্ষর)"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        className={inputClass}
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-[#FFB800] hover:bg-[#E5BA0A] text-[#0F172A] font-bold rounded-2xl transition-colors shadow-lg shadow-yellow-500/30 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
                      >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'অ্যাকাউন্ট তৈরি করুন'}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
