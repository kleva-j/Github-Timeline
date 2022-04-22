/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Jobs
// ====================================================

export interface Jobs_jobs_commitment {
  __typename: "Commitment";
  title: string;
  slug: string;
}

export interface Jobs_jobs_cities_country {
  __typename: "Country";
  name: string;
}

export interface Jobs_jobs_cities {
  __typename: "City";
  name: string;
  country: Jobs_jobs_cities_country;
}

export interface Jobs_jobs_countries {
  __typename: "Country";
  name: string;
}

export interface Jobs_jobs_remotes {
  __typename: "Remote";
  name: string;
  type: string;
  slug: string;
}

export interface Jobs_jobs_company {
  __typename: "Company";
  name: string;
  websiteUrl: string;
  logoUrl: string | null;
}

export interface Jobs_jobs_tags {
  __typename: "Tag";
  name: string;
  slug: string;
}

export interface Jobs_jobs {
  __typename: "Job";
  id: string;
  title: string;
  slug: string;
  commitment: Jobs_jobs_commitment;
  cities: Jobs_jobs_cities[] | null;
  countries: Jobs_jobs_countries[] | null;
  remotes: Jobs_jobs_remotes[] | null;
  description: string | null;
  applyUrl: string | null;
  company: Jobs_jobs_company | null;
  tags: Jobs_jobs_tags[] | null;
  isPublished: boolean | null;
  isFeatured: boolean | null;
  locationNames: string | null;
  userEmail: string | null;
  postedAt: any;
  createdAt: any;
  updatedAt: any;
}

export interface Jobs {
  jobs: Jobs_jobs[];
}
