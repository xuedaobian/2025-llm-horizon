import React from 'react';
import { Vendor } from '../types';
import { VENDOR_THEMES } from '../constants';
import { motion } from 'framer-motion';

interface FilterBarProps {
  selectedVendor: Vendor | null;
  onSelect: (vendor: Vendor | null) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ selectedVendor, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center py-6 px-4 sticky top-0 z-20 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
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
            <span className={`w-2 h-2 rounded-full ${theme.color}`}></span>
            {vendor}
          </motion.button>
        );
      })}
    </div>
  );
};

export default FilterBar;