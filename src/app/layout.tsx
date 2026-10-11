import SmoothScrollProvider from '@/components/shared/SmoothScroll';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import { AppContextProvider } from '@/context/AppContext';
import { interTight } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
     <body className={`${interTight.variable} antialiased`}>
        <NextIntlClientProvider>
          <AppContextProvider>
            <Suspense>
              <SmoothScrollProvider>
                <Navbar />
                {children}
                <Footer />
              </SmoothScrollProvider>
            </Suspense>
          </AppContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
