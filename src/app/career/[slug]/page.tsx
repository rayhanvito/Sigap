import CareerDetailsBody from '@/components/career/CareerDetailsBody';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const careers = getMarkDownData('src/data/career');
  return careers.map((career) => ({
    slug: career.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Apply Now - Sigap || Sigap',
};

const CareerDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <CareerDetailsBody slug={slug} />
      <CTA className="dark:bg-background-5 bg-white" badgeClass="!badge-yellow-v2" btnClass="hover:btn-secondary dark:hover:btn-accent" />
    </main>
  );
};

export default CareerDetails;
