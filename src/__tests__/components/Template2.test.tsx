import { cleanup, render } from '@testing-library/react';

import { mockSingleJob } from 'testing-utils/mocks';

import { Template2 } from 'components/JobsTemplate';

describe('Template2', () => {
  afterEach(cleanup);

  const {
    result: {
      data: { job },
    },
  } = mockSingleJob;

  test('Should render the Template2 component.', () => {
    const { container, getByTestId } = render(<Template2 {...job} />);

    expect(container.firstChild).toMatchSnapshot();
    expect(getByTestId(`job-${job.id}`)).toBeInTheDocument();
    expect(getByTestId(`title-${job.id}`)).toBeInTheDocument();
  });
});
