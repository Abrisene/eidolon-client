/*
 # queries.storefront.js
 # Storefront Queries
 */

/**
 # Module Imports
 */

import gql from 'graphql-tag';

/**
 # Queries
 */

const Q_STORE_PRODUCTS = gql`
  {
    products {
      id
      name
      active
      status
    }
    skus {
      id
      productId
      name
      price
      image
      active
      status
    }
  }
`;

const M_STORE_PURCHASE = gql`
  mutation Purchase($input: PurchaseInput!) {
    purchase(input: $input) {
      id
    }
  }
`;

/**
 # Module Exports
 */

export default {
  Q_STORE_PRODUCTS,
  M_STORE_PURCHASE,
};
