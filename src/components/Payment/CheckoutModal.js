/*
 # CheckoutModal.js
 # Checkout Modal
 */

/**
 # Module Imports
 */

import React, { Suspense, useState } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
// import { Query, Mutation } from "react-apollo";
import { useQuery } from 'react-apollo-hooks';

import Modal from 'react-modal';

import queries from '../../queries';

import CheckoutForm from './CheckoutForm';
import { Container, Button } from '../Bootstrap';
import { ContainerHero } from '../Layouts';

import './Modal.scss';

Modal.setAppElement('#root');


/**
 # Component
 */

const CheckoutModal = ({ sku = {}, setPurchaseSku }) => {
  const isOpen = sku.id !== undefined;
  const clearSku = () => setPurchaseSku(undefined);
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={clearSku}
      portalClassName="c-modal"
      overlayClassName="c-modal--overlay"
      bodyOpenClassName="c-modal--body-open"
      htmlOpenClassName="c-modal--html-open"
      className="c-modal--content"
    >
      <ContainerHero minHeight="60vh" img={sku.image} >
        <Container className="p-5">
          <div className="row">
            <div className="col">
              <h2 className="text-light">{sku.name}</h2>
            </div>
          </div>
          <div className="mt-5">&nbsp;</div>
          <div className="mt-5">&nbsp;</div>
          <div className="mt-5">&nbsp;</div>
          
        </Container>
        <div className="row mt-5 bg-light">
          <Elements>
            <CheckoutForm className="" sku={sku} amount={sku.price} />
          </Elements>
        </div>
      </ContainerHero>
    </Modal>
  );
};

/**
 # Module Exports
 */

export default CheckoutModal;
