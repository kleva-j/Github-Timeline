import { cleanup, fireEvent, render } from '@testing-library/react';

import { TagList } from 'components/TagList';

const setParams = jest.fn();

describe('Navbar', () => {
  afterEach(cleanup);

  test('Should render the Taglist component.', () => {
    const { container, getByText } = render(<TagList setParams={setParams} />);

    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('remote')).toBeTruthy();
    expect(getByText('HTML')).toBeTruthy();
  });

  test('Should render the Taglist component and toggle state.', () => {
    const { getByTestId } = render(<TagList setParams={setParams} />);

    const tag = getByTestId('id-1');
    fireEvent.click(tag);
    expect(tag).toHaveStyle({ background: '#1a202c' });
  });

  test('Should render the Taglist component and toggle state with setParams.', () => {
    const { getByTestId } = render(<TagList setParams={setParams} />);

    const tag = getByTestId('id-1');
    fireEvent.click(tag);
    expect(setParams).toHaveBeenCalled();
  });
});
