import CTA from '@/components/shared/cta/CTA';
import Contact from '@/components/team-details/Contact';
import Details from '@/components/team-details/Details';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Team Details - Sigap || Sigap',
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Details slug={slug} />
      <Contact />
      <CTA
        className="bg-background-2 py-28"
        btnClass="btn-md btn-primary hover:btn-secondary h-12 w-full max-[376px]:w-[97%%] md:w-auto"
        descriptionClass="text-foreground/60 max-w-[530px]"
        headingClass="text-secondary"
        listTextClass="text-tagline-2 text-foreground/60"
        inputFieldClass="border-stroke-3 bg-white text-secondary h-12 py-3 placeholder:text-secondary/60 focus:outline-1 focus:outline-primary-600 lg:max-w-[340px] md:w-[71%] w-full placeholder:font-normal font-normal"
        checkListVariant="default"
      />
    </main>
  );
};

export default page;
