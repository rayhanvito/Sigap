import LoginHero from '@/components/authentication/LoginHero';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('auth');
  return { ...defaultMetadata, title: `${t('loginTitle')} - Sigap`, description: t('loginDescription') };
}

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <LoginHero />
      <CTA className="dark:bg-background-6 bg-white" badgeClass="badge-yellow-v2" btnClass="hover:btn-secondary dark:hover:btn-accent" />
    </main>
  );
};
export default page;
