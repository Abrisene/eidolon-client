/*
 # AuthVisible.js
 # Authorization Visibility Component
 */

/**
 # Module Imports
 */

import React from 'react';
import GoogleLogin from 'react-google-login';
import { Button } from '../Bootstrap';

/**
 # Component
 */

const ButtonGoogle = ({ children, ...props}) => {
  return (
    <GoogleLogin
      render={r => (
        <Button onClick={r.onClick} {...props} >
          { children ? children : 'Sign in with Google' }
        </Button>
      )}
      {...props}
    />
  );
}

/**
 # Module Exports
 */

export default ButtonGoogle;
