/*
 # Bootstrap/Container.js
 # Bootstrap Container Component
 */

/**
 # Module Imports
 */

import React from 'react';

import { Container } from '../../Bootstrap';

import './ContainerHero.css';

/**
 # Component
 */

const ContainerHero = ({
  children,
  className,
  id,
  style,
  minHeight,
  maxHeight,
  offsetTop,
  offsetBottom,
  img,
  gradient,
  ...props,
}) => {

  const styles = style ? { ...style } : {};

  if (img) styles.backgroundImage = `url(${img})`;
  if (minHeight) styles.minHeight = minHeight;
  if (maxHeight) styles.maxHeight = maxHeight;
  if (offsetTop) styles.paddingTop = offsetTop;
  if (offsetBottom) styles.paddingBottom = offsetBottom;

  let classes = 'c--container c--container-hero';

  if (className) classes += ` ${className}`;


  return <Container id={id} className={classes} style={styles} {...props} fluid>{children}</Container>
};

/**
 # Module Exports
 */

export default ContainerHero;
