import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { render, cleanup } from '@testing-library/react';

import App from '../../App';

describe('App', () => {
  afterEach(cleanup);

  test('renders the app', () => {
    const { container, getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </MockedProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Timeline')).toBeTruthy();
  });

  test('renders 404 Not Found', () => {
    const { container, getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <MemoryRouter initialEntries={['/not-found']}>
          <App />
        </MemoryRouter>
      </MockedProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('404 NOT FOUND')).toBeTruthy();
  });
});
