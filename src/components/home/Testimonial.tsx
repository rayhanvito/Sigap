'use client';

import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const Testimonial = () => {
  const t = useTranslations('home.trust');
  const points = ['one', 'two', 'three', 'four'] as const;

  return (
    <section className="bg-background-3 py-[100px]">
      <div className="main-container">
        <div className="mx-auto max-w-[780px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 !badge-primary mb-5">{t('badge')}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-4">{t('title')}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-foreground/60 mb-8">{t('description')}</p>
          </RevealAnimation>
          <ul className="grid gap-4 text-left sm:grid-cols-2">
            {points.map((point, index) => (
              <RevealAnimation key={point} delay={0.4 + index * 0.1}>
                <li className="bg-background-1 rounded-2xl p-5">{t(`points.${point}`)}</li>
              </RevealAnimation>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
