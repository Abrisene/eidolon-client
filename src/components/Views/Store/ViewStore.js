/*
 # ViewRecover.js
 # Store View Component
 */

/**
 # Module Imports
 */

import React, { useState } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { Query, Mutation } from "react-apollo";

import Modal from 'react-modal';

import queries from '../../../queries';

import { CheckoutForm } from '../../Payment';
import { Container, Button } from '../../Bootstrap';
import { ContainerHero } from '../../Layouts';

// import { Link } from "react-router-dom";

// import AuthSocial from './AuthSocial';
// import AuthRecover from './AuthRecover';

import './Tile.css';
import './Modal.scss';

Modal.setAppElement('#root');

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

const TileSquare = (props) => {
  return (
    <div className="col-lg-4 col-md-4 col-6">
      <div className="c--tile-square c--tile-hero mt-4 text-light">
        <h4 className="lead">Content</h4>
      </div>
    </div>
  )
}

const TileNarrow = ({ buttonText, img, ...props}) => {
  return (
    <div className="col-lg-3 col-md-3 col-6">
      <div className="c--tile-narrow mt-4 text-light">
        {/* <h4 className="lead">Content</h4> */}
        <div className="c--tile-narrow-container-img">
          <img src={img} />
        </div>
      </div>
    </div>
  )
};

/* const HeroTileNarrow = ({ title, buttonText, img, style, ...props }) => {
  const styles = style ? { ...style } : {};
  if (img) styles.backgroundImage = `url(${img})`;
  return (
    <div className="col-xl-3 col-lg-3 col-md-3 col-6">
      <div className="c--tile-narrow c--tile-hero mt-4 text-light" style={styles}>
        <h4 className="text-align-center mt-2">{title}</h4>
        <div className="c--tile-narrow-content">
        </div>
        <Button className="c--tile-button mt-3" warning outline large block>{buttonText}</Button>
      </div>
    </div>
  )
}; */

const HeroTileNarrow = ({ title, buttonText, img, style, onClick, ...props }) => {
  const styles = style ? { ...style } : {};
  if (img) styles.backgroundImage = `url(${img})`;
  return (
    <div className="col-xl-3 col-lg-3 col-md-3 col-6 mt-4">
      <div className="c--tile" style={styles}>
        <div className="c--tile-gradient" />
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

const PurchaseModal = ({ sku = {}, setPurchaseSku }) => {
  const isOpen = sku.id !== undefined;
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setPurchaseSku(undefined)}
      portalClassName="c--modal"
      overlayClassName="c--modal-overlay"
      bodyOpenClassName="c--modal-body-open"
      htmlOpenClassName="c--modal-html-open"
      className="c--modal-content"
    >
      <ContainerHero minHeight="60vh" img={sku.image} >
        <div className="container p-5">
          <div className="row">
            <div className="col">
              <h2 className="text-light">{sku.name}</h2>
            </div>
          </div>
        </div>
        <div className="mt-5">&nbsp;</div>
        <div className="mt-5">&nbsp;</div>
        <div className="mt-5">&nbsp;</div>
        <div className="row mt-5 bg-light">
          <div className="container-fluid">
            <Elements>
              <CheckoutForm className="" sku={sku} amount={sku.price} />
            </Elements>
          </div>
        </div>

      </ContainerHero>
      {/* <div className="modal fade purchase" id="js--modal-purchase" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div> */}
    </Modal>
  );
};
/**
 # Component
 */

const ViewStore = ({ id, className, config }) => {
  const i = id || `c-view--store`;
  const classes = className || `c-view--store`;
  const stripeKey = config ? config.keys.stripe : null;
  const [purchaseSku, setPurchaseSku] = useState();

  return (
    <StripeProvider apiKey={stripeKey}>
      <div>
        <ContainerHero minHeight="100vh" offsetTop="4.3em" img="https://picsum.photos/g/1000/1600/">
          <div className="row mt-3">
            <div className="col-md-6 offset-md-3">
              {/* <Elements>
                <CheckoutForm />
              </Elements> */}
            </div>
          </div>
          <div className="row mt-2">
            <Query query={queries.Q_STORE_PRODUCTS}>
              {({ loading, error, data }) => {
                if (loading) return <div>Loading...</div>
                if (error) return <div>{error}</div>
                const { products, skus } = data;
                return skus.map((sku, i) => <HeroTileNarrow key={i} img={sku.image} title={sku.name} onClick={() => setPurchaseSku(sku)} buttonText={`$${sku.price / 100}`} />)
              }}
            </Query>
          </div>
          <div className="row">
            { null }
            <PurchaseModal sku={purchaseSku} setPurchaseSku={setPurchaseSku} />
          </div>
        </ContainerHero>
      </div>
    </StripeProvider>
  );
};

/**
 # Module Exports
 */

export default ViewStore;
