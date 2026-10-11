'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const LoginHero = () => {
  const t = useTranslations('auth');

  return (
    <section className="pt-[120px] pb-[70px] lg:pt-[180px] lg:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto w-full max-w-[520px]">
          <RevealAnimation delay={0.1}>
            <div className="bg-background-1 rounded-[20px] px-8 py-10 sm:px-12 sm:py-14">
              <div className="mb-8 space-y-3 text-center">
                <h1 className="text-3xl font-medium text-foreground sm:text-4xl">{t('loginTitle')}</h1>
                <p className="text-foreground/70">{t('loginDescription')}</p>
              </div>
              <form>
                <label className="block space-y-2 text-sm font-medium text-foreground">
                  <span>{t('email')}</span>
                  <input type="email" name="email" required placeholder={t('emailPlaceholder')} className="auth-form-input" />
                </label>
                <label className="mt-4 block space-y-2 text-sm font-medium text-foreground">
                  <span>{t('password')}</span>
                  <input type="password" name="password" required className="auth-form-input" />
                </label>
                <div className="mt-5 flex items-center justify-between gap-4 text-sm">
                  <label className="flex items-center gap-2 text-foreground/80">
                    <input type="checkbox" name="remember" />
                    <span>{t('remember')}</span>
                  </label>
                  <Link href="/contact-us" className="font-medium text-foreground underline">
                    {t('forgot')}
                  </Link>
                </div>
                <button type="submit" className="btn btn-md btn-primary mt-8 w-full hover:btn-secondary">
                  <span>{t('login')}</span>
                </button>
              </form>
              <p className="mt-8 text-center text-sm text-foreground/70">
                {t('notRegistered')}{' '}
                <Link href="/signup" className="font-medium text-foreground underline">
                  {t('createAccount')}
                </Link>
              </p>
            </div>
          </RevealAnimation>
          </div>
      </div>
    </section>
  );
};

LoginHero.displayName = 'LoginHero';
export default LoginHero;
