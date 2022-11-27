import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DevBio from './DevBio.js';
import biodata from '../about-us/bio-data.json';
import { useOutletContext } from 'react-router-dom';
import Footer from './Footer.js';


export default function About() {
  const [theme] = useOutletContext();
  const devdata = biodata.data.map((dev, index) => {
    return (
      <Col
        md={6} sm={12}
        key={index}
      >
        <DevBio
          dataTheme={theme}
          img={dev.img}
          name={dev.name}
          bio={dev.bio}
          linkedin={dev.linkedin}
          github={dev.github}
        />
      </Col>);
  });

  return (
    <Container
      fluid
      className='main-output-borders themed-background page'
      data-theme={theme}
    >
      <Row>
        <Col></Col>
        <Col sm={4}>
          <div data-theme={theme} className='themed-header text-center'>About Us</div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        {devdata}
      </Row>
      <Row>
        <Footer dataTheme={theme}/>
      </Row>
    </Container>
  );
}
