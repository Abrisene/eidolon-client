/*
 # Bootstrap/Navbar.js
 # Bootstrap Navbar Component
 */

/**
 # Module Imports
 */

import React from 'react';
import { Link } from "react-router-dom";

import NavList from './NavList';

import './Navbar.scss';

/**
 # Component
 */

const Navbar = ({
  children,
  // navLinks,
  dark,
  expand,
  fixed,
  fixedTop,
  fixedBottom,
  // title,
  // logo,
  id,
  className,
}) => {
  let classes = 'navbar';
  classes += dark ? ' navbar-dark bg-dark' : ' navbar-light bg-light';
  classes += ` navbar-expand-${expand ? expand : 'sm'}`;
  if (expand) classes += ' navbar-expand-md';
  if (fixed || fixedTop) classes += ' fixed-top';
  if (fixedBottom) classes += ' fixed-bottom';
  if (className) classes += ` ${className}`;

  return (
    <nav className={classes} id={id}>
      {children}
    </nav>
  );
};

/**
 # Module Exports
 */

export default Navbar;
