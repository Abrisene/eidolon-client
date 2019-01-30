/*
 # ViewRecover.js
 # Password Recovery View Component
 */

/**
 # Module Imports
 */

import React from 'react';
// import { Link } from "react-router-dom";

// import AuthSocial from './AuthSocial';
import AuthRecover from './AuthRecover';

/**
 # Component
 */

const ViewAuth = ({ id, className, type = 'password' }) => {
  const i = id || `c-view--recover`;
  const classes = className || `c-view--recover`;
  return (
    <div id={i} className={classes}>
      <div className="row mt-5">
        <div className="col-md-12">
          <h4 className="lead ml-4">Reset Password</h4>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 mb-4 border-right">
          <p className="ml-4 mt-4">
            Please enter your email address to reset your password.
            You will recieve an email with a reset link.
          </p>
        </div>
        <div className="col-md-8 mb-4">
          <div className="row ml-2">
            <AuthRecover type={type} />
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
