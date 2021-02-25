import React from 'react';
import { cleanup } from '@testing-library/react';

import { LOAD_SINGLE_JOB } from '../../GraphQL/Queries';
import { GetSingleJob } from '../../components/GetSingleJob';
import { waitForData, customRender } from '../../testing-utils/customRender';

const mock = {
  request: {
    query: LOAD_SINGLE_JOB,
    variables: {
      id: 'XXXX',
    },
  },
  result: {
    data: {
      job: {
        id: 'XXXX',
        title: 'Buck',
        type: 'bulldog',
        company: 'company',
        description: 'description',
        url: 'some_random_url',
        location: 'location',
        created_at: 'created_at',
      },
    },
  },
};

const errorMock = {
  request: mock.request,
  error: new Error('An error occurred'),
};

describe('GetSingleJob', () => {
  afterEach(cleanup);

  test('it should test the loading state.', async () => {
    const { getByTestId } = customRender(<GetSingleJob id="XXXX" />, [mock]);
    const loading = getByTestId('loading');
    expect(loading.textContent).toContain('Loading...');
  });

  test('it should test the success state.', async () => {
    const { container, getByTestId } = customRender(<GetSingleJob id="XXXX" />, [mock]);
    await waitForData();
    expect(container.firstChild).toMatchSnapshot();
    const title = getByTestId('title');
    const company = getByTestId('company');
    const location = getByTestId('location');
    expect(title.textContent).toContain('Buck');
    expect(company.textContent).toContain('company');
    expect(location.textContent).toContain('location');
  });

  test('it should test the error state.', async () => {
    const { getByTestId } = customRender(<GetSingleJob id="XXXX" />, [errorMock]);
    await waitForData();
    const error = getByTestId('error');
    expect(error.textContent).toContain('Oops, Error occured!!!');
  });
});
