import { cleanup, fireEvent, render } from '@testing-library/react';

import { Pager } from 'components/Pagination';

describe('Pagination Component', () => {
  afterEach(cleanup);

  test('Should render Pager', () => {
    const noOfItems = 50;
    const setPage = jest.fn();
    const { container, getByTestId } = render(<Pager noOfItems={noOfItems} setPage={setPage} />);
    expect(container.firstChild).toMatchSnapshot();
    expect(getByTestId('prev-button')).toBeInTheDocument();
    expect(getByTestId('next-button')).toBeInTheDocument();
  });

  test('Should test and set prev page.', () => {
    const noOfItems = 50;
    const setPage = jest.fn();
    const { container, getByTestId } = render(<Pager noOfItems={noOfItems} setPage={setPage} />);
    const button = getByTestId('prev-button');
    fireEvent.click(button);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Should test and set prev page after navigating next.', () => {
    const noOfItems = 50;
    const setPage = jest.fn();
    const { getByTestId } = render(<Pager noOfItems={noOfItems} setPage={setPage} />);
    const prevButton = getByTestId('prev-button');
    const nextButton = getByTestId('next-button');
    fireEvent.click(nextButton);
    fireEvent.click(prevButton);
    expect(setPage).toHaveBeenCalledTimes(3);
  });

  test('Should test and set current page.', () => {
    const noOfItems = 50;
    const setPage = jest.fn();
    const { container, getByTestId } = render(<Pager noOfItems={noOfItems} setPage={setPage} />);
    const button = getByTestId('pageNumber-2');
    fireEvent.click(button);
    expect(container.firstChild).toMatchSnapshot();
    expect(setPage).toHaveBeenCalled();
  });

  test('Should test Pager with navigate to next.', () => {
    const noOfItems = 50;
    const setPage = jest.fn();
    const { container, getByTestId } = render(<Pager noOfItems={noOfItems} setPage={setPage} />);
    const button = getByTestId('next-button');
    fireEvent.click(button);
    expect(container.firstChild).toMatchSnapshot();
    expect(setPage).toHaveBeenCalled();
  });
});
