'use client';

import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface Feature {
  label: string;
  enabled: boolean;
}

interface PricingPlan {
  title: string;
  description: string;
  priceMonth: string;
  priceYear: string;
  variant: 'standard' | 'highlight';
  features: Feature[];
}

interface PricingCardProps {
  isAnnual: boolean;
}

const planKeys = ['starter', 'business', 'selfHost'] as const;

const PricingCard = ({ isAnnual }: PricingCardProps) => {
  const t = useTranslations('home.pricing');

  return (
    <div className="grid grid-cols-12 items-center justify-center gap-y-8 lg:gap-x-8">
      {planKeys.map((key, idx) => {
        const plan = t.raw(`plans.${key}`) as PricingPlan;
        const isPremium = plan.variant === 'highlight';

        return (
          <RevealAnimation key={key} delay={0.5 + idx * 0.1}>
            <div
              className={cn(
                'col-span-12 mx-auto w-full max-w-[604px] rounded-[20px] lg:col-span-4',
                isPremium ? 'bg-primary-100 p-2' : 'bg-background-3 p-8',
              )}>
              <div className={cn(isPremium && 'rounded-[12px] bg-primary-500 p-8')}>
                {/* Title + Description */}
                <h3 className={cn('text-heading-5 mb-2 font-normal', isPremium && 'text-white')}>{plan.title}</h3>
                <p className={cn('mb-6 max-w-[250px]', isPremium ? 'text-accent/60' : 'text-secondary/60')}>
                  {plan.description}
                </p>

                {/* Pricing */}
                <div className="mb-7" aria-label={`${isAnnual ? t('yearly') : t('monthly')} pricing`}>
                  <h4 className={cn('text-heading-4 font-normal', isPremium && 'text-white')}>
                    {isAnnual ? plan.priceYear : plan.priceMonth}
                  </h4>
                  <p className={cn(isPremium ? 'text-white' : 'text-secondary')}>
                    {isAnnual ? t('perYear') : t('perMonth')}
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact-us"
                  className={cn(
                    'btn btn-md mb-8 block w-full text-center first-letter:uppercase before:content-none',
                    isPremium ? 'btn-accent hover:btn-secondary' : 'btn-white hover:btn-primary',
                  )}
                  rel="noopener">
                  {t('cta')}
                </Link>

                {/* Features */}
                <ul className="relative list-none space-y-2.5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex shrink-0 items-center gap-2.5">
                      {/* Feature Icon */}
                      <span
                        className={cn(
                          'flex size-5 shrink-0 items-center justify-center rounded-full',
                          feature.enabled
                            ? isPremium
                              ? 'bg-white'
                              : 'bg-secondary'
                            : isPremium
                              ? 'bg-accent/20'
                              : 'bg-white',
                        )}>
                        <CheckIcon
                          className={cn(
                            feature.enabled
                              ? isPremium
                                ? 'fill-secondary/60'
                                : 'fill-white'
                              : isPremium
                                ? 'fill-accent/60'
                                : 'fill-secondary/60',
                          )}
                        />
                      </span>

                      <span
                        className={cn(
                          'text-tagline-1 font-normal',
                          feature.enabled
                            ? isPremium
                              ? 'text-accent'
                              : 'text-secondary'
                            : isPremium
                              ? 'text-accent/60'
                              : 'text-secondary/60',
                        )}>
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealAnimation>
        );
      })}
    </div>
  );
};

export default PricingCard;
