/*
 # AuthEmail.js
 # Email Login Component
 */

/**
 # Module Imports
 */

import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { Link } from "react-router-dom";

import queries from '../../../queries';

import { Button, Input } from '../../Bootstrap';

/**
 # Component
 */

function AuthEmail ({ register }) {
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Mutation
  const input = { register, email, password };
  const authenticate = useMutation(queries.M_USER_AUTH_EMAIL, { variables: { input }, refetchQueries: [{ query: queries.Q_USER_CURRENT }] });

  // Display
  const emailHelpText = register ? 'We\'ll never share your email.' : undefined;
  const buttonText = register ? 'Sign Up' : 'Sign In';
  const recoverComponent = !register ? <small className="col"><Link to="/recover">Forgot Password?</Link></small> : null;

  return (
    <div id="c-pane-auth-email" className="col-md-12">
      <form>
        <Input
          id="f-input-email"
          type="email"
          label="Email"
          placeholder="Email"
          help={emailHelpText}
          onChange={setEmail}
          validate
        />
        <Input
          id="f-input-password"
          type="password"
          label="Password"
          placeholder="Password"
          onChange={setPassword}
        />
        <Button onClick={authenticate}>{buttonText}</Button>
        {recoverComponent}
      </form>
    </div>
  );
};

/**
 # Module Exports
 */

export default AuthEmail;
