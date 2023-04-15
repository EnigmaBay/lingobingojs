import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { Buffer } from 'buffer/';
import Card from 'react-bootstrap/Card';

export default function Profile() {
  const [isApiAuthorized, setIsApiAuthorized] = useState(false);
  const [theme] = useOutletContext();
  const { getAccessTokenSilently, isAuthenticated, isLoading, user } =
    useAuth0();

  useEffect(() => {
    async function fetchData() {
      if (user !== undefined) {
        const isVerified = user.email_verified ? 'true' : 'false';
        // if (isVerified) {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: process.env.REACT_APP_API_SERVER,
            scope: 'read:current_user',
          },
        });
        console.log('got access token', accessToken);
        // }
        const payloadData = `${user.nickname},${user.email},${user.name},${isVerified}`;
        const base64encodedPayload = Buffer.from(payloadData, 'utf8').toString(
          'base64'
        );
        const encodedPayload = base64encodedPayload
          .replaceAll('+', '-')
          .replaceAll('/', '_'); // convert base64 to base64url
        console.log('encodedPayload', encodedPayload);

        const authorizeUrl = `${process.env.REACT_APP_AUDIENCEURL}/authorize/${encodedPayload}`;
        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_API_SERVER,
          url: authorizeUrl,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        axios(config)
          .then(() => setIsApiAuthorized(true))
          .catch((error) => {
            console.error(error);
            setIsApiAuthorized(false);
          });
      } else {
        setIsApiAuthorized(false);
      }
    }
    fetchData();
  }, [getAccessTokenSilently, setIsApiAuthorized, user]);

  if (isLoading) {
    return (
      <Card data-theme={theme} className='themed-background mt-4'>
        <Card.Header data-theme={theme}>
          <Card.Text data-theme={theme}>Loading. . .</Card.Text>
        </Card.Header>
      </Card>
    );
  }

  if (isAuthenticated) {
    console.log('Auth0 user object', user);
    console.log('name, email, locale', user.name, user.email, user.locale);
  }
  if (isApiAuthorized) {
    console.log('isApiAuthorized', isApiAuthorized);
  }

  return (
    isAuthenticated && (
      <Card data-theme={theme} className='themed-background mt-4 themed-button'>
        <Card.Header data-theme={theme}>
          <Card.Text data-theme={theme}>Welcome, {user.name}!</Card.Text>
          <Card.Text data-theme={theme}>Email: {user.email}</Card.Text>
          <Card.Text data-theme={theme}>Nickname: {user.nickname}</Card.Text>
          {user.email_verified ? (
            <Card.Text>Your email has been verified.</Card.Text>
          ) : (
            <Card.Text>Your email has NOT been verified.</Card.Text>
          )}
          {isApiAuthorized ? (
            <Card.Text data-theme={theme}>Authorized</Card.Text>
          ) : (
            <Card.Text data-theme={theme}>NOT Authorized</Card.Text>
          )}
        </Card.Header>
      </Card>
    )
  );
}
