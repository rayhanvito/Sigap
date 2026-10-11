'use client';

import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
const Faq = () => {
  const t = useTranslations('home.faq');
  const faqIds = ['one', 'two', 'three', 'four', 'five'] as const;

  return (
    <section className="py-[100px]" aria-label="Frequently Asked Questions">
      <div className="main-container">
        <div className="space-y-[96px]">
          {/* heading  */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <span
                className="badge badge-primary uppercase"
                id="faq-heading"
                aria-label="Frequently Asked Questions Section">
                {t('badge')}
              </span>
            </RevealAnimation>
            <div className="space-y-8">
              <RevealAnimation delay={0.2}>
                <h2>{t('title')}</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-foreground max-w-[596px] md:w-full mx-auto">
                  {t('description')}
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* faq accordion  */}

          <RevealAnimation delay={0.4}>
            <div>
              <Accordion
                className=" max-w-[786px] mx-auto"
                defaultValue="1"
                enableScrollAnimation={true}
                animationDelay={0.1}>
                {faqIds.map((id, index) => (
                  <AccordionItem
                    className="bg-background-1 rounded-[20px] px-8"
                    key={id}
                    value={(index + 1).toString()}>
                    <AccordionTrigger
                      titleClassName="flex-1 text-left lg:text-heading-6 text-tagline-1 font-normal text-foreground"
                      className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
                      value={(index + 1).toString()}
                      iconType="arrow">
                      {t(`items.${id}.question`)}
                    </AccordionTrigger>
                    <AccordionContent value={(index + 1).toString()}>{t(`items.${id}.answer`)}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Faq;
