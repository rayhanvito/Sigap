import CTA from '@/components/about/CTA';
import Feature from '@/components/about/Feature';
import Innovation from '@/components/about/Innovation';
import OurMission from '@/components/about/OurMission';
import OurVision from '@/components/about/OurVision';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages.about');
  return { ...defaultMetadata, title: `${t('title')} - Sigap`, description: t('description') };
}

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <Feature />
      <OurMission />
      <OurVision />
      <Innovation />
      <CTA />
    </main>
  );
};

export default page;
