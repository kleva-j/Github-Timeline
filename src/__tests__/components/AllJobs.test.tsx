import { cleanup, fireEvent } from '@testing-library/react';

import { GetAllJobs } from 'components/AllJobs';
import { customRender, waitForData } from 'testing-utils/customRender';
import { errorMockAllJobs, getAllJobsMockData, mockAllEmptyJobs, mockAllJobs } from 'testing-utils/mocks';

describe('GetAllJobs', () => {
  afterEach(cleanup);

  test('it should test the loading state.', async () => {
    const { loading, error, data } = getAllJobsMockData.loadingState;
    const refetch = jest.fn();
    const { container, getByTestId } = customRender(
      <GetAllJobs loading={loading} error={error} data={data} refetch={refetch} currentPage={1} />,
      [mockAllJobs],
    );
    const loadingState = getByTestId('loading');
    expect(container.firstChild).toMatchSnapshot();
    expect(loadingState).toBeInTheDocument();
  });

  test('it should test the success state.', async () => {
    const { loading, error, data } = getAllJobsMockData.successState;
    const refetch = jest.fn();
    const { container, getByTestId } = customRender(
      <GetAllJobs loading={loading} error={error} data={data} refetch={refetch} currentPage={1} />,
      [mockAllJobs],
    );
    await waitForData();
    expect(container.firstChild).toMatchSnapshot();
    const article = getByTestId('jobs-article');
    expect(article?.classList?.contains('w-full')).toBeTruthy();
  });

  test('it should test the error state.', async () => {
    const { loading, error, data } = getAllJobsMockData.errorState;
    const refetch = jest.fn();
    const { container, getByTestId } = customRender(
      <GetAllJobs loading={loading} error={error} data={data} refetch={refetch} currentPage={1} />,
      [errorMockAllJobs],
    );
    await waitForData();
    const errorState = getByTestId('error');
    expect(container.firstChild).toMatchSnapshot();
    expect(errorState).toBeInTheDocument();
  });

  test('it should test the no-content state.', async () => {
    const { loading, error, data } = getAllJobsMockData.emptyState;
    const refetch = jest.fn();
    const { container, getByTestId } = customRender(
      <GetAllJobs loading={loading} error={error} data={data} refetch={refetch} currentPage={1} />,
      [mockAllEmptyJobs],
    );
    await waitForData();
    const noContent = getByTestId('no-content');
    expect(container.firstChild).toMatchSnapshot();
    expect(noContent).toBeInTheDocument();
  });

  test('it should test the refetch is visible when in error state and clicked.', async () => {
    const { loading, error, data } = getAllJobsMockData.errorState;
    const refetch = jest.fn();
    const { getByRole } = customRender(
      <GetAllJobs loading={loading} error={error} data={data} refetch={refetch} currentPage={1} />,
      [errorMockAllJobs],
    );
    await waitForData();
    const button = getByRole('button');
    fireEvent.click(button);
    expect(refetch).toHaveBeenCalled();
  });
});
