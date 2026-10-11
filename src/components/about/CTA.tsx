import gradientImg from '@public/images/ns-img-499.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { useTranslations } from 'next-intl';

const CTA = () => {
  const t = useTranslations('cta');
  const common = useTranslations('common');
  return (
    <section className="mx-auto max-w-[320px] py-[80px] min-[425px]:max-w-[350px] min-[475px]:max-w-[450px] sm:max-w-[600px] md:max-w-[700px] md:py-[100px] lg:max-w-[980px] xl:max-w-[1240px] 2xl:max-w-[1440px]">
      <RevealAnimation delay={0.1}>
        <div className="border-stroke-2 bg-background-2 relative overflow-hidden rounded-[20px] border sm:rounded-[32px]">
          {/* bg gradient  */}
          <RevealAnimation delay={0.1} offset={200} direction="left">
            <figure className="pointer-events-none absolute -top-[100%] -left-[7%] size-[850px] rotate-[275deg] select-none sm:-top-[35%]">
              <Image src={gradientImg} alt="cta-bg" className="w-[50%] sm:w-full" />
            </figure>
          </RevealAnimation>

          <RevealAnimation delay={0.1}>
            <div className="relative z-10 p-10 min-[475px]:p-14 sm:p-20 lg:p-[100px]">
              <div className="mb-10 space-y-5 text-center sm:mb-14">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-yellow text-ns-yellow">{t('badge')}</span>
                </RevealAnimation>
                <div className="space-y-3">
                  <RevealAnimation delay={0.2}>
                  <h2 className="text-secondary font-normal">{t('title')}</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p className="text-secondary/60">
                      {t('description')}
                    </p>
                  </RevealAnimation>
                </div>
              </div>

              <RevealAnimation delay={0.4}>
                <form className="flex flex-col items-center justify-center gap-y-5 md:flex-row md:gap-x-3 md:gap-y-0">
                  <fieldset className="inline-block">
                    <input
                      type="text"
                      placeholder={common('emailPlaceholder')}
                      className="border-stroke-3 bg-white text-secondary placeholder:text-secondary/60 shadow-1 ring-primary-100 focus:ring-primary-600 block h-12 w-[270px] rounded-full border px-[18px] py-3 font-normal ring-[0.7px] outline-none placeholder:font-normal focus:ring-1 max-[376px]:w-[250px] md:w-[371px]"
                    />
                  </fieldset>
                  <button className="btn btn-md btn-primary hover:btn-accent btn-md h-12 w-full border-0 md:w-auto">
                    <span>{t('button')}</span>
                  </button>
                </form>
              </RevealAnimation>
            </div>
          </RevealAnimation>
        </div>
      </RevealAnimation>
    </section>
  );
};

CTA.displayName = 'CTA';
export default CTA;
