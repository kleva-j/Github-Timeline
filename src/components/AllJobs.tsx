import React from 'react';
import PropTypes from 'prop-types';
import { ApolloError } from '@apollo/client';

import { RefetchBtn } from 'styled';

import { Job } from './SingleJob';
import { Template2 } from './JobsTemplate';

import loadingGif from 'assets/img/loading-gif.webp';
import errorGif from 'assets/img/error-gif.webp';

interface IProps {
  loading: boolean;
  error: ApolloError | undefined;
  data: {
    jobs: Job[];
  };
  currentPage: number;
  refetch: Function;
}

export const GetAllJobs: React.FC<IProps> = ({ loading, error, data, currentPage, refetch }) => {
  const limit = currentPage * 10;
  const offset = (currentPage - 1) * 10;

  if (loading)
    return (
      <div data-testid="loading" className="text-center my-20 mx-auto w-max">
        <img
          src={loadingGif}
          className="select-none object-contain"
          alt="Loading gif"
        />
      </div>
    );
  if (error)
    return (
      <div data-testid="error" className="text-center my-10">
        <img
          src={errorGif}
          className="select-none object-contain w-max mx-auto"
          alt="Error gif"
        />

        <RefetchBtn onClick={() => refetch()}>Refetch Content</RefetchBtn>
      </div>
    );

  return (
    <article className="w-full" data-testid="jobs-article">
      {data?.jobs.slice(offset, limit).map((item: Job) => (
        <Template2 {...item} key={item.id} />
      ))}
    </article>
  );
};

GetAllJobs.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any,
  currentPage: PropTypes.number.isRequired,
  refetch: PropTypes.func.isRequired
};
