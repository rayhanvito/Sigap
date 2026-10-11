import faqImg from '@public/images/ns-img-52.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const Faq = () => {
  const pageT = useTranslations('pages.faq');
  const t = useTranslations('pages.pricing.faq');
  return (
    <section
      className="py-[50px] md:py-[70px] lg:py-[85px] xl:pt-[200px] xl:pb-[100px]"
      aria-label="Frequently Asked Questions">
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
          <div className="flex-1 space-y-14 text-center lg:text-left">
            <div className="space-y-5">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-cyan">{pageT('badge')}</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="mx-auto lg:mx-0 lg:max-w-[439px]" id="faq-heading">
                  {pageT('title')}
                </h2>
              </RevealAnimation>
            </div>

            {/* faq accordion  */}
            <RevealAnimation delay={0.4}>
              <Accordion className="mx-auto w-full max-w-[576px] lg:mx-0" defaultValue="1">
                <AccordionItem value="1">
                  <AccordionTrigger
                    className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary "
                    value="1"
                    iconType="arrow">
                    {t('one.question')}
                  </AccordionTrigger>

                  <AccordionContent value="1">
                    {t('one.answer')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="2">
                  <AccordionTrigger
                    className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary "
                    value="2"
                    iconType="arrow">
                    {t('two.question')}
                  </AccordionTrigger>

                  <AccordionContent value="2">
                    {t('two.answer')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="3">
                  <AccordionTrigger
                    className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary "
                    value="3"
                    iconType="arrow">
                    {t('three.question')}
                  </AccordionTrigger>

                  <AccordionContent value="3">
                    {t('three.answer')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="4">
                  <AccordionTrigger
                    className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary "
                    value="4"
                    iconType="arrow">
                    {t('four.question')}
                  </AccordionTrigger>

                  <AccordionContent value="4">
                    {t('four.answer')}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </RevealAnimation>
          </div>

          {/* <!-- faq image --> */}
          <RevealAnimation delay={0.3}>
            <figure className="relative w-full max-w-[684px] flex-1 overflow-hidden">
              <Image
                className="size-full object-cover"
                src={faqImg}
                alt="Ilustrasi pertanyaan umum Sigap"
                loading="lazy"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Faq;
