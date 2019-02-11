/*
 # queries.config.js
 # Config Queries
 */

/**
 # Module Imports
 */

import gql from 'graphql-tag';

/**
 # Queries
 */

const Q_APP_CONFIG = gql`
  {
    user: currentUser {
      emails
      roles
    }
    config: appConfig {
      name
      env
      keys {
        google
        facebook
        stripe
      }
    }
  }
`;

/**
 # Module Exports
 */

export default {
  Q_APP_CONFIG,
};
