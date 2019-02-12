/*
 # AuthSocial.js
 # Social Login Component
 */

/**
 # Module Imports
 */

import React from 'react';
import { useMutation } from 'react-apollo-hooks';

import queries from '../../../queries';

import { ButtonFacebook, ButtonGoogle } from '../../Social';

/**
 # Component
 */

function SocialPane ({ children, provider }) {
  return (
    <div>
      { !provider ? null :
        <div className="row mt-4">
          <div className="col-md-12 ml-4">
            {children}
          </div>
        </div>
      }
    </div>
  );
}

function AuthSocial ({ keys }) {
  const { google, facebook } = keys || {};

  // Mutation
  const authenticate = useMutation(queries.M_USER_AUTH_SOCIAL);
  const handleAuthenticate = (provider) => (user) => {
    const input = { provider, accessToken: user.accessToken };
    authenticate({ variables: { input }, refetchQueries: [{ query: queries.Q_USER_CURRENT }] });
  };
  const handleFailure = (err) => {
    console.error(err);
  };

  return (
    <div id="c-pane-auth--social">
      <SocialPane provider={facebook}>
        <ButtonFacebook
          link
          appId={facebook}
          fields="name,email,picture"
          callback={handleAuthenticate('facebook')}
        >
        </ButtonFacebook>
      </SocialPane>
      <SocialPane provider={google}>
        <ButtonGoogle
          link
          clientId={google}
          onSuccess={handleAuthenticate('google')}
          onFailure={handleFailure}
        >
        </ButtonGoogle>
      </SocialPane>
    </div>
  );
}

/**
 # Module Exports
 */

export default AuthSocial;
