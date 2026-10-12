type FooterData = {
  title: string;
  links: { label: string; href: string }[];
};

export const footerLinks: FooterData[] = [
  {
    title: 'product',
    links: [
      { label: 'features', href: '/features' },
      { label: 'pricing', href: '/pricing' },
      { label: 'use-cases', href: '/use-case' },
    ],
  },
  {
    title: 'company',
    links: [
      { label: 'about', href: '/about' },
      { label: 'customers', href: '/customer' },
      { label: 'testimonials', href: '/testimonial' },
      { label: 'success-stories', href: '/success-stories' },
      { label: 'contact', href: '/contact-us' },
    ],
  },
  {
    title: 'resources',
    links: [
      { label: 'blog', href: '/blog' },
      { label: 'faq', href: '/faq' },
      { label: 'documentation', href: '/documentation' },
      { label: 'support', href: '/support' },
    ],
  },
  {
    title: 'account',
    links: [
      { label: 'login', href: '/login' },
      { label: 'create-account', href: '/signup' },
      { label: 'terms', href: '/terms-conditions' },
      { label: 'privacy', href: '/privacy-policy' },
      { label: 'legal', href: '/legal' },
    ],
  },
];
