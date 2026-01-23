import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // This allows us to handle next-example, the same way we do standard apps, in CI
  distDir: 'dist',
  sassOptions: {
    implementation: 'sass-embedded'
  },
  turbopack: {
    resolveAlias: {
      '@catalyse/router': '@catalyse/router/next', // ADD THIS LINE
    }
  }
};

export default nextConfig;
