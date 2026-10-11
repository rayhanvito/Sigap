import RevealAnimation from '../animation/RevealAnimation';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('pages.legal');
  return (
    <section className="pt-[140px] pb-14 xl:pt-[170px]">
      <div className="main-container">
        <div className="text-center">
          <RevealAnimation delay={0.1} instant>
            <h1 className="font-normal">{t('title')}</h1>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
