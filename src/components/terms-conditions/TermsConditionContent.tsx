import { useTranslations } from 'next-intl';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const TermsConditionContent = () => {
  const t = useTranslations('pages.terms');
  const sections = ['service', 'account', 'content', 'ai', 'changes'] as const;

  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h2>{t('title')}</h2>
            <div className="space-y-7">
              <p>{t('description')}</p>
              <p>{t('sections.content.description')}</p>
            </div>
          </div>
        </RevealAnimation>
        <article className="terms-conditions-body">
          {sections.map((section, index) => (
            <RevealAnimation delay={0.4 + index * 0.1} key={section}>
              <div className="space-y-6">
                <h3>
                  {index + 1}. {t(`sections.${section}.title`)}
                </h3>
                <p>{t(`sections.${section}.description`)}</p>
              </div>
            </RevealAnimation>
          ))}
          <RevealAnimation delay={0.9}>
            <Link
              href="/privacy-policy"
              className="section-button btn btn-xl dark:btn-accent hover:btn-primary btn-secondary">
              <span>{t('title')}</span>
            </Link>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default TermsConditionContent;
