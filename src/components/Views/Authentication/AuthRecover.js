/*
 # ViewLogin.js
 # Login View Component
 */

/**
 # Module Imports
 */

import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";

import queries from '../../../queries';

import { Button, Input } from '../../Bootstrap';

/**
 # Component
 */


class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, value) {
    this.setState((state) => ({ [key]: value }));
  }

  handleSubmit(onSubmit) {
    const { email } = this.state;
    if (onSubmit) onSubmit({ email });
  }

  render() {
    return (
      <div id="c-pane-auth-recover" className="col-md-12">
        <Mutation mutation={queries.M_USER_RECOVER}>
          {(requestPasswordReset, { data }) => {
            console.log(data);
            const requested = data ? data.requestPasswordReset : false;
            if (requested) return <h4 className="mt-5">Please check your email shortly for a password reset link.</h4>
            return (
              <form>
                <Input
                  id="f-input-email"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  onChange={(v) => this.handleChange('email', v)}
                  validate
                />
                <Button onClick={() => this.handleSubmit((input) => requestPasswordReset({ variables: { input }}))}>
                  Request Reset Email
                </Button>
              </form>
            )
          }}
        </Mutation>
      </div>
    );
  }
}

/**
 # Module Exports
 */

export default AuthForm;
