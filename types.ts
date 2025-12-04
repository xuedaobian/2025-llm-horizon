export enum Vendor {
  DeepSeek = 'DeepSeek',
  Google = 'Google',
  xAI = 'xAI',
  Meta = 'Meta',
  Alibaba = 'Alibaba Cloud',
  OpenAI = 'OpenAI',
  Anthropic = 'Anthropic',
  kimi = 'kimi',
  miniMax = 'miniMax',
  zhipu = 'zhipu'
}

export type SortOrder = 'asc' | 'desc';

export interface TimelineEvent {
  id: string;
  month: string;
  dateStr: string;
  name: string;
  vendor: Vendor;
  description: string;
  url: string;
  isSpeculated?: boolean;
}

export interface VendorConfig {
  color: string;
  borderColor: string;
  badgeColor: string;
  textColor: string;
  icon?: string;
}