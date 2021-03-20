import { gql } from '@apollo/client';

export const LOAD_JOBS = gql`
  query GetJobs($page: Int!, $description: String, $location: String, $full_time: String) {
    jobs(page: $page, description: $description, location: $location, full_time: $full_time) {
      id
      title
      type
      company
      description
      url
      location
      created_at
      company_url
      how_to_apply
      company_logo
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
      company_url
      how_to_apply
      company_logo
    }
  }
`;
