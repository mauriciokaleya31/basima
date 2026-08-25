export type PageId =
  | 'inicio'
  | 'quem-somos'
  | 'ensino'
  | 'cursos'
  | 'estrutura'
  | 'porque-escolher'
  | 'contactos';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface SlideItem {
  id: number;
  image: string;
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  ctaTarget: string;
  secondaryCtaText?: string;
  secondaryCtaTarget?: string;
}

export interface EducationLevel {
  id: string;
  title: string;
  subtitle: string;
  grades: string;
  ageGroup: string;
  description: string;
  highlights: string[];
  iconName: string;
  accentColor: string;
}

export interface TechnicalCourse {
  id: string;
  title: string;
  duration: string;
  description: string;
  careerOpportunities: string[];
  modules: string[];
  iconName: string;
  badge: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  capacity?: string;
  iconName: string;
  features: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
  number: string;
}

export interface ContactInfo {
  phones: {
    display: string;
    raw: string;
    isWhatsapp?: boolean;
  }[];
  email: string;
  website: string;
  address: string;
  city: string;
  reference: string;
  mapsUrl: string;
  openingHours: string;
}
