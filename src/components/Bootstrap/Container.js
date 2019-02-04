/*
 # Bootstrap/Container.js
 # Bootstrap Container Component
 */

/**
 # Module Imports
 */

import React from 'react';

/**
 # Component
 */

const Container = ({
  children,
  className,
  id,
  style,
  fluid,
  hidden,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  innerRef,
  onClick,
}) => {

  let classes = `container${ fluid ? '-fluid' : ''}`;
  let themeColor;

  // Get Hidden
  if (hidden) classes += 'hidden';

  // Get Theme Color
  if (primary) themeColor = 'primary';
  if (secondary) themeColor = 'secondary';
  if (success) themeColor = 'success';
  if (danger) themeColor = 'danger';
  if (warning) themeColor = 'warning';
  if (info) themeColor = 'info';
  if (light) themeColor = 'light';
  if (dark) themeColor = 'dark';

  classes += themeColor ? ` bg-${themeColor}` : '';

  if (className) classes += ` ${className}`;

  return <div id={id} className={classes} style={style} innerref={innerRef}>{children}</div>
};

/**
 # Module Exports
 */

export default Container;
