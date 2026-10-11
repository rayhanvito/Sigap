import RevealAnimation from '@/components/animation/RevealAnimation';
import { useTranslations } from 'next-intl';
import OperationCards from './OperationCards';

const FinanceAndOperation = () => {
  const t = useTranslations('pages.useCase');
  const roles = ['owner', 'sales', 'service', 'admin', 'operations'] as const;

  return (
    <section className="md:pt[50px] pt-[20px] pb-[100px] md:pb-[150px] lg:pt-[70px] lg:pb-[200px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h3>{t('title')}</h3>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>{t('description')}</p>
            </RevealAnimation>
          </div>

          <OperationCards />

          {roles.map((role) => (
            <div className="space-y-4" key={role}>
              <div className="space-y-2">
                <RevealAnimation delay={0.1}>
                  <h3 className="text-heading-4" id={`${role}-role`}>
                    {t(`roles.${role}.title`)}
                  </h3>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p>
                    <span className="text-secondary dark:text-accent">{t(`roles.${role}.description`)}</span>
                    <br />
                    {t(`roles.${role}.automation`)}
                  </p>
                </RevealAnimation>
              </div>
              <div className="space-y-2">
                <RevealAnimation delay={0.3}>
                  <h4 className="text-tagline-1 text-secondary dark:text-accent">{t(`roles.${role}.features`)}</h4>
                </RevealAnimation>
                <ul>
                  <RevealAnimation delay={0.4}>
                    <li className="flex items-center gap-2">
                      <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" aria-hidden="true" />
                      <p>{t(`roles.${role}.automation`)}</p>
                    </li>
                  </RevealAnimation>
                  <RevealAnimation delay={0.5}>
                    <li className="flex items-center gap-2">
                      <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" aria-hidden="true" />
                      <p>{t(`roles.${role}.human`)}</p>
                    </li>
                  </RevealAnimation>
                  <RevealAnimation delay={0.6}>
                    <li className="flex items-center gap-2">
                      <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" aria-hidden="true" />
                      <p>{t(`roles.${role}.features`)}</p>
                    </li>
                  </RevealAnimation>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

FinanceAndOperation.displayName = 'FinanceAndOperation';
export default FinanceAndOperation;
