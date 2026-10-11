import homeIcon from '@public/images/icons/home.svg';
import mailIcon from '@public/images/icons/mail-open.svg';
import phoneIcon from '@public/images/icons/phone-right.svg';
import gradientThree from '@public/images/ns-img-498.png';
import gradientTwo from '@public/images/ns-img-509.png';
import gradientOne from '@public/images/ns-img-510.png';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const contactInfoItems = [
  {
    id: 1,
    key: 'address',
    icon: homeIcon,
    gradient: gradientOne,
    gradientClass: 'top-[-187px] left-[174px] -rotate-[78deg]',
  },
  {
    id: 2,
    key: 'email',
    icon: mailIcon,
    gradient: gradientTwo,
    gradientClass: 'top-[-206px] left-[-36px] rotate-[62deg]',
  },
  {
    id: 3,
    key: 'phone',
    icon: phoneIcon,
    gradient: gradientThree,
    gradientClass: 'top-[-184px] left-[-185px]',
  },
];

const ContactInfo = () => {
  const t = useTranslations('pages.contact');
  const terms = useTranslations('pages.terms');
  const contactLabels: Record<(typeof contactInfoItems)[number]['key'], string> = {
    address: 'Alamat',
    email: t('email'),
    phone: 'Telepon',
  } as const;
  return (
    <section
      className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-20 xl:pt-[180px] xl:pb-[100px]"
      aria-label="Contact Information and Form">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="mx-auto max-w-[680px] space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2>{t('title')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                {t('description')}
              </p>
            </RevealAnimation>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:gap-8 xl:gap-[70px]">
            {/* contact info cards  */}
            <div className="flex flex-col gap-8 md:flex-row lg:flex-col">
              {contactInfoItems.map((item) => (
                <RevealAnimation key={item.id} delay={0.4}>
                  <div className="border-stroke-2 bg-background-2 relative w-full space-y-6 overflow-hidden rounded-[20px] border p-11 text-center md:max-w-[371px]">
                    {/* bg overlay  */}
                    <figure
                      className={`pointer-events-none absolute size-[350px] overflow-hidden select-none ${item.gradientClass}`}>
                      <Image src={item.gradient} alt="Decorative gradient overlay" className="size-full object-cover" />
                    </figure>
                    <figure className="mx-auto size-10 overflow-hidden">
                      <Image src={item.icon} alt={`${contactLabels[item.key]} icon`} className="size-full object-cover brightness-0" />
                    </figure>
                    <div className="space-y-2.5">
                      <p className="text-secondary text-heading-6">{contactLabels[item.key]}</p>
                      <p className="text-secondary/60">{t('description')}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            {/* contact form  */}
            <RevealAnimation
              delay={0.3}
              className="dark:bg-background-6 mx-auto w-full max-w-[847px] rounded-4xl bg-white p-6 md:p-8 lg:p-11">
              <form action="#" method="POST" className="space-y-8">
                {/* name and phone number  */}
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                  {/*  name */}
                  <div className="w-full space-y-2 lg:max-w-[364px]">
                    <label
                      htmlFor="fullname"
                      className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                      {t('name')}
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder={t('name')}
                      required={true}
                      autoComplete="name"
                      className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]"
                    />
                  </div>
                  {/* number */}
                  <div className="w-full max-w-[364px] space-y-2">
                    <label
                      htmlFor="number"
                      className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                      Telepon
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      placeholder="Nomor telepon"
                      required={true}
                      autoComplete="tel"
                      className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]"
                    />
                  </div>
                </div>
                {/* email  */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t('email')}
                    required={true}
                    autoComplete="email"
                    className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]"
                  />
                </div>
                {/* subject  */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                    {t('subjects.0')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder={t('subjects.0')}
                    required={true}
                    className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]"
                  />
                </div>
                {/* message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder={t('message')}
                    required={true}
                    className="dark:bg-background-6 dark:border-stroke-7 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary dark:focus-visible:border-stroke-4/20 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent w-full rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none"
                    defaultValue={''}
                  />
                </div>
                {/* terms checkbox */}
                <fieldset className="mb-4 flex items-center gap-2">
                  <label className="flex items-center gap-x-3">
                    <input id="terms" type="checkbox" className="peer sr-only" required={true} />
                    <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                    <span className="sr-only">Agree to the terms and conditions</span>
                  </label>
                  <label
                    htmlFor="terms"
                    className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                    {t('privacy')}{' '}
                    <Link href="/terms-conditions" className="text-primary-500 text-tagline-3 underline">
                      {' '}
                      {terms('badge')}
                    </Link>
                  </label>
                </fieldset>
                {/* submit button */}
                <button
                  type="submit"
                  className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent w-full first-letter:uppercase before:content-none">
                  {t('submit')}
                </button>
              </form>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
