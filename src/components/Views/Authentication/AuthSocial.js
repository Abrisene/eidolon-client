/*
 # AuthSocial.js
 # Social Login Component
 */

/**
 # Module Imports
 */

import React from 'react';
import { Link } from "react-router-dom";

/**
 # Component
 */

const AuthSocial = ({ config }) => {
  return (
    <div id="c-pane-auth-social">
      <div className="row mt-4">
        <div className="col-md-12 ml-4">
          <Link to="/auth/facebook">Sign In with Facebook</Link>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 ml-4">
          <Link to="/auth/google">Sign In with Google</Link>
        </div>
      </div>
    </div>
  );
};

/**
 # Module Exports
 */

export default AuthSocial;
