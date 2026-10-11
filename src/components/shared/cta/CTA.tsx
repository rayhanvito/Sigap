'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';
import CTACheckList from './CTACheckList';
import CtaInputForm from './CtaInputForm';

interface CTAProps {
  className?: string;
  badgeClass?: string;
  ctaHeading?: string;
  spanText?: string;
  description?: string;
  btnClass?: string;
  ctaBtnText?: string;
  badgeText?: string;
  descriptionClass?: string;
  headingClass?: string;
  listTextClass?: string;
  inputFieldClass?: string;
  checkListVariant?: 'default' | 'gray';
}

const CTA = ({
  className,
  badgeClass,
  ctaHeading,
  spanText,
  description,
  btnClass,
  ctaBtnText,
  badgeText,
  descriptionClass,
  headingClass,
  listTextClass,
  inputFieldClass,
  checkListVariant = 'default',
}: CTAProps) => {
  const t = useTranslations('common');
  const ctaT = useTranslations('cta');
  const resolvedBadgeText = badgeText ?? ctaT('badge');
  const resolvedHeading = ctaHeading ?? ctaT('title');
  const resolvedDescription = description ?? ctaT('description');
  const resolvedButtonText = ctaBtnText ?? ctaT('button');
  return (
    <section className={cn('py-[50px] md:py-20 lg:py-28', className)} aria-label="cta section">
      <div className="main-container">
        <div className="xl :gap-0 flex flex-col items-center justify-between gap-8 xl:flex-row">
          <div className="mx-3 max-w-[649px] space-y-3 text-center sm:mx-0 md:w-full xl:text-left">
            {resolvedBadgeText && (
              <RevealAnimation delay={0.3}>
                <span className={cn('badge badge-green', badgeClass)}>{resolvedBadgeText}</span>
              </RevealAnimation>
            )}

            <div className="space-y-3">
                <RevealAnimation delay={resolvedBadgeText ? 0.4 : 0.3}>
                <h2 className={cn('md:text-heading-2 text-heading-5', headingClass)} aria-label="cta-heading">
                  {resolvedHeading}
                  {spanText && <span className="text-primary-500"> {spanText}</span>}
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={resolvedBadgeText ? 0.5 : 0.4}>
                <p aria-label="cta-description" className={cn(descriptionClass)}>
                  {resolvedDescription}
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* newsletter form  */}
          <div
            className={cn(
              'w-full max-w-[562px] space-y-6 lg:pl-9 xl:pl-[96px]',
              resolvedBadgeText && 'mt-[40px] space-y-6 lg:mt-[67px]',
            )}>
            <CtaInputForm btnClass={btnClass} ctaBtnText={resolvedButtonText} inputFieldClass={inputFieldClass} />
            <CTACheckList
              className="gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-0 xl:justify-start"
              ctaCheckListData={[
                {
                  id: '1',
                  text: t('noCreditCard'),
                },
                {
                  id: '2',
                  text: t('humanHandoff'),
                },
              ]}
              listTextClass={listTextClass}
              checkListVariant={checkListVariant}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
