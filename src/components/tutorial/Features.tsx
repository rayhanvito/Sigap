import RevealAnimation from '../animation/RevealAnimation';
import { useTranslations } from 'next-intl';

interface FeatureGuide {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const Features = () => {
  const t = useTranslations('pages.tutorial');
  const featureGuides: FeatureGuide[] = [
    {
      id: 'inbox',
      title: t('resources.0'),
      description: t('steps.connect.description'),
      icon: 'ns-shape-9',
    },
    {
      id: 'pipeline',
      title: t('resources.1'),
      description: t('steps.prepare.description'),
      icon: 'ns-shape-3',
    },
    {
      id: 'follow-up',
      title: t('resources.2'),
      description: t('steps.followUp.description'),
      icon: 'ns-shape-12',
    },
  ];

  return (
    <section className="bg-background-2 dark:bg-background-5 md:pt-[100px] pt-[50px] md:pb-[200px] pb-[100px] dark:md:pb-[100px]">
      <div className="main-container">
        <div className="text-center space-y-5 mb-[35px] md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">{t('badge')}</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>{t('resourcesTitle')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[578px] mx-auto">
                {t('description')}
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 md:gap-8 gap-y-10">
          {featureGuides.map((guide, index) => (
            <RevealAnimation key={guide.id} delay={0.4 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="space-y-6 text-center">
                  <div className="mx-auto">
                    <span className={`${guide.icon} text-[52px] text-secondary dark:text-accent`}> </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">{guide.title}</h3>
                    <p>{guide.description}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
