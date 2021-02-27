import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import { LOAD_SINGLE_JOB } from '../GraphQL/Queries';

export interface Job {
  id: string;
  title: string;
  type: string;
  company: string;
  description: string;
  url: string;
  location: string;
  created_at: string;
}

interface Props {
  id: string;
}

export const GetSingleJob: React.FC<Props> = ({ id }) => {
  const { error, loading, data } = useQuery(LOAD_SINGLE_JOB, {
    variables: { id },
  });

  if (loading) return <p data-testid="loading">Loading...</p>;
  if (error) return <p data-testid="error">Oops, Error occured!!!</p>;

  return (
    <aside>
      <div key={data?.job?.id} className="bg-primary-input mx-4 my-4">
        <h5 data-testid="title">{data?.job?.title}</h5>
        <p data-testid="company">{data?.job?.company}</p>
        <p data-testid="type">{data?.job?.type}</p>
        <p data-testid="location">{data?.job?.location}</p>
        <p data-testid="created">{data?.job?.created_at}</p>
        <a data-testid="url" href={data?.job?.url}>
          Read More...
        </a>
      </div>
    </aside>
  );
};

GetSingleJob.propTypes = {
  id: PropTypes.string.isRequired,
};
