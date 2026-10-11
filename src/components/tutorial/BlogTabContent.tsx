'use client';

import { useTab } from '@/context/TabContext';
import blog1 from '@public/images/ns-img-386.png';
import blog2 from '@public/images/ns-img-459.png';
import blog3 from '@public/images/ns-img-460.png';
import Image, { type StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const BlogTabContent = () => {
  const { currentIndex: activeTab } = useTab();
  const t = useTranslations('pages.tutorial');
  const resources = t.raw('resources') as string[];
  const steps = ['connect', 'prepare', 'followUp'] as const;
  const blogs = steps.map((step, index) => ({
    id: index,
    title: resources[index],
    subtitle: t(`steps.${step}.description`),
    image: [blog1, blog2, blog3][index] as StaticImageData,
  }));
  const filteredBlogs = activeTab === 0 ? blogs : [blogs[activeTab - 1]].filter(Boolean);

  return (
    <div className="mt-20 grid grid-cols-12 gap-y-6 sm:gap-5 md:gap-8">
      {filteredBlogs.map((blog, index) => (
        <RevealAnimation key={blog.id} delay={0.1 + index * 0.1}>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <article className="dark:bg-background-5 border-stroke-4 dark:border-stroke-5 mx-auto max-w-[500px] overflow-hidden rounded-[20px] border bg-white md:mx-0 md:max-w-full">
              <figure>
                <Image src={blog.image} alt={blog.title} loading="lazy" className="h-full w-full object-cover" />
              </figure>
              <div className="space-y-6 p-6">
                <span className="badge badge-green">{t('badge')}</span>
                <div className="space-y-2">
                  <p className="xl:text-heading-5 text-heading-6 text-secondary dark:text-accent">{blog.title}</p>
                  <p className="line-clamp-2">{blog.subtitle}</p>
                </div>
                <LinkButton href="/documentation" className="btn hover:btn-secondary dark:hover:btn-accent dark:btn-transparent btn-white btn-md">
                  {t('resourcesTitle')}
                </LinkButton>
              </div>
            </article>
          </div>
        </RevealAnimation>
      ))}
    </div>
  );
};

export default BlogTabContent;
