import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DevBio from './DevBio.js';
import biodata from './about-us/bio-data.json';

export default function About() {
  const devdata = biodata.data.map((dev, index) => {
    return (
      <Col
        key={index}
        lg={true}
      >
        <DevBio
          img={dev.img}
          name={dev.name}
          bio={dev.bio}
          linkedin={personalbar.linkedin}
          github={personalbar.github}
        />
      </Col>);
  });

  return (
    <Container
      style={{
        border: 'solid 1px #9F4A04'
      }}>
      <Row>
        <Col></Col>
        <Col sm={4}><h1>About Us</h1></Col>
        <Col></Col>
      </Row>
      <Row>
        {devdata}
      </Row>
    </Container>
  );
}
