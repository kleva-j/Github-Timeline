import React from 'react';
import { useQuery } from '@apollo/client';

import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';
import { TagList } from 'components/TagList';
import { Pager } from 'components/Pagination';
import { SearchForms } from 'components/Form';
import { GetAllJobs } from 'components/AllJobs';

import { LOAD_JOBS } from 'GraphQL/Queries';

export const Jobs: React.FC = () => {
  const { loading } = useQuery(LOAD_JOBS);

  return (
    <section className="min-h-screen">
      <Navbar transparent={false} />
      <article className="my-4 px-3">
        <SearchForms />
        <TagList />
        <GetAllJobs />
        <Pager />
      </article>
      <Footer absolute={loading} />
    </section>
  );
};
