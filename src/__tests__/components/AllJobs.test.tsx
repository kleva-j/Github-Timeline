import { cleanup } from '@testing-library/react';

import { LOAD_JOBS } from '../../GraphQL/Queries';
import { GetAllJobs } from '../../components/AllJobs';
import { customRender, waitForData } from '../../testing-utils/customRender';

const mock = {
  request: {
    query: LOAD_JOBS,
    variables: {},
  },
  result: {
    data: {
      jobs: [
        {
          id: 'XXXX',
          title: 'Buck',
          type: 'bulldog',
          company: 'company',
          description: 'description',
          url: 'some_random_url',
          location: 'location',
          created_at: 'created_at',
        },
      ],
    },
  },
};
const errorMock = {
  request: mock.request,
  error: new Error('An error occurred'),
};

describe('GetAllJobs', () => {
  afterEach(cleanup);

  test('it should test the loading state.', async () => {
    const { getByTestId } = customRender(<GetAllJobs />, [mock]);
    const loading = getByTestId('loading');
    expect(loading.textContent).toContain('Loading...');
  });

  test('it should test the success state.', async () => {
    const { container, getByText, getByTestId } = customRender(<GetAllJobs />, [mock]);
    await waitForData();
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Github Jobs Listings')).toBeDefined();
    const title = getByTestId('title');
    const type = getByTestId('type');
    const location = getByTestId('location');
    expect(title.textContent).toContain('Buck');
    expect(type.textContent).toContain('bulldog');
    expect(location.textContent).toContain('location');
  });

  test('it should test the error state.', async () => {
    const { getByTestId } = customRender(<GetAllJobs />, [errorMock]);
    await waitForData();
    const error = getByTestId('error');
    expect(error.textContent).toContain('Oops, Error occured!!!');
  });
});
