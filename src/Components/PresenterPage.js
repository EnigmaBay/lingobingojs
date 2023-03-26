import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Auth/LoginButton';
import LogoutButton from '../Auth/LogoutButton.js';
import Profile from '../Auth/Profile.js';
import Footer from './Footer.js';
import PresenterForm from './PresenterForm';
// import PresenterForm from './NoPresenterForm';

export default function PresenterPage() {
  const [theme] = useOutletContext();
  const { isAuthenticated, isLoading } = useAuth0();

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
        <Col></Col>
      </Row>
      <Row>
        <Col>{isAuthenticated && <Profile />}</Col>
        <Col sm={4}>{!isAuthenticated && <LoginButton />}</Col>
        <Col>{isAuthenticated && <LogoutButton />}</Col>
      </Row>
      <Row>
        <Col className='md-8 pb-4'>
          {/* {isAuthenticated && <PresenterForm />} */}
          <PresenterForm />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
