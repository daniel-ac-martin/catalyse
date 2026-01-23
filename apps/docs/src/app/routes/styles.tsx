import type { Route } from "./+types/styles";
import { Outlet, redirect } from 'react-router';
import { AnchorList } from '@catalyse/components';
import { DocsPage } from '@catalyse/docs-components';
import { styleLinks } from '../stories';
import { siteTitle } from '../config';

export const title = 'Styles';
const description = `The styles provided in ${siteTitle}`;

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${title} - ${siteTitle}` },
    { name: 'description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    { name: 'og:article:section', content: title },
  ];
}

export default function Styles() {
  return (
    <div className="grid-row">
      <div className="grid-column-one-quarter">
        <AnchorList items={styleLinks} />
      </div>
      <div className="grid-column-three-quarters">
        <Outlet />
      </div>
    </div>
  );
}
