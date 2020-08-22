import * as React from 'react';

import { SearchBar } from './search';
import { Page } from './page';
import { Pagination } from './pagination';
import { UseFetch } from '../../hooks';

export const GithubJobs: React.FC = () => {
  const { jobs } = UseFetch({}, 1);
  return (
    <section>
      <SearchBar />
      <Page list={jobs} />
      <Pagination />
    </section>
  );
};
