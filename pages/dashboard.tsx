import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { RefreshCcw, Download, AlertTriangle, CheckCircle2, LogOut, ChevronDown, Loader2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Logo from '../components/Logo'

export default function Dashboard() {
  const router = useRouter()
  const { user, userProfile, loading, logout } = useAuth()
  const [isRegenerating, setIsRegenerating] = useState(false)
  const [tasks, setTasks] = useState([false, false])
  const [planType, setPlanType] = useState('স্মার্ট গ্রোথ')
  const [showPlanMenu, setShowPlanMenu] = useState(false)

  // Auth guard
  useEffect(() => {
    if (!loading && !user) {
      router.replace('/')
    }
  }, [user, loading, router])

  // Sync plan from profile
  useEffect(() => {
    if (userProfile?.plan) {
      setPlanType(userProfile.plan)
    } else {
      const saved = localStorage.getItem('userPlan')
      if (saved) setPlanType(saved)
    }
  }, [userProfile])

  const handlePlanChange = (plan: string) => {
    setPlanType(plan)
    localStorage.setItem('userPlan', plan)
    setShowPlanMenu(false)
  }

  const handleLogout = async () => {
    await logout()
  }

  const toggleTask = (idx: number) => {
    setTasks(prev => prev.map((v, i) => (i === idx ? !v : v)))
  }

  const handleDownloadPDF = () => {
    alert('PDF ডাউনলোড শুরু হচ্ছে...')
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-[#FF5E00] animate-spin" />
      </div>
    )
  }

  if (!user) return null

  const displayName = user.displayName || userProfile?.displayName || user.email?.split('@')[0] || 'User'
  const initials = displayName.slice(0, 2).toUpperCase()

  // ── Plan Renders ──────────────────────────────────────────────────────────
  const renderQuickCheck = () => (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <div className="text-sm text-gray-500 font-medium mb-1">কুইক চেক • ৯৯ টাকা</div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">আপনার পেজের রিপোর্ট</h1>
        </div>
        <button onClick={handleDownloadPDF} className="px-6 py-3 bg-[#FF5E00] hover:bg-[#E65500] text-white font-bold rounded-2xl flex items-center gap-x-2 shadow-sm text-sm transition-all">
          <Download className="w-4 h-4" /> ডাউনলোড PDF
        </button>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 mb-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            <span className="text-lg font-bold">লাল জোন (রিস্ক)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-slate-400" />
            <span className="text-lg font-bold">ধূসর জোন (সুযোগ)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-emerald-500" />
            <span className="text-lg font-bold">সবুজ জোন (শক্তি)</span>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
        <h2 className="font-extrabold text-lg text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center"><AlertTriangle className="w-4 h-4 text-red-500" /></span>
          মূল সমস্যা
        </h2>
        <div className="flex gap-3">
          <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-800 text-sm">"ডিসকাউন্ট" শব্দ ৮ বার ব্যবহার হয়েছে</p>
            <p className="text-xs text-red-500 font-medium mt-0.5">-১৪% রিচ ইমপ্যাক্ট</p>
          </div>
        </div>
      </motion.div>
    </div>
  )

  const renderSmartGrowth = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">{user.email} • স্মার্ট গ্রোথ</p>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">আপনার পেজের রিপোর্ট</h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button onClick={handleDownloadPDF} className="flex items-center gap-2 px-6 py-3 bg-[#FF5E00] hover:bg-[#E65500] text-white text-sm font-bold rounded-2xl transition-all shadow-sm shadow-orange-500/20">
            <Download className="w-4 h-4" /> ডাউনলোড PDF
          </button>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                <span className="text-lg font-bold">লাল জোন (রিস্ক)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-slate-400" />
                <span className="text-lg font-bold">ধূসর জোন (সুযোগ)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-emerald-500" />
                <span className="text-lg font-bold">সবুজ জোন (শক্তি)</span>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-5 md:border-l border-gray-100 md:pl-12">
            {[
              { label: 'রিচ পটেনশিয়াল', pct: '৬৮%', val: '+৩৪%', color: 'bg-emerald-500', textColor: 'text-emerald-600', delay: 0.3 },
              { label: 'স্প্যামি রিস্ক', pct: '৪২%', val: 'মাঝারি', color: 'bg-orange-500', textColor: 'text-orange-500', delay: 0.5 },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold text-gray-700">{item.label}</span>
                  <span className={`font-bold ${item.textColor}`}>{item.val}</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: item.pct }} transition={{ duration: 1.2, ease: 'easeOut', delay: item.delay }} className={`h-full ${item.color} rounded-full`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-7">
          <h2 className="font-extrabold text-lg text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0"><AlertTriangle className="w-4 h-4 text-red-500" /></span>
            মূল সমস্যা
          </h2>
          <div className="space-y-4">
            {[
              { title: '"ডিসকাউন্ট" শব্দ ১২ বার ব্যবহার হয়েছে', impact: '-১৮% রিচ ইমপ্যাক্ট' },
              { title: 'ভুল পোস্টিং টাইম', impact: '-৩৪% রিচ ইমপ্যাক্ট' },
            ].map((p, i) => (
              <div key={i} className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{p.title}</p>
                  <p className="text-xs text-red-500 font-medium mt-0.5">{p.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-7">
          <h2 className="font-extrabold text-lg text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0"><CheckCircle2 className="w-4 h-4 text-emerald-600" /></span>
            কখন পোস্ট করলে বেশি দেখা যাবে
          </h2>
          <div className="space-y-3">
            {[{ time: 'রাত ৮:১৫ – ৯:৩০', boost: '+৪১% রিচ' }, { time: 'সকাল ১১:০০ – ১২:১৫', boost: '+২৯% রিচ' }].map((t, i) => (
              <div key={i} className="flex justify-between items-center p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="font-medium text-gray-700 text-sm">{t.time}</span>
                <span className="font-bold text-emerald-600 text-sm bg-emerald-100 px-2.5 py-1 rounded-lg">{t.boost}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-orange-50 to-transparent rounded-bl-full pointer-events-none opacity-70" />
        <div className="flex wrap items-center justify-between mb-7 gap-4 relative z-10">
          <h2 className="font-extrabold text-xl sm:text-2xl text-gray-900">৭ দিনের অ্যাকশন প্ল্যান</h2>
          <span className="text-xs px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-bold uppercase tracking-wider">তৈরি আছে</span>
        </div>
        <div className="space-y-4 relative z-10">
          {[
            { title: '"ডিসকাউন্ট" শব্দ ৭ দিনের জন্য এড়ান', desc: 'এর বদলে "বিশেষ অফার" বা "স্পেশাল প্রাইস" ব্যবহার করুন।' },
            { title: 'পোস্ট করুন শুধু রাত ৮:১৫ – ৯:৩০', desc: 'আপনার অডিয়েন্সের সবচেয়ে অ্যাকটিভ টাইম।' },
          ].map((item, idx) => (
            <label key={idx} className={`flex items-start gap-4 p-4 sm:p-5 border rounded-2xl cursor-pointer transition-all group ${tasks[idx] ? 'border-emerald-200 bg-emerald-50/50' : 'border-gray-100 hover:border-orange-200 hover:bg-orange-50/30'}`}>
              <input type="checkbox" checked={tasks[idx]} onChange={() => toggleTask(idx)} className="w-5 h-5 mt-0.5 rounded accent-[#FF5E00] cursor-pointer flex-shrink-0" />
              <div>
                <p className={`font-semibold text-sm transition-colors ${tasks[idx] ? 'line-through text-gray-400' : 'text-gray-900 group-hover:text-[#FF5E00]'}`}>{item.title}</p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </motion.div>
    </div>
  )

  const renderPro = () => (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <div className="text-sm text-gray-500 font-medium mb-1">প্রো প্ল্যান • {user.email}</div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">আপনার পেজের রিপোর্ট</h1>
        </div>
        <button onClick={handleDownloadPDF} className="px-6 py-3 bg-[#FF5E00] hover:bg-[#E65500] text-white font-bold rounded-2xl shadow-sm text-sm flex items-center gap-2">
          <Download className="w-4 h-4" /> ডাউনলোড পূর্ণ রিপোর্ট
        </button>
      </div>

      <div className="grid md:grid-cols-12 gap-6 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="md:col-span-12 bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                <span className="text-lg font-bold">লাল জোন (রিস্ক)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-slate-400" />
                <span className="text-lg font-bold">ধূসর জোন (সুযোগ)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-emerald-500" />
                <span className="text-lg font-bold">সবুজ জোন (শক্তি)</span>
              </div>
            </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
        <div className="font-extrabold text-xl text-gray-900 mb-6">প্রো ফিচারস</div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { label: 'আপনার জন্য', color: 'bg-orange-50/50 border-orange-100', numColor: 'bg-orange-100 text-[#FF5E00]', items: ['সপ্তাহিক PDF রিপোর্ট', '১টি ১০ মিনিট ভিডিও কল', 'অ্যাডভান্সড অ্যাকশন প্ল্যান'] },
            { label: 'টিমের জন্য', color: 'bg-emerald-50/50 border-emerald-100', numColor: 'bg-emerald-100 text-emerald-600', items: ['টিম মেম্বার অ্যাক্সেস', 'প্রতিদ্বন্দ্বীরা কী করছে', 'প্রায়োরিটি সাপোর্ট'] },
          ].map((section, si) => (
            <div key={si} className={`rounded-2xl p-6 border ${section.color}`}>
              <div className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full ${section.numColor} flex items-center justify-center text-sm font-bold`}>{si + 1}</span>
                {section.label}
              </div>
              <div className="space-y-3 text-sm font-medium text-gray-700">
                {section.items.map((item, ii) => (
                  <div key={ii} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Head>
        <title>ড্যাশবোর্ড - পেজ মামা</title>
      </Head>

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <Link href="/" className="hover:opacity-90 transition-opacity flex items-center h-full pt-1">
              <Logo size="sm" />
            </Link>

            {/* Plan Switcher */}
            <div className="relative">
              <button onClick={() => setShowPlanMenu(!showPlanMenu)} className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-emerald-100 hover:bg-emerald-200 transition-colors text-emerald-700 text-xs font-bold rounded-full">
                {planType} <ChevronDown className="w-3 h-3" />
              </button>
              {showPlanMenu && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
                  {['কুইক চেক', 'স্মার্ট গ্রোথ', 'প্রো'].map((p) => (
                    <button key={p} onClick={() => handlePlanChange(p)} className={`w-full text-left px-4 py-2.5 text-sm font-semibold hover:bg-gray-50 transition-colors ${planType === p ? 'text-[#FF5E00] bg-orange-50/50' : 'text-gray-700'}`}>{p}</button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-x-3">
            <div className="hidden sm:flex items-center gap-x-2">
              <div className="w-8 h-8 bg-orange-100 text-[#FF5E00] rounded-full flex items-center justify-center text-xs font-extrabold">
                {initials}
              </div>
              <span className="font-semibold text-sm text-gray-700">{displayName}</span>
            </div>
            <button onClick={handleLogout} className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-red-500 rounded-xl transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:block">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      {planType === 'কুইক চেক' || planType === 'Quick Check' ? renderQuickCheck() : null}
      {planType === 'স্মার্ট গ্রোথ' || planType === 'Smart Growth' ? renderSmartGrowth() : null}
      {planType === 'প্রো' || planType === 'Pro' ? renderPro() : null}
    </div>
  )
}
