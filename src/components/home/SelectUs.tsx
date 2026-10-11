import profitChartImg from '@public/images/ns-img-240.png';
import selectUsImg01 from '@public/images/ns-img-260.png';
import gradient6Img from '@public/images/ns-img-498.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const crmFeatures = [
  { id: 1, icon: 'ns-shape-8', key: 'one' },
  { id: 2, icon: 'ns-shape-9', key: 'two' },
  { id: 3, icon: 'ns-shape-12', key: 'three' },
  { id: 4, icon: 'ns-shape-21', key: 'four' },
] as const;

const SelectUs = () => {
  const t = useTranslations('home.select');
  return (
    <section className="bg-background-3 overflow-hidden py-[100px]">
      <div className="main-container">
        <div className="relative flex flex-col items-center justify-between gap-y-14 lg:flex-row lg:gap-0">
          {/* left side  */}
          <div className="space-y-14">
            {/* heading  */}
            <div className="max-w-[536px] space-y-5 md:w-full">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-primary">{t('badge')}</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2>{t('title')}</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p>
                    {t('description')}
                  </p>
                </RevealAnimation>
              </div>
            </div>
            {/* list  */}
            <ul className="space-y-2" aria-label="Sigap features">
              {crmFeatures.map((feature, idx) => (
                <RevealAnimation key={feature.id} delay={0.4 + idx * 0.1}>
                  <li className="flex items-start gap-3 p-3">
                    <div className="overflow-hidden" aria-hidden="true">
                      <span className={`${feature.icon} text-foreground text-[36px]`} />
                    </div>
                    <h3 className="text-tagline-1 text-foreground leading-[150%] font-normal">
                      {t(`points.${feature.key}`)}
                    </h3>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          {/* right side  */}
          <RevealAnimation delay={0.2} offset={100}>
            <div className="bg-background-1 relative h-[450px] w-[320px] overflow-hidden rounded-[20px] md:h-[598px] md:w-[459px] lg:h-[489px] lg:w-[431px] xl:h-[598px] xl:w-[459px]">
              {/* bg img  */}
              <figure
                className="pointer-events-none absolute top-[-173px] right-[-80px] z-10 size-[700px] rotate-[240deg] overflow-hidden select-none"
                aria-hidden="true">
                <Image src={gradient6Img} alt="Decorative gradient background" className="size-full object-cover" />
              </figure>
            </div>
          </RevealAnimation>
          {/* right side img one  */}
          <RevealAnimation delay={0.5} offset={100} duration={2} useSpring={true} direction="right">
            <figure
              className="absolute top-[590px] right-[-5px] z-20 w-[153px] overflow-hidden rounded-xl max-[376px]:top-[666px] sm:rounded-[20px] md:w-[253px] lg:top-10 lg:right-[-19px] lg:w-[188px] xl:right-[-15px] xl:w-[210px] 2xl:right-[-83px] 2xl:w-[253px]"
              aria-hidden="true">
              <Image
                src={selectUsImg01}
                alt="Sigap customer overview"
                className="size-full object-cover"
              />
            </figure>
          </RevealAnimation>
          {/* right side img three  */}
          <RevealAnimation delay={0.7} offset={100} duration={2} useSpring={true} direction="right">
            <figure
              className="shadow-3 absolute right-[10px] bottom-[46px] z-20 w-full max-w-[250px] overflow-hidden rounded-xl sm:rounded-[20px] md:right-[12px] md:max-w-[364px] lg:right-[-16px] lg:max-w-[300px] xl:right-[-1px] xl:max-w-[324px] 2xl:right-[-82px] 2xl:max-w-[395px]"
              aria-hidden="true">
              <Image
                src={profitChartImg}
                alt="Sigap reporting view"
                className="size-full object-cover"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SelectUs;
