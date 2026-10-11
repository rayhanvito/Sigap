import { CheckIcon } from '@/icons';
import roundImageImg from '@public/images/ns-img-73.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const teamList = [
  { id: 1, key: 'owner' },
  { id: 2, key: 'sales' },
  { id: 3, key: 'service' },
  { id: 4, key: 'operations' },
];

const HowItWork = () => {
  const t = useTranslations('home.workflow');
  return (
    <section
      className="bg-background-2 overflow-hidden pt-[100px] pb-[200px]"
      aria-label="Who uses Sigap">
      <div className="main-container">
        <div className="flex flex-col items-center gap-[100px] lg:flex-row">
          {/* left img  */}
          <div className="relative w-full max-w-[490px] xl:max-w-[595px]">
            <RevealAnimation delay={0.1} offset={100}>
              <figure>
                <Image src={roundImageImg} alt="Sigap workflow" className="h-auto w-full lg:max-w-[450px]" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.3} offset={100} direction="right">
              <figure className="shadow-1 absolute right-0 bottom-24 max-h-[101px] min-h-[100px] min-w-[288px] space-y-2 overflow-hidden rounded-[12px] bg-white p-4">
                <figcaption className="flex items-center justify-between gap-2">
                  <span className="text-tagline-1 font-normal">{t('cardLabel')}</span>
                  <span className="text-secondary text-tagline-1 font-medium">{t('cardValue')}</span>
                </figcaption>
                <div className="bg-secondary/15 h-1.5 w-full rounded-full" aria-hidden="true" />
              </figure>
            </RevealAnimation>
          </div>
          {/* right side content  */}
          <div className="mx-auto flex max-w-[595px] flex-col items-start lg:max-w-max">
            <RevealAnimation delay={0.4}>
              <h2 className="mb-3">{t('title')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <p className="mb-6">
                {t('description')}
              </p>
            </RevealAnimation>
            <ul className="mb-14 space-y-2.5">
              {teamList.map((item, idx) => (
                <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                  <li className="flex items-center gap-4">
                    <span className="bg-secondary flex size-[18px] shrink-0 items-center justify-center rounded-full">
                      <CheckIcon />
                    </span>
                    <span className="text-tagline-1 text-foreground font-medium">{t(`roles.${item.key}`)}</span>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
            <RevealAnimation delay={0.7}>
              <div>
                <LinkButton
                  href="/about"
                  className="btn btn-secondary btn-xl hover:btn-primary"
                  aria-label="Learn how Sigap works">
                  {t('link')}
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
