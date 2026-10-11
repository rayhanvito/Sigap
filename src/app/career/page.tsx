import CareerContent from '@/components/career/CareerContent';
import Features from '@/components/career/Features';
import Positions from '@/components/career/Positions';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages.career');
  return { ...defaultMetadata, title: `${t('title')} - Sigap`, description: t('description') };
}

const Career = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <CareerContent />
      <Features />
      <Positions />
      <CTA className="dark:bg-background-6 bg-white" badgeClass="badge-green" btnClass="hover:btn-secondary dark:hover:btn-accent" />
    </main>
  );
};

export default Career;
