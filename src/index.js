/*
 # index.tsx
 # React App Index
 */

/**
 # Module Imports
 */

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router } from 'react-router-dom';

import  './themes';
import './index.scss';
import { App } from './components';

import * as serviceWorker from './serviceWorker';

/**
 # Configure Apollo
 */
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  credentials: 'include',
  cache,
});

/**
 # Render to DOM
 */

const Root = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Router>
        <Suspense fallback={App}>
          <App />
        </Suspense>
      </Router>
    </ApolloHooksProvider>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
