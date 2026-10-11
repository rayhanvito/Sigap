import CTA from '@/components/shared/cta/CTA';
import Banner from '@/components/tutorial/Banner';
import Blog from '@/components/tutorial/Blog';
import Community from '@/components/tutorial/Community';
import Features from '@/components/tutorial/Features';
import Integration from '@/components/tutorial/Integration';
import Services from '@/components/tutorial/Services';
import Tutorials from '@/components/tutorial/Tutorials';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages.tutorial');
  return { ...defaultMetadata, title: `${t('title')} - Sigap`, description: t('description') };
}

const Tutorial = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5 overflow-x-hidden">
      <Banner />
      <Blog />
      <Features />
      <Tutorials />
      <Services />
      <Integration />
      <Community />
      <CTA className="dark:bg-background-6 bg-white" badgeClass="badge-green" btnClass="hover:btn-secondary dark:hover:btn-accent" />
    </main>
  );
};

export default Tutorial;
