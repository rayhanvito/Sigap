import gradientBorder from '@public/images/ns-img-523.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const OperationCards = () => {
  const t = useTranslations('pages.useCase');
  const operationCardsData = [
    { id: 'owner', shapeClass: 'ns-shape-19', role: 'owner' },
    { id: 'sales', shapeClass: 'ns-shape-35', role: 'sales' },
    { id: 'service', shapeClass: 'ns-shape-4', role: 'service' },
    { id: 'operations', shapeClass: 'ns-shape-32', role: 'operations' },
  ] as const;

  return (
    <div className="grid grid-cols-12 items-center justify-center gap-8">
      {operationCardsData.map((card) => (
        <RevealAnimation key={card.id}>
          <div className="dark:bg-background-7 relative col-span-12 w-full overflow-hidden rounded-[20px] bg-white p-2 md:col-span-6 lg:col-span-6 xl:col-span-3 xl:w-[300px]">
            {/* border img  */}
            <figure className="pointer-events-none absolute top-[-95%] left-[-85%] size-[800px] rotate-[82deg] overflow-hidden select-none">
              <Image src={gradientBorder} alt="border-img" className="size-full" />
            </figure>
            {/* card content  */}
            <div className="bg-background-1 dark:bg-background-6 relative z-10 space-y-6 rounded-xl p-8">
              <div className="inline-block">
                <span className={`${card.shapeClass} text-secondary dark:text-accent text-[52px]`} />
              </div>
              <div className="space-y-1">
                <h4 className="text-heading-5">{t(`roles.${card.role}.title`)}</h4>
                <p>{t(`roles.${card.role}.description`)}</p>
              </div>
            </div>
          </div>
        </RevealAnimation>
      ))}
    </div>
  );
};

OperationCards.displayName = 'OperationCards';
export default OperationCards;
