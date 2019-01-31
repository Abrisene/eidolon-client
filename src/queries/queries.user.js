/*
 # queries.user.js
 # User Queries
 */

/**
 # Module Imports
 */

import gql from 'graphql-tag';

/**
 # Queries
 */

/* const Q_APP_CONFIG = gql`
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
`; */

/**
 # Mutations
 */

const M_USER_AUTH_EMAIL = gql`
  mutation AuthenticateEmail($email: String!, $password: String!, $register: Boolean) {
    authenticateEmail(input: { email: $email, password: $password, register: $register }) {
      id
    }
  }
`

/**
 # Module Exports
 */

export default {
  M_USER_AUTH_EMAIL,
};
