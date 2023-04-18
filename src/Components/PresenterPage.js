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
import PresenterForm from '../Data/PresenterForm.js';

export default function PresenterPage() {
  const [theme] = useOutletContext();
  const { isAuthenticated, isLoading, getAccessTokenSilently, user } =
    useAuth0();
  const [isApiAuthorized, setIsApiAuthorized] = useState(false);
  const [encodedPayload, setEncodedPayload] = useState('');
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      if (!ignore) {
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
          console.log('PresenterPage payloadData to be encoded', payloadData);

          const base64encodedPayload = Buffer.from(payloadData, 'utf8')
            .toString('base64')
            .replaceAll('+', '-')
            .replaceAll('/', '_'); // convert base64 to base64url
          setEncodedPayload(base64encodedPayload);
          console.log(
            'PresenterPage encodedPayload to send to server',
            encodedPayload
          );

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
            .then((response) => {
              console.log('PresenterPage response headers', response.headers);
              console.log('PresenterPage response data', response.data);
              console.log('PresenterPage response status', response.status);
              setAccessToken(accessToken);
              return response;
            })
            .then((resStatus) => {
              const authz = resStatus.status === 200 ? true : false;
              setIsApiAuthorized(authz);
            })
            .catch((error) => {
              console.error(error);
              setIsApiAuthorized(false);
            });
        } else {
          setIsApiAuthorized(false);
          setAccessToken(null);
        }
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [
    encodedPayload,
    getAccessTokenSilently,
    setAccessToken,
    setEncodedPayload,
    setIsApiAuthorized,
    user,
  ]);

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
              isApiAuthorized={isApiAuthorized}
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col className='md-8 pb-4'>
          {isApiAuthorized && (
            <PresenterForm
              encodedPayload={encodedPayload}
              accessToken={accessToken}
            />
          )}
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
