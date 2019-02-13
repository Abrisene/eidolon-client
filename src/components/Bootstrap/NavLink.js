/*
 # Bootstrap/NavLink.js
 # Bootstrap Nav Link Component
 */

/**
 # Module Imports
 */

import React from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";

import './Navbar.scss';

/**
 # Component
 */

const NavLink = ({ children, to }) => {
  return (
    <li className="nav-item">
      <RouterNavLink to={to} className="nav-link">{children}</RouterNavLink>
    </li>
  );
};

/**
 # Module Exports
 */

export default NavLink;
