import React, { useState } from 'react';
import Gameboard from './Gameboard.js';
import randomGen from './funcLib/RandomGen.js';
import wordProcessor from './funcLib/WordProcessor.js';
import wordImporter from './funcLib/WordImporter.js';
import PlayAgainButton from './PlayAgainButton.js';
import { Col, Container, Row } from 'react-bootstrap';

export default function GameSession() {
  const randInts = randomGen(24);
  let words = wordImporter();
  const randWords = wordProcessor(words, randInts);
  const [restarts, setRestarts] = useState(0);
  return (
    <Container fluid>
      <Row>
        <Col>
          <Gameboard randwords={randWords} />
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center'> {/* Center the button */}
          <PlayAgainButton disabled={false} handleClick={ () => setRestarts(restarts + 1)}/>
        </Col>
      </Row>
    </Container>
  );
}
