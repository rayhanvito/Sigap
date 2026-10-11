import CRMFeatures from '@/components/home/CRMFeatures';
import Faq from '@/components/home/Faq';
import Hero from '@/components/home/Hero';
import HowItWork from '@/components/home/HowItWork';
import Integration from '@/components/home/Integration';
import Pricing from '@/components/home/Pricing';
import SelectUs from '@/components/home/SelectUs';
import Testimonial from '@/components/home/Testimonial';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('home.hero');
  return { ...defaultMetadata, title: t('title'), description: t('description') };
}

const page = async () => {
  const t = await getTranslations('home.cta');

  return (
    <main className="bg-background-1">
      <Hero />
      <SelectUs />
      <CRMFeatures />
      <Pricing />
      <Integration />
      <HowItWork />
      <Testimonial />
      <Faq />
      <CTA
        className="bg-background-2"
        badgeText={t('badge')}
        badgeClass="!badge-primary"
        ctaHeading={t('title')}
        description={t('description')}
        descriptionClass="text-foreground/60"
        btnClass="btn-primary hover:btn-secondary"
        ctaBtnText={t('button')}
      />
    </main>
  );
};

export default page;
