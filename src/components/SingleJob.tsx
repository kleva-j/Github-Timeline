import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import { LOAD_SINGLE_JOB } from 'graphqL/queries.graphql';
import { SingleJob, SingleJobVariables } from 'graphqL/__generated__/SingleJob';

interface Props {
  companySlug: string;
  jobSlug: string;
}

export const GetSingleJob: React.FC<Props> = ({ companySlug = '', jobSlug = '' }) => {
  const { error, loading, data } = useQuery<SingleJob, SingleJobVariables>(LOAD_SINGLE_JOB, {
    variables: { companySlug, jobSlug },
  });

  if (loading)
    return (
      <p data-testid="loading" className="text-center">
        Loading...
      </p>
    );
  if (error)
    return (
      <p data-testid="error" className="text-center">
        Oops, Error occured!!!
      </p>
    );

  return (
    <aside>
      <div key={data?.job?.id} className="bg-primary-input mx-4 my-4">
        <h5 data-testid="title">{data?.job?.title}</h5>
        <p data-testid="company">{data?.job?.company}</p>
        <p data-testid="type">{data?.job?.remotes}</p>
        <p data-testid="location">{data?.job?.locationNames}</p>
        <p data-testid="created">{data?.job.createdAt}</p>
        <a data-testid="url" href={data?.job?.company?.websiteUrl}>
          Read More...
        </a>
      </div>
    </aside>
  );
};

GetSingleJob.propTypes = {
  companySlug: PropTypes.string.isRequired,
  jobSlug: PropTypes.string.isRequired,
};
