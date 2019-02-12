/*
 # Spinner.js
 # Spinner Loading Component
 */

/**
 # Module Imports
 */

import React from 'react';
import './Spinner.scss';
/**
 # Component
 */

function Spinner({
  className,
  light,
  dark,
  thin,
  thick,
  thickness,
  primaryColor,
  secondaryColor,
}) {
  // Build Classes
  let classes = 'c-loader';
  if (light) classes += ' light';
  if (dark) classes += ' dark';
  if (thin) classes += ' thin';
  if (thick) classes += ' thick';
  if (className) classes += ` ${className}`;

  // Build Styles
  const styles = {};
  if (thickness) styles.borderWidth = thickness;
  if (primaryColor) styles.borderLeftColor = primaryColor;
  if (secondaryColor) { 
    styles.borderColor = secondaryColor;
  }
  return <div className={classes} style={styles}>Loading...</div>
}

/**
 # Module Exports
 */

export default Spinner;
