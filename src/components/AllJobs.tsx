import React from 'react';
import { useQuery } from '@apollo/client';

import { LOAD_JOBS } from 'GraphQL/Queries';

import { Job } from './SingleJob';
import { Template2 } from './JobsTemplate';

export const GetAllJobs: React.FC = () => {
  const { error, loading, data } = useQuery(LOAD_JOBS);

  if (loading)
    return (
      <p data-testid="loading" className="text-center my-16">
        Loading...
      </p>
    );
  if (error)
    return (
      <p data-testid="error" className="text-center my-16">
        Oops, Error occured!!!
      </p>
    );

  return (
    <article className="w-full" data-testid="jobs-article">
      {data?.jobs.slice(0, 10).map((item: Job) => (
        <Template2 {...item} key={item.id} />
      ))}
    </article>
  );  
};
