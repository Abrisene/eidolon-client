/*
 # ViewAuth.js
 # Auth View Component
 */

/**
 # Module Imports
 */

import React from 'react';

import AuthSocial from './AuthSocial';
import AuthEmail from './AuthEmail';

/**
 # Component
 */

const ViewAuth = ({ id, className, type = 'login', user, config }) => {
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
          <AuthSocial config={config} />
        </div>
        <div className="col-md-8 mb-4">
          <div className="row ml-2">
            <AuthEmail config={config} type={type} />
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
