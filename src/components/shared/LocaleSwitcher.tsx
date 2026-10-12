'use client';

import { locales, type Locale } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import type { ChangeEvent } from 'react';

const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations('LocaleSwitcher');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;

    document.cookie = 'NEXT_LOCALE=' + nextLocale + '; path=/; max-age=31536000; SameSite=Lax';
    router.refresh();
  };

  return (
    <label className="inline-flex items-center">
      <span className="sr-only">{t('label')}</span>
      <span className="group/locale relative inline-flex items-center">
        <select
          aria-label={t('label')}
          className="border-stroke-2 text-foreground/70 hover:border-stroke-3 hover:text-foreground focus-visible:border-primary-400 peer appearance-none cursor-pointer rounded-full border bg-transparent py-2.5 pr-9 pl-4 text-tagline-2 font-normal outline-none transition-all duration-200"
          value={locale}
          onChange={handleChange}>
          {locales.map((option) => (
            <option key={option} value={option}>
              {t(option)}
            </option>
          ))}
        </select>
        <span className="text-foreground/70 peer-hover:text-foreground pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 transition-colors duration-200">
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
      </span>
    </label>
  );
};

export default LocaleSwitcher;
