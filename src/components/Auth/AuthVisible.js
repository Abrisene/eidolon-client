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

const AuthVisible = ({ children, roles, user, unauthorized, hide }) => {
  const checkRoles = typeof roles === 'string' ? [roles] : roles;
  let valid = (user !== null && roles === undefined) ? true : false;
  if (!valid && user && checkRoles !== undefined) {
    roles.some((role) => {
      if (user.roles.includes(role)) valid = true;
      return valid;
    });
  }
  if (hide) valid = !valid;
  return valid ? children : (unauthorized || null);
}

/**
 # Module Exports
 */

export default AuthVisible;
