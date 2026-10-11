import Content from '@/components/legal-notice/Content';
import Hero from '@/components/legal-notice/Hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages.legal');
  return { ...defaultMetadata, title: `${t('title')} - Sigap`, description: t('description') };
}

const page = () => {
  return (
    <main className="dark:bg-background-7 bg-white">
      <Hero />
      <Content />
    </main>
  );
};
export default page;
