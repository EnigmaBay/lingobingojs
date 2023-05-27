import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function LogoutButton() {
  const [theme] = useOutletContext();
  const { logout } = useAuth0();
  return (
    <button
      className='themed-button-sm'
      data-theme={theme}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
}

LogoutButton.propTypes = {
  theme: PropTypes.string,
};
