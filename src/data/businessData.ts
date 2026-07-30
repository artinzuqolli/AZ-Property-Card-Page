import { BusinessContact, PropertyService } from '../types';

export const businessContact: BusinessContact = {
  name: 'AZ Property',
  tagline: 'Where quality feels at home.',
  subtagline: 'Property services with pride.',
  website: 'azprop.co.uk',
  websiteUrl: 'https://azprop.co.uk',
  phone: '07597597598',
  phoneDisplay: '07597 597598',
  whatsapp: 'https://wa.me/447597597598?text=Hello%20AZ%20Property,%20I%20would%20like%20to%20inquire%20about%20your%20services.',
  email: 'info@azprop.co.uk',
  instagram: '@az.prop',
  instagramUrl: 'https://instagram.com/az.prop',
  googleReviewUrl: 'https://g.page/r/az-property-review',
};

export const propertyServicesList: PropertyService[] = [
  {
    id: 'property-services',
    title: 'Property Services',
    iconName: 'home',
    shortDesc: 'Comprehensive care & management',
    description: 'Complete interior and exterior property maintenance, management, and repairs executed to the highest quality standards.',
    features: [
      'Full Property Maintenance & Care',
      'Painting & Interior/Exterior Decorating',
      'Plumbing & General Repair Works',
      'Pre-tenancy & Post-tenancy Inspections',
      'Emergency Property Repairs'
    ]
  },
  {
    id: 'electrical-work',
    title: 'Electrical Work',
    iconName: 'zap',
    shortDesc: 'Certified & safe wiring',
    description: 'Professional domestic and commercial electrical solutions by qualified, safety-certified electricians.',
    features: [
      'Complete & Partial Rewiring',
      'Consumer Unit (Fuse Box) Upgrades',
      'Architectural & LED Lighting Installation',
      'Socket & Switch Additions/Upgrades',
      'Safety Testing & Inspection Certificates'
    ]
  },
  {
    id: 'home-improvements',
    title: 'Home Improvements',
    iconName: 'wrench',
    shortDesc: 'Renovations & bespoke fitouts',
    description: 'Transforming living spaces with master craftsmanship, high-end finishing, and functional modern designs.',
    features: [
      'Kitchen Fitting & Custom Cabinetry',
      'Luxury Bathroom Renovations',
      'Bespoke Carpentry & Joinery',
      'Plastering & Drylining Solutions',
      'Room Extensions & Space Conversions'
    ]
  },
  {
    id: 'flooring-solutions',
    title: 'Flooring Solutions',
    iconName: 'layers',
    shortDesc: 'Hardwood, LVT & tiling',
    description: 'Flawless floor installation engineered for durability, comfort, and timeless aesthetic elegance.',
    features: [
      'Engineered & Solid Hardwood Flooring',
      'Luxury Vinyl Tile (LVT) Installation',
      'Precision Ceramic & Porcelain Tiling',
      'High-grade Laminate Flooring',
      'Subfloor Levelling & Moisture Proofing'
    ]
  }
];
