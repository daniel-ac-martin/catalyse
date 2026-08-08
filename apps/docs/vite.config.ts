import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup'
import html from '@react-foundry/vite-html-react';
import { reactRouter } from '@react-router/dev/vite';
import { vite as csf } from '@storybook/csf-plugin';
import reactDocgenTypescript from '@joshwooding/vite-plugin-react-docgen-typescript';

export default defineConfig({
  build: {
    minify: false // Needed to get proper JSX snippets (only useful for docs)
  },
  plugins: [
    reactDocgenTypescript({
      compilerOptions: {},
      include: [
        '../../components/*/src/**/*.ts*'
      ]
    }),
    csf(),
    html(),
    mdx(),
    reactRouter()
  ],
  resolve: {
    alias: {
      '@storybook/addon-docs/blocks': '@react-foundry/docs-components'
    }
  },
  ssr: {
    noExternal: [
      /\.mdx$/,
      'react-is' // This can be removed if/when Formik is removed
    ]
  }
});
