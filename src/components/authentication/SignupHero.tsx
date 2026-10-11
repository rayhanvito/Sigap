'use client';

import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const SignupHero = () => {
  const t = useTranslations('auth');

  return (
    <section className="pt-[120px] pb-[70px] lg:pt-[180px] lg:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto w-full max-w-[620px]">
          <RevealAnimation delay={0.1}>
            <div className="bg-background-1 rounded-[20px] px-8 py-10 sm:px-12 sm:py-14">
              <div className="mb-8 space-y-3 text-center">
                <h1 className="text-3xl font-medium text-foreground sm:text-4xl">{t('signupTitle')}</h1>
                <p className="text-foreground/70">{t('signupDescription')}</p>
              </div>
              <form className="space-y-4">
                <label className="block space-y-2 text-sm font-medium text-foreground">
                  <span>{t('name')}</span>
                  <input type="text" name="name" required className="auth-form-input" />
                </label>
                <label className="block space-y-2 text-sm font-medium text-foreground">
                  <span>{t('email')}</span>
                  <input type="email" name="email" required placeholder={t('emailPlaceholder')} className="auth-form-input" />
                </label>
                <label className="block space-y-2 text-sm font-medium text-foreground">
                  <span>{t('business')}</span>
                  <input type="text" name="business" required placeholder={t('businessPlaceholder')} className="auth-form-input" />
                </label>
                <label className="block space-y-2 text-sm font-medium text-foreground">
                  <span>{t('phone')}</span>
                  <input type="tel" name="phone" className="auth-form-input" />
                </label>
                <label className="block space-y-2 text-sm font-medium text-foreground">
                  <span>{t('password')}</span>
                  <input type="password" name="password" required className="auth-form-input" />
                  <span className="block text-xs font-normal text-foreground/60">{t('passwordHint')}</span>
                </label>
                <label className="block space-y-2 text-sm font-medium text-foreground">
                  <span>{t('confirmPassword')}</span>
                  <input type="password" name="confirmPassword" required className="auth-form-input" />
                </label>
                <label className="flex gap-3 pt-2 text-sm text-foreground/80">
                  <input type="checkbox" name="consent" required className="mt-1" />
                  <span>{t('consent')}</span>
                </label>
                <button type="submit" className="btn btn-md btn-primary hover:btn-secondary w-full">
                  <span>{t('signup')}</span>
                </button>
              </form>
              <p className="mt-6 text-center text-sm text-foreground/60">{t('security')}</p>
            </div>
          </RevealAnimation>
          </div>
      </div>
    </section>
  );
};

SignupHero.displayName = 'SignupHero';
export default SignupHero;
