import { createElement as h } from 'react';
import { render, screen } from '@react-foundry/component-test-helpers';
import AnchorList, { AnchorListProps } from '../src/AnchorList';

describe('AnchorList', () => {
  const minimalProps = {
    items: [
      { href: '#', text: 'One' },
      { href: '#', text: 'Two' },
      { href: '#', text: 'Three' }
    ]
  };

  describe('when given minimal valid props', () => {
    beforeEach(async () => {
      render(h(AnchorList, minimalProps));
    });

    it('renders a list', async () => expect(screen.getByRole('list')).toBeInTheDocument());
    it('with as many links as were provided', async () => expect(screen.getAllByRole('link')).toHaveLength(3));
    it('with the correct text for the 1st link', async () => expect(screen.getAllByRole('link')[0]).toHaveTextContent('One'));
    it('with the correct text for the 2nd link', async () => expect(screen.getAllByRole('link')[1]).toHaveTextContent('Two'));
    it('with the correct text for the 3rd link', async () => expect(screen.getAllByRole('link')[2]).toHaveTextContent('Three'));
  });

  describe('when given all valid props', () => {
    const props: AnchorListProps = {
      ...minimalProps,
      as: 'ol'
    };

    beforeEach(async () => {
      render(h(AnchorList, props));
    });

    it('renders a list', async () => expect(screen.getByRole('list')).toBeInTheDocument());
    it('with as many links as were provided', async () => expect(screen.getAllByRole('link')).toHaveLength(3));
    it('with the correct text for the 1st link', async () => expect(screen.getAllByRole('link')[0]).toHaveTextContent('One'));
    it('with the correct text for the 2nd link', async () => expect(screen.getAllByRole('link')[1]).toHaveTextContent('Two'));
    it('with the correct text for the 3rd link', async () => expect(screen.getAllByRole('link')[2]).toHaveTextContent('Three'));
  });

  // The test router puts us on '/current', so these cover a descendant of the site root.
  const activeClass = 'penultimate-anchor-list__item--active';

  describe('when given an item for the site root and one for the current page', () => {
    const props: AnchorListProps = {
      items: [
        { href: '/', text: 'Home' },
        { href: '/current', text: 'Current' }
      ]
    };

    beforeEach(async () => {
      render(h(AnchorList, props));
    });

    it('does not mark the root item as active', async () => expect(screen.getAllByRole('listitem')[0]).not.toHaveClass(activeClass));
    it('marks the current page\'s item as active', async () => expect(screen.getAllByRole('listitem')[1]).toHaveClass(activeClass));
  });

  describe('when given an item for the site root with \'exact\' set to false', () => {
    const props: AnchorListProps = {
      items: [
        { href: '/', exact: false, text: 'Home' }
      ]
    };

    beforeEach(async () => {
      render(h(AnchorList, props));
    });

    it('marks it as active', async () => expect(screen.getByRole('listitem')).toHaveClass(activeClass));
  });

  describe('when given an item for an ancestor page', () => {
    const props: AnchorListProps = {
      items: [
        { href: '/cur', text: 'Not an ancestor' }
      ]
    };

    beforeEach(async () => {
      render(h(AnchorList, props));
    });

    it('does not treat a common prefix as an ancestor', async () => expect(screen.getByRole('listitem')).not.toHaveClass(activeClass));
  });
});
