/*
 # queries/index.js
 # GraphQL Query Index
 */

/**
 # Module Imports
 */

import configQueries from './queries.config';
import userQueries from './queries.user';
import storeQueries from './queries.storefront';

/**
 # Module Exports
 */

 export default {
   ...configQueries,
   ...userQueries,
   ...storeQueries,
 };
