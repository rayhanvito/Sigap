'use client';

import aiHandoffImg from '@public/images/Balasan-AI-dan-ambil-alih.jpeg';
import contactsImg from '@public/images/Kontak-dan-prospek.jpeg';
import sharedInboxImg from '@public/images/Inbox-WhatsApp-bersama.jpeg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const FEATURES = [
  {
    id: 1,
    headingId: 'shared-inbox-heading',
    key: 'one',
    image: {
      light: sharedInboxImg,
      alt: 'Inbox WhatsApp bersama untuk seluruh tim',
    },
  },
  {
    id: 2,
    headingId: 'ai-handoff-heading',
    key: 'two',
    image: {
      light: aiHandoffImg,
      alt: 'Balasan AI dan ambil alih oleh staf',
    },
  },
  {
    id: 3,
    headingId: 'contacts-heading',
    key: 'three',
    image: {
      light: contactsImg,
      alt: 'Kontak dan prospek pelanggan',
    },
  },
] as const;

export default function CRMFeatures() {
  const t = useTranslations('home.features');
  return (
    <section className="py-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* Heading */}
          <div className="mx-auto max-w-[724px] space-y-5 text-center md:w-full">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary">{t('badge')}</span>
            </RevealAnimation>

            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>{t('title')}</h2>
              </RevealAnimation>

              <RevealAnimation delay={0.3}>
                <p className="text-secondar">
                  {t('description')}
                </p>
              </RevealAnimation>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-12 items-stretch justify-center gap-y-8 md:gap-x-8 md:gap-y-0">
            {FEATURES.map((f, idx) => (
              <RevealAnimation key={f.id} delay={0.4 + idx * 0.1}>
                <div className="bg-background-2 col-span-12 h-full max-w-[408px] space-y-6 rounded-[20px] px-8 py-[42px] sm:w-full md:col-span-6 lg:col-span-4">
                  {/* Image */}
                  <figure className="aspect-[22/15] w-full overflow-hidden rounded-[10px]">
                    <Image
                      src={f.image.light}
                      alt={f.image.alt}
                      width={1100}
                      height={750}
                      className="size-full object-cover"
                    />
                  </figure>

                  {/* Text + bullets */}
                  <div className="space-y-3">
                    <h3 id={f.headingId} className="text-heading-5">
                      {t(`cards.${f.key}.title`)}
                    </h3>

                    <ul className="space-y-3" aria-label={`${t(`cards.${f.key}.title`)} details`}>
                      <li className="flex items-center gap-1.5">
                        <span
                          className="bg-secondary flex size-1.5 items-center justify-center overflow-hidden rounded-full"
                          aria-hidden="true"
                        />
                        <span className="text-foreground/60 text-xs leading-[150%] font-normal">
                          {t(`cards.${f.key}.points`)}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
