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
    <label className="text-tagline-2 text-foreground/70 inline-flex items-center gap-2">
      <span className="sr-only">{t('label')}</span>
      <select
        aria-label={t('label')}
        className="border-stroke-2 rounded-full border bg-transparent px-3 py-1.5 outline-none"
        value={locale}
        onChange={handleChange}>
        {locales.map((option) => (
          <option key={option} value={option}>
            {t(option)}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LocaleSwitcher;
