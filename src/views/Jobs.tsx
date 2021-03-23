import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';
import React, { useCallback, useState } from 'react';
import { v5 as uuidNameSpace, v4 as getNS } from 'uuid';

import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';
import { TagList } from 'components/TagList';
import { Pager } from 'components/Pagination';
import { SearchForms } from 'components/Form';
import { GetAllJobs } from 'components/AllJobs';

import { LOAD_JOBS } from 'GraphQL/Queries';

const GenerateNameSpace = getNS();

interface IState {
  page: number;
  description: string | undefined;
  location: string | undefined;
  full_time: string | undefined;
}

export const Jobs: React.FC = () => {
  const [state, setState] = useState<IState>({
    page: 1,
    description: undefined,
    location: undefined,
    full_time: undefined,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data, refetch } = useQuery(LOAD_JOBS, {
    variables: { ...state },
    notifyOnNetworkStatusChange: true,
    context: {
      requestTrackerId: uuidNameSpace('JOBS', GenerateNameSpace),
    },
  });

  const setParams = useCallback((params: IState) => setState((prevState) => ({ ...prevState, ...params })), []);
  const setPage = useCallback((page: number) => setCurrentPage(() => page), []);

  const noOfItems = data?.jobs.length;

  return (
    <>
      <Helmet>
        <title>Jobs - Github Timeline</title>
        <meta name="description" content="Gitline jobs page" />
      </Helmet>
      <section className="min-h-screen">
        <Navbar transparent={false} />
        <article className="my-4 px-3">
          <SearchForms />
          <TagList setParams={setParams} />
          <GetAllJobs loading={loading} error={error} data={data} refetch={refetch} currentPage={currentPage} />
          <Pager noOfItems={noOfItems || 0} setPage={setPage} />
        </article>
      </section>
      <Footer absolute={loading || (error && true)} />
    </>
  );
};
