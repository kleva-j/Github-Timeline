import React from 'react';

import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';

export const Timeline: React.FC = () => (
  <>
    <Navbar transparent={false} />
    <article className="my-10">
      <h2 className="text-gray-500 text-center">This is the Timeline page.</h2>
    </article>
    <Footer absolute />
  </>
);
