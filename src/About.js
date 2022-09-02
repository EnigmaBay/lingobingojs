import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DevBio from './DevBio.js';

export default function About() {
  return (
    <Container
      style={{
        border: 'solid 1px #9F4A04'
      }}>
      <Row>
        <Col></Col>
        <Col sm={4}><h1>About Us Component</h1></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col lg={true}><DevBio /></Col>
        <Col><DevBio /></Col>
      </Row>
    </Container>
  );
}
