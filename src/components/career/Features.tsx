import featureAsset1 from '@public/images/ns-img-67.png';
import featureAsset2 from '@public/images/ns-img-68.png';
import featureAsset3 from '@public/images/ns-img-69.png';
import featureAsset4 from '@public/images/ns-img-70.png';
import featureAsset5 from '@public/images/ns-img-71.png';
import featureAsset6 from '@public/images/ns-img-72.png';
import featureAssetDark1 from '@public/images/ns-img-dark-44.png';
import featureAssetDark2 from '@public/images/ns-img-dark-45.png';
import featureAssetDark3 from '@public/images/ns-img-dark-46.png';
import featureAssetDark4 from '@public/images/ns-img-dark-47.png';
import featureAssetDark5 from '@public/images/ns-img-dark-48.png';
import featureAssetDark6 from '@public/images/ns-img-dark-49.png';
import Image from 'next/image';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const Features: FC = () => {
  const t = useTranslations('pages.career');
  const sectionKeys = ['principles', 'roles', 'process', 'principles', 'roles', 'process'] as const;
  const data = sectionKeys.map((key, index) => ({
    id: index + 1,
    title: t(`sections.${key}.title`),
    description: t(`sections.${key}.description`),
    lightImage: [featureAsset1, featureAsset2, featureAsset3, featureAsset4, featureAsset5, featureAsset6][index],
    darkImage: [featureAssetDark1, featureAssetDark2, featureAssetDark3, featureAssetDark4, featureAssetDark5, featureAssetDark6][index],
  }));

  return (
    <section className="dark:bg-background-6 bg-white py-[100px] xl:py-[200px]">
      <div className="main-container">
        <div className="mb-8 text-center md:mb-[52px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5">{t('badge')}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>
              {t('title')}
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>{t('description')}</p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.3 + index * 0.1}>
              <div className="bg-background-2 dark:bg-background-5 space-y-6 rounded-[20px] p-6">
                <figure>
                  <Image
                    src={item.lightImage}
                    alt="feature"
                    className="block h-full w-full rounded-2xl object-cover dark:hidden"
                  />
                  <Image
                    src={item.darkImage}
                    alt="feature"
                    className="hidden h-full w-full rounded-2xl object-cover dark:block"
                  />
                </figure>
                <div>
                  <h3 className="text-heading-6 sm:text-heading-5 mb-1 font-normal sm:mb-3">{item.title}</h3>
                  <p className="mb-2">{item.description}</p>
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
