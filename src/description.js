import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Description() {
  return (
    <Container
      style={{
        border: "solid 1px #9F4A04",
      }}
    >
      <Row>
        <Col></Col>
        <Col sm={8}>
          <h1>Welcome to LingoBingo.js</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col sm={8}>
          <p>Your experince of Webinars is about to change forever.</p>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col sm={8}>
          <h2>Make Your Webinars Interactive</h2>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col sm={8}>
          <p>
            LingoBingo creates a more engaging experience for participants during
            webinars. Participants select words from their LingoBingo board as they hear
            them, keeping their minds actively engaged with the speaker.
          </p>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col sm={8}>
          <h2>How to Play</h2>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col sm={8}>
          <p>
            If you are attending a webinar and have been invited to join a LingoBingo game, 
            use the link provided by the host to join a game. LingoBingo will create a bingo board
            for you based on the vocabulary chosen by your host.
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
