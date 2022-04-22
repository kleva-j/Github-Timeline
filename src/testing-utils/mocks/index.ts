import { ApolloError } from '@apollo/client';
import { LOAD_JOBS, LOAD_SINGLE_JOB } from 'graphqL/queries.graphql';

export const mockSingleJob = {
  request: {
    query: LOAD_SINGLE_JOB,
    variables: { id: 'XXXX' },
  },
  result: {
    data: {
      job: {
        id: 'XXXX',
        title: 'Buck',
        type: 'bulldog',
        company: 'company',
        description: 'description',
        url: 'some_random_url',
        location: 'location',
        created_at: 'Fri Mar 12 09:57:21 UTC 2021',
        company_url: 'some_company_url',
        company_logo: 'some_company_logo',
        how_to_apply: 'how_to_apply',
      },
    },
  },
};

export const errorMockSingleJob = {
  request: mockSingleJob.request,
  error: new Error('An error occurred'),
};

export const mockAllJobs = {
  request: {
    query: LOAD_JOBS,
    variables: {},
  },
  result: {
    data: {
      jobs: [
        {
          id: 'XXXX',
          title: 'Buck',
          type: 'bulldog',
          company: 'company',
          description: 'description',
          url: 'some_random_url',
          location: 'location',
          created_at: 'Fri Mar 12 09:57:21 UTC 2021',
          company_url: 'some_company_url',
          company_logo: 'some_company_logo',
          how_to_apply: 'how_to_apply',
        },
      ],
    },
  },
};

export const mockAllEmptyJobs = {
  request: {
    query: LOAD_JOBS,
    variables: {},
  },
  result: {
    data: {
      jobs: [],
    },
  },
};

export const errorMockAllJobs = {
  request: mockAllJobs.request,
  error: new Error('An error occurred'),
};

export const getAllJobsMockData = {
  loadingState: {
    loading: true,
    error: undefined,
    data: {
      jobs: [],
    },
  },
  successState: {
    loading: false,
    error: undefined,
    data: mockAllJobs.result.data,
  },
  errorState: {
    loading: false,
    error: new ApolloError({}),
    data: {
      jobs: [],
    },
  },
  emptyState: {
    loading: false,
    error: undefined,
    data: {
      jobs: [],
    },
  },
  refetch: jest.fn(),
  currentPage: 1,
};
