import React from 'react';
import { useQuery } from '@apollo/client';

import { LOAD_JOBS } from '../GraphQL/Queries';
import { Job } from './SingleJob';

export const GetAllJobs: React.FC = () => {
  const { error, loading, data } = useQuery(LOAD_JOBS);

  if (loading) return <p data-testid="loading">Loading...</p>;
  if (error) return <p data-testid="error">Oops, Error occured!!!</p>;

  return (
    <section className="grid__section min-h-screen bg-primary-bg">
      <h2>Github Jobs Listings</h2>
      <article className="flex flex-wrap justify-evenly">
        {data?.jobs.map(({ id, title, type, company, url, location, created_at }: Job) => (
          <aside data-testid={id} key={id} className="bg-primary-input mx-4 my-4">
            <h5 data-testid="title">{title}</h5>
            <p data-testid="company">{company}</p>
            <p data-testid="type">{type}</p>
            <p data-testid="location">{location}</p>
            <p>{created_at}</p>
            <a href={url}>Read More...</a>
          </aside>
        ))}
      </article>
    </section>
  );
};
