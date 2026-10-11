type FooterData = {
  title: string;
  links: { label: string; href: string }[];
};

export const footerLinks: FooterData[] = [
  {
    title: 'company',
    links: [
      { label: 'about', href: '/about' },
      { label: 'career', href: '/career' },
      { label: 'case-studies', href: '/case-study' },
      { label: 'contact', href: '/contact-us' },
    ],
  },
  {
    title: 'support',
    links: [
      { label: 'faq', href: '/faq' },
      { label: 'documentation', href: '/documentation' },
      { label: 'tutorial', href: '/tutorial' },
      { label: 'support', href: '/support' },
    ],
  },
  {
    title: 'legal',
    links: [
      { label: 'terms', href: '/terms-conditions' },
      { label: 'privacy', href: '/privacy-policy' },
    ],
  },
];
