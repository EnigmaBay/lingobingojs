import React from 'react';
import Gameboard from './Gameboard.js';
import randomGen from './funcLib/RandomGen.js';
import wordProcessor from './funcLib/WordProcessor.js';
import wordImporter from './funcLib/WordImporter.js';
import PlayAgainButton from './PlayAgainButton.js';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function GameSession() {
  const randInts = randomGen(24);
  let words = wordImporter();
  const randWords = wordProcessor(words, randInts);
  return (
    <Container fluid>
      <Row>
        <Col>
          <Gameboard randwords={randWords} />
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center'> {/* Center the button */}
          {/*reloadDocument parameter skips client-side routing so that page is refreshed and state is reset */}
          <Link reloadDocument to={'../play'}><PlayAgainButton /></Link>
        </Col>
      </Row>
    </Container>
  );
}
