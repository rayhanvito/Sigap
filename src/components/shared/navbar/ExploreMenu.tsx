'use client';
import {
  ExploreCompanyIcon,
  ExplorePricingAndAccountIcon,
  ExploreProductIcon,
  ExploreResourcesIcon,
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { ComponentType } from 'react';
import HoverBgTransform from '../hover-bg-transform';

type ExploreItem = {
  id: string;
  href: string;
};

type ExploreSection = {
  id: 'company' | 'platform' | 'resources' | 'plans-support';
  items: ExploreItem[];
  cta: {
    href: string;
    icon: ComponentType;
    title: string;
    description: string;
  };
};

const exploreSections: ExploreSection[] = [
  {
    id: 'company',
    items: [
      { id: 'about-us', href: '/about' },
      { id: 'team', href: '/team' },
      { id: 'career', href: '/career' },
      { id: 'case-studies', href: '/case-study' },
    ],
    cta: {
      href: '/about',
      icon: ExploreCompanyIcon,
      title: 'company',
      description: 'company',
    },
  },
  {
    id: 'platform',
    items: [
      { id: 'features', href: '/features' },
      { id: 'integrations', href: '/integration' },
    ],
    cta: {
      href: '/features',
      icon: ExploreProductIcon,
      title: 'platform',
      description: 'platform',
    },
  },
  {
    id: 'resources',
    items: [
      { id: 'blog', href: '/blog' },
      { id: 'documentation', href: '/documentation' },
      { id: 'faq', href: '/faq' },
      { id: 'tutorial', href: '/tutorial' },
    ],
    cta: {
      href: '/blog',
      icon: ExploreResourcesIcon,
      title: 'resources',
      description: 'resources',
    },
  },
  {
    id: 'plans-support',
    items: [
      { id: 'pricing', href: '/pricing' },
      { id: 'login', href: '/login' },
      { id: 'create-account', href: '/signup' },
    ],
    cta: {
      href: '/pricing',
      icon: ExplorePricingAndAccountIcon,
      title: 'plans-support',
      description: 'plans-support',
    },
  },
];

const ExploreMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  const t = useTranslations('nav');
  const handleClose = () => setMenuDropdownId(null);

  return (
    <div>
      <div
        className={cn(
          'pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent opacity-0 lg:w-[1290px]',
          menuDropdownId === 'explore-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="explore-mega-menu"
        className={cn(
          'border-stroke-1/50 pointer-events-none fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 rounded-[20px] border bg-white px-6 pt-3 pb-6 opacity-0 transition-all duration-300 lg:w-[1290px]',
          menuDropdownId === 'explore-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          {exploreSections.map(({ id, items, cta }) => (
            <div className="col-span-3" key={id}>
              <div className="flex h-full flex-col">
                <p className="text-tagline-2 text-foreground/60 p-3 font-medium">{t(`groups.${id}`)}</p>
                <ul className="my-8">
                  {items.map(({ id: itemId, href }) => (
                    <li key={itemId}>
                      <Link href={href} onClick={handleClose} className="group relative block p-3">
                        <HoverBgTransform className="group-hover:opacity-100" />
                        <span className="text-tagline-1 text-foreground relative z-10 font-normal">
                          {t(`items.${itemId}`)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={cta.href}
                  className="border-stroke-1 hover:border-secondary/30 shadow-14 mt-auto flex items-start gap-2 rounded-xl border p-3 transition-all duration-300">
                  <div className="border-stroke-1 mt-1 flex size-7 shrink-0 items-center justify-center rounded-lg border p-1">
                    <cta.icon />
                  </div>
                  <div>
                    <p className="text-tagline-1 text-foreground font-normal">{t(`groups.${cta.title}`)}</p>
                    <p className="text-tagline-2 text-foreground/80 font-normal">
                      {t(`descriptions.${cta.description}`)}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ExploreMenu.displayName = 'ExploreMenu';
export default ExploreMenu;
