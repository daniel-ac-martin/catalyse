'use client';

import { ComponentType, FC, HTMLProps, Suspense, createElement as h } from 'react';
import { AnchorProps, A } from '@react-foundry/anchor';
import { StandardProps, classBuilder } from '@react-foundry/component-helpers';
import { needSuspense, useIsActive } from '@react-foundry/router';

import '../assets/AnchorList.scss';

export type Anchor = AnchorProps & {
  /** Text of the link */
  text?: string
};

export type Item = Anchor & {
  /**
   * Whether the link is active only on its own page, rather than on its descendants too.
   * Defaults to `true` for the site root and `false` otherwise, since every page is a
   * descendant of '/' and a root link would otherwise be active everywhere.
   */
  exact?: boolean
  /** Subitems */
  items?: Item[]
};

export type AnchorListProps = StandardProps & {
  /** List component to use  */
  as?: ComponentType<HTMLProps<HTMLOListElement | HTMLUListElement>> | 'ol' | 'ul'
  /** List of links to choose from */
  items: Item[]
};

const AnchorListInner: FC<AnchorListProps> = ({
  as: Component = 'ul',
  classBlock,
  classModifiers,
  className,
  items,
  ...attrs
}) => {
  const classes = classBuilder('penultimate-anchor-list', classBlock, classModifiers, className);
  const isActive = useIsActive();
  const processItem = ({ children, exact, text, href, items, ...anchorAttrs }: Item, i: number) => {
    const active = isActive(href || '', exact ?? href === '/');

    return (
      <li key={i} className={classes('item', active ? 'active' : undefined)}>
        <A {...anchorAttrs} classBlock={classes('link')} href={href}>{children || text}</A>
        { !(active && items) ? null : (
          <Component className={classes('subitems')}>
            {items.map(processItem)}
          </Component>
        ) }
      </li>
    );
  };

  return (
    <Component {...attrs} className={classes()}>
      {items.map(processItem)}
    </Component>
  );
};

export const AnchorList: FC<AnchorListProps> = ({
  as: Component = 'ul',
  classBlock,
  classModifiers,
  className,
  items,
  ...attrs
}) => {
  const classes = classBuilder('penultimate-anchor-list', classBlock, classModifiers, className);
  const props = {
    ...attrs,
    as: Component,
    classBlock,
    classModifiers,
    className,
    items
  };
  const content = (
    <AnchorListInner {...props} />
  );

  return (
    !needSuspense ? content : (
      <Suspense fallback={
        <Component {...attrs} className={classes()}>
          {items.map(({ children, exact, items, text, href, ...anchorAttrs }, i) => (
            <li key={i} className={classes('item')}>
              <A {...anchorAttrs} classBlock={classes('link')} href={href}>{children || text}</A>
            </li>
          ))}
        </Component>
      }>
        {content}
      </Suspense>
    )
  );
};

export default AnchorList;
