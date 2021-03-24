import { cleanup, createEvent, fireEvent, render } from '@testing-library/react';

import { SearchForms } from 'components/Form';

const setParam = jest.fn();

describe('Form Component', () => {
  afterEach(cleanup);

  test('Should render the form component.', () => {
    const { container } = render(<SearchForms setParam={setParam} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Should populate description input and search.', () => {
    const { container, getByLabelText } = render(<SearchForms setParam={setParam} />);
    expect(container.firstChild).toMatchSnapshot();

    const input = getByLabelText('description-input');
    const keypressEvent = createEvent.keyPress(input, { key: 'Enter', code: 'Enter' });
    
    expect(input).toBeInTheDocument();
    
    fireEvent.change(input, { target: { value: 'javascript' } });
    expect(input['value']).toBe('javascript');
    fireEvent(input, keypressEvent);
    // expect(setParam).toHaveBeenCalled();
  });

  test('Should populate location input and search.', () => {
    const { container, getByLabelText } = render(<SearchForms setParam={setParam} />);
    expect(container.firstChild).toMatchSnapshot();

    const input = getByLabelText('location-input');
    const keypressEvent = createEvent.keyPress(input, { key: 'Enter', code: 'Enter' });
    
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Germany' } });
    expect(input['value']).toBe('Germany');
    fireEvent(input, keypressEvent);
    // expect(setParam).toHaveBeenCalled();
  });

  test('Should populate location input (empty) and search.', () => {
    const { container, getByLabelText } = render(<SearchForms setParam={setParam} />);
    expect(container.firstChild).toMatchSnapshot();
    const input = getByLabelText('location-input');
    const keypressEvent = createEvent.keyPress(input, { key: 'Enter', code: 'Enter' });

    fireEvent.change(input, { target: { value: '' } });
    expect(input['value']).toBe('');
    fireEvent(input, keypressEvent);
    expect(setParam).toHaveBeenCalledTimes(0);
  });
});
