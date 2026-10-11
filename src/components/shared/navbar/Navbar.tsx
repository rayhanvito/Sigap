'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import LocaleSwitcher from '@/components/shared/LocaleSwitcher';
import { mobileMenuData } from '@/data/navbar-data';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import logo from '@public/images/shared/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import EngageMenu from './EngageMenu';
import ExploreMenu from './ExploreMenu';
import MobileMenuButton from './MobileMenuButton';

const Navbar = () => {
  const t = useTranslations('nav');
  const { isScrolled } = useNavbarScroll(150);

  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };
  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'lp:!max-w-[1290px] fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 rounded-full transition-all duration-500 ease-in-out min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          isScrolled && 'top-2',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div>
            <div className="bg-background-2 flex items-center justify-between rounded-full px-2.5 py-2.5 backdrop-blur-[25px] xl:py-0">
              <div>
                <Link href="/" className="flex items-center gap-2">
                  <span className="sr-only">Home</span>
                  <figure className="max-w-[44px]">
                    <Image src={logo} alt="Sigap" className="block w-full" priority />
                  </figure>
                  <span className="text-secondary hidden text-xl font-semibold lg:block">Sigap</span>
                </Link>
              </div>
              <nav className="hidden items-center xl:flex">
                <ul className="flex items-center">
                  <li
                    onMouseEnter={() => handleMenuHover('explore-mega-menu')}
                    data-menu="explore-mega-menu"
                    className="group/nav-item relative cursor-pointer py-2.5">
                    <Link
                      href="#"
                      onClick={(event) => event.preventDefault()}
                      className="hover:border-stroke-2 text-tagline-1 text-foreground/60 hover:text-foreground flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                      <span>{t('explore')}</span>
                      <span className="block origin-center translate-y-px transition-all duration-300 group-hover/nav-item:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </Link>
                    <ExploreMenu menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                  </li>
                  <li
                    onMouseEnter={() => handleMenuHover('engage-mega-menu')}
                    data-menu="engage-mega-menu"
                    className="group/nav-item relative cursor-pointer py-2.5">
                    <Link
                      href="#"
                      onClick={(event) => event.preventDefault()}
                      className="hover:border-stroke-2 text-tagline-1 text-foreground/60 hover:text-foreground flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                      <span>{t('engage')}</span>
                      <span className="block origin-center translate-y-px transition-all duration-300 group-hover/nav-item:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </Link>
                    <EngageMenu menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                  </li>
                  <li className="py-2.5">
                    <Link
                      href="/blog"
                      className="hover:border-stroke-2 text-tagline-1 text-foreground/60 hover:text-foreground flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                      {t('blog')}
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link
                      href="/contact-us"
                      className="hover:border-stroke-2 text-tagline-1 text-foreground/60 hover:text-foreground flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                      {t('contact')}
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="hidden items-center justify-center gap-3 xl:flex">
                <LocaleSwitcher />
                <Link href="/signup" className="btn btn-md btn-primary hover:btn-secondary">
                  <span>{t('getStarted')}</span>
                </Link>
              </div>
              <MobileMenuButton />
            </div>
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
