import ContactInfo from '@/components/contact-page/ContactInfo';
import ContactMap from '@/components/contact-page/ContactMap';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages.contact');
  return { ...defaultMetadata, title: `${t('title')} - Sigap`, description: t('description') };
}

const ContactUs = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ContactInfo />
      <ContactMap />
      <CTA className="dark:bg-background-5 bg-white" badgeClass="badge-yellow-v2" />
    </main>
  );
};

export default ContactUs;
