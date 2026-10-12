'use client';

import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import PricingCard from './PricingCard';

const Pricing = () => {
  const t = useTranslations('home.pricing');
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="overflow-hidden bg-white py-[100px]">
      <div className="main-container">
        <div className="space-y-[72px]">
          {/* heading  */}
          <div className="relative flex flex-col items-center text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary mb-5">{t('badge')}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto mb-8 max-w-[650px]">{t('title')}</h2>
            </RevealAnimation>
            {/* toggle + corner badge (badge anchored to the pill so it stays in the corner) */}
            <div className="relative">
              <RevealAnimation delay={0.9} duration={2} useSpring={true} direction="up" offset={200}>
                <span
                  className="bg-secondary text-accent absolute top-0 right-0 z-10 -translate-y-1/2 translate-x-[30%] rotate-[20deg] rounded-[36px] px-3.5 py-1.5 text-tagline-2 font-normal capitalize"
                  aria-label={t('saveBadgeAria')}>
                  {t('saveBadge')}
                </span>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="bg-background-3 rounded-[160px] px-14 py-6">
                  <label className="relative z-[10] inline-flex cursor-pointer items-center" htmlFor="pricing-toggle">
                    <span
                      className={cn(
                        'mr-2.5 text-base font-normal transition-colors',
                        !isAnnual ? 'text-secondary' : 'text-secondary/60',
                      )}>
                      {t('monthly')}
                    </span>
                    <input
                      id="pricing-toggle"
                      type="checkbox"
                      onChange={(e) => setIsAnnual(e.target.checked)}
                      checked={isAnnual}
                      className="peer sr-only"
                      aria-label={t('toggleLabel')}
                    />
                    <span className="bg-secondary relative h-[28px] w-13 rounded-[34px] after:absolute after:top-1/2 after:start-[2px] after:h-6 after:w-6 after:-translate-y-1/2 after:rounded-full after:bg-accent after:transition-all after:duration-200 after:content-[''] peer-checked:after:start-[2px] peer-checked:after:translate-x-full" />
                    <span
                      className={cn(
                        'ms-2.5 text-base font-normal transition-colors',
                        isAnnual ? 'text-secondary' : 'text-secondary/60',
                      )}>
                      {t('yearly')}
                    </span>
                  </label>
                </div>
              </RevealAnimation>
            </div>
          </div>
          {/* pricing cards */}
          <div className="relative">
            <PricingCard isAnnual={isAnnual} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
