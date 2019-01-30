/*
 # queries.config.tsx
 # Config Queries
 */

/**
 # Module Imports
 */

import gql from "graphql-tag";

/**
 # Queries
 */

const Q_APP_CONFIG = gql`
  {
    currentUser {
      emails
      roles
    }
    appConfig {
      name
      env
      keys {
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