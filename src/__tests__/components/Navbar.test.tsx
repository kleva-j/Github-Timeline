import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { Navbar } from 'components/Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar', () => {
  afterEach(cleanup);

  test('Should render the Navbar.', () => {
    const { container, getByText, queryByTestId } = render(
      <MemoryRouter>
        <Navbar transparent />
      </MemoryRouter>,
    );
    const classList = queryByTestId('navbar')?.classList;
    const list = queryByTestId('list')?.classList;

    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Github Timeline')).toBeTruthy();
    expect(getByText('Jobs')).toBeTruthy();
    expect(classList?.contains('absolute')).toBeTruthy();
    expect(list?.contains('hidden')).toBeTruthy();
  });

  test('Should render the Navbar with no props.', () => {
    const { container, getByText, queryByTestId } = render(
      <MemoryRouter>
        <Navbar navState />
      </MemoryRouter>,
    );
    const classList = queryByTestId('navbar')?.classList;
    const list = queryByTestId('list')?.classList;

    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Github Timeline')).toBeTruthy();
    expect(getByText('Jobs')).toBeTruthy();
    expect(classList?.contains('relative')).toBeTruthy();
    expect(list?.contains('block')).toBeTruthy();
  });
});
