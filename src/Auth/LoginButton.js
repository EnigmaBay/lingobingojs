import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function LoginButton() {
  const [theme] = useOutletContext();
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className='themed-button-sm'
      data-theme={theme}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
}

LoginButton.propTypes = {
  theme: PropTypes.string,
};
