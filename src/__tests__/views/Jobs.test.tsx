import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { cleanup } from '@testing-library/react';

import App from 'App';
import { AuthProvider } from 'contexts/AuthContext';
import { customRender } from 'testing-utils/customRender';

describe('Jobs Page', () => {
  afterEach(cleanup);

  test('should render the Jobs page', () => {
    const { container, getByText } = customRender(
      <AuthProvider>
        <MemoryRouter initialEntries={['/jobs']}>
          <App />
        </MemoryRouter>
      </AuthProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('This is the Jobs page.')).toBeTruthy();
  });
});
