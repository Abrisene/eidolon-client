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

import './App.scss';

/**
 # Utility Components
 */

const NavAuth = ({ user }) => {
  return (
    <div>
      <AuthVisible user={user} hide>
        <Button className="mr-2" link to='/login'>Sign In</Button>
        <Button outline warning to='/register'>Register</Button>
      </AuthVisible>
      <AuthVisible user={user}>
        <ButtonLogout />
      </AuthVisible>
    </div>
  );
};

const ButtonLogout = ({ children }) => {
  const logoutUser = useMutation(queries.M_USER_LOGOUT, { refetchQueries: [{ query: queries.Q_USER_CURRENT }]});
  return (
    <Button onClick={logoutUser} outline danger>
      {children ? children : 'Logout'}
    </Button>
  )
}

/**
 # Component
 */


const AppNavbar = ({ children, title, logo, navLinks, user, onClickBrand }) => {
  const filterLinks = navLinks.filter((l) => {
    const authValid = !l.visible || (user && l.visible === 'auth') || (!user && l.visible === 'noauth');
    let roleValid = false;
    if (user) roleValid = !l.roles || l.roles.reduce((valid, role) => (valid || user.roles.includes(role)), false);

    return authValid && roleValid;
  });
  return (
    <Navbar className="c-navbar--app" dark fixed logo={logo} title={title} navLinks={filterLinks} >
      <NavBrand title={title} logo={logo} onClick={onClickBrand} />
      <NavList links={navLinks} collapse fill />
      {children}
      <NavAuth user={user} />
    </Navbar>
  );
};


/**
 # Module Exports
 */

export default AppNavbar;
