import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, cleanup } from '@testing-library/react';

import App from '../../App';

describe('App', () => {
  afterEach(cleanup);

  test('renders the app', () => {
    const { container, getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <App />
      </MockedProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Timeline')).toBeTruthy();
  });
});
