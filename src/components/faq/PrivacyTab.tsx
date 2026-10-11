import { useTranslations } from 'next-intl';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const PrivacyTab = () => {
  const t = useTranslations('pages.privacy.sections');
  const items = ['collect', 'use', 'separation', 'rights', 'changes'] as const;

  return (
    <Accordion
      className="mx-auto w-full max-w-[850px] space-y-4"
      defaultValue="1"
      enableScrollAnimation={true}
      animationDelay={0.1}>
      {items.map((item, index) => (
        <AccordionItem
          className="dark:bg-background-7 rounded-[20px] bg-white px-6 sm:px-8"
          key={item}
          value={(index + 1).toString()}>
          <AccordionTrigger
            titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
            className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
            value={(index + 1).toString()}
            iconType="arrow">
            {t(`${item}.title`)}
          </AccordionTrigger>
          <AccordionContent value={(index + 1).toString()}>{t(`${item}.description`)}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default PrivacyTab;
