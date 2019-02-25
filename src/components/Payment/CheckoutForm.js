/*
 # CheckoutForm.js
 # Checkout Form Component
 */

/**
 # Module Imports
 */

import React, { useState } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe,
} from 'react-stripe-elements';
// import { Mutation } from 'react-apollo';
import { useMutation } from 'react-apollo-hooks';

import queries from '../../queries';

import { Button, Input } from '../Bootstrap';

import './Store.css';
/**
 # Component
 */


function CheckoutForm({ stripe, sku, className, amount, buttonText, }) {
  // State
  const [retainSource, setRetainSource] = useState(false);

  const handleResponse = async (proxy, result) => {
    console.log(proxy);
    console.log(result);
  };

  // Mutation
  const submitPurchase = useMutation(queries.M_STORE_PURCHASE);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await stripe.createToken();
    const source = await stripe.createSource({ type: 'card' });
    console.log(token, source);
    const input = {
      token: token.token.id,
      sku: sku.id,
      provider: 'stripe',
      retainSource,
    };
    submitPurchase({ variables: { input }, update: handleResponse, refetchQueries: [{ query: queries.Q_USER_CURRENT }]});
  };

  // Display
  const amountText = amount ? ` $${amount / 100}` : '';
  const submitText = buttonText || `Send${amountText}`;
  let classes = `c-checkout col p-4`;
  if (className) classes += ` ${className}`;

  return (
    <div className={classes}>
      <div className="row">
        <div className="col-12 mt-3">
          <label>Card Number</label>
          <CardNumberElement />
        </div>
        <div className="col-4 mt-3">
          <label>Expiration</label>
          <CardExpiryElement />
        </div>
        <div className="col-4 mt-3">
          <label>CVC</label>
          <CardCVCElement />
        </div>
        <div className="col-4 mt-3">
          <label>Postal Code</label>
          <PostalCodeElement />
        </div>
      </div>
      <div className="row mt-5" >
        <div className="col-md-12">
          <Button large block outline onClick={handleSubmit}>{submitText}</Button>
        </div>
      </div>
      <div className="row mt-2">
      </div>
    </div>
  );
 }

/**
 # Module Exports
 */

export default injectStripe(CheckoutForm);
