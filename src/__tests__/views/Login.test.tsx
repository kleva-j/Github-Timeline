import { MemoryRouter } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';

import { Login } from 'views/Login';
import { AuthProvider } from 'contexts/AuthContext';

describe('Login Page', () => {
  afterEach(cleanup);

  test('should render the Login view', () => {
    const { container, getByText } = render(
      <AuthProvider>
        <MemoryRouter initialEntries={['/login']}>
          <Login />
        </MemoryRouter>
      </AuthProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Sign in with')).toBeTruthy();
  });
});
