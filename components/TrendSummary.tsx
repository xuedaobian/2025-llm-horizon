import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Brain, Layers, Code, Zap } from 'lucide-react';
import { DeepSeek, Claude, Gemini, Qwen } from '@lobehub/icons';
import { VENDOR_THEMES } from '../constants';
const majorVendorsCount = Object.keys(VENDOR_THEMES).length;
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
          <h2 className="text-2xl font-bold text-white">2025 年度回顾</h2>
        </div>

        {/* 数据统计 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-indigo-400">21</div>
            <div className="text-xs text-slate-500 mt-1">重大发布</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-emerald-400">{majorVendorsCount}</div>
            <div className="text-xs text-slate-500 mt-1">主要厂商</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-rose-400">12</div>
            <div className="text-xs text-slate-500 mt-1">月份覆盖</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-orange-400">∞</div>
            <div className="text-xs text-slate-500 mt-1">竞争激烈</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/30 rounded-xl p-5">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-200 mb-3">
              <Brain className="text-blue-400" size={18} />
              推理能力成为核心战场
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              从 <span className="inline-flex items-center gap-1"><DeepSeek.Color size={14} /> DeepSeek-R1</span> 开年定调，
              到各家纷纷推出 Thinking Mode，
              <span className="text-slate-200 font-medium"> 深度推理</span> 取代简单对话成为模型能力的核心指标。
            </p>
          </div>

          <div className="bg-slate-800/30 rounded-xl p-5">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-200 mb-3">
              <Code className="text-purple-400" size={18} />
              AI 编程体验革命
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              <span className="inline-flex items-center gap-1"><Claude.Color size={14} /> Claude</span> 系列从 3.7 到 Sonnet 4.5，
              彻底改写了开发者的工作方式，
              <span className="text-slate-200 font-medium">"世界最好的编码模型"</span> 之争持续升温。
            </p>
          </div>

          <div className="bg-slate-800/30 rounded-xl p-5">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-200 mb-3">
              <Layers className="text-rose-400" size={18} />
              MoE 架构全面普及
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              混合专家（MoE）成为主流架构。从 Llama 4 到 DeepSeek V3.1，
              <span className="text-slate-200 font-medium"> 用更少参数实现更强能力</span>，效率与性能兼得。
            </p>
          </div>

          <div className="bg-slate-800/30 rounded-xl p-5">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-200 mb-3">
              <Zap className="text-orange-400" size={18} />
              多模态与全能模型
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              <span className="inline-flex items-center gap-1"><Gemini.Color size={14} /> Gemini</span> 和
              <span className="inline-flex items-center gap-1 ml-1"><Qwen.Color size={14} /> Qwen-Omni</span> 引领潮流，
              <span className="text-slate-200 font-medium"> 文本、图像、音频、视频</span> 原生统一处理成为标配。
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-800">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <DeepSeek.Color size={14} /> DeepSeek 领跑开源
            </span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5">
              <Claude.Color size={14} /> Anthropic 主打编程
            </span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5">
              <Gemini.Color size={14} /> Google 多模态称王
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrendSummary;
