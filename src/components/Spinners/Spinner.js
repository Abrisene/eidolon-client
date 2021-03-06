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
  red,
  thin,
  thick,
  arc,
  thickness,
  primaryColor,
  secondaryColor,
}) {
  // Build Classes
  let classes = 'c-loader';
  if (light) classes += ' light';
  if (dark) classes += ' dark';
  if (red) classes += ' red';
  if (thin) classes += ' thin';
  if (thick) classes += ' thick';
  if (arc) classes += ' arc';
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
