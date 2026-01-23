import type { Route } from "./+types/_index";
import { siteTitle } from '../config';

import Markdown from '../../../../../docs/about.md';

const title = siteTitle;
const description = 'A collection of tools and libraries for building React applications, projects, and design systems.';

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: 'description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
  ];
}

export default function Home() {
  return (
    <Markdown />
  );
}
