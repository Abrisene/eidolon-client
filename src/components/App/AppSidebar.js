/*
 # AppNavbar.js
 # App Navbar Component
 */

/**
 # Module Imports
 */

import React from 'react';
import { useMutation } from 'react-apollo-hooks';

import queries from '../../queries';

import { Navbar, NavBrand, NavList, Button } from '../Bootstrap';
import { AuthVisible } from '../Auth';

import { Sidebar } from '../Layouts';

/**
 # Utility Components
 */

function AppSidebar ({ children, navLinks }) {
  return (
    <Sidebar className="d-none d-sm-block col-sm-2 bg-light">
      Test
      <NavList links={navLinks} collapse fill />
      {children}
      {/* <NavAuth user={user} /> */}
    </Sidebar>
  );
}

/**
 # Module Exports
 */

export default AppSidebar;
