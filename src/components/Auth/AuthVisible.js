/*
 # AuthVisible.js
 # Authorization Visibility Component
 */

/**
 # Module Imports
 */

// import React from 'react';

/**
 # Component
 */

const AuthVisible = ({ children, roles = [], user, unauthorized, hide }) => {
  const checkRoles = typeof roles === 'string' ? [roles] : roles;
  let valid = (user !== undefined && roles === undefined) ? true : false;
  if (!valid && user && Array.isArray(checkRoles)) {
    roles.some((role) => {
      if (user.roles.includes(role)) valid = true;
      return valid;
    });
  }
  return valid || hide ? children : (unauthorized || null);
}

/**
 # Module Exports
 */

export default AuthVisible;
