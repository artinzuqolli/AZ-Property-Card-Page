export interface BusinessContact {
  name: string;
  tagline: string;
  subtagline: string;
  website: string;
  websiteUrl: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  instagram: string;
  instagramUrl: string;
  googleReviewUrl: string;
}

export interface PropertyService {
  id: string;
  title: string;
  iconName: 'home' | 'zap' | 'wrench' | 'layers';
  shortDesc: string;
  description: string;
  features: string[];
}
