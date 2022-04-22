/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SingleJob
// ====================================================

export interface SingleJob_job_commitment {
  __typename: "Commitment";
  title: string;
  slug: string;
}

export interface SingleJob_job_cities_country {
  __typename: "Country";
  name: string;
  isoCode: string | null;
}

export interface SingleJob_job_cities {
  __typename: "City";
  name: string;
  country: SingleJob_job_cities_country;
}

export interface SingleJob_job_countries {
  __typename: "Country";
  name: string;
}

export interface SingleJob_job_remotes {
  __typename: "Remote";
  name: string;
  type: string;
  slug: string;
}

export interface SingleJob_job_company {
  __typename: "Company";
  name: string;
  slug: string;
  websiteUrl: string;
  logoUrl: string | null;
}

export interface SingleJob_job_tags {
  __typename: "Tag";
  name: string;
  slug: string;
}

export interface SingleJob_job {
  __typename: "Job";
  id: string;
  title: string;
  slug: string;
  commitment: SingleJob_job_commitment;
  cities: SingleJob_job_cities[] | null;
  countries: SingleJob_job_countries[] | null;
  remotes: SingleJob_job_remotes[] | null;
  description: string | null;
  applyUrl: string | null;
  company: SingleJob_job_company | null;
  tags: SingleJob_job_tags[] | null;
  isPublished: boolean | null;
  isFeatured: boolean | null;
  locationNames: string | null;
  userEmail: string | null;
  postedAt: any;
  createdAt: any;
  updatedAt: any;
}

export interface SingleJob {
  job: SingleJob_job;
}

export interface SingleJobVariables {
  companySlug: string;
  jobSlug: string;
}
