'use client';
import { useMobileMenuContext } from '@/context/MobileMenuContext';
import LocaleSwitcher from '@/components/shared/LocaleSwitcher';
import { cn } from '@/utils/cn';
import logoIcon from '@public/images/shared/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import MenuCloseButton from './MenuCloseButton';
import MobileMenuItem from './MobileMenuItem';

export interface MobileMenuItem {
  id: string;
  label: string;
  href: string;
}

export interface MobileMenuGroup {
  id: string;
  title: string;
  submenu: MobileMenuItem[];
}

const MobileMenu = ({ menuData }: { menuData: MobileMenuGroup[] }) => {
  const t = useTranslations('nav');
  const { isOpen } = useMobileMenuContext();
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
            {menuData.map((item) => (
              <MobileMenuItem
                key={item.id}
                id={item.id}
                title={t(`groups.${item.title}`)}
                hasSubmenu={item.submenu.length > 0}>
                <ul>
                  {item?.submenu?.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.href}
                        className="text-tagline-1 text-foreground ml-4 block py-2.5 text-left font-normal transition-all duration-200">
                        {t(`items.${subItem.id}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </MobileMenuItem>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

MobileMenu.displayName = 'MobileMenu';
export default MobileMenu;
