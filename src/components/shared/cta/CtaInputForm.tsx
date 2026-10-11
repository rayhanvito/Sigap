'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';

interface CtaInputFormProps {
  btnClass?: string;
  ctaBtnText?: string;
  inputFieldClass?: string;
}

const CtaInputForm = ({ btnClass, ctaBtnText, inputFieldClass }: CtaInputFormProps) => {
  const t = useTranslations('common');
  const buttonText = ctaBtnText ?? t('trySigap');

  return (
    <RevealAnimation delay={0.4}>
      <form
        action="#"
        method="post"
        className="flex flex-col items-center justify-start gap-3 md:flex-row"
        aria-label="cta-form">
        <input
          type="email"
          name="email"
          id="userEmail"
          placeholder={t('emailPlaceholder')}
          required
          className={cn(
            'placeholder:text-foreground/50 border-stroke-1 text-foreground focus-visible:outline-primary-300 focus:border-primary-600 h-12 w-[85%] rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none focus-visible:outline-1 md:w-[430px] lg:w-[340px]',
            inputFieldClass,
          )}
          aria-label="cta-input"
        />
        <button
          type="submit"
          className={cn(
            'btn btn-md btn-primary hover:btn-secondary h-12 w-[85%] md:w-auto',
            btnClass,
          )}
          aria-label="cta-button">
          <span>{buttonText}</span>
        </button>
      </form>
    </RevealAnimation>
  );
};
CtaInputForm.displayName = 'CtaInputForm';

export default CtaInputForm;
