import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Cpu, Network } from 'lucide-react';

const TrendSummary: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 mx-4 max-w-4xl md:mx-auto bg-gradient-to-br from-indigo-950/30 to-slate-900/80 border border-indigo-500/30 rounded-2xl p-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-indigo-500/20 rounded-lg">
            <TrendingUp className="text-indigo-400" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">2025 行业趋势总结</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-200 mb-3">
              <Cpu className="text-rose-400" size={18} />
              推理能力优先
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              重点已从单纯的语言预测转向
              <span className="text-slate-200 font-medium"> 深度逻辑推理</span>。
              像 GPT-5（融合 o 系列）和 DeepSeek-R1 这样的模型正在将多步问题解决能力置于简单生成之上。
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-200 mb-3">
              <Network className="text-emerald-400" size={18} />
              原生多模态与智能体
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              “全能”模型成为新标准。实时视频/语音交互和自主智能体行为正在取代简单的聊天界面，架起数字智能与现实世界行动之间的桥梁。
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-xs uppercase tracking-widest">
                来源：2025 AI 行业报告
            </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TrendSummary;