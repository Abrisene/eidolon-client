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
  hidden,
  active,
  disabled,
  block,
  outline,
  large,
  lg,
  small,
  sm,
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
  onSubmit,
  ...props,
}) => {
  const handleClick = !onClick && !onSubmit ? undefined : (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    if (onSubmit) onSubmit(e);
  };

  let classes = 'btn';
  let themeColor = 'primary';

  // Get Hidden
  if (hidden) classes += 'hidden';

  // Button Styling
  if (block) classes += ' btn-block';
  if (large || lg) classes += ' btn-lg';
  if (small || sm) classes += ' btn-sm';

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
  
  return !to ? <button id={id} className={classes} active={active} disabled={disabled} onClick={handleClick} onSubmit={handleClick}>{children}</button> : 
               <Link to={to} id={id} className={classes} active={active} disabled={disabled} replace={replace} innerref={innerRef} onClick={handleClick}>{children}</Link>
};

/**
 # Module Exports
 */

export default Button;
