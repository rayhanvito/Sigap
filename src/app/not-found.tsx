import LinkButton from '@/components/ui/button/LinkButton';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '404 - Sigap',
};

const NotFound = async () => {
  const t = await getTranslations('notFound');

  return (
    <main className="bg-background-1">
      <section className="container mx-auto px-5 pb-24 pt-32 text-center sm:px-10 lg:pb-32 lg:pt-40">
        <p className="text-7xl font-medium text-primary-700">404</p>
        <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-medium text-foreground sm:text-5xl">{t('title')}</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/70">{t('description')}</p>
        <div className="mt-10">
          <LinkButton href="/" className="btn-primary hover:btn-secondary">
            {t('home')}
          </LinkButton>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
