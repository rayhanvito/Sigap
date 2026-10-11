import integrationImg from '@public/images/ns-img-259.png';
import gradient22Img from '@public/images/ns-img-510.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Integration = () => {
  const t = useTranslations('home.integration');
  return (
    <section className="bg-background-1 py-[60px] lg:py-[100px]">
      <div className="lp:px-0 mx-auto max-w-[1440px] px-5">
        <div className="border-stroke-2 bg-background-2 relative space-y-[40px] overflow-hidden rounded-4xl border pt-[100px] lg:space-y-[70px]">
          {/* bg img  */}
          <RevealAnimation delay={0.1} offset={200} direction="up">
            <figure className="pointer-events-none absolute top-[-73%] left-[-45%] size-[1790px] overflow-hidden select-none md:top-[-120%] md:left-[-99%] lg:top-[-85%] lg:left-[-70%] xl:top-[-73%] xl:left-[-45%]">
              <Image src={gradient22Img} alt="bg" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="relative z-10 space-y-14">
            <div className="mx-auto max-w-[610px] space-y-5 px-5 text-center sm:px-0">
              <RevealAnimation delay={0.2}>
                  <span className="badge badge-primary">{t('badge')}</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.3}>
                  <h2 className="text-secondary">{t('title')}</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p className="text-secondary/60">
                    {t('description')}
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <RevealAnimation delay={0.5}>
              <div className="text-center">
                <LinkButton
                  href="/integration"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-xl hover:btn-secondary">
                  {t('link')}
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.6}>
            <div className="relative z-10 flex items-center justify-center">
              <figure className="mx-auto w-full max-w-[300px] max-[376px]:max-w-full md:max-w-[500px] lg:max-w-[850px]">
                <Image src={integrationImg} className="size-full object-cover" alt="integration-img" />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Integration;
