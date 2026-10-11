import CTA from '@/components/shared/cta/CTA';
import Client from '@/components/testimonial/Client';
import Integration from '@/components/testimonial/Integration';
import Reviews from '@/components/testimonial/Reviews';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Testimonial - Sigap || Sigap',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Reviews />
      <Client />
      <Integration />
      <CTA className="dark:bg-background-6 bg-white" badgeClass="badge-green" btnClass="hover:btn-secondary dark:hover:btn-accent" />
    </main>
  );
};

export default page;
