'use client';

import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Pricing = () => {
  const t = useTranslations('home.pricing');

  return (
    <section className="overflow-hidden bg-white py-[100px]">
      <div className="main-container">
        <div className="mx-auto max-w-[720px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">{t('badge')}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>{t('title')}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-foreground/60">{t('description')}</p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <LinkButton href="/pricing" className="btn btn-secondary btn-xl hover:btn-primary">
              {t('link')}
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
