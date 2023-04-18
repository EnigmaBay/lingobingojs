import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export default function Profile(props) {
  const [theme] = useOutletContext();

  return (
    <Card data-theme={theme} className='themed-background mt-4 themed-button'>
      <Card.Header data-theme={theme}>
        <Card.Text data-theme={theme}>Welcome, {props.username}!</Card.Text>
        {!props.emailVerified && (
          <Card.Text>Email Verification Required.</Card.Text>
        )}
        {props.isApiAuthorized && (
          <Card.Text data-theme={theme}>
            Click on the items below to manage your LingoBingo words and
            categories.
          </Card.Text>
        )}
      </Card.Header>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  emailVerified: PropTypes.bool,
  isApiAuthorized: PropTypes.bool,
};
