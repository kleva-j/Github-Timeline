import { MemoryRouter } from 'react-router-dom';
import { cleanup } from '@testing-library/react';

import App from 'App';
import { LOAD_JOBS } from 'GraphQL/Queries';
import { AuthProvider } from 'contexts/AuthContext';
import { customRender, waitForData } from 'testing-utils/customRender';

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

describe('Jobs Page', () => {
  afterEach(cleanup);

  test('should render the Jobs page', async () => {
    const { container } = customRender(
      <AuthProvider>
        <MemoryRouter initialEntries={['/jobs']}>
          <App />
        </MemoryRouter>
      </AuthProvider>,
      [mock],
    );
    await waitForData();
    expect(container.firstChild).toMatchSnapshot();
  });
});
