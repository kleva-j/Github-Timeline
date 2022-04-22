import { FC } from 'react';
import { Helmet } from 'react-helmet';

import { Navbar } from 'components/Navbar';
import { GetAllJobs } from 'components/GraphqlJobs/AllJobs';

export const GraphQLJobs: FC = () => {
  return (
    <>
      <Helmet>
        <title>GraphQL Jobs - Github Timeline</title>
        <meta name="description" content="Gitline jobs page" />
      </Helmet>
      <section className="min-h-screen">
        <Navbar transparent={false} />
        <article className="my-4 px-3">
          <GetAllJobs />
        </article>
      </section>
    </>
  );
};
