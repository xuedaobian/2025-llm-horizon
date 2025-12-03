import React from 'react';
import { TimelineEvent, Vendor } from '../types';
import { VENDOR_THEMES } from '../constants';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { DeepSeek, Gemini, Grok, Meta, Qwen, OpenAI, Claude } from '@lobehub/icons';

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  isLast: boolean;
}

// Helper to get vendor icon
const getVendorIcon = (vendor: Vendor) => {
  const iconProps = { size: 18 };
  switch (vendor) {
    case Vendor.DeepSeek:
      return <DeepSeek.Color {...iconProps} />;
    case Vendor.Google:
      return <Gemini.Color {...iconProps} />;
    case Vendor.xAI:
      return <Grok {...iconProps} />;
    case Vendor.Meta:
      return <Meta.Color {...iconProps} />;
    case Vendor.Alibaba:
      return <Qwen.Color {...iconProps} />;
    case Vendor.OpenAI:
      return <OpenAI {...iconProps} />;
    case Vendor.Anthropic:
      return <Claude.Color {...iconProps} />;
    default:
      return <OpenAI {...iconProps} />;
  }
};

const TimelineItem: React.FC<TimelineItemProps> = ({ event, index, isLast }) => {
  const theme = VENDOR_THEMES[event.vendor];
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative pl-8 md:pl-0 group"
    >
      {/* Desktop Layout Grid */}
      <div className="md:grid md:grid-cols-12 md:gap-8">
        
        {/* Left Side (Date & Month for Desktop) */}
        <div className="hidden md:flex md:col-span-5 justify-end items-start pt-2">
          <div className="flex flex-col items-end text-right">
             <span className={`text-2xl font-bold tracking-tight ${theme.textColor}`}>
              {event.dateStr.split(' ')[0]} <span className="text-slate-100">{event.dateStr.split(' ')[1]}</span>
             </span>
             <span className="text-xs uppercase tracking-widest text-slate-500 mt-1 font-mono">
               {event.month}
             </span>
          </div>
        </div>

        {/* Center Line and Dot */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:relative md:w-auto md:col-span-2 flex flex-col items-center">
          {/* Vertical Line */}
          <div className={`absolute top-0 bottom-0 w-px bg-slate-800 group-hover:bg-slate-700 transition-colors ${isLast ? 'h-0' : ''} md:h-full`}></div>
          
          {/* Dot */}
          <div className={`relative z-10 w-4 h-4 rounded-full border-2 ${theme.borderColor} bg-slate-900 mt-3 md:mt-3 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-125 transition-transform duration-300`}>
            <div className={`absolute inset-0 rounded-full ${theme.color} opacity-40 animate-pulse`}></div>
          </div>
        </div>

        {/* Right Side (Card Content) */}
        <div className="md:col-span-5 pb-12">
          
          {/* Mobile Date Header (Visible only on small screens) */}
          <div className="md:hidden flex items-center gap-2 mb-2">
            <Calendar size={14} className="text-slate-500" />
            <span className="text-sm font-mono text-slate-400">{event.dateStr}</span>
          </div>

          <motion.div 
            whileHover={{ y: -5 }}
            className={`bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-5 shadow-sm transition-all duration-300 hover:border-slate-600 hover:shadow-xl hover:shadow-${theme.color.replace('bg-', '')}/5 relative overflow-hidden`}
          >
            {/* Gradient Glow */}
            <div className={`absolute -right-10 -top-10 w-32 h-32 ${theme.color} opacity-5 blur-3xl rounded-full pointer-events-none`}></div>

            <div className="flex justify-between items-start mb-3">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${theme.badgeColor}`}>
                {getVendorIcon(event.vendor)}
                {event.vendor}
              </span>
              </div>
            
            <h3 className="text-xl font-bold text-slate-100 mb-2 leading-tight">
              {event.name}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              {event.description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;