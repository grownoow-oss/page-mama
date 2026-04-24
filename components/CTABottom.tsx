import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function CTABottom() {
  return (
    <div className="relative py-20 md:py-32 overflow-hidden border-t border-gray-100 bg-white">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[80%] h-[80%] bg-[#FFB800]/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[#0F172A] mb-4 sm:mb-6">
          আজই শুরু হোক আপনার পেজের<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF9D00]">সফলতার যাত্রা</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-[#64748B] mb-10 md:mb-12 max-w-2xl mx-auto">
          ৩০ সেকেন্ডের অ্যানালাইসিসে জানুন আপনার পেজের রিচ কেন কমছে এবং তা বাড়ানোর নিশ্চিত উপায়।
        </p>
        
        <button 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-[#0F172A] transition-all duration-300 bg-[#FFB800] rounded-2xl sm:rounded-full hover:scale-[1.02] active:scale-95 shadow-xl shadow-[#FFB800]/20 hover:shadow-2xl hover:shadow-[#FFB800]/30 hover:bg-[#D4A809] overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
          <span className="relative flex items-center gap-2">
            অ্যানালাইসিস শুরু করুন
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-[#64748B] font-bold">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            কোনো ব্যাংক কার্ড লাগবে না
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            শুধু bKash ও Nagad দিয়ে পেমেন্ট করুন
          </div>
        </div>
      </div>
    </div>
  );
}
