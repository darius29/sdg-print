export type Locale = 'ro' | 'en';

export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  description: string;
  applications: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Textile' | 'Custom';
  location: string;
  description: string;
  images: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company?: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  surface: string;
  duration: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}
