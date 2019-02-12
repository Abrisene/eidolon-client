/*
 # AuthRecover.js
 # Password Recovery Form
 */

/**
 # Module Imports
 */

import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';

import queries from '../../../queries';

import { Button, Input } from '../../Bootstrap';

/**
 # Component
 */


function AuthRecover () {
  // State
  const [email, setEmail] = useState('');
  const [requested, setRequested] = useState(false);

  // Mutation
  const input = { email };
  const requestReset = useMutation(queries.M_USER_RECOVER, { variables: { input }, update: () => setRequested(true) });

  return (
    <div id="c-pane-auth--recover" className="col-md-12">
      { !requested ? <ResetRequestForm setEmail={setEmail} requestReset={requestReset} /> : <RequestSent />}
    </div>
  );
}

function ResetRequestForm ({setEmail, requestReset}) {
  return (
    <form>
      <Input
        id="f-input-email"
        type="email"
        label="Email"
        placeholder="Email"
        onChange={setEmail}
        validate
      />
      <Button onClick={requestReset}>
        Request Reset Email
      </Button>
    </form>
  );
}

function RequestSent () {
  return (
    <h4 className="mt-5">
      Please check your email shortly for a password reset link.
    </h4>
  );
}

/**
 # Module Exports
 */

export default AuthRecover;
