import selectUsImg from '@public/images/kenapa-sigap.png';
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
            <div className="relative aspect-[2/3] w-[320px] md:w-[420px] lg:w-[380px] xl:w-[430px]">
              <Image
                src={selectUsImg}
                alt="Sigap membantu bisnis melayani pelanggan lewat WhatsApp"
                className="size-full object-contain"
              />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SelectUs;
