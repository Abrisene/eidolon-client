/*
 # ViewLogin.js
 # Login View Component
 */

/**
 # Module Imports
 */

import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { Query } from "react-apollo";

// import queries from '../../../queries';

import { Button, Input } from '../../Bootstrap';

/**
 # Component
 */


class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, value) {
    this.setState(() => ({ [key]: value }));
  }

  handleSubmit() {

  }

  render() {
    const { type } = this.props;
    let buttonText;

    if (type === 'login') {
      buttonText = 'Sign In';
    } else if (type === 'register') {
      buttonText = 'Sign Up';
    }

    return (
      <div id="c-pane-auth-email" className="col-md-12">
        <form>
          <Input
            id="f-input-email"
            type="email"
            label="Email"
            placeholder="Email"
            help="We'll never share your email."
            onChange={(v) => this.handleChange('email', v)}
            validate
          />
          <Input
            id="f-input-password"
            type="password"
            label="Password"
            placeholder="Password"
            onChange={(v) => this.handleChange('password', v)}
          />
          <Button>{buttonText}</Button>
          {
            type === 'login' ? <small className="col"><Link to="/recover">Forgot Password?</Link></small> : 
                               null
          }
        </form>
      </div>
    );
  }
}

/**
 # Module Exports
 */

export default AuthForm;
