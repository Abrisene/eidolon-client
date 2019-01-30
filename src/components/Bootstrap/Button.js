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
  onClick,
}) => {
  const handleClick = !onClick ? undefined : (e) => {
    e.preventDefault();
    onClick(e);
  };

  let classes = 'btn';
  let themeColor = 'primary';

  if (block) classes += ' btn-block';
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
  
  return !to ? <button id={id} className={classes} active={active} disabled={disabled} onClick={handleClick}>{children}</button> : 
               <Link to={to} id={id} className={classes} active={active} disabled={disabled} replace={replace} innerRef={innerRef} onClick={handleClick}>{children}</Link>
};

/**
 # Module Exports
 */

export default Button;
