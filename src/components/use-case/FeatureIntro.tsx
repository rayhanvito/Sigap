import featureIntroImg from '@public/images/ns-img-353.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const FeatureIntro = () => {
  const t = useTranslations('pages.useCase');
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[660px] space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>{t('title')}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p>
              {t('description')}
            </p>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.3}>
          <figure className="h-auto w-full overflow-hidden rounded-[20px]">
            <Image src={featureIntroImg} alt="feature-intro" className="size-full object-cover object-center" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

FeatureIntro.displayName = 'FeatureIntro';
export default FeatureIntro;
