import CTA from '@/components/shared/cta/CTA';
import Contact from '@/components/support/Contact';
import NeedHelp from '@/components/support/NeedHelp';
import Services from '@/components/support/Services';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages.support');
  return { ...defaultMetadata, title: `${t('title')} - Sigap`, description: t('description') };
}

const Support = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <NeedHelp />
      <Services />
      <Contact />
      <CTA className="dark:bg-background-5 bg-white" badgeClass="badge-green" btnClass="hover:btn-secondary dark:hover:btn-accent" />
    </main>
  );
};

export default Support;
