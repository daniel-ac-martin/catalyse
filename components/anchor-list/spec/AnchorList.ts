import { createElement as h } from 'react';
import { render, screen } from '@react-foundry/component-test-helpers';
import AnchorList, { AnchorListProps } from '../src/AnchorList';

const activeClass = 'penultimate-anchor-list__item--active';

describe('AnchorList', () => {
  const minimalProps = {
    items: [
      { href: '/', text: 'Home' },
      { href: '/one', text: 'One' },
      { href: '/two', text: 'Two' },
      { href: '/three', text: 'Three' },
      { href: '/current', text: 'Current' },
      { href: '/', text: 'Active Home', activeMatching: 'loose' }
    ]
  };

  describe('when given minimal valid props', () => {
    beforeEach(async () => {
      render(h(AnchorList, minimalProps));
    });

    it('renders a list', async () => expect(screen.getByRole('list')).toBeInTheDocument());
    it('with as many links as were provided', async () => expect(screen.getAllByRole('link')).toHaveLength(6));
    it('with the correct text for the 0th (Home) link', async () => expect(screen.getAllByRole('link')[0]).toHaveTextContent('Home'));
    it('with the correct text for the 1st link', async () => expect(screen.getAllByRole('link')[1]).toHaveTextContent('One'));
    it('with the correct text for the 2nd link', async () => expect(screen.getAllByRole('link')[2]).toHaveTextContent('Two'));
    it('with the correct text for the 3rd link', async () => expect(screen.getAllByRole('link')[3]).toHaveTextContent('Three'));
    it('with the correct text for the 4th (Current) link', async () => expect(screen.getAllByRole('link')[4]).toHaveTextContent('Current'));
    it('with the correct text for the 5th (Active Home) link', async () => expect(screen.getAllByRole('link')[5]).toHaveTextContent('Active Home'));
    it('does NOT mark the Home (0th) item as active', async () => expect(screen.getAllByRole('listitem')[0]).not.toHaveClass(activeClass));
    it('marks the current (4th) item as active', async () => expect(screen.getAllByRole('listitem')[4]).toHaveClass(activeClass));
    it('marks the 5th item as active', async () => expect(screen.getAllByRole('listitem')[5]).toHaveClass(activeClass));
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
    it('with as many links as were provided', async () => expect(screen.getAllByRole('link')).toHaveLength(6));
    it('with the correct text for the 0th (Home) link', async () => expect(screen.getAllByRole('link')[0]).toHaveTextContent('Home'));
    it('with the correct text for the 1st link', async () => expect(screen.getAllByRole('link')[1]).toHaveTextContent('One'));
    it('with the correct text for the 2nd link', async () => expect(screen.getAllByRole('link')[2]).toHaveTextContent('Two'));
    it('with the correct text for the 3rd link', async () => expect(screen.getAllByRole('link')[3]).toHaveTextContent('Three'));
    it('with the correct text for the 4th (Current) link', async () => expect(screen.getAllByRole('link')[4]).toHaveTextContent('Current'));
    it('with the correct text for the 5th (Active Home) link', async () => expect(screen.getAllByRole('link')[5]).toHaveTextContent('Active Home'));
    it('does NOT mark the Home (0th) item as active', async () => expect(screen.getAllByRole('listitem')[0]).not.toHaveClass(activeClass));
    it('marks the current (4th) item as active', async () => expect(screen.getAllByRole('listitem')[4]).toHaveClass(activeClass));
    it('marks the 5th item as active', async () => expect(screen.getAllByRole('listitem')[5]).toHaveClass(activeClass));
  });
});
