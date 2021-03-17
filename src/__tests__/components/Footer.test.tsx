import { cleanup, render } from '@testing-library/react';

import { Footer } from 'components/Footer';

describe('Navbar', () => {
  afterEach(cleanup);

  test('Should render the Navbar.', () => {
    const { container, getByText, queryByTestId } = render(<Footer absolute />);
    const classList = queryByTestId('footer')?.classList;

    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Github Timeline')).toBeTruthy();
    expect(classList?.contains('absolute')).toBeTruthy();
  });

  test('Should render the Navbar with no props.', () => {
    const { container, getByText, queryByTestId } = render(<Footer />);
    const classList = queryByTestId('footer')?.classList;

    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Github Timeline')).toBeTruthy();
    expect(classList?.contains('relative')).toBeTruthy();
  });
});
