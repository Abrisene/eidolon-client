/*
 # ViewLogin.js
 # Login View Component
 */

/**
 # Module Imports
 */

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Mutation } from 'react-apollo';

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
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, value) {
    this.setState(() => ({ [key]: value }));
  }

  handleSubmit(onSubmit) {
    const { type } = this.props;
    const { email, password } = this.state;
    const register = type === 'register';
    if (onSubmit) onSubmit({ email, password, register });
  }

  render() {
    const { type } = this.props;
    const register = type === 'register';
    let buttonText;

    if (type === 'login') {
      buttonText = 'Sign In';
    } else if (type === 'register') {
      buttonText = 'Sign Up';
    }

    return (
      <Mutation mutation={queries.M_USER_AUTH_EMAIL} refetchQueries={[{ query: queries.Q_USER_CURRENT }]}>
        {(authenticateEmail, { data }) => (
          <div id="c-pane-auth-email" className="col-md-12">
            <form>
              <Input
                id="f-input-email"
                type="email"
                label="Email"
                placeholder="Email"
                help={register ? "We'll never share your email." : undefined}
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
              <Button onClick={() => this.handleSubmit((input) => authenticateEmail({ variables: { input }}))}>{buttonText}</Button>
              {
                !register ? <small className="col"><Link to="/recover">Forgot Password?</Link></small> :
                  null
              }
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

/**
 # Module Exports
 */

export default AuthForm;
