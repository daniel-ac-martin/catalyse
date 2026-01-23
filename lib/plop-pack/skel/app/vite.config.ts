import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup'
import html from '@not-govuk/vite-html-react';
import { reactRouter } from '@react-router/dev/vite';

export default defineConfig({
  build: {
    commonjsOptions: {
      defaultIsModuleExports: true // Mimics Node.js, aligns dev and prod
    }
  },
  plugins: [
    html(),
    mdx(),
    reactRouter(),
  ],
  ssr: {
    noExternal: /\.mdx$/
  }
});
