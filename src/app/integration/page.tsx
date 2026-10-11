import Integration from '@/components/integration/Integration';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages.integration');
  return { ...defaultMetadata, title: `${t('title')} - Sigap`, description: t('description') };
}

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Integration />
      <CTA className="dark:bg-background-8 bg-white" badgeClass="!badge-green" btnClass="hover:btn-secondary dark:hover:btn-accent" />
    </main>
  );
};

export default page;
