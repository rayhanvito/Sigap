import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  // Produces .next/standalone with a self-contained server.js for Docker.
  output: 'standalone',
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  images: {
    qualities: [25, 50, 75, 100],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
