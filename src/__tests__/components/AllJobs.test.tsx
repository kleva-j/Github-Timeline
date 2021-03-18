import { cleanup } from '@testing-library/react';

import { GetAllJobs } from 'components/AllJobs';
import { errorMockAllJobs, mockAllJobs } from 'testing-utils/mocks';
import { customRender, waitForData } from 'testing-utils/customRender';

describe('GetAllJobs', () => {
  afterEach(cleanup);

  test('it should test the loading state.', async () => {
    const { getByTestId } = customRender(<GetAllJobs />, [mockAllJobs]);
    const loading = getByTestId('loading');
    expect(loading.textContent).toContain('Loading...');
  });

  test('it should test the success state.', async () => {
    const { container, getByTestId } = customRender(<GetAllJobs />, [mockAllJobs]);
    await waitForData();
    const article = getByTestId('jobs-article')?.classList;
    expect(container.firstChild).toMatchSnapshot();
    expect(article?.contains('w-full')).toBeTruthy();
  });

  test('it should test the error state.', async () => {
    const { getByTestId } = customRender(<GetAllJobs />, [errorMockAllJobs]);
    await waitForData();
    const error = getByTestId('error');
    expect(error.textContent).toContain('Oops, Error occured!!!');
  });
});
