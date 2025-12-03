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
  },
  [Vendor.Anthropic]: {
    color: 'bg-purple-500',
    borderColor: 'border-purple-500',
    badgeColor: 'bg-purple-500/20 text-purple-300',
    textColor: 'text-purple-400'
  }
};

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: 'deepseek-r1',
    month: '1月',
    dateStr: '1月22日',
    name: 'DeepSeek-R1',
    vendor: Vendor.DeepSeek,
    description: '开源模型的第一个标杆。',
    url: 'https://arxiv.org/abs/2501.12948'
  },
  {
    id: 'gemini-2',
    month: '2月',
    dateStr: '2月5日',
    name: 'Gemini 2.0 Pro & Flash',
    vendor: Vendor.Google,
    description: '在复杂任务处理上不仅提升了多模态能力，还引入了更强的“思考”模式（Thinking Mode）。',
    url: 'https://ai.google.dev/gemini-api/docs/changelog?hl=zh-cn#02-05-2025'
  },
  {
    id: 'grok-3',
    month: '2月',
    dateStr: '2月19日',
    name: 'Grok 3',
    vendor: Vendor.xAI,
    description: '马斯克宣称其为“地球上最聪明的AI”。在拥有10万块H100的集群上训练完成，主打极致推理能力和更少的内容审查。',
    url: 'https://x.ai/news/grok-3/'
  },
  {
    id: 'claude3.7',
    month: '2月',
    dateStr: '2月24日',
    name: 'Claude 3.7',
    vendor: Vendor.Anthropic,
    description: '和 cc 一起发布的模型，完全改写 2025 年 AI 编程体验',
    url: 'https://www.anthropic.com/news/claude-3-7-sonnet'
  },
  {
    id: 'deepseek-v3-0324',
    month: '3月',
    dateStr: '3月24日',
    name: 'DeepSeek-V3 (0324)',
    vendor: Vendor.DeepSeek,
    description: 'V3版本的迭代更新，改进了后训练方法',
    url: 'https://api-docs.deepseek.com/zh-cn/news/news250325'
  },
  {
    id: 'llama-4',
    month: '4月',
    dateStr: '4月5日',
    name: 'Llama 4 (Scout & Maverick)',
    vendor: Vendor.Meta,
    description: '全面转向MoE（混合专家）架构，支持原生多模态。中小尺寸模型已在开源社区设立新标杆。',
    url: 'https://ai.meta.com/blog/llama-4-multimodal-intelligence/'
  },
  {
    id: 'qwen-3',
    month: '4月',
    dateStr: '4月29日',
    name: 'Qwen 3 Series',
    vendor: Vendor.Alibaba,
    description: '站在巨人的肩膀上成为了新巨人，而且多点开花大中小模型一应俱全。',
    url: 'https://qwenlm.github.io/zh/blog/qwen3/'
  },
  {
    id: 'claude4',
    month: '5月',
    dateStr: '5月15日',
    name: 'Claude 4',
    vendor: Vendor.Anthropic,
    description: 'Claude 4 系列模型在编码、高级推理和 AI 代理方面树立了新标准',
    url: 'https://www.anthropic.com/news/claude-4'
  },
  {
    id: 'deepseek-r1-0528',
    month: '5月',
    dateStr: '5月 28日',
    name: 'DeepSeek-R1 Update',
    vendor: Vendor.DeepSeek,
    description: 'r1版本的迭代更新，改进后训练方法',
    url: 'https://api-docs.deepseek.com/zh-cn/news/news250528'
  },
  {
    id: 'gemini-2-5',
    month: '6月',
    dateStr: '6月17日',
    name: 'Gemini 2.5 Pro & Flash',
    vendor: Vendor.Google,
    description: '针对“适应性思考”优化。Flash降低延迟，Pro在编码和数学基准测试中刷新记录。',
    url: 'https://ai.google.dev/gemini-api/docs/changelog?hl=zh-cn#06-17-2025'
  },
  {
    id: 'gpt-5',
    month: '8月',
    dateStr: '8月7日',
    name: 'GPT-5',
    vendor: Vendor.OpenAI,
    description: '辜负了 AGI 期待的版本，但是还是变强了不少。',
    isSpeculated: true,
    url: 'https://openai.com/zh-Hans-CN/index/introducing-gpt-5/'
  },
  {
    id: 'deepseek-v3.1',
    month: '8月',
    dateStr: '8月21日',
    name: 'DeepSeek V3.1',
    vendor: Vendor.DeepSeek,
    description: '终于也是混合模型了，提升了 agent 能力',
    url: 'https://api-docs.deepseek.com/zh-cn/news/news250821'
  },
    {
    id: 'gemini-2-5-image',
    month: '8月',
    dateStr: '8月26日',
    name: 'Gemini 2.5 Flash Image',
    vendor: Vendor.Google,
    description: '专注于图像生成和理解的专项版本（昵称“Nano Banana”），展现极强的视觉处理能力。',
    url: 'https://ai.google.dev/gemini-api/docs/changelog?hl=zh-cn#08-26-2025'
  },
  {
    id: 'qwen-3-omni',
    month: '9月',
    dateStr: '9月 22日',
    name: 'Qwen 3-Omni',
    vendor: Vendor.Alibaba,
    description: '和 gpt5 一样的多模态大模型，无缝处理文本、图像、音频和视频等多种输入形式，并通过实时流式响应同时生成文本与自然语音输出。',
    url: 'https://qwen.ai/blog?id=65f766fc2dcba7905c1cb69cc4cab90e94126bf4&from=research.latest-advancements-list'
  },
  {
    id: 'claude sonnet 4.5',
    month: '9月',
    dateStr: '9月 30日',
    name: 'Claude sonnet 4.5',
    vendor: Vendor.Anthropic,
    description: 'Claude Sonnet 4.5 是世界上最好的编码模型（前端）',
    url: 'https://www.anthropic.com/news/claude-4-5'
  },
  {
    id: 'claude haiku 4.5',
    month: '10月',
    dateStr: '10月 15日',
    name: 'Claude Haiku 4.5',
    vendor: Vendor.Anthropic,
    description: '廉价的 sonnet 4.5',
    url: 'https://www.anthropic.com/news/claude-4-5'
  },
  {
    id: 'grok-4-1',
    month: '11月',
    dateStr: '11月 17日',
    name: 'Grok 4.1',
    vendor: Vendor.xAI,
    description: '快速迭代的Thinking版本，宣称在数学和物理推理上再次超越同期竞争对手。',
    url: 'https://x.ai/news/grok-4-1/'
  },
  {
    id: 'gemini-3-pro',
    month: '11月',
    dateStr: '11月 18日',
    name: 'Gemini 3.0 Pro',
    vendor: Vendor.Google,
    description: '年底重磅，展现多模态原生理解的深厚积累，旨在夺回“最强模型”称号。',
    url: 'https://ai.google.dev/gemini-api/docs/changelog?hl=zh-cn#11-18-2025'
  },
  {
    id: 'Claude Opus 4.5',
    month: '11月',
    dateStr: '11月 25日',
    name: 'Claude Opus 4.5',
    vendor: Vendor.Anthropic,
    description: '为了与 Gemini 3 Pro 竞争而发布的。',
    url: 'https://www.anthropic.com/news/claude-opus-4-5'
  },
  {
    id: 'deepseek-v3-2',
    month: '12月',
    dateStr: '12月 1日',
    name: 'DeepSeek V3.2 & Speciale',
    vendor: Vendor.DeepSeek,
    description: 'Speciale版本专为复杂推理和Agent任务设计，据称在奥数和编程竞赛题目上达到金牌水平。',
    url: 'https://api-docs.deepseek.com/zh-cn/news/news251201'
  }
];