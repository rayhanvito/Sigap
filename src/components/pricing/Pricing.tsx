import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import gradientImg from '@public/images/ns-img-496.png';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

type PlanId = 'essential' | 'advanced' | 'enterprise';
type FeatureId =
  | 'pages'
  | 'customBranding'
  | 'customDesign'
  | 'comprehensiveBranding'
  | 'seoOptimization'
  | 'brandingSupport'
  | 'tailoredAssistance'
  | 'expertGuidance'
  | 'strategicSupport'
  | 'professionalHelp'
  | 'innovativeStrategies'
  | 'effectiveSolutions'
  | 'holisticSupport'
  | 'dynamicOptions'
  | 'insightfulAdvice'
  | 'valueDrivenSupport';

type PricingPlan = {
  id: PlanId;
  delay: number;
  variant: 'standard' | 'highlight';
};

type FeatureRow = {
  id: FeatureId;
  translationIndex: number;
  availability: Record<PlanId, boolean>;
};

const featureMatrix: FeatureRow[] = [
  {
    id: 'pages',
    translationIndex: 0,
    availability: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'customBranding',
    translationIndex: 1,
    availability: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'customDesign',
    translationIndex: 2,
    availability: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'comprehensiveBranding',
    translationIndex: 3,
    availability: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'seoOptimization',
    translationIndex: 4,
    availability: { essential: true, advanced: true, enterprise: false },
  },
  {
    id: 'brandingSupport',
    translationIndex: 5,
    availability: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'tailoredAssistance',
    translationIndex: 6,
    availability: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'expertGuidance',
    translationIndex: 7,
    availability: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'strategicSupport',
    translationIndex: 8,
    availability: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'professionalHelp',
    translationIndex: 9,
    availability: { essential: false, advanced: true, enterprise: true },
  },
  {
    id: 'innovativeStrategies',
    translationIndex: 10,
    availability: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'effectiveSolutions',
    translationIndex: 11,
    availability: { essential: false, advanced: true, enterprise: true },
  },
  {
    id: 'holisticSupport',
    translationIndex: 12,
    availability: { essential: false, advanced: true, enterprise: true },
  },
  {
    id: 'dynamicOptions',
    translationIndex: 13,
    availability: { essential: false, advanced: true, enterprise: true },
  },
  {
    id: 'insightfulAdvice',
    translationIndex: 14,
    availability: { essential: false, advanced: true, enterprise: true },
  },
  {
    id: 'valueDrivenSupport',
    translationIndex: 15,
    availability: { essential: false, advanced: false, enterprise: true },
  },
];

const pricingPlans: PricingPlan[] = [
  {
    id: 'essential',
    delay: 0.5,
    variant: 'standard',
  },
  {
    id: 'advanced',
    delay: 0.6,
    variant: 'highlight',
  },
  {
    id: 'enterprise',
    delay: 0.7,
    variant: 'standard',
  },
];

