import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, LineChart, Images, ArrowRight, UploadCloud, ShieldCheck, ChevronLeft, FileImage, FileText, Loader2 } from 'lucide-react'

interface SafeUploadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SafeUploadModal({ isOpen, onClose }: SafeUploadModalProps) {
  const [view, setView] = useState<'main' | 'upload' | 'insights' | 'posts'>('main');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setView('main');
        setUploadedFiles([]);
        setIsSubmitting(false);
      }, 300);
    }
  }, [isOpen]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (files: File[]) => {
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
    const newFiles: File[] = [];

    for (let file of files) {
      if (uploadedFiles.length + newFiles.length >= 2) {
        alert("সর্বোচ্চ ২টা ফাইল আপলোড করা যাবে");
        break;
      }
      if (!validTypes.includes(file.type)) {
        alert(`শুধু PNG, JPG, PDF ফাইল গ্রহণযোগ্য। ${file.name} বাতিল করা হয়েছে।`);
        continue;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert(`${file.name} এর সাইজ ১০MB এর বেশি।`);
        continue;
      }
      newFiles.push(file);
    }

    if (newFiles.length > 0) {
      setUploadedFiles(prev => [...prev, ...newFiles].slice(0, 2));
    }
  };

  const removeFile = (indexToRemove: number) => {
    setUploadedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const submitFiles = () => {
    if (uploadedFiles.length < 2) {
      alert("দয়া করে ২টা স্ক্রিনশট আপলোড করুন (Insights এবং Posts)");
      return;
    }
    setIsSubmitting(true);
    
    // Simulate API call and analysis start
    setTimeout(() => {
      onClose();
      window.dispatchEvent(new Event('start-analysis'));
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={!isSubmitting ? onClose : undefined}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[480px] bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FFCE0B] to-[#FF9D00]" />

            {/* Header/Close */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100 flex-shrink-0">
              {view !== 'main' ? (
                <button 
                  onClick={() => !isSubmitting && setView('main')}
                  disabled={isSubmitting}
                  className={`flex items-center text-sm font-bold transition-colors ${isSubmitting ? 'text-gray-300' : 'text-[#64748B] hover:text-[#0F172A]'}`}
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  ফিরে যান
                </button>
              ) : (
                <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-[#FFCE0B]" />
                  সবচেয়ে নিরাপদ <span className="text-sm text-[#64748B] font-medium hidden sm:inline">(১০০% প্রাইভেসি)</span>
                </h3>
              )}
              
              <button 
                onClick={onClose}
                disabled={isSubmitting}
                className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 transition-colors ${isSubmitting ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-200 hover:text-gray-900'}`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto relative">
              <AnimatePresence mode="wait">
                
                {/* 1. MAIN INSTRUCTIONS VIEW */}
                {view === 'main' && (
                  <motion.div 
                    key="main"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-[#64748B] font-medium mb-6">
                      আপনাকে মাত্র ২ ধরনের স্ক্রিনশট আপলোড করতে হবে:
                    </p>

                    <div className="space-y-4">
                      {/* Option 1 */}
                      <div className="border border-gray-200 rounded-2xl p-5 hover:border-[#FFCE0B]/30 transition-colors bg-gray-50/50 group">
                        <div className="flex items-center gap-x-3 mb-3">
                          <div className="w-10 h-10 bg-yellow-100 text-[#FFCE0B] rounded-xl flex items-center justify-center flex-shrink-0">
                            <LineChart className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-bold text-[#0F172A]">১. Page Insights এর স্ক্রিনশট</div>
                            <div className="text-xs text-[#64748B] font-medium mt-0.5">Overview সেকশন</div>
                          </div>
                        </div>
                        <div className="text-sm text-[#475569] leading-relaxed">
                          আপনার পেজের <span className="font-bold text-[#0F172A]">Page Insights → Overview</span> সেকশনের স্ক্রিনশট নিন।
                        </div>
                        <button 
                          onClick={() => setView('insights')}
                          className="mt-4 text-sm text-[#FFCE0B] font-bold flex items-center gap-x-1.5 hover:text-[#D4A809] transition-colors"
                        >
                          উদাহরণ দেখুন <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>

                      {/* Option 2 */}
                      <div className="border border-gray-200 rounded-2xl p-5 hover:border-[#FFCE0B]/30 transition-colors bg-gray-50/50 group">
                        <div className="flex items-center gap-x-3 mb-3">
                          <div className="w-10 h-10 bg-yellow-100 text-[#FFCE0B] rounded-xl flex items-center justify-center flex-shrink-0">
                            <Images className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-bold text-[#0F172A]">২. শেষ ১০-১৫টা পোস্টের স্ক্রিনশট</div>
                          </div>
                        </div>
                        <div className="text-sm text-[#475569] leading-relaxed">
                          আপনার পেজের পোস্ট সেকশন থেকে শেষ ১০-১৫টা পোস্টের স্ক্রিনশট নিন।
                        </div>
                        <button 
                          onClick={() => setView('posts')}
                          className="mt-4 text-sm text-[#FFCE0B] font-bold flex items-center gap-x-1.5 hover:text-[#D4A809] transition-colors"
                        >
                          উদাহরণ দেখুন <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-6 flex items-start gap-3 bg-emerald-50 border border-emerald-100 p-4 rounded-xl">
                      <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-emerald-800 font-medium leading-relaxed">
                        চিন্তা করবেন না, আমরা শুধু এই স্ক্রিনশটগুলো দেখব। আপনার পেজে কখনো লগইন করব না।
                      </div>
                    </div>

                    <button 
                      onClick={() => setView('upload')}
                      className="mt-6 w-full py-4 bg-[#FFCE0B] hover:bg-[#D4A809] text-[#0F172A] font-bold rounded-2xl transition-all shadow-lg shadow-[#FFCE0B]/20 active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      পরবর্তী ধাপ <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}

                {/* 2. UPLOAD VIEW */}
                {view === 'upload' && (
                  <motion.div 
                    key="upload"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mb-6">
                      <div className="font-bold text-xl text-[#0F172A]">স্ক্রিনশট আপলোড করুন</div>
                      <div className="text-sm text-[#64748B] mt-1">মাত্র ২টা ফাইল আপলোড করতে হবে</div>
                    </div>

                    {/* Upload Area */}
                    <div 
                      onClick={() => !isSubmitting && fileInputRef.current?.click()}
                      onDragOver={!isSubmitting ? handleDragOver : undefined}
                      onDragLeave={!isSubmitting ? handleDragLeave : undefined}
                      onDrop={!isSubmitting ? handleDrop : undefined}
                      className={`border-2 border-dashed rounded-3xl p-8 text-center transition-all ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed border-gray-300' : 'cursor-pointer hover:border-[#FFCE0B]'
                      } ${
                        isDragging ? 'border-[#FFCE0B] bg-yellow-50' : 'border-gray-300 bg-gray-50/50'
                      }`}
                    >
                      <div className="mx-auto w-14 h-14 bg-yellow-100 text-[#FFCE0B] rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                        <UploadCloud className="w-7 h-7" />
                      </div>
                      
                      <div className="font-bold text-lg text-[#0F172A]">ফাইল টেনে আনুন অথবা ক্লিক করুন</div>
                      <div className="text-sm text-[#64748B] mt-1 font-medium">PNG, JPG, PDF (সর্বোচ্চ ১০MB)</div>
                      
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        className="hidden" 
                        accept=".png,.jpg,.jpeg,.pdf" 
                        multiple 
                        onChange={handleFileSelect}
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Uploaded Files List */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-6 space-y-3">
                        {uploadedFiles.map((file, index) => (
                          <motion.div 
                            key={`${file.name}-${index}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-4 shadow-sm"
                          >
                            <div className="flex items-center gap-x-3 overflow-hidden">
                              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                {file.type.includes('pdf') ? (
                                  <FileText className="w-5 h-5 text-red-500" />
                                ) : (
                                  <FileImage className="w-5 h-5 text-blue-500" />
                                )}
                              </div>
                              <div className="truncate">
                                <div className="font-bold text-sm text-[#0F172A] truncate">{file.name}</div>
                                <div className="text-xs text-[#64748B] font-medium">{(file.size / 1024 / 1024).toFixed(1)} MB</div>
                              </div>
                            </div>
                            
                            {!isSubmitting && (
                              <button 
                                onClick={() => removeFile(index)} 
                                className="text-gray-400 hover:text-red-500 p-2 transition-colors flex-shrink-0 rounded-lg hover:bg-red-50"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button 
                      onClick={submitFiles}
                      disabled={isSubmitting}
                      className={`mt-8 w-full py-4 text-[#0F172A] font-bold rounded-2xl text-lg transition-all flex items-center justify-center gap-2 ${
                        isSubmitting 
                          ? 'bg-[#D4A809] cursor-wait' 
                          : 'bg-[#FFCE0B] hover:bg-[#D4A809] active:scale-[0.98] shadow-lg shadow-[#FFCE0B]/20'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          অ্যানালাইসিস চলছে...
                        </>
                      ) : (
                        'অ্যানালাইসিস শুরু করুন'
                      )}
                    </button>
                    
                    <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-[#64748B] font-bold">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      আপনার ডেটা সম্পূর্ণ নিরাপদ। আমরা কখনো পেজে লগইন করি না।
                    </div>
                  </motion.div>
                )}

                {/* 3. EXAMPLE VIEWS */}
                {(view === 'insights' || view === 'posts') && (
                  <motion.div 
                    key="example"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-bold text-lg text-[#0F172A] mb-4">
                      {view === 'insights' ? 'Page Insights এর উদাহরণ' : 'পোস্টের স্ক্রিনশটের উদাহরণ'}
                    </h4>
                    
                    <div className="space-y-6 pb-2">
                      <div className="space-y-3">
                        <div className="bg-gray-100 rounded-xl aspect-[4/3] border border-gray-200 overflow-hidden flex items-center justify-center relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 opacity-50"></div>
                          <div className="text-gray-400 font-medium z-10 flex flex-col items-center gap-2">
                            <Images className="w-8 h-8 opacity-50" />
                            <span>উদাহরণ ইমেজ ১</span>
                          </div>
                        </div>
                        <p className="text-center text-sm font-bold text-[#FFCE0B] bg-yellow-50 py-2.5 rounded-xl border border-yellow-100">
                          এই ধরনের স্ক্রিনশট আপলোড করুন
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-gray-100 rounded-xl aspect-[4/3] border border-gray-200 overflow-hidden flex items-center justify-center relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 opacity-50"></div>
                          <div className="text-gray-400 font-medium z-10 flex flex-col items-center gap-2">
                            <Images className="w-8 h-8 opacity-50" />
                            <span>উদাহরণ ইমেজ ২</span>
                          </div>
                        </div>
                        <p className="text-center text-sm font-bold text-[#FFCE0B] bg-yellow-50 py-2.5 rounded-xl border border-yellow-100">
                          এই ধরনের স্ক্রিনশট আপলোড করুন
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
