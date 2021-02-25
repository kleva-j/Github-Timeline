import { render } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

export const waitForData = () => new Promise((res) => setTimeout(res, 0));

export const customRender = (node: JSX.Element, mocks?: MockedResponse[]) => {
  return {
    ...render(
      <MockedProvider mocks={mocks} addTypename={false}>
        {node}
      </MockedProvider>,
    ),
  };
};
