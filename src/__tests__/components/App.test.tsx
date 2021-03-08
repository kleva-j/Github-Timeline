import { MemoryRouter } from 'react-router-dom';
import { cleanup } from '@testing-library/react';

import App from 'App';
import { AuthProvider } from 'contexts/AuthContext';
import { UserProvider } from 'contexts/UserContext';
import { customRender } from 'testing-utils/customRender';

describe('App', () => {
  afterEach(cleanup);

  test('renders the app', () => {
    const { container, getByText } = customRender(
      <AuthProvider>
        <UserProvider>
          <MemoryRouter initialEntries={['/']}>
            <App />
          </MemoryRouter>
        </UserProvider>
      </AuthProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Sign in with')).toBeTruthy();
  });

  test('renders 404 Not Found', () => {
    const { container, getByText } = customRender(
      <AuthProvider>
        <MemoryRouter initialEntries={['/not-found']}>
          <App />
        </MemoryRouter>
      </AuthProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('404 NOT FOUND')).toBeTruthy();
  });
});
