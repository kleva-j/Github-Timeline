import { gql } from '@apollo/client';

export const LOAD_JOBS = gql`
  query AllJobs {
    jobs {
      id
      title
      slug
      commitment {
        title
        slug
      }
      cities {
        name
        country {
          name
          isoCode
        }
      }
      countries {
        name
      }
      remotes {
        name
        type
        slug
      }
      description
      applyUrl
      company {
        name
        slug
        websiteUrl
        logoUrl
      }
      tags {
        name
        slug
      }
      isPublished
      isFeatured
      locationNames
      userEmail
      postedAt
      createdAt
      updatedAt
    }
  }
`;

export const LOAD_SINGLE_JOB = gql`
  query SingleJob($companySlug: String!, $jobSlug: String!) {
    job(input: { companySlug: $companySlug, jobSlug: $jobSlug }) {
      id
      title
      slug
      commitment {
        title
        slug
      }
      cities {
        name
        country {
          name
          isoCode
        }
      }
      countries {
        name
      }
      remotes {
        name
        type
        slug
      }
      description
      applyUrl
      company {
        name
        slug
        websiteUrl
        logoUrl
      }
      tags {
        name
        slug
      }
      isPublished
      isFeatured
      locationNames
      userEmail
      postedAt
      createdAt
      updatedAt
    }
  }
`;
