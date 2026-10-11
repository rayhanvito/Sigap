import { CheckIcon } from '@/icons';
import aboutBg from '@public/images/ns-img-14.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface FeatureListItem {
  id: string;
  text: string;
}

const FeatureList = () => {
  const t = useTranslations('pages.features');
  const featuresListData: FeatureListItem[] = [
    {
      id: 'innovative-startups',
      text: t('sections.inbox.title'),
    },
    {
      id: 'enterprise-teams',
      text: t('sections.inbox.description'),
    },
    {
      id: 'agencies-consultants',
      text: t('sections.pipeline.title'),
    },
    {
      id: 'finance-marketing',
      text: t('sections.audit.title'),
    },
  ];

  return (
    <section className="pt-[100px]">
      <RevealAnimation delay={0.2}>
        <div className="main-container">
          <div className="relative z-10">
            <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 overflow-hidden rounded-[20px]">
              <Image src={aboutBg} alt="about bg" className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-5 px-6 py-14 max-lg:grid-cols-1 max-sm:gap-10 lg:px-11">
              <div className="max-w-[500px]">
                <h2 className="text-accent sm:text-heading-5 text-heading-6 mb-8">
                  {t('description')}
                </h2>
                <LinkButton href="/signup" className="btn-accent dark:btn-dark hover:btn-primary btn-md btn border-0">
                  {t('cta')}
                </LinkButton>
              </div>
              <div>
                <ul className="space-y-4">
                  {featuresListData.map((feature) => (
                    <li key={feature.id} className="flex items-center gap-2">
                      <span className="bg-accent/17 dark:bg-accent/10 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <CheckIcon className="dark:fill-accent" />
                      </span>
                      <span className="text-accent">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

FeatureList.displayName = 'FeatureList';
export default FeatureList;
