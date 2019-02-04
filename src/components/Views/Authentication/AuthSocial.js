/*
 # AuthSocial.js
 # Social Login Component
 */

/**
 # Module Imports
 */

import React from 'react';
import { Mutation } from 'react-apollo';

import queries from '../../../queries';

import { ButtonFacebook, ButtonGoogle } from '../../Social';

/**
 # Component
 */

const handleSocialLogin = (provider, user, mutation) => {
  const input = { provider, accessToken: user.accessToken };
  mutation({ variables: { input } });
};

const handleSocialLoginFailure = (err) => {
  console.log(err);
};

const SocialPane = ({ children, provider }) => {
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
};

const AuthSocial = ({ keys }) => {
  const { google, facebook } = keys || {};

  return (
    <Mutation mutation={queries.M_USER_AUTH_SOCIAL} refetchQueries={[{ query: queries.Q_USER_CURRENT }]}>
      {(authenticateSocial, { data }) => (
        <div id="c-pane-auth-social">
          <SocialPane provider={facebook}>
            <ButtonFacebook
              link
              appId={facebook}
              fields="name,email,picture"
              callback={(user) => handleSocialLogin('facebook', user, authenticateSocial)}
            >
            </ButtonFacebook>
          </SocialPane>
          <SocialPane provider={google}>
            <ButtonGoogle
              link
              clientId={google}
              onSuccess={(user) => handleSocialLogin('google', user, authenticateSocial)}
              onFailure={handleSocialLoginFailure}
            >
            </ButtonGoogle>
          </SocialPane>
        </div>
      )}
    </Mutation>
  );
};
/* const AuthSocial = ({ keys }) => {
  const { google, facebook } = keys || {};

  return (
    <Mutation mutation={queries.M_USER_AUTH_SOCIAL} refetchQueries={[{ query: queries.Q_USER_CURRENT }]}>
      {(authenticateSocial, { data }) => (
          <div id="c-pane-auth-social">
            <div className="row mt-4">
              <div className="col-md-12 ml-4">
                <ButtonFacebook
                  link
                  appId={facebook}
                  fields="name,email,picture"
                  callback={(user) => handleSocialLogin('facebook', user, authenticateSocial)}
                >
                </ButtonFacebook>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-12 ml-4">
                <ButtonGoogle
                  link
                  clientId={google}
                  onSuccess={(user) => handleSocialLogin('google', user, authenticateSocial)}
                  onFailure={handleSocialLoginFailure}
                >
                </ButtonGoogle>
              </div>
            </div>
        </div>
      )}
    </Mutation>
  );
}; */

/**
 # Module Exports
 */

export default AuthSocial;
