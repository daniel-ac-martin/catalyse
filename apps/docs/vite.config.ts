import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup'
import html from '@catalyse/vite-html-react';
import { reactRouter } from '@react-router/dev/vite';
import { vite as csf } from '@storybook/csf-plugin';
import reactDocgenTypescript from '@joshwooding/vite-plugin-react-docgen-typescript';

export default defineConfig({
  build: {
    commonjsOptions: {
      defaultIsModuleExports: true // Mimics Node.js, aligns dev and prod
    },
    minify: false, // Needed to get proper JSX snippets (only useful for docs)
  },
  plugins: [
    reactDocgenTypescript(),
    csf(),
    html(),
    mdx(),
    reactRouter(),
  ],
  resolve: {
    alias: {
      '@storybook/addon-docs/blocks': '@catalyse/docs-components'
    }
  },
  ssr: {
    noExternal: /\.mdx$/
  }
});
