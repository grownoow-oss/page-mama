'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck, CreditCard, ChevronRight, Loader2 } from 'lucide-react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: string;
    period: string;
    features: string[];
    popular?: boolean;
  } | null;
}

export default function CheckoutModal({ isOpen, onClose, plan }: CheckoutModalProps) {
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState('');
  const router = useRouter();
  const { user, updateUserPlan } = useAuth();

  const [formData, setFormData] = useState({
    email: user?.email || '',
    phone: '',
    pageLink: '',
  });

  if (!isOpen || !plan) return null;

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    // Short delay to simulate validation
    await new Promise((r) => setTimeout(r, 600));
    setIsLoading(false);
    setStep('payment');
  };

  const handlePayment = async (method: string) => {
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: plan.name,
          email: formData.email || user?.email,
          phone: formData.phone,
          pageLink: formData.pageLink,
          userId: user?.uid || 'guest',
          paymentMethod: method,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Payment failed');

      setOrderId(data.orderId);

      // Update plan in Firestore + context
      const planMap: Record<string, 'Quick Check' | 'Smart Growth' | 'Pro'> = {
        'কুইক চেক': 'Quick Check',
        'স্মার্ট গ্রোথ': 'Smart Growth',
        'প্রো': 'Pro',
        'Quick Check': 'Quick Check',
        'Smart Growth': 'Smart Growth',
        'Pro': 'Pro',
      };
      const canonical = planMap[plan.name] || 'Smart Growth';
      await updateUserPlan(canonical);

      setStep('success');
    } catch (err: any) {
      setError(err.message || 'কিছু একটা সমস্যা হয়েছে।');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setStep('info');
    setError('');
    onClose();
  };

  const handleGoToDashboard = () => {
    handleClose();
    router.push('/dashboard');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[300] flex items-end md:items-center justify-center sm:px-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Sheet */}
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full md:w-[450px] bg-white rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
            <div>
              <div className="font-bold text-base text-gray-900">
                {step === 'success' ? 'পেমেন্ট সম্পন্ন! 🎉' : 'আপনার নির্বাচিত প্ল্যান'}
              </div>
              {step !== 'success' && (
                <div className="text-xs text-gray-400 mt-0.5">{plan.name} • ৳{plan.price}/{plan.period}</div>
              )}
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6">

            {/* STEP 1 — Info */}
            {step === 'info' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                {/* Plan summary */}
                <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-5 mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-extrabold text-xl text-gray-900">{plan.name}</div>
                      {plan.popular && (
                        <div className="text-[#FFB800] text-xs font-bold mt-1 uppercase tracking-wide">Most Popular</div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-extrabold text-gray-900">৳{plan.price}</div>
                      <div className="text-xs text-gray-400">/{plan.period}</div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2.5 text-sm">
                    {plan.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200 flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>১৫ দিনের মানি-ব্যাক গ্যারান্টি</span>
                  </div>
                </div>

                <h2 className="text-base font-bold text-gray-900 mb-4">আপনার তথ্য দিন</h2>

                <form id="checkout-form" onSubmit={handleContinue} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">ইমেইল অ্যাড্রেস *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/20 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">ফোন নম্বর *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="017XXXXXXXX"
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/20 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Facebook পেজ লিংক{' '}
                      <span className="font-normal text-gray-400">(অপশনাল)</span>
                    </label>
                    <input
                      type="url"
                      value={formData.pageLink}
                      onChange={(e) => setFormData({ ...formData, pageLink: e.target.value })}
                      placeholder="https://facebook.com/yourpage"
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/20 outline-none text-sm"
                    />
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 2 — Payment */}
            {step === 'payment' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <button
                  onClick={() => setStep('info')}
                  className="text-sm text-gray-400 hover:text-[#FFB800] mb-5 flex items-center gap-1 transition-colors font-medium"
                >
                  ← পিছনে যান
                </button>
                <h2 className="text-lg font-bold text-gray-900 mb-1">পেমেন্ট পদ্ধতি বেছে নিন</h2>
                <p className="text-sm text-gray-400 mb-5">মোট পরিশোধ: ৳{plan.price}</p>

                {error && (
                  <div className="bg-red-50 border border-red-100 text-red-600 text-sm font-medium px-4 py-3 rounded-2xl mb-4">
                    {error}
                  </div>
                )}

                <div className="space-y-3 relative">
                  {[
                    { id: 'bkash', name: 'bKash', color: 'bg-[#E2136E] text-white', label: 'B' },
                    { id: 'nagad', name: 'Nagad', color: 'bg-[#F7941D] text-white', label: 'N' },
                    { id: 'card', name: 'Credit / Debit Card', color: 'bg-gray-900 text-white', isCard: true },
                  ].map((method) => (
                    <button
                      key={method.id}
                      onClick={() => handlePayment(method.id)}
                      disabled={isLoading}
                      className="w-full flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:border-[#FFB800] hover:shadow-sm transition-all group disabled:opacity-50 bg-white"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-base shadow-sm ${method.color}`}>
                          {method.isCard ? <CreditCard className="w-5 h-5" /> : method.label}
                        </div>
                        <span className="font-bold text-gray-900 text-sm">{method.name}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#FFB800] transition-colors" />
                    </button>
                  ))}

                  {isLoading && (
                    <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center z-10 rounded-2xl">
                      <Loader2 className="w-8 h-8 text-[#FFB800] animate-spin mb-2" />
                      <p className="text-gray-800 font-bold text-sm">পেমেন্ট প্রসেস হচ্ছে...</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* STEP 3 — Success */}
            {step === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-8"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-5 shadow-sm">
                  <Check className="w-10 h-10 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">পেমেন্ট সফল! 🎉</h2>
                <p className="text-sm text-gray-500 mb-2 max-w-[260px]">
                  আপনার <span className="font-bold text-gray-800">{plan.name}</span> প্ল্যান অ্যাক্টিভেট হয়েছে।
                </p>
                {orderId && (
                  <div className="text-xs text-gray-400 font-mono bg-gray-50 px-4 py-2 rounded-xl mb-6">
                    Order ID: {orderId}
                  </div>
                )}
                <button
                  onClick={handleGoToDashboard}
                  className="w-full py-4 bg-[#FFB800] hover:bg-[#E5BA0A] text-[#0F172A] font-bold rounded-2xl transition-all shadow-lg shadow-[#FFB800]/25 active:scale-[0.985] flex items-center justify-center gap-2"
                >
                  Dashboard-এ যান <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </div>

          {/* Sticky Footer (info step only) */}
          {step === 'info' && (
            <div className="p-5 border-t border-gray-100 sticky bottom-0 bg-white z-10">
              <button
                type="submit"
                form="checkout-form"
                disabled={isLoading}
                className="w-full py-4 bg-[#FFB800] hover:bg-[#E5BA0A] text-[#0F172A] font-extrabold rounded-2xl text-base flex items-center justify-center gap-2 active:scale-[0.985] transition-all disabled:opacity-70 shadow-lg shadow-[#FFB800]/20"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>Continue to Payment <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
              <p className="text-center mt-2.5 text-xs text-gray-400 font-medium">
                ১০০% সিকিউর • ১৫ দিনের মানি-ব্যাক গ্যারান্টি
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
