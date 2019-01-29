/*
 # Bootstrap/Button.js
 # Bootstrap Button Component
 */

/**
 # Module Imports
 */

import React from 'react';
import { Link } from "react-router-dom";

// import './Button.css';

/**
 # Component
 */

const Button = ({
  children,
  className,
  id,
  active,
  disabled,
  block,
  outline,
  large,
  small,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  link,
  to,
  replace,
  innerRef,
}) => {
  let classes = 'btn';
  let themeColor = 'primary';

  if (block) classes += ' btn-block';
  // if (outline) classes += ' btn-outline';
  if (large) classes += ' btn-large';
  if (small) classes += ' btn-small';

  // Get Theme Color
  if (primary) themeColor = 'primary';
  if (secondary) themeColor = 'secondary';
  if (success) themeColor = 'success';
  if (danger) themeColor = 'danger';
  if (warning) themeColor = 'warning';
  if (info) themeColor = 'info';
  if (light) themeColor = 'light';
  if (dark) themeColor = 'dark';
  if (link) themeColor = 'link';

  classes += ` btn-${outline ? 'outline-' : ''}${themeColor}`;

  if (className) classes += ` ${className}`;

  console.log(classes);
  
  return !to ? <button id={id} className={classes} active={active} disabled={disabled}>{children}</button> : 
               <Link to={to} id={id} className={classes} active={active} disabled={disabled} replace={replace} innerRef={innerRef} >{children}</Link>
};

/**
 # Module Exports
 */

export default Button;
