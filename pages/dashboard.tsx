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
  const [planType, setPlanType] = useState('Smart Growth')
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

  const handleRegenerate = () => {
    setIsRegenerating(true)
    setTimeout(() => setIsRegenerating(false), 2000)
  }

  const handleLogout = async () => {
    await logout()
  }

  const toggleTask = (idx: number) => {
    setTasks(prev => prev.map((v, i) => (i === idx ? !v : v)))
  }

  const handleDownloadPDF = () => {
    alert('PDF ডাউনলোড শুরু হচ্ছে... (N8n webhook যোগ করলে রিয়েল PDF আসবে)')
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-[#FFB800] animate-spin" />
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
          <div className="text-sm text-gray-500 font-medium mb-1">Quick Check • ৯৯ টাকা</div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">আপনার পেজের স্বাস্থ্য রিপোর্ট</h1>
        </div>
        <button onClick={handleDownloadPDF} className="px-6 py-3 bg-[#FFB800] hover:bg-[#E5BA0A] transition-colors text-[#0F172A] font-bold rounded-2xl flex items-center gap-x-2 shadow-sm text-sm">
          <Download className="w-4 h-4" /> Download PDF
        </button>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 mb-6">
        <div className="flex items-end gap-x-4">
          <div className="text-[80px] leading-none font-extrabold text-[#FFB800] tracking-tighter">82</div>
          <div className="pb-4">
            <div className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-bold rounded-2xl inline-block">+7</div>
          </div>
        </div>
        <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest mt-2">Health Score</div>
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
            <p className="text-xs text-red-500 font-medium mt-0.5">-14% reach impact</p>
          </div>
        </div>
      </motion.div>
    </div>
  )

  const renderSmartGrowth = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">{user.email} • Smart Growth</p>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">আপনার পেজের স্বাস্থ্য রিপোর্ট</h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button onClick={handleRegenerate} disabled={isRegenerating} className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-2xl transition-all disabled:opacity-50">
            <RefreshCcw className={`w-4 h-4 ${isRegenerating ? 'animate-spin' : ''}`} />
            {isRegenerating ? 'Generating...' : 'Regenerate'}
          </button>
          <button onClick={handleDownloadPDF} className="flex items-center gap-2 px-5 py-2.5 bg-[#FFB800] hover:bg-[#E5BA0A] text-[#0F172A] text-sm font-bold rounded-2xl transition-colors shadow-sm shadow-yellow-500/30">
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>
      </div>

      {/* Health Score */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Overall Health Score</p>
            <div className="flex items-end gap-4">
              <span className="text-[80px] sm:text-[96px] font-extrabold leading-none text-[#FFB800] tracking-tighter">87</span>
              <div className="pb-3">
                <p className="text-emerald-600 font-extrabold text-lg leading-tight">+12 ↑</p>
                <p className="text-xs text-gray-400 font-medium">since last week</p>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-5 md:border-l border-gray-100 md:pl-12">
            {[
              { label: 'Reach Potential', pct: '68%', val: '+34%', color: 'bg-emerald-500', textColor: 'text-emerald-600', delay: 0.3 },
              { label: 'Spammy Risk', pct: '42%', val: 'Medium', color: 'bg-yellow-500', textColor: 'text-yellow-500', delay: 0.5 },
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

      {/* Insights Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-7">
          <h2 className="font-extrabold text-lg text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0"><AlertTriangle className="w-4 h-4 text-red-500" /></span>
            মূল সমস্যা
          </h2>
          <div className="space-y-4">
            {[
              { title: '"ডিসকাউন্ট" শব্দ ১২ বার ব্যবহার হয়েছে', impact: '-18% reach impact' },
              { title: 'ভুল পোস্টিং টাইম', impact: '-34% reach impact' },
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
            সেরা পোস্টিং টাইম
          </h2>
          <div className="space-y-3">
            {[{ time: 'রাত ৮:১৫ – ৯:৩০', boost: '+41% reach' }, { time: 'সকাল ১১:০০ – ১২:১৫', boost: '+29% reach' }].map((t, i) => (
              <div key={i} className="flex justify-between items-center p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="font-medium text-gray-700 text-sm">{t.time}</span>
                <span className="font-bold text-emerald-600 text-sm bg-emerald-100 px-2.5 py-1 rounded-lg">{t.boost}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Action Plan */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-yellow-50 to-transparent rounded-bl-full pointer-events-none opacity-70" />
        <div className="flex flex-wrap items-center justify-between mb-7 gap-4 relative z-10">
          <h2 className="font-extrabold text-xl sm:text-2xl text-gray-900">৭ দিনের অ্যাকশন প্ল্যান</h2>
          <span className="text-xs px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-bold uppercase tracking-wider">Ready to implement</span>
        </div>
        <div className="space-y-4 relative z-10">
          {[
            { title: '"ডিসকাউন্ট" শব্দ ৭ দিনের জন্য এড়ান', desc: 'এর বদলে "বিশেষ অফার" বা "স্পেশাল প্রাইস" ব্যবহার করুন।' },
            { title: 'পোস্ট করুন শুধু রাত ৮:১৫ – ৯:৩০', desc: 'আপনার অডিয়েন্সের সবচেয়ে অ্যাকটিভ টাইম। রিচ ৪০% পর্যন্ত বাড়তে পারে।' },
          ].map((item, idx) => (
            <label key={idx} className={`flex items-start gap-4 p-4 sm:p-5 border rounded-2xl cursor-pointer transition-all group ${tasks[idx] ? 'border-emerald-200 bg-emerald-50/50' : 'border-gray-100 hover:border-yellow-200 hover:bg-yellow-50/30'}`}>
              <input type="checkbox" checked={tasks[idx]} onChange={() => toggleTask(idx)} className="w-5 h-5 mt-0.5 rounded accent-[#FFB800] cursor-pointer flex-shrink-0" />
              <div>
                <p className={`font-semibold text-sm transition-colors ${tasks[idx] ? 'line-through text-gray-400' : 'text-gray-900 group-hover:text-[#FFB800]'}`}>{item.title}</p>
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
          <div className="text-sm text-gray-500 font-medium mb-1">Pro Plan • {user.email}</div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">আপনার পেজের স্বাস্থ্য রিপোর্ট</h1>
        </div>
        <button onClick={handleDownloadPDF} className="px-6 py-3 bg-[#FFB800] hover:bg-[#E5BA0A] transition-colors text-[#0F172A] font-bold rounded-2xl shadow-sm text-sm flex items-center gap-2">
          <Download className="w-4 h-4" /> Download Full Report
        </button>
      </div>

      <div className="grid md:grid-cols-12 gap-6 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="md:col-span-7 bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-end gap-x-4">
            <div className="text-[80px] sm:text-[92px] leading-none font-extrabold text-[#FFB800] tracking-tighter">91</div>
            <div className="pb-4"><div className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-bold rounded-2xl inline-block">+19</div></div>
          </div>
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest mt-2">Health Score</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="md:col-span-5 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col justify-center">
          <div className="font-extrabold text-lg text-gray-900 mb-5">প্রতিদ্বন্দ্বীদের তুলনা</div>
          <div className="space-y-4 text-sm">
            {[{ label: 'Your Score', val: 91, color: 'text-emerald-600' }, { label: 'Competitor A', val: 78, color: 'text-gray-900' }, { label: 'Competitor B', val: 84, color: 'text-gray-900' }].map((c, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-600 font-medium">{c.label}</span>
                  <span className={`font-bold text-lg ${c.color}`}>{c.val}</span>
                </div>
                {i < 2 && <div className="w-full h-px bg-gray-100" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
        <div className="font-extrabold text-xl text-gray-900 mb-6">প্রো ফিচারস</div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { label: 'আপনার জন্য', color: 'bg-yellow-50/50 border-yellow-100', numColor: 'bg-yellow-100 text-[#FFB800]', items: ['সপ্তাহিক PDF রিপোর্ট', 'প্রায়োরিটি WhatsApp সাপোর্ট', 'অ্যাডভান্সড অ্যাকশন প্ল্যান'] },
            { label: 'টিমের জন্য', color: 'bg-emerald-50/50 border-emerald-100', numColor: 'bg-emerald-100 text-emerald-600', items: ['টিম মেম্বার অ্যাক্সেস (5 জন)', 'কম্পিটিটর অ্যানালাইসিস', 'প্রায়োরিটি সাপোর্ট'] },
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
        <title>Dashboard - PageMama</title>
        <meta name="description" content="আপনার Facebook পেজের স্বাস্থ্য রিপোর্ট দেখুন" />
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
                  {['Quick Check', 'Smart Growth', 'Pro'].map((p) => (
                    <button key={p} onClick={() => handlePlanChange(p)} className={`w-full text-left px-4 py-2.5 text-sm font-semibold hover:bg-gray-50 transition-colors ${planType === p ? 'text-[#FFB800] bg-yellow-50/50' : 'text-gray-700'}`}>{p}</button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-x-3">
            <div className="hidden sm:flex items-center gap-x-2">
              <div className="w-8 h-8 bg-yellow-100 text-[#FFB800] rounded-full flex items-center justify-center text-xs font-extrabold">
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
      {planType === 'Quick Check' && renderQuickCheck()}
      {planType === 'Smart Growth' && renderSmartGrowth()}
      {planType === 'Pro' && renderPro()}
    </div>
  )
}
