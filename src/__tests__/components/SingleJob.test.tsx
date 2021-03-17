import { cleanup } from '@testing-library/react';

import { GetSingleJob } from 'components/SingleJob';
import { waitForData, customRender } from 'testing-utils/customRender';
import { errorMockSingleJob, mockSingleJob } from 'testing-utils/mocks';

describe('GetSingleJob', () => {
  afterEach(cleanup);

  test('it should test the loading state.', async () => {
    const { getByTestId } = customRender(<GetSingleJob id="XXXX" />, [mockSingleJob]);
    const loading = getByTestId('loading');
    expect(loading.textContent).toContain('Loading...');
  });

  test('it should test the success state.', async () => {
    const { container, getByTestId, getByText } = customRender(<GetSingleJob id="XXXX" />, [mockSingleJob]);
    await waitForData();
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Read More...')).toBeTruthy();
    const url = getByTestId('url');
    expect(url.textContent).toContain('Read More...');
  });

  test('it should test the error state.', async () => {
    const { getByTestId } = customRender(<GetSingleJob id="XXXX" />, [errorMockSingleJob]);
    await waitForData();
    const error = getByTestId('error');
    expect(error.textContent).toContain('Oops, Error occured!!!');
  });
});
