/*
 # ViewStore.js
 # Store View Component
 */

/**
 # Module Imports
 */

import React, { Suspense, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';

import queries from '../../../queries';

import { ContainerHero } from '../../Layouts';
import { Spinner } from '../../Spinners';
/**
 # Component
 */

const ViewStudio = ({ id, className, config }) => {
  // Styling
  const i = id || `c-view c-view--studio`;
  const classes = className || `c-view--studio`;

  return (
    <div id={i} className={classes}>
      <ContainerHero minHeight="100vh" offsetTop="4.3em" img="https://picsum.photos/g/1000/1600/">
        <Spinner light />
      </ContainerHero>
    </div>
  );
};

/**
 # Module Exports
 */

export default ViewStudio;
