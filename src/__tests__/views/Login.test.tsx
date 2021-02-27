import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';

import App from '../../App';

describe('Login Page', () => {
  afterEach(cleanup);

  test('should render the Login page', () => {
    const { container, getByText } = render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('This is the Login page.')).toBeTruthy();
  });
});
