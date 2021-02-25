import { gql } from '@apollo/client';

export const LOAD_JOBS = gql`
  query GetJobs {
    jobs {
      id
      title
      type
      company
      description
      url
      location
      created_at
    }
  }
`;

export const LOAD_SINGLE_JOB = gql`
  query GetJob($id: ID!) {
    job(id: $id) {
      id
      title
      type
      company
      description
      url
      location
      created_at
    }
  }
`;
