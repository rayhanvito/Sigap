import RevealAnimation from '../animation/RevealAnimation';
import { useTranslations } from 'next-intl';

const Community = () => {
  const t = useTranslations('pages.tutorial');
  const resources = t.raw('resources') as string[];
  const communityFeatures = [
    { icon: 'ns-shape-9', title: resources[0], description: t('steps.connect.description') },
    { icon: 'ns-shape-3', title: resources[1], description: t('steps.prepare.description') },
    { icon: 'ns-shape-12', title: resources[2], description: t('steps.followUp.description') },
  ];
  return (
    <section className="bg-background-3 dark:bg-background-5 md:py-[100px] py-[50px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.1}>
          <h2>{t('resourcesTitle')}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
          <p>{t('description')}</p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 md:gap-8 gap-y-8">
          {communityFeatures.map((feature, index) => (
            <RevealAnimation key={feature.title} delay={0.3 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="space-y-6 text-center bg-background-1 rounded-[20px] sm:p-11 p-7 dark:bg-background-6">
                  <div className="mx-auto">
                    <span className={`${feature.icon} text-[52px] text-secondary dark:text-accent`}> </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">{feature.title}</h3>
                    <p>{feature.description}</p>
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

export default Community;
