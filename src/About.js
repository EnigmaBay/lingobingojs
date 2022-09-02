import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DevBio from './DevBio.js';

export default function About() {
  return (
    <Container>
      <Row>
        <Col lg={true}><DevBio /></Col>
        <Col lg={true}><DevBio /></Col>
      </Row>
    </Container>
  );
}
