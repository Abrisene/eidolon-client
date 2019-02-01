/*
 # ViewAuth.js
 # Auth View Component
 */

/**
 # Module Imports
 */

import React from 'react';
import { Mutation } from 'react-apollo';
import { Redirect } from "react-router-dom";

import queries from '../../../queries';

import AuthSocial from './AuthSocial';
import AuthEmail from './AuthEmail';

/**
 # Component
 */

/*
     mutation={ADD_TODO}
      update={(cache, { data: { addTodo } }) => {
        const { todos } = cache.readQuery({ query: GET_TODOS });
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos: todos.concat([addTodo]) },
        });
      }}
*/
const ViewAuth = ({ id, className, type = 'login' }) => {
  const i = id || `c-view--${type}`;
  const classes = className || `c-view--${type}`;
  let titleText;

  if (type === 'login') {
    titleText = 'Sign In';
  } else if (type === 'register') {
    titleText = 'Sign Up';
  }

  return (
    <div id={i} className={classes}>
      <div className="row mt-5">
        <div className="col-md-12">
          <h4 className="lead ml-4">{titleText}</h4>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 mb-4 border-right">
          <div className="mt-5" />
          <AuthSocial />
        </div>
        <div className="col-md-8 mb-4">
          <div className="row ml-2">
            <Mutation 
              mutation={queries.M_USER_AUTH_EMAIL}
              refetchQueries={[{ query: queries.Q_USER_CURRENT }]}
              /* update={(cache, { data: { currentUser } }) => {
                cache.writeQuery({ query: queries.Q_USER_CURRENT, data: { currentUser }});
              }} */
            >
              {
                (authenticateEmail, { data }) => {
                  console.log(data);
                  return (
                    <AuthEmail type={type} onSubmit={(input) => authenticateEmail({ variables: input })} />
                  )
                }
              }
              
            </Mutation>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 # Module Exports
 */

export default ViewAuth;
