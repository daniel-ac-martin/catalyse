import type { Route } from "./+types/sub";
import { Outlet } from 'react-router';
import { AnchorList } from '@react-foundry/components';
import { siteTitle } from '../config';

export const title = 'Subpages';

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${title} - ${siteTitle}` },
    { name: 'og:title', content: title },
    { name: 'og:type', content: 'article' },
    { name: 'og:article:section', content: title }
  ];
}

export default function Subpages() {
  return (
    <div className="grid-row">
      <div className="grid-column-one-third">
        <AnchorList items={[
          { href: '/sub/one', text: 'One' },
          { href: '/sub/two', text: 'Two' },
          { href: '/sub/three', text: 'Three' }
        ]} />
      </div>
      <div className="grid-column-two-thirds">
        <Outlet />
      </div>
    </div>
  );
}
