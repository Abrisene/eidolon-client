/*
 # ViewStore.js
 # Store View Component
 */

/**
 # Module Imports
 */

import React, { Suspense, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';

import queries from '../../../queries';

// import { Container } from '../../Bootstrap';
import { ContainerHero } from '../../Layouts';
import { Spinner } from '../../Spinners';
import { Sidebar } from '../../Layouts';

import { NavLink as RouterNavLink } from "react-router-dom";

const NavList = ({ navLinks }) => {
  const links = navLinks || [];
  return (
    <ul className="nav flex-column">
      {
        links.map((link, id) => {
          return <NavLink to={link.to} key={id}>{link.name}</NavLink>
        })
      }
    </ul>
  );
}

const NavLink = ({ children, to }) => {
  return (
    <li className="nav-item">
      <RouterNavLink to={to} className="nav-link">{children}</RouterNavLink>
    </li>
  );
};

const mockNavs = [
  { to: '/profile', name: 'Profile' },
  { to: '/store', name: 'Store' },
  { to: '/chat', name: 'Chat' },
  { to: '/studio', name: 'Studio' },
  { to: '/admin', name: 'Admin' },
];

/**
 # Component
 */

const ViewStudio = ({ id, className, config }) => {
  // Styling
  const i = id || `c-view c-view--studio`;
  const classes = className || `c-view--studio`;

  return (
    <div id={i} className={classes}>
      <ContainerHero minHeight="100vh" offsetTop="4.3em" img="https://picsum.photos/g/1000/1600/">
        {/* <Sidebar sticky className="d-none d-sm-block col-sm-2 bg-light">
          <NavList navLinks={mockNavs} />
         </Sidebar> */}
        <Spinner light arc />
      </ContainerHero>
    </div>
  );
};

/**
 # Module Exports
 */

export default ViewStudio;
