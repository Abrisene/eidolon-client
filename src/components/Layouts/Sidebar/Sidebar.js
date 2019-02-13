/*
 # Sidebar.js
 # Sidebar Layout
 */

/**
 # Module Imports
 */

import React from 'react';

// import { Navbar } from '../../Bootstrap';

import './Sidebar.scss';

/**
 # Component
 */

function Sidebar ({
  children,
  id,
  className,
  styles,
  sticky,
}) {
  let classes = 'c-sidebar';
  if (sticky) classes += ' sticky';
  if (className) classes += ` ${className}`;
  return (
    <div id={id} className={classes} style={styles}>
      {children}
    </div>
  );
}

/**
 # Module Exports
 */

export default Sidebar;
