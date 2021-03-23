import { render } from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { UserProvider } from 'contexts/UserContext';
import { AuthProvider } from 'contexts/AuthContext';
import { link } from 'ApolloLinkConfig';

import App from './App';

import './index.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  queryDeduplication: false,
});

export const rootElement = document.getElementById('root');

export const Node = (
  <StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <UserProvider>
          <Router>
            <App />
          </Router>
        </UserProvider>
      </AuthProvider>
    </ApolloProvider>
  </StrictMode>
);

render(Node, rootElement);
