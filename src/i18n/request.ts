import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import en from '../../messages/en.json';
import id from '../../messages/id.json';
import { defaultLocale, isLocale } from './routing';

const messages = { id, en };

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get('NEXT_LOCALE')?.value;
  const locale = cookieLocale && isLocale(cookieLocale) ? cookieLocale : defaultLocale;

  return {
    locale,
    messages: messages[locale],
  };
});
