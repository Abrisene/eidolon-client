/*
 # Bootstrap/Navbar.tsx
 # React Component Index
 */

/**
 # Module Imports
 */

import React from 'react';
import { Link, NavLink as RouterNavLink } from "react-router-dom";

import './Navbar.css';

/**
 # Component
 */

const NavBrand /* React.SFC<{ logo?: string, title?: string }> */ = ({ logo, title }) => {
  return (
      <div className="col-sm-3 col-lg-2">
        <Link className="navbar-brand" to="/">
          { logo ? <img src={logo} className="brand-logo" alt="logo" /> : '' }
          <span>{title ? title : ''}</span>
        </Link>
      </div>
  )
};

const NavList = ({ navLinks }) => {
  const links = navLinks || [];
  return (
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        {
          links.map((link, id) => {
            return <NavLink to={link.to} key={id}>{link.name}</NavLink>
          })
        }
      </ul>
    </div>
  );
}

const NavLink = ({ children, to }) => {
  return (
    <li className="nav-item">
      <RouterNavLink to={to} className="nav-link">{children}</RouterNavLink>
    </li>
  );
};

const Navbar = ({
  children,
  navLinks,
  dark,
  expand,
  fixed,
  fixedTop,
  fixedBottom,
  title,
  logo,
  id,
  className,
}) => {
  let classes = 'navbar';
  classes += dark ? ' navbar-dark bg-dark' : ' navbar-light bg-light';
  classes += ` navbar-expand-${expand ? expand : 'sm'}`;
  if (expand) classes += ' navbar-expand-md';
  if (fixed || fixedTop) classes += ' fixed-top';
  if (fixedBottom) classes += ' fixed-bottom';
  if (classes) classes += ` ${className}`;

  return (
    <nav className={classes} id={id}>
      <NavBrand logo={logo} title={title} />
      {navLinks ? <NavList navLinks={navLinks} /> : ''}
      {children}
    </nav>
  );
};

/**
 # Module Exports
 */

export default Navbar;
