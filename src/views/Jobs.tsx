import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';
import { TagList } from 'components/TagList';
import { Pager } from 'components/Pagination';
import { SearchForms } from 'components/Form';
import { GetAllJobs } from 'components/AllJobs';

import { LOAD_JOBS } from 'GraphQL/Queries';

export const Jobs: React.FC = () => {
  const [state] = useState({
    page: 1,
    description: undefined,
    location: undefined,
    full_time: undefined,
  });

  const [currentPage, setPage] = useState(1);
  const { loading, error, data, refetch } = useQuery(LOAD_JOBS, {
    variables: { ...state },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <section className="min-h-screen">
      <Navbar transparent={false} />
      <article className="my-4 px-3">
        <SearchForms />
        <TagList />
        <GetAllJobs loading={loading} error={error} data={data} refetch={refetch} currentPage={currentPage} />
        <Pager noOfItems={data?.jobs.length || 0} setPage={setPage} />
      </article>
      <Footer absolute={loading || (error && true)} />
    </section>
  );
};
