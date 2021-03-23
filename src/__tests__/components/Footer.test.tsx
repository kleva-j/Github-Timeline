import { cleanup, render } from '@testing-library/react';

import { Footer } from 'components/Footer';
import { MemoryRouter } from 'react-router';

describe('Navbar', () => {
  afterEach(cleanup);

  test('Should render the Navbar.', () => {
    const { container, getByText, queryByTestId } = render(
      <MemoryRouter>
        <Footer absolute />
      </MemoryRouter>,
    );
    const classList = queryByTestId('footer')?.classList;

    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Github Timeline')).toBeTruthy();
    expect(classList?.contains('bottom-0')).toBeTruthy();
  });

  test('Should render the Navbar with no props.', () => {
    const { container, getByText, queryByTestId } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    const classList = queryByTestId('footer')?.classList;

    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Github Timeline')).toBeTruthy();
    expect(classList?.contains('relative')).toBeTruthy();
  });
});
