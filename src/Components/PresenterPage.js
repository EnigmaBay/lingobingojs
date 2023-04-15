import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Buffer } from 'buffer/';
import axios from 'axios';
import Footer from './Footer.js';
import LoginButton from '../Auth/LoginButton';
import LogoutButton from '../Auth/LogoutButton.js';
import Profile from '../Auth/Profile.js';
import PresenterForm from './PresenterForm';

export default function PresenterPage() {
  const [theme] = useOutletContext();
  const { isAuthenticated, isLoading, getAccessTokenSilently, user } =
    useAuth0();
  const [isApiAuthorized, setIsApiAuthorized] = useState(false);
  const [encodedPayload, setEncodedPayload] = useState('');

  useEffect(() => {
    async function fetchData() {
      if (user !== undefined) {
        const isVerified = user.email_verified ? 'true' : 'false';
        console.log('profile: user is defined and isVerified is', isVerified);
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: process.env.REACT_APP_API_SERVER,
            scope: 'read:current_user',
          },
        });
        console.log('got access token', accessToken);
        const payloadData = `${user.nickname},${user.email},${user.name},${isVerified}`;
        const base64encodedPayload = Buffer.from(payloadData, 'utf8')
          .toString('base64')
          .replaceAll('+', '-')
          .replaceAll('/', '_'); // convert base64 to base64url
        setEncodedPayload(base64encodedPayload);
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
  }, [getAccessTokenSilently, setEncodedPayload, setIsApiAuthorized, user]);

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

  if (isLoading) {
    return (
      <Card data-theme={theme} className='themed-background mt-4'>
        <Card.Header data-theme={theme}>
          <Card.Text data-theme={theme}>Loading. . .</Card.Text>
        </Card.Header>
      </Card>
    );
  }

  return (
    <Container
      fluid
      className='main-output-borders themed-background page'
      data-theme={theme}
    >
      <Row>
        <Col></Col>
        <Col sm={4}>
          <div data-theme={theme} className='themed-header text-center'>
            Presenters Page
          </div>
        </Col>
        <Col>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</Col>
      </Row>
      <Row>
        <Col>
          {isAuthenticated && (
            <Profile
              username={user.name}
              emailVerified={user.email_verified}
              isApiAuthorised={isApiAuthorized}
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col className='md-8 pb-4'>
          <PresenterForm encodedPayload={encodedPayload} />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
