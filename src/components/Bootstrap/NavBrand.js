/*
 # Bootstrap/Navbar.js
 # Bootstrap Navbar Brand Component
 */

/**
 # Module Imports
 */

import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.scss';

/**
 # Component
 */

const NavBrand = ({ logo, title, onClick }) => {
  return (
      <div className="col-3 col-lg-2">
        <Link className="navbar-brand" to="#" onClick={onClick}>
          { logo ? <img src={logo} className="brand-logo" alt="logo" /> : null }
          { title ? <span className="brand-title">{title}</span> : <span>&nbsp;</span> }
        </Link>
      </div>
  )
};

/**
 # Module Exports
 */

export default NavBrand;
