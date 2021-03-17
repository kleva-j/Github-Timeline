import { cleanup, fireEvent, render } from '@testing-library/react';

import { TagList } from 'components/TagList';

describe('Navbar', () => {
  afterEach(cleanup);

  test('Should render the Taglist component.', () => {
    const { container, getByText } = render(<TagList />);

    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('remote')).toBeTruthy();
    expect(getByText('HTML')).toBeTruthy();
  });

  test('Should render the Taglist component and toggle state.', () => {
    const { getByTestId } = render(<TagList />);

    const tag2 = getByTestId('id-1');
    fireEvent.click(tag2);
    expect(tag2).toHaveStyle({ background: '#1a202c' });
  });
});
