import BlogListWrapper from '@/components/blog/BlogListWrapper';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog - Sigap || Sigap',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <BlogListWrapper />
      <CTA className="dark:bg-background-7 bg-white" badgeClass="!badge-yellow-v2" />
    </main>
  );
};

export default page;
