import { TimelineEvent, Vendor, VendorConfig } from './types';
import { Bot, Cpu, Zap, Brain, Globe, Sparkles } from 'lucide-react';

export const VENDOR_THEMES: Record<Vendor, VendorConfig> = {
  [Vendor.DeepSeek]: {
    color: 'bg-blue-600',
    borderColor: 'border-blue-500',
    badgeColor: 'bg-blue-500/20 text-blue-300',
    textColor: 'text-blue-400'
  },
  [Vendor.Google]: {
    color: 'bg-rose-500', // Using a distinct color, though Gemini is usually multi-color
    borderColor: 'border-rose-500',
    badgeColor: 'bg-rose-500/20 text-rose-300',
    textColor: 'text-rose-400'
  },
  [Vendor.xAI]: {
    color: 'bg-stone-100',
    borderColor: 'border-stone-200',
    badgeColor: 'bg-stone-200/20 text-stone-200',
    textColor: 'text-stone-100'
  },
  [Vendor.Meta]: {
    color: 'bg-sky-500',
    borderColor: 'border-sky-500',
    badgeColor: 'bg-sky-500/20 text-sky-300',
    textColor: 'text-sky-400'
  },
  [Vendor.Alibaba]: {
    color: 'bg-orange-500',
    borderColor: 'border-orange-500',
    badgeColor: 'bg-orange-500/20 text-orange-300',
    textColor: 'text-orange-400'
  },
  [Vendor.OpenAI]: {
    color: 'bg-emerald-500',
    borderColor: 'border-emerald-500',
    badgeColor: 'bg-emerald-500/20 text-emerald-300',
    textColor: 'text-emerald-400'
  }
};

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: 'deepseek-r1',
    month: '1月',
    dateStr: '1月 20日',
    name: 'DeepSeek-R1',
    vendor: Vendor.DeepSeek,
    description: '继2024年底发布DeepSeek-V3后，推出了主打推理能力的R1模型。在逻辑推理和代码生成任务上表现优异，保持开源策略。'
  },
  {
    id: 'gemini-2-flash',
    month: '1月',
    dateStr: '1月 30日',
    name: 'Gemini 2.0 Flash',
    vendor: Vendor.Google,
    description: '新的默认模型，以速度和成本优势见长。'
  },
  {
    id: 'gemini-2-pro',
    month: '2月',
    dateStr: '2月 5日',
    name: 'Gemini 2.0 Pro',
    vendor: Vendor.Google,
    description: '在复杂任务处理上不仅提升了多模态能力，还引入了更强的“思考”模式（Thinking Mode）。'
  },
  {
    id: 'grok-3',
    month: '2月',
    dateStr: '2月 17日',
    name: 'Grok 3',
    vendor: Vendor.xAI,
    description: '马斯克宣称其为“地球上最聪明的AI”。在拥有10万块H100的集群上训练完成，主打极致推理能力和更少的内容审查。'
  },
  {
    id: 'deepseek-v3-update',
    month: '3月',
    dateStr: '3月 24日',
    name: 'DeepSeek-V3 (0324)',
    vendor: Vendor.DeepSeek,
    description: 'V3版本的迭代更新，进一步优化了模型架构和效率。'
  },
  {
    id: 'llama-4',
    month: '4月',
    dateStr: '4月 5日',
    name: 'Llama 4 (Scout & Maverick)',
    vendor: Vendor.Meta,
    description: '全面转向MoE（混合专家）架构，支持原生多模态。中小尺寸模型已在开源社区设立新标杆。'
  },
  {
    id: 'qwen-3',
    month: '4月',
    dateStr: '4月 29日',
    name: 'Qwen 3 Series',
    vendor: Vendor.Alibaba,
    description: '涵盖从0.6B到235B的多种参数规模。在多语言处理和长文本能力上继续领跑，全面开源。'
  },
  {
    id: 'gemini-2-5',
    month: '6月',
    dateStr: '6月 17日',
    name: 'Gemini 2.5 Pro & Flash',
    vendor: Vendor.Google,
    description: '针对“适应性思考”优化。Flash降低延迟，Pro在编码和数学基准测试中刷新记录。'
  },
  {
    id: 'gpt-5',
    month: '8月',
    dateStr: '8月 (夏季)',
    name: 'GPT-5',
    vendor: Vendor.OpenAI,
    description: '“全能助手”，将推理模型（o系列）与GPT通用能力融合，具备极强多模态交互和自主Agent能力。',
    isSpeculated: true
  },
  {
    id: 'deepseek-v3-1',
    month: '8月',
    dateStr: '8月 21日',
    name: 'DeepSeek V3.1',
    vendor: Vendor.DeepSeek,
    description: '采用全新混合架构，在SWE-bench等特定基准测试上性能提升超过40%。'
  },
  {
    id: 'qwen-3-omni',
    month: '9月',
    dateStr: '9月 22日',
    name: 'Qwen 3-Omni',
    vendor: Vendor.Alibaba,
    description: '具有实时语音和视频交互能力，对标GPT-4o和GPT-5的实时交互体验。'
  },
  {
    id: 'gemini-2-5-image',
    month: '10月',
    dateStr: '10月 2日',
    name: 'Gemini 2.5 Flash Image',
    vendor: Vendor.Google,
    description: '专注于图像生成和理解的专项版本（昵称“Nano Banana”），展现极强的视觉处理能力。'
  },
  {
    id: 'grok-4-1',
    month: '11月',
    dateStr: '11月 17日',
    name: 'Grok 4.1',
    vendor: Vendor.xAI,
    description: '快速迭代的Thinking版本，宣称在数学和物理推理上再次超越同期竞争对手。'
  },
  {
    id: 'gemini-3-pro',
    month: '11月',
    dateStr: '11月 18日',
    name: 'Gemini 3.0 Pro',
    vendor: Vendor.Google,
    description: '年底重磅，展现多模态原生理解的深厚积累，旨在夺回“最强模型”称号。'
  },
  {
    id: 'deepseek-v3-2',
    month: '12月',
    dateStr: '12月 1日',
    name: 'DeepSeek V3.2 & Speciale',
    vendor: Vendor.DeepSeek,
    description: 'Speciale版本专为复杂推理和Agent任务设计，据称在奥数和编程竞赛题目上达到金牌水平。'
  }
];