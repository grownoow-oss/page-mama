import Link from 'next/link';
import { useRouter } from 'next/router';

export default function DemoPlanSelector({ dark = false }: { dark?: boolean }) {
  const router = useRouter();
  const currentPath = router.pathname;

  const plans = [
    { name: 'Quick Check', path: '/quick-check-demo' },
    { name: 'Smart Growth', path: '/smart-growth-demo' },
    { name: 'Pro Edition', path: '/pro-demo' }
  ];

  return (
    <div className="flex justify-center pt-4 pb-2 px-4 relative z-40 overflow-x-auto no-scrollbar">
      <div className={`inline-flex items-center p-1.5 rounded-full shrink-0 ${dark ? 'bg-[#1E293B]/80 backdrop-blur-md border border-gray-700/50 shadow-xl shadow-black/20' : 'bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-lg shadow-gray-200/20'}`}>
        {plans.map((plan) => (
          <Link
            key={plan.path}
            href={plan.path}
            className={`px-6 py-2 rounded-full text-[13px] sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
              currentPath === plan.path
                ? dark 
                  ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-[#0F172A] text-white shadow-md shadow-[#0F172A]/10'
                : dark 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  : 'text-gray-500 hover:text-[#0F172A] hover:bg-gray-100/80'
            }`}
          >
            {plan.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
