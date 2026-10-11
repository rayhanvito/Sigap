import gradientImg from '@public/images/ns-img-515.png';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const DocsContent = () => {
  const t = useTranslations('pages.documentation');
  const topics = ['account', 'inbox', 'ai', 'contacts', 'followUp', 'api', 'security'] as const;

  return (
    <section className="pt-32 pb-[200px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container mb-[70px]">
        <RevealAnimation delay={0.1}>
          <div className="space-y-3 text-center">
            <h2>{t('title')}</h2>
            <p>{t('description')}</p>
          </div>
        </RevealAnimation>
      </div>
      <div className="main-container">
        <div className="documentation space-y-[70px]">
          <div className="space-y-8">
            <RevealAnimation delay={0.3}>
              <h4>{t('title')}</h4>
            </RevealAnimation>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {topics.slice(0, 2).map((topic, index) => (
                <RevealAnimation delay={0.4 + index * 0.1} key={topic}>
                  <div className="bg-background-2 dark:bg-background-6 relative z-10 space-y-3 overflow-hidden rounded-[20px] px-[42px] py-14">
                    <div className="md:[1060px] pointer-events-none absolute -top-[110%] -right-[107%] -z-100 size-[650px] -rotate-[138deg] -skew-[10deg] select-none sm:-top-[105%] sm:-right-[65%] md:-top-[112%] md:-right-[99%] lg:-top-[108%] lg:-right-[79%] xl:-top-[107%] xl:-right-[62%]">
                      <Image src={gradientImg} alt="" />
                    </div>
                    <h5>{t(`topics.${topic}.title`)}</h5>
                    <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">
                      {t(`topics.${topic}.description`)}
                    </p>
                    <Link href="#" className="text-primary-500 hover:text-secondary transition-colors duration-500 ease-in-out">
                      {t(`topics.${topic}.title`)}
                    </Link>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
          {topics.slice(2).map((topic, index) => (
            <RevealAnimation delay={0.6 + index * 0.1} key={topic}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4>{t(`topics.${topic}.title`)}</h4>
                  <p>{t(`topics.${topic}.description`)}</p>
                </div>
                <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside list-disc space-y-3 font-normal">
                  <li>
                    <Link href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                      {t(`topics.${topic}.title`)}
                    </Link>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocsContent;
