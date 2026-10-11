import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const HeroFormAndAvatar = () => {
  const t = useTranslations('home.hero');
  return (
    <div className="space-y-8">
      {/* cta form  */}
      <RevealAnimation delay={0.4}>
        <form action="#" method="post" className="flex flex-col items-center justify-start gap-3 md:flex-row">
          <input
            type="email"
            name="email"
            id="userEmail"
            placeholder={t('emailPlaceholder')}
            required={true}
            className="text-accent placeholder:text-accent/80 border-primary-300 bg-primary-400 h-[52px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none md:w-[80%] lg:max-w-[296px] xl:max-w-[340px]"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="btn btn-md hover:btn-secondary btn-white h-[52px] w-full md:w-auto xl:!hidden"
            aria-label={t('cta')}>
            <span>{t('cta')}</span>
          </button>
          <button
            type="submit"
            className="btn btn-xl btn-white-v2 hover:btn-primary hover:border-primary-300 !hidden h-[52px] xl:!inline-block"
            aria-label={t('cta')}>
            <span>{t('cta')}</span>
          </button>
        </form>
      </RevealAnimation>
      <RevealAnimation delay={0.5}>
        <div className="max-w-[340px]">
          <p className="text-tagline-2 text-accent font-medium">{t('trust')}</p>
          <p className="text-tagline-3 text-accent/60">{t('trustDescription')}</p>
        </div>
      </RevealAnimation>
    </div>
  );
};

HeroFormAndAvatar.displayName = 'HeroFormAndAvatar';
export default HeroFormAndAvatar;
