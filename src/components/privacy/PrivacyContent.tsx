import privacy from '@public/images/ns-img-391.png';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const PrivacyContent = () => {
  const t = useTranslations('pages.privacy');
  const contact = useTranslations('pages.contact');
  const terms = useTranslations('pages.terms');
  const sections = ['collect', 'use', 'separation', 'rights', 'changes'] as const;

  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="privacy-policy space-y-[75px]">
          <div className="space-y-2">
            <RevealAnimation delay={0.1}>
              <h2>{t('title')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>{t('description')}</p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.3}>
            <div className="space-y-2">
              <h4>{t('badge')}</h4>
              <p>{t('description')}</p>
            </div>
          </RevealAnimation>

          <div className="space-y-6">
            {sections.slice(0, 2).map((section, index) => (
              <RevealAnimation delay={0.4 + index * 0.1} key={section}>
                <div className="space-y-2">
                  <h4>{t(`sections.${section}.title`)}</h4>
                  <p>{t(`sections.${section}.description`)}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>

          <div>
            <div className="grid grid-cols-12 gap-y-[100px] lg:gap-[100px]">
              <div className="col-span-12 lg:col-span-6">
                <RevealAnimation delay={0.6}>
                  <div className="mb-[70px] text-left">
                    <p className="max-w-[550px]">{t('sections.separation.description')}</p>
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.7}>
                  <figure className="w-full max-w-[595px] self-end overflow-hidden rounded-[20px]">
                    <Image src={privacy} className="size-full object-cover" alt={t('title')} />
                  </figure>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.8}>
                <div className="col-span-12 lg:col-span-6">
                  <form className="dark:bg-background-8 rounded-[20px] bg-white p-6 lg:p-[42px]">
                    <fieldset className="mb-8 space-y-2">
                      <label htmlFor="name" className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                        {contact('name')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={contact('name')}
                        className="dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-7 bg-background-1 focus-visible:outline-primary-500 placeholder:text-tagline-1 placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1 block h-12 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                      />
                    </fieldset>
                    <fieldset className="mb-8 space-y-2">
                      <label htmlFor="company" className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                        {contact('subjects.0')}
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        placeholder={contact('subjects.0')}
                        className="dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-7 bg-background-1 focus-visible:outline-primary-500 placeholder:text-tagline-1 placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1 block h-12 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                      />
                    </fieldset>
                    <fieldset className="mb-8 space-y-2">
                      <label htmlFor="message" className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                        {contact('message')}
                      </label>
                      <input
                        type="text"
                        name="message"
                        id="message"
                        placeholder={contact('message')}
                        className="dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-7 bg-background-1 focus-visible:outline-primary-500 placeholder:text-tagline-1 placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1 block h-12 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                      />
                    </fieldset>
                    <fieldset className="mb-8 space-y-2">
                      <label htmlFor="email" className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                        {contact('email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder={contact('email')}
                        className="dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-7 bg-background-1 focus-visible:outline-primary-500 placeholder:text-tagline-1 placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1 block h-12 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                      />
                    </fieldset>
                    <fieldset className="mt-4 mb-4 flex items-center gap-2">
                      <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                        <input id="agree-terms" type="checkbox" className="peer sr-only" required />
                        <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                      </label>
                      <label htmlFor="agree-terms" className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                        {contact('privacy')}{' '}
                        <Link href="/terms-conditions" className="text-primary-500 text-tagline-3 underline">
                          {terms('badge')}
                        </Link>
                      </label>
                    </fieldset>
                    <button
                      type="submit"
                      className="btn dark:btn-accent btn-md btn-secondary hover:btn-primary w-full first-letter:uppercase before:content-none">
                      {contact('submit')}
                    </button>
                  </form>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {sections.slice(2).map((section, index) => (
            <RevealAnimation key={section} delay={0.6 + index * 0.1}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4>{t(`sections.${section}.title`)}</h4>
                  <p>{t(`sections.${section}.description`)}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
