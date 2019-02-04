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

import { Button, Input } from '../Bootstrap';

import './Store.css';
/**
 # Component
 */

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    const { stripe } = this.props;
    const { createToken } = stripe;
    ev.preventDefault();

    const token = await createToken();
    console.log(token);
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
    return (
      <div className="c-checkout col bg-light p-4"> 
        <div className="row">
          <div className="col-9 mt-3">
            {/* <CardElement /> */}
            <label>Card Number</label>
            <CardNumberElement />
          </div>
          <div className="col-3 mt-3">
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
        <div className="row mt-3" >
          <div className="col-md-12">
            <Button large block outline onClick={this.submit}>Send</Button>
          </div>

        </div>
        <div className="row mt-2">

        </div>
        
      </div>
    );
  }
}

/**
 # Module Exports
 */

export default injectStripe(CheckoutForm);
