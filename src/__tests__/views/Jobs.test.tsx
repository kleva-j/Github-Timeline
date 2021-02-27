import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';

import App from '../../App';

describe('Jobs Page', () => {
  afterEach(cleanup);

  test('should render the Jobs page', () => {
    const { container, getByText } = render(
      <MemoryRouter initialEntries={['/jobs']}>
        <App />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('This is the Jobs page.')).toBeTruthy();
  });
});
