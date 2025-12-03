import React, { useState, useMemo } from 'react';
import { TIMELINE_DATA } from './constants';
import { Vendor } from './types';
import TimelineItem from './components/TimelineItem';
import FilterBar from './components/FilterBar';
import TrendSummary from './components/TrendSummary';
import { Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);

  const filteredEvents = useMemo(() => {
    if (!selectedVendor) return TIMELINE_DATA;
    return TIMELINE_DATA.filter((event) => event.vendor === selectedVendor);
  }, [selectedVendor]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-900/10 rounded-full blur-[120px] opacity-30"></div>
      </div>

      <header className="relative z-10 pt-20 pb-10 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-400 mb-4 animate-fade-in-up">
           <Sparkles size={12} />
           <span>2025 AI 全景图</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
          推理元年
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          2025年关键大语言模型发布的综合时间轴，从DeepSeek的高效模型到Google的多模态霸主地位。
        </p>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto pb-24">
        <FilterBar selectedVendor={selectedVendor} onSelect={setSelectedVendor} />

        <div className="mt-12 px-4 md:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              该筛选条件下未找到发布记录。
            </div>
          ) : (
            <div className="relative">
              {filteredEvents.map((event, index) => (
                <TimelineItem 
                  key={event.id} 
                  event={event} 
                  index={index} 
                  isLast={index === filteredEvents.length - 1} 
                />
              ))}
            </div>
          )}
        </div>

        <TrendSummary />
      </main>

      <footer className="relative z-10 border-t border-slate-900 py-8 text-center text-slate-600 text-sm">
        <p>© 2025 AI 时间轴可视化。基于 React & Tailwind 构建。</p>
      </footer>
    </div>
  );
};

export default App;