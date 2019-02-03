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

const Q_USER_CURRENT = gql`
  {
    currentUser {
      emails
      roles
    }
  }
`;

/**
 # Mutations
 */

/* const M_USER_AUTH_EMAIL = gql`
  mutation AuthenticateEmail($email: String!, $password: String!, $register: Boolean) {
    authenticateEmail(input: { email: $email, password: $password, register: $register }) {
      id
    }
  }
`; */

const M_USER_AUTH_EMAIL = gql`
  mutation AuthenticateEmail($input: AuthenticateEmailInput!) {
    authenticateEmail(input: $input) {
      id
    }
  }
`;

const M_USER_AUTH_SOCIAL = gql`
  mutation AuthenticateSocial($input: AuthenticateSocialInput!) {
    authenticateSocial(input: $input) {
      id
    }
  }
`;

const M_USER_LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

const M_USER_RECOVER = gql`
  mutation RequestPasswordReset($input: EmailInput!) {
    requestPasswordReset(input: $input)
  }
`;

/**
 # Module Exports
 */

export default {
  Q_USER_CURRENT,
  M_USER_AUTH_EMAIL,
  M_USER_AUTH_SOCIAL,
  M_USER_LOGOUT,
  M_USER_RECOVER,
};
