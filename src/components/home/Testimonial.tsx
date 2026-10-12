'use client';

import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import bahlilImg from '@public/images/Bahlil_Lahadalia.jpg';
import gibranImg from '@public/images/Gibran_Rakabuming.jpg';
import jokowiImg from '@public/images/Joko_Widodo.jpg';
import prabowoImg from '@public/images/Prabowo_Subianto.jpg';
import RevealAnimation from '../animation/RevealAnimation';

const trustPoints = [
  { key: 'one', img: prabowoImg },
  { key: 'two', img: jokowiImg },
  { key: 'three', img: bahlilImg },
  { key: 'four', img: gibranImg },
] as const satisfies readonly { key: string; img: StaticImageData }[];

const Testimonial = () => {
  const t = useTranslations('home.trust');

  return (
    <section className="bg-background-3 pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-[67px]">
        <div className="mb-14 text-center lg:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 !badge-primary mb-5">{t('badge')}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto max-w-[750px]">{t('title')}</h2>
          </RevealAnimation>
        </div>
      </div>

      <RevealAnimation delay={0.4}>
        <div className="relative">
          <div className="from-background-2 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
          <div className="from-background-2 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />

          <Marquee autoFill pauseOnHover className="w-full overflow-hidden">
            <div className="flex items-center justify-center gap-8 py-4">
              {trustPoints.map(({ key, img }, index) => (
                <div
                  key={key}
                  className={`group relative h-[245px] max-w-[340px] min-w-[340px] perspective-[1000px] sm:max-w-[358px] sm:min-w-[358px] ${index === 0 ? 'ml-8' : ''}`}>
                  <div className="flipper h-full w-full">
                    <div className="front absolute top-0 left-0 flex h-full w-full flex-col justify-between rounded-[20px] bg-white p-8">
                      <p className="text-secondary line-clamp-4 max-w-[297px] text-wrap">{t(`quotes.${key}`)}</p>
                      <div>
                        <div className="border-stroke-4 mb-8 border-t" />
                        <figure className="flex items-center gap-3">
                          <Image
                            src={img}
                            alt={t(`people.${key}.name`)}
                            className="size-11 shrink-0 rounded-full object-cover object-top"
                          />
                          <figcaption>
                            <h3 className="text-tagline-1 text-secondary font-medium">{t(`people.${key}.name`)}</h3>
                            <p className="text-tagline-2 text-secondary/60">{t(`people.${key}.role`)}</p>
                          </figcaption>
                        </figure>
                      </div>
                    </div>

                    <div className="back bg-secondary absolute top-0 left-0 flex h-full w-full max-w-[340px] min-w-[340px] flex-col items-center justify-center space-y-3 overflow-hidden rounded-[20px] p-8 sm:max-w-[358px] sm:min-w-[358px]">
                      <h3 className="text-accent relative z-20 text-[64px] leading-[1.1] font-light">
                        {String(index + 1).padStart(2, '0')}
                      </h3>
                      <p className="text-accent/70 relative z-20 max-w-[250px] text-center">{t(`points.${key}`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Testimonial;
