import featureAsset1 from '@public/images/ns-img-67.png';
import featureAsset2 from '@public/images/ns-img-68.png';
import featureAsset3 from '@public/images/ns-img-69.png';
import featureAsset4 from '@public/images/ns-img-70.png';
import featureAsset5 from '@public/images/ns-img-71.png';
import featureAsset6 from '@public/images/ns-img-72.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const FeatureCard = () => {
  const t = useTranslations('pages.features');
  const data = [
    { id: 1, copy: 'contacts', img: featureAsset1 },
    { id: 2, copy: 'leads', img: featureAsset2 },
    { id: 3, copy: 'followUp', img: featureAsset3 },
    { id: 4, copy: 'tasks', img: featureAsset4 },
    { id: 5, copy: 'dashboard', img: featureAsset5 },
    { id: 6, copy: 'roles', img: featureAsset6 },
  ] as const;

  return (
    <section className="overflow-hidden pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="mb-14 space-y-3 text-center">
          <RevealAnimation delay={0.3}>
            <h2 className="mx-auto max-w-[742px]">{t('title')}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[482px]">
              {t('description')}
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 max-md:gap-y-8 md:gap-8">
          {data.map((feature, index) => (
            <RevealAnimation delay={0.5 + index * 0.1} key={feature.id}>
              <div className="bg-background-2 dark:bg-background-5 col-span-12 space-y-6 rounded-[20px] p-6 md:col-span-6 lg:col-span-4">
                <figure className="w-full max-w-[360px]">
                  <Image src={feature.img} alt={t(`sections.${feature.copy}.title`)} className="h-full w-full rounded-2xl object-cover" />
                </figure>
                <div className="space-y-1">
                  <h3 className="text-heading-5">{t(`sections.${feature.copy}.title`)}</h3>
                  <p>{t(`sections.${feature.copy}.description`)}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
FeatureCard.displayName = 'FeatureCard';
export default FeatureCard;
