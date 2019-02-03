/*
 # index.tsx
 # React App Index
 */

/**
 # Module Imports
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router } from "react-router-dom";

import  './themes';
import './index.css';
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
    <Router>
      <App />
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
