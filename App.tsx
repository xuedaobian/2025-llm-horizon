import React, { useState, useMemo, useRef } from 'react';
import { TIMELINE_DATA } from './constants';
import { Vendor, SortOrder } from './types';
import TimelineItem from './components/TimelineItem';
import FilterBar from './components/FilterBar';
import TrendSummary from './components/TrendSummary';
import { Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleVendorSelect = (vendor: Vendor | null) => {
    setSelectedVendor(vendor);
    // 滚动到时间线顶部，考虑 sticky header 的偏移
    setTimeout(() => {
      if (timelineRef.current) {
        const offset = 160; // FilterBar 的高度偏移
        const top = timelineRef.current.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 0);
  };

  const filteredEvents = useMemo(() => {
    let events = selectedVendor 
      ? TIMELINE_DATA.filter((event) => event.vendor === selectedVendor)
      : [...TIMELINE_DATA];
    
    // 根据排序顺序排列
    if (sortOrder === 'desc') {
      events = [...events].reverse();
    }
    
    return events;
  }, [selectedVendor, sortOrder]);

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
           <span>LLM Timeline 2025</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
          2025 大模型编年史
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          从 DeepSeek-R1 开年惊艳到 Gemini3 逆天参数，7 大厂商 21 次重磅发布，见证 AI 推理能力与多模态融合的全面爆发。
        </p>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto pb-24">
        <FilterBar 
          selectedVendor={selectedVendor} 
          onSelect={handleVendorSelect}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />

        <div ref={timelineRef} className="mt-12 px-4 md:px-8">
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
        <p>© 2025大模型发布时间轴</p>
      </footer>
    </div>
  );
};

export default App;