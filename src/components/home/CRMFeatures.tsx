'use client';

import { cn } from '@/utils/cn';
import featureImg01 from '@public/images/ns-img-256.png';
import featureImg02 from '@public/images/ns-img-257.png';
import featureImg03 from '@public/images/ns-img-258.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const FEATURES = [
  {
    id: 1,
    headingId: 'sales-management-heading',
    key: 'one',
    image: {
      light: featureImg01,
      alt: 'Sales pipeline management dashboard',
    },
    variant: 'default',
  },
  {
    id: 2,
    headingId: 'ai-handoff-heading',
    key: 'two',
    image: {
      light: featureImg02,
      alt: 'Shared WhatsApp inbox interface',
    },
    variant: 'support',
  },
  {
    id: 3,
    headingId: 'contacts-heading',
    key: 'three',
    image: {
      light: featureImg03,
      alt: 'Customer contacts and leads interface',
    },
    variant: 'marketing',
  },
] as const;

export default function CRMFeatures() {
  const t = useTranslations('home.features');
  return (
    <section className="py-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* Heading */}
          <div className="mx-auto max-w-[724px] space-y-5 text-center md:w-full">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary">{t('badge')}</span>
            </RevealAnimation>

            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>{t('title')}</h2>
              </RevealAnimation>

              <RevealAnimation delay={0.3}>
                <p className="text-secondar">
                  {t('description')}
                </p>
              </RevealAnimation>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-12 items-center justify-center gap-y-8 md:gap-x-8 md:gap-y-0">
            {FEATURES.map((f, idx) => (
              <RevealAnimation key={f.id} delay={0.4 + idx * 0.1}>
                <div
                  className={cn(
                    'bg-background-2 col-span-12 h-full max-h-[400px] max-w-[408px] space-y-6 rounded-[20px] px-8 py-[42px] sm:w-full md:col-span-6 lg:col-span-4',
                    f.variant === 'support' && 'md:py-[50px] lg:py-[42px]',
                  )}>
                  {/* Image */}
                  <figure
                    className={cn(
                      'w-full',
                      f.variant === 'default' && 'max-h-[174px] max-w-[371px]',
                      f.variant === 'support' && 'max-h-[174px] max-w-[344px] overflow-hidden',
                      f.variant === 'marketing' && 'max-w-[371px] overflow-hidden rounded-[10px]',
                    )}>
                    {/* Light */}
                    <Image
                      src={f.image.light}
                      alt={f.image.alt}
                      width={371}
                      height={174}
                      className={cn(
                        'size-full object-cover',
                        f.variant === 'marketing' && 'rounded-[10px]',
                      )}
                    />
                  </figure>

                  {/* Text + bullets */}
                  <div className="space-y-3">
                    <h3 id={f.headingId} className="text-heading-5">
                      {t(`cards.${f.key}.title`)}
                    </h3>

                    <ul className="space-y-3" aria-label={`${t(`cards.${f.key}.title`)} details`}>
                      <li className="flex items-center gap-1.5">
                        <span
                          className="bg-secondary flex size-1.5 items-center justify-center overflow-hidden rounded-full"
                          aria-hidden="true"
                        />
                        <span className="text-foreground/60 text-xs leading-[150%] font-normal">
                          {t(`cards.${f.key}.points`)}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
