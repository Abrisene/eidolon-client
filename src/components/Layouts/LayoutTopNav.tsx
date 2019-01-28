/*
 # LayoutTopNav.tsx
 # Top Navbar Layout
 */

/**
 # Module Imports
 */

import React, { Component } from 'react';

import { Navbar } from '../Bootstrap';

import './LayoutTopNav.css';

/**
 # Component
 */

class LayoutTopNav extends Component <{
  logo?: string,
  title?: string,
  navLinks?: any,
}> {
  render() {
    const { logo, title, navLinks } = this.props;
    return (
      <div>
        <Navbar dark fixed logo={logo} title={title} navLinks={navLinks} />
        <main role="main" className="container mt-6">
          {this.props.children}
        </main>
        
      </div>
    );
  }
}

/**
 # Module Exports
 */

export default LayoutTopNav;