const Pricing = () => {
  const t = useTranslations('pages.pricing');
  const planCopy = {
    essential: {
      title: t('plans.starter.title'),
      description: t('plans.starter.description'),
      status: t('plans.starter.status'),
    },
    advanced: {
      title: t('plans.business.title'),
      description: t('plans.business.description'),
      status: t('plans.business.status'),
    },
    enterprise: {
      title: t('plans.selfHost.title'),
      description: t('plans.selfHost.description'),
      status: t('plans.selfHost.status'),
    },
  };

  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-32 pb-20 sm:pt-36 md:pt-42 md:pb-[100px] lg:pb-[150px] xl:pt-[180px] xl:pb-[200px]">
        <div className="bg-background-1 mx-auto w-full max-w-[1440px] space-y-[70px] rounded-2xl px-5 py-[100px] md:px-6 lg:px-10 xl:px-16 ">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan-v2">{t('badge')}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2>{t('title')}</h2>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-y-8">
            <RevealAnimation delay={0.4}>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <div>
                  <div className="hidden h-[201px] w-[290px] md:block" />
                  <div className="space-y-[10px]">
                    <h3 className="text-heading-6">{t('featuresTitle')}</h3>
                    <ul>
                      {featureMatrix.map((feature) => (
                        <li key={feature.id} className="border-b-stroke-4  h-14 border-b px-0 py-4">
                          <p className="text-secondary/60  text-tagline-1 font-normal">
                            {t(`features.${feature.translationIndex}`)}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            {pricingPlans.map((plan) => {
              const isHighlight = plan.variant === 'highlight';
              const isAdvanced = plan.id === 'advanced';

              return (
                <RevealAnimation key={plan.id} delay={plan.delay}>
                  <div className="col-span-12 md:col-span-6 xl:col-span-3">
                    <div>
                      {isHighlight ? (
                        <div className="relative z-10 px-4">
                          <div className="border-primary-200 bg-primary-100 relative overflow-hidden rounded-[20px] border px-6 py-8">
                            <div className="absolute -top-28 -right-20 z-20 h-full w-full">
                              <Image src={gradientImg} alt="pricing bg" priority />
                            </div>
                            <div className="relative z-30 space-y-8">
                              <div>
                                <p
                                  className={cn(
                                    'text-tagline-1 mb-3 font-medium',
                                    'text-secondary/60',
                                  )}>
                                  {planCopy[plan.id].title}
                                </p>
                                <h3
                                  className={cn(
                                    'text-heading-5 font-normal',
                                    'text-secondary',
                                  )}>
                                  {planCopy[plan.id].status}
                                </h3>
                                <p
                                  className={cn(
                                    'text-secondary/60',
                                  )}>
                                  {planCopy[plan.id].description}
                                </p>
                              </div>
                              <Link
                                href="/contact-us"
                                className={cn(
                                  'btn btn-md w-full first-letter:uppercase before:content-none',
                                  isAdvanced
                                    ? 'btn-primary hover:btn-white '
                                    : 'btn-white hover:btn-primary ',
                                )}>
                                {t('cta')}
                              </Link>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="px-4">
                          <div className="bg-background-3  space-y-8 rounded-[20px] px-6 py-8">
                            <div>
                              <p
                                className={cn(
                                  'text-tagline-1 mb-3 font-medium',
                                  isHighlight ? 'text-accent/60' : 'text-secondary/60 ',
                                )}>
                                  {planCopy[plan.id].title}
                              </p>
                              <h3
                                className={cn(
                                  'text-heading-5 font-normal',
                                  isHighlight ? 'text-accent' : 'text-secondary ',
                                )}>
                                {planCopy[plan.id].status}
                              </h3>
                              <p
                                className={cn(
                                  isHighlight ? 'text-accent/60' : 'text-secondary/60 ',
                                )}>
                                  {planCopy[plan.id].description}
                              </p>
                            </div>
                            <Link
                              href="/contact-us"
                              className={cn(
                                'btn btn-md w-full first-letter:uppercase before:content-none',
                                isAdvanced
                                  ? 'btn-primary hover:btn-white '
                                  : 'btn-white hover:btn-primary ',
                              )}>
                              {t('cta')}
                            </Link>
                          </div>
                        </div>
                      )}
                      <div className="flex flex-col space-y-8 rounded-[20px]">
                        <ul>
                          <li className="border-b-stroke-4  h-14 border-b px-6 py-4 text-center">
                            <p className="text-secondary/60  font-medium">{planCopy[plan.id].status}</p>
                          </li>
                          {featureMatrix.map((feature) => {
                            const isAvailable = feature.availability[plan.id];
                            return (
                              <li
                                key={`${plan.id}-${feature.id}`}
                                className="border-b-stroke-4  flex h-14 items-center justify-center border-b px-6 py-4 text-center">
                                <span
                                  className={cn(
                                    'flex size-5 items-center justify-center rounded-full transition-colors',
                                    isAvailable ? 'bg-secondary ' : 'bg-secondary/30 ',
                                  )}>
                                  <CheckIcon className={cn(!isAvailable && 'opacity-50')} />
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                        <div
                          className={cn(
                            'btn btn-primary hover:btn-white-dark  btn-md mx-auto w-fit',
                            isHighlight && 'text-center',
                          )}>
                          <Link href="/contact-us">
                            <span>{t('cta')} </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

Pricing.displayName = 'Pricing';
export default Pricing;
