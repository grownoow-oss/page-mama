import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OverviewTab from '../components/sample-report/OverviewTab';
import ContentIdeasTab from '../components/sample-report/ContentIdeasTab';
import CompetitorTab from '../components/sample-report/CompetitorTab';
import Navbar from '../components/Navbar';

export default function SampleReportPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'ideas' | 'competitor'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'ideas', label: 'Content Ideas' },
    { id: 'competitor', label: 'Competitor Analysis' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Sample Report • Facebook & TikTok • Urban Deshi</div>
            <h1 className="text-4xl font-semibold tracking-tight">আপনার পেজের AI বিশ্লেষণ রিপোর্ট</h1>
          </div>
          <div className="text-right">
            <div className="text-6xl font-bold text-[#FFB800]">61</div>
            <div className="text-sm text-gray-500 -mt-1">/100 Health Score</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-6 border-b sticky top-[100px] bg-white z-40">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-8 py-4 font-semibold text-lg transition-all relative ${
                activeTab === tab.id 
                  ? 'text-[#FFB800]' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="underline"
                  className="absolute bottom-0 left-0 h-[3px] bg-[#FFB800] w-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content with Animation */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <OverviewTab />
            </motion.div>
          )}

          {activeTab === 'ideas' && (
            <motion.div
              key="ideas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <ContentIdeasTab />
            </motion.div>
          )}

          {activeTab === 'competitor' && (
            <motion.div
              key="competitor"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <CompetitorTab />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
