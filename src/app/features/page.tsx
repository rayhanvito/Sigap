import FeatureList from '@/components/features/FeatureList';
import FeatureCard from '@/components/features/Features';
import FeaturesV2 from '@/components/features/FeaturesV2';
import Reviews from '@/components/features/Reviews';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages.features');
  return { ...defaultMetadata, title: `${t('title')} - Sigap`, description: t('description') };
}

const Features = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <FeatureCard />
      <FeatureList />
      <FeaturesV2 />
      <Reviews />
      <CTA className="dark:bg-background-6 bg-white" badgeClass="hidden" btnClass="hover:btn-secondary dark:hover:btn-accent" />
    </main>
  );
};

export default Features;
