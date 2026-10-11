import Client from '@/components/pricing/Client';
import Faq from '@/components/pricing/Faq';
import Pricing from '@/components/pricing/Pricing';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages.pricing');
  return { ...defaultMetadata, title: `${t('title')} - Sigap`, description: t('description') };
}

const page = () => {
  return (
    <main className="bg-background-1">
      <Pricing />
      <Client />
      <Faq />
      <CTA className="bg-accent" badgeClass="!badge-cyan" btnClass="btn-primary hover:btn-secondary" />
    </main>
  );
};

export default page;
