import React from 'react';
import { Vendor, SortOrder } from '../types';
import { VENDOR_THEMES } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { DeepSeek, Gemini, Grok, Meta, Qwen, OpenAI, Claude, Kimi, Minimax, Zhipu } from '@lobehub/icons';

interface FilterBarProps {
  selectedVendor: Vendor | null;
  onSelect: (vendor: Vendor | null) => void;
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
}

// Helper to get vendor icon
const getVendorIcon = (vendor: Vendor) => {
  const iconProps = { size: 14 };
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
      case Vendor.kimi:
      return <Kimi {...iconProps} />;
    case Vendor.miniMax:
      return <Minimax {...iconProps} />;
    case Vendor.zhipu:
      return <Zhipu {...iconProps} />;
    default:
      return null;
  }
};

const FilterBar: React.FC<FilterBarProps> = ({ selectedVendor, onSelect, sortOrder, onSortChange }) => {
  const toggleSort = () => {
    onSortChange(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center items-center py-6 px-4 sticky top-0 z-20 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      {/* 排序按钮 */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleSort}
        className="px-4 py-1.5 rounded-full text-sm font-medium transition-all bg-indigo-600/20 border border-indigo-500/50 text-indigo-300 hover:bg-indigo-600/30 flex items-center gap-2 mr-2"
        title={sortOrder === 'asc' ? '当前：最早优先' : '当前：最新优先'}
      >
        {sortOrder === 'asc' ? (
          <><ArrowUp size={14} /> 最早</>
        ) : (
          <><ArrowDown size={14} /> 最新</>
        )}
      </motion.button>

      <div className="w-px h-6 bg-slate-700 mx-2" />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelect(null)}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
          selectedVendor === null
            ? 'bg-white text-slate-900 shadow-lg shadow-white/10'
            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
        }`}
      >
        全部
      </motion.button>
      
      {Object.values(Vendor).map((vendor) => {
        const theme = VENDOR_THEMES[vendor];
        const isSelected = selectedVendor === vendor;
        
        return (
          <motion.button
            key={vendor}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(isSelected ? null : vendor)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all flex items-center gap-2 ${
              isSelected
                ? `${theme.badgeColor} ${theme.borderColor} shadow-lg`
                : 'bg-slate-900/50 border-slate-800 text-slate-500 hover:border-slate-600'
            }`}
          >
            {getVendorIcon(vendor)}
            {vendor}
          </motion.button>
        );
      })}
    </div>
  );
};

export default FilterBar;