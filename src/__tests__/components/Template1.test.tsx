import { cleanup, render } from '@testing-library/react';

import { mockSingleJob } from 'testing-utils/mocks';

import { Template1 } from 'components/JobsTemplate';

describe('Template1', () => {
  afterEach(cleanup);

  const {
    result: {
      data: { job },
    },
  } = mockSingleJob;

  test('Should render the Template1 component.', () => {
    const { container, getByTestId } = render(<Template1 {...job} />);

    expect(container.firstChild).toMatchSnapshot();
    expect(getByTestId('job-XXXX')).toBeTruthy();
  });
});
