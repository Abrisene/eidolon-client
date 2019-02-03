/*
 # AuthVisible.js
 # Authorization Visibility Component
 */

/**
 # Module Imports
 */

import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Button } from '../Bootstrap';

/**
 # Component
 */

const ButtonGoogle = ({ children, ...props}) => {
  return (
    <FacebookLogin
      render={r => (
        <Button onClick={r.onClick} {...props} >
          { children ? children : 'Sign in with Facebook' }
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
