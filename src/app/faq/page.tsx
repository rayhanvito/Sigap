import Contact from '@/components/faq/Contact';
import FaqTab from '@/components/faq/FaqTab';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages.faq');
  return { ...defaultMetadata, title: `${t('title')} - Sigap`, description: t('description') };
}

const FAQ = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <FaqTab />
      <Contact />
      <CTA className="dark:bg-background-6 bg-white" badgeClass="!badge-cyan" btnClass="hover:btn-secondary dark:hover:btn-accent" />
    </main>
  );
};

export default FAQ;
