import Link from 'next/link';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

// legal notice content
const Content = () => {
  const t = useTranslations('pages.legal.sections');
  const legal = useTranslations('pages.legal');
  return (
    <section className="xl:pb-28 lg:pb-20 pb-16">
      <div className="main-container">
        <div className="max-w-[950px] mx-auto w-full">
          <RevealAnimation delay={0.1}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">{t('privacy.title')}</h2>
              <p>
                <Link href="/privacy-policy" className="text-primary-500">{t('privacy.title')}</Link>{' '}
                {t('privacy.description')}
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">{t('terms.title')}</h2>
              <p>{t('terms.description')}</p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">{t('contact.title')}</h2>
              <p>{t('contact.description')}</p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">{legal('badge')}</h2>
              <p>{legal('description')}</p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Content.displayName = 'Content';
export default Content;
