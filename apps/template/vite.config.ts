import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup'
import html from '@react-foundry/vite-html-react';
import { reactRouter } from '@react-router/dev/vite';

export default defineConfig({
  plugins: [
    html(),
    mdx(),
    reactRouter()
  ],
  ssr: {
    noExternal: [
      /\.mdx$/,
      'react-is'
    ]
  }
});
