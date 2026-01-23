import type { Route } from "./+types/styles._index";
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
    <>
      <h1>{title}</h1>
      <p>
        The basic styles of our design sytem.
      </p>
    </>
  );
}
