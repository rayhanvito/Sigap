'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import LocaleSwitcher from '@/components/shared/LocaleSwitcher';
import { navLinks } from '@/data/navbar-data';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import logo from '@public/images/shared/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from './MobileMenuButton';

const Navbar = () => {
  const t = useTranslations('nav');
  const { isScrolled } = useNavbarScroll(150);

  return (
    <MobileMenuProvider>
      <header
        className={cn(
          'lp:!max-w-[1290px] fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 rounded-full transition-all duration-500 ease-in-out min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          isScrolled && 'top-2',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div>
            <div className="bg-background-2 flex items-center justify-between rounded-full px-2.5 py-2.5 backdrop-blur-[25px] xl:py-0">
              <div className="flex flex-1 items-center">
                <Link href="/" className="flex items-center gap-2">
                  <span className="sr-only">Home</span>
                  <figure className="max-w-[44px]">
                    <Image src={logo} alt="Sigap" className="block w-full" priority />
                  </figure>
                  <span className="text-secondary hidden text-xl font-semibold lg:block">Sigap</span>
                </Link>
              </div>
              <nav className="hidden shrink-0 items-center xl:flex">
                <ul className="flex items-center">
                  {navLinks.map(({ key, href }) => (
                    <li key={href} className="py-2.5">
                      <Link
                        href={href}
                        className="hover:border-stroke-2 text-tagline-1 text-foreground/60 hover:text-foreground flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                        {t(key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="hidden flex-1 items-center justify-end gap-3 xl:flex">
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
      <MobileMenu />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
