import { render } from 'react-dom';
import React, { StrictMode } from 'react';
import { onError } from '@apollo/client/link/error';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';

import App from './App';
import { UserProvider } from './contexts/UserContext';

import './index.css';

const { log } = console;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
          log(`Graphql error occured: ${message} ${locations} ${path}`),
        );
      }
      if (networkError) log(networkError.message);
    }),
    new HttpLink({ uri: process.env.REACT_APP_BACKEND_JOBS_API }),
  ]),
});

export const rootElement = document.getElementById('root');

export const Node = (
  <StrictMode>
    <ApolloProvider client={client}>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </ApolloProvider>
  </StrictMode>
);

render(Node, rootElement);
