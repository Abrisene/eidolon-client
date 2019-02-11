/*
 # CheckoutForm.js
 # Checkout Form Component
 */

/**
 # Module Imports
 */

import React, { Component } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe,
} from 'react-stripe-elements';
import { Mutation } from 'react-apollo';

import queries from '../../queries';

import { Button, Input } from '../Bootstrap';

import './Store.css';
/**
 # Component
 */

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(ev, onSubmit) {
    const { stripe, sku } = this.props;
    const { createToken, createSource } = stripe;
    ev.preventDefault();

    const token = await createToken();
    const source = await createSource({ type: 'card' });
    console.log(token);
    console.log(source);
    // authenticateEmail({ variables: { input }}))
    const input = {
      token: token.token.id,
      sku: sku.id,
      provider: 'stripe',
      retainSource: false,
    };
    console.log(input);
    if (onSubmit) onSubmit({ variables: { input }});
        // However, this line of code will do the same thing:
    //
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});

    // You can also use createSource to create Sources. See our Sources
    // documentation for more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
    //
    // this.props.stripe.createSource({type: 'card', owner: {
    //   name: 'Jenny Rosen'
    // }});
  }

  render() {
    const { className, amount, buttonText } = this.props;
    const amountText = amount ? ` $${amount / 100}` : '';
    const submitText = buttonText || `Send${amountText}`;
    let  classes = `c-checkout col p-4`;
    if (className) classes += ` ${className}`;
    console.log(queries.M_STORE_PURCHASE);

    return (
      <Mutation mutation={queries.M_STORE_PURCHASE}>
        {(purchase, { data }) => (
          <div className={classes}>
            <div className="row">
              <div className="col-12 mt-3">
                {/* <CardElement /> */}
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
              {/* <div className="col-4 mt-3">
            <div className="btn-group-toggle outline mt-5 offset-3" data-toggle="buttons">
              <label className="btn btn-primary outline active">
                <input type="checkbox" checked autocomplete="off" />
                Save
              </label>
            </div>
          </div> */}
            </div>
            <div className="row mt-5" >
              <div className="col-md-12">
                <Button large block outline onClick={(e) => this.handleSubmit(e, purchase)}>{submitText}</Button>
              </div>

            </div>
            <div className="row mt-2">

            </div>

          </div>
        )}
      </Mutation>
    );
  }
}

/**
 # Module Exports
 */

export default injectStripe(CheckoutForm);
