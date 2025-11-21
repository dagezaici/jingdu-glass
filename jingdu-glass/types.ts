export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
}

export interface AuditItem {
  id: string;
  title: string;
  issue: string;
  solution: string;
  impact: 'High' | 'Medium' | 'Low' | '高' | '中' | '低' | 'Hoch' | 'Mittel' | 'Niedrig' | 'عالي' | 'متوسط' | 'منخفض' | 'Alto' | 'Medio' | 'Bajo' | 'उच्च' | 'मध्यम' | 'कम';
}

export enum Section {
  HOME = 'home',
  PRODUCTS = 'products',
  STRENGTH = 'strength',
  AUDIT = 'audit',
  AI_CONSULTANT = 'ai-consultant',
  CONTACT = 'contact'
}

export type Language = 'en' | 'zh' | 'de' | 'ar' | 'es' | 'hi';