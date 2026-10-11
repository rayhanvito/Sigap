import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'company',
    title: 'company',
    submenu: [
      { id: 'about-us', label: 'about-us', href: './about' },
      { id: 'team', label: 'team', href: './team' },
      { id: 'career', label: 'career', href: './career' },
      { id: 'customers', label: 'customers', href: './customer' },
      { id: 'use-cases', label: 'use-cases', href: './use-case' },
      { id: 'case-studies', label: 'case-studies', href: './case-study' },
      { id: 'testimonials', label: 'testimonials', href: './testimonial' },
    ],
  },

  {
    id: 'platform',
    title: 'platform',
    submenu: [
      { id: 'features', label: 'features', href: './features' },
      { id: 'integrations', label: 'integrations', href: './integration' },
      { id: 'build-overview', label: 'build-overview', href: './signup' },
    ],
  },

  {
    id: 'resources',
    title: 'resources',
    submenu: [
      { id: 'blog', label: 'blog', href: './blog' },
      { id: 'tutorial', label: 'tutorial', href: './tutorial' },
      { id: 'faq', label: 'faq', href: './faq' },
    ],
  },

  {
    id: 'plans-support',
    title: 'plans-support',
    submenu: [
      { id: 'pricing', label: 'pricing', href: './pricing' },
      { id: 'login', label: 'login', href: './login' },
      { id: 'create-account', label: 'create-account', href: './signup' },
      { id: 'terms-conditions', label: 'terms-conditions', href: './terms-conditions' },
      { id: 'privacy-policy', label: 'privacy-policy', href: './privacy-policy' },
      { id: 'legal', label: 'legal', href: './legal' },
    ],
  },
];
