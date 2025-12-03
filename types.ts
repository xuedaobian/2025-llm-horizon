export enum Vendor {
  DeepSeek = 'DeepSeek',
  Google = 'Google',
  xAI = 'xAI',
  Meta = 'Meta',
  Alibaba = 'Alibaba Cloud',
  OpenAI = 'OpenAI'
}

export interface TimelineEvent {
  id: string;
  month: string;
  dateStr: string;
  name: string;
  vendor: Vendor;
  description: string;
  isSpeculated?: boolean;
}

export interface VendorConfig {
  color: string;
  borderColor: string;
  badgeColor: string;
  textColor: string;
}