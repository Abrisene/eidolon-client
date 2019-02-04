/*
 # Views/index.js
 # View Component Index
 */

/**
 # Module Imports
 */

/* import * as Authentication from './Authentication';
import * as ViewStore from './Store'; */

import { ViewAuth, ViewRecover } from './Authentication';
import { ViewStore } from './Store';

/**
 # Module Exports
 */


/* export default {
  ...Authentication,
  ...ViewStore,
}; */

export {
  ViewAuth,
  ViewRecover,
  ViewStore,
};
