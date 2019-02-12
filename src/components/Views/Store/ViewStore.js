/*
 # ViewStore.js
 # Store View Component
 */

/**
 # Module Imports
 */

import React, { Suspense, useState } from 'react';
import { StripeProvider } from 'react-stripe-elements';
import { useQuery } from 'react-apollo-hooks';

import queries from '../../../queries';

import { CheckoutForm, CheckoutModal } from '../../Payment';
import { ContainerHero } from '../../Layouts';
import HeroTileNarrow from './HeroTileNarrow';

import './Tile.css';
import './Modal.scss';

/**
 # Component
 */

const ViewStore = ({ id, className, config }) => {
  // Styling
  const i = id || `c-view c-view--store`;
  const classes = className || `c-view--store`;

  // State
  const stripeKey = config ? config.keys.stripe : null;
  const [purchaseSku, setPurchaseSku] = useState();

  // Queries
  const { data, error } = useQuery(queries.Q_STORE_PRODUCTS);
  if (error) return <div>{`Error: ${error.message}`}</div>
  const { skus } = data;

  return (
    <StripeProvider apiKey={stripeKey}>
      <div id={i} className={classes}>
        <ContainerHero minHeight="100vh" offsetTop="4.3em" img="https://picsum.photos/g/1000/1600/">
          <Suspense fallback={<div>Loading</div>}>
            <div className="row mt-3">
              <div className="col-md-6 offset-md-3">
              </div>
            </div>
            <div className="row mt-2">
              {skus.map((sku, i) => {
                return <HeroTileNarrow key={i} img={sku.image} title={sku.name} onClick={() => setPurchaseSku(sku)} buttonText={`$${sku.price / 100}`} />;
              })}
            </div>
            <div className="row">
              {null}
              <CheckoutModal sku={purchaseSku} setPurchaseSku={setPurchaseSku} />
            </div>
          </Suspense>
        </ContainerHero>
      </div>
    </StripeProvider>
  );
};

/**
 # Module Exports
 */

export default ViewStore;
