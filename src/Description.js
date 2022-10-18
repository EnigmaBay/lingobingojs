import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Description() {
  return (
    <Container fluid='md'>
      <Row>
        <Col md='auto'></Col>
        <Col className='md-8'>
          <h1 className='text-center'>Welcome to LingoBingo.js</h1>
        </Col>
        <Col md='auto'></Col>
      </Row>
      <Row>
        <Col md='auto'></Col>
        <Col className='md-8'>
          <p className='text-center'>Your experience of Webinars is about to change forever.</p>
        </Col>
        <Col md='auto'></Col>
      </Row>
      <Row>
        <Col md='auto'></Col>
        <Col className='md-8'>
          <h2 className='text-center'>Make Your Webinars Interactive</h2>
        </Col>
        <Col md='auto'></Col>
      </Row>
      <Row>
        <Col md='auto'></Col>
        <Col className='md-8'>
          <p className='text-center'>
            LingoBingo creates a more engaging experience for participants
            during webinars. Participants select words from their LingoBingo
            board as they hear them, keeping their minds actively engaged with
            the speaker.
          </p>
        </Col>
        <Col md='auto'></Col>
      </Row>
      <Row>
        <Col md='auto'></Col>
        <Col className='md-8'>
          <h2 className='text-center'>How to Play</h2>
        </Col>
        <Col md='auto'></Col>
      </Row>
      <Row>
        <Col md='auto'></Col>
        <Col className='md-8'>
          <p className='text-center'>
            If you are attending a webinar and have been invited to join a
            LingoBingo game, use the link provided by the host to join a game.
            LingoBingo will create a bingo board for you based on the vocabulary
            chosen by your host.
          </p>
        </Col>
        <Col md='auto'></Col>
      </Row>
    </Container>
  );
}
