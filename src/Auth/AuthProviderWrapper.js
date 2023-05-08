import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import PropTypes from 'prop-types';

export default function AuthProviderWrapper({ children }) {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  // const audienceUrl = process.env.REACT_APP_AUDIENCEURL;
  // const apiServer = process.env.REACT_APP_API_SERVER;
  // const audience = `${apiServer}${audienceUrl}`;
  // console.log('concatenated audience:', audience);
  // const scope = process.env.REACT_APP_SCOPE;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        // audience: audience,
        // scope: scope,
      }}
    >
      {children}
    </Auth0Provider>
  );
}

AuthProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
