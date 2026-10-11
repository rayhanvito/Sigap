import bannerImage from '@public/images/ns-img-379.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const CareerContent = () => {
  const t = useTranslations('pages.career');
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-3 text-center">
          <RevealAnimation delay={0.3}>
            <h2>
              {t('title')}
            </h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.4}>
          <figure className="mb-18">
            <Image src={bannerImage} alt="banner-image" className="rounded-2xl" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div className="mx-auto max-w-[840px] space-y-8">
            <h4>{t('sections.principles.title')}</h4>
            <p>
              {t('description')}
            </p>
            <p>
              {t('sections.principles.description')}
            </p>
            <p>
              {t('sections.roles.description')}
            </p>
            <p>
              {t('sections.process.description')}
            </p>
            <p>
              {t('description')}
            </p>
            <p>
              {t('sections.principles.description')}
            </p>
            <p>
              {t('sections.process.description')}
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CareerContent;
