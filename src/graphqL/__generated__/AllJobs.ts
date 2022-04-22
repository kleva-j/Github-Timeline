/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllJobs
// ====================================================

export interface AllJobs_jobs_commitment {
  __typename: "Commitment";
  title: string;
  slug: string;
}

export interface AllJobs_jobs_cities_country {
  __typename: "Country";
  name: string;
  isoCode: string | null;
}

export interface AllJobs_jobs_cities {
  __typename: "City";
  name: string;
  country: AllJobs_jobs_cities_country;
}

export interface AllJobs_jobs_countries {
  __typename: "Country";
  name: string;
}

export interface AllJobs_jobs_remotes {
  __typename: "Remote";
  name: string;
  type: string;
  slug: string;
}

export interface AllJobs_jobs_company {
  __typename: "Company";
  name: string;
  slug: string;
  websiteUrl: string;
  logoUrl: string | null;
}

export interface AllJobs_jobs_tags {
  __typename: "Tag";
  name: string;
  slug: string;
}

export interface AllJobs_jobs {
  __typename: "Job";
  id: string;
  title: string;
  slug: string;
  commitment: AllJobs_jobs_commitment;
  cities: AllJobs_jobs_cities[] | null;
  countries: AllJobs_jobs_countries[] | null;
  remotes: AllJobs_jobs_remotes[] | null;
  description: string | null;
  applyUrl: string | null;
  company: AllJobs_jobs_company | null;
  tags: AllJobs_jobs_tags[] | null;
  isPublished: boolean | null;
  isFeatured: boolean | null;
  locationNames: string | null;
  userEmail: string | null;
  postedAt: any;
  createdAt: any;
  updatedAt: any;
}

export interface AllJobs {
  jobs: AllJobs_jobs[];
}
