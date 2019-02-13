/*
 # Bootstrap/NavList.js
 # Bootstrap Nav List Component
 */

/**
 # Module Imports
 */

import React from 'react';

import NavLink from './NavLink';

import './Navbar.scss';

/**
 # Component
 */

const NavList = ({
  children,
  id,
  className,
  style,
  links,
  collapse,
  fill,
}) => {
  const navLinks = links || [];
  let classes = 'navbar-nav';
  if (collapse) classes += ' collapse navbar-collapse';
  if (fill) classes +=' mr-auto';
  if (className) classes += ` ${className}`;
  return (
    <ul id={id} className={classes} style={style}>
      {
        links.map((link, id) => {
          return <NavLink to={link.to} key={id}>{link.name}</NavLink>
        })
      }
    </ul>
  );
}

/**
 # Module Exports
 */

export default NavList;
