/*
 # HeroTileNarrow.js
 # Hero Tile - Narrow
 */

/**
 # Module Imports
 */

import React from 'react';

import { Button } from '../../Bootstrap';

import './Tile.scss';

/**
 # Component
 */

const HeroTileNarrow = ({ title, buttonText, img, style, onClick, ...props }) => {
  const styles = style ? { ...style } : {};
  if (img) styles.backgroundImage = `url(${img})`;
  return (
    <div className="col-xl-3 col-lg-3 col-md-3 col-6 mt-4">
      <div className="c--tile" style={styles}>
        {/* <div className="c--tile-gradient" /> */}
        <div className="c--tile-body">
          <div className="c--tile-title">
            <h4 className="text-align-center mt-2">{title}</h4>
          </div>
          <div className="c--tile-content">

          </div>
          <div className="c--tile-button">
            <Button className="" warning outline large block onClick={onClick}>{buttonText}</Button>
          </div>
        </div>
      </div>
    </div>
  )
};

/**
 # Module Exports
 */

export default HeroTileNarrow;
