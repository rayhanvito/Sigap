import CTA from '@/components/shared/cta/CTA';
import TermsConditionContent from '@/components/terms-conditions/TermsConditionContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages.terms');
  return { ...defaultMetadata, title: `${t('title')} - Sigap`, description: t('description') };
}

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <TermsConditionContent />
      <CTA className="dark:bg-background-5 bg-white" badgeClass="badge-yellow-v2" btnClass="hover:btn-secondary dark:hover:btn-accent" />
    </main>
  );
};

export default page;
