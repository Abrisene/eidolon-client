/*
 # ViewLogin.js
 # Login View Component
 */

/**
 # Module Imports
 */

import React, { Component } from 'react';
// import { Link } from "react-router-dom";
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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, value) {
    this.setState((state) => ({ [key]: value }));
  }

  handleSubmit() {

  }

  render() {
    return (
      <div id="c-pane-auth-recover" className="col-md-12">
        <form>
          <Input
            id="f-input-email"
            type="email"
            label="Email"
            placeholder="Email"
            onChange={(v) => this.handleChange('email', v)}
            validate
          />
          <Button>Reset</Button>
        </form>
      </div>
    );
  }
}

/**
 # Module Exports
 */

export default AuthForm;
