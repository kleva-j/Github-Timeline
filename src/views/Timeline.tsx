import React from 'react';
import { Helmet } from 'react-helmet';

import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';

export const Timeline: React.FC = () => (
  <>
    <Helmet>
      <title>User Timeline - Github</title>
      <meta name="description" content="Gitline jobs page" />
    </Helmet>
    <Navbar transparent={false} />
    <article className="my-10">
      <h2 className="text-gray-500 text-center">This is the Timeline page.</h2>
    </article>
    <Footer absolute />
  </>
);
