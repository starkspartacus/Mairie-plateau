export interface NavigationItem {
  title: string;
  page?: string;
  items: NavigationSubItem[];
}

export interface NavigationSubItem {
  title: string;
  page: string;
}

export interface QuickService {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  page: string;
  color: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
}

export interface Testimonial {
  text: string;
  author?: string;
  role: string;
}

export interface Achievement {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface MayorInfo {
  name: string;
  title: string;
  image: string;
  message: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface SocialMedia {
  facebook?: string;
  twitter?: string;
  youtube?: string;
  instagram?: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaPrimary: {
    text: string;
    action: string;
  };
  ctaSecondary: {
    text: string;
    action: string;
  };
}

export interface FlashInfo {
  badge: string;
  messages: string[];
}

export interface PageContent {
  currentPage: string;
  isLoading: boolean;
  animationClass: string;
}
