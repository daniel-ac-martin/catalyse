import type { Route } from "./+types/sitemap";
import { AnchorList } from '@react-foundry/anchor-list';
import { A } from '@react-foundry/components';
import { componentLinks, styleLinks } from '../stories';
import { siteTitle } from '../config';

export const title = 'Sitemap';
const description = `Overview of ${siteTitle}`;

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${title} - ${siteTitle}` },
    { name: 'description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
  ];
}

export default function GetStarted() {
  return (
    <>
      <h1>{title}</h1>
      <h2><A href="/">About {siteTitle}</A></h2>
      <h2><A href="/get-started">Get started</A></h2>
      <AnchorList items={[
        { href: '/working-on-your-project', text: 'Working on your project' }
      ]} />
      <h2><A href="/styles">Styles</A></h2>
      <AnchorList items={styleLinks} />
      <h2><A href="/components">Components</A></h2>
      <AnchorList items={componentLinks} />
      <h2><A href="/contributing">Contributing</A></h2>
    </>
  );
}
