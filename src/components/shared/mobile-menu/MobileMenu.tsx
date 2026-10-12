'use client';
import { useMobileMenuContext } from '@/context/MobileMenuContext';
import LocaleSwitcher from '@/components/shared/LocaleSwitcher';
import { navLinks } from '@/data/navbar-data';
import { cn } from '@/utils/cn';
import logoIcon from '@public/images/shared/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import MenuCloseButton from './MenuCloseButton';

const MobileMenu = () => {
  const t = useTranslations('nav');
  const { isOpen, closeMenu } = useMobileMenuContext();
  return (
    <aside
      className={cn(
        'scroll-bar fixed top-0 right-0 z-[9999] h-screen w-full translate-x-full bg-white transition-all duration-300 sm:w-1/2 sm:rounded-l-3xl xl:hidden',
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
      )}>
      <div className="space-y-4 p-5 sm:p-8 lg:p-9">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="sr-only">Home</span>
            <figure className="max-w-[44px]">
              <Image src={logoIcon} alt="Sigap" className="block w-full" />
            </figure>
          </Link>
          {/* close btn  */}
          <MenuCloseButton />
        </div>
        <LocaleSwitcher />

        {/* menu items list  */}
        <div className="scroll-bar mt-6 h-[85vh] w-full overflow-x-hidden pb-10">
          <p className="text-foreground text-tagline-1 before:bg-stroke-4 relative mb-2 block font-normal before:absolute before:top-1/2 before:-right-16 before:h-px before:w-full before:-translate-y-1/2 before:content-['']">
            {t('menu')}
          </p>
          <ul className="space-y-2">
            {navLinks.map(({ key, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={closeMenu}
                  className="text-tagline-1 text-foreground/60 hover:text-foreground block p-2.5 font-normal transition-colors duration-200">
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

MobileMenu.displayName = 'MobileMenu';
export default MobileMenu;
