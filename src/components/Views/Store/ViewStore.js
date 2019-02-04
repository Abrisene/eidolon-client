/*
 # ViewRecover.js
 # Password Recovery View Component
 */

/**
 # Module Imports
 */

import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';

import { CheckoutForm } from '../../Payment';
import { Container } from '../../Bootstrap';
import { ContainerHero } from '../../Layouts';

// import { Link } from "react-router-dom";

// import AuthSocial from './AuthSocial';
// import AuthRecover from './AuthRecover';

import './Tile.css';

const Card = (props) => {
  return (
    <div className="card">
      {/* <img className="card-image" src="https://img.freepik.com/free-vector/gradient-blue-abstract-background_1159-3089.jpg?size=338&ext=jpg" /> */}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <div className="mt-5">&nbsp;</div>
        <div className="mt-1">&nbsp;</div>
        {/* <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  )
};

const Tile = (props) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
      <div className="c-tile mt-4 text-light">
        <h4 className="lead">Content</h4>
      </div>
    </div>
  )
}

/**
 # Component
 */

const ViewStore = ({ id, className, config }) => {
  const i = id || `c-view--store`;
  const classes = className || `c-view--store`;
  const stripeKey = config ? config.keys.stripe : null;
  return (
    <StripeProvider apiKey={stripeKey}>
      <div>
        <ContainerHero secondary minHeight="500px" maxHeight="500px" img="https://picsum.photos/g/1000/1000/?random">
          <div className="row mt-5">
            <div className="col-md-6 offset-md-3">
              <Elements>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
        </ContainerHero>
        <Container id={i} className={classes}>
          {/* 
          <div className="row mt-5">
            <div className="col-md-6">
              <Elements>
                <CheckoutForm />
              </Elements>
            </div>
          </div> */}
          {/* <div className="row mt-5">
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </div> */}
        </Container>
      </div>
    </StripeProvider>
  );
};

/**
 # Module Exports
 */

export default ViewStore;
