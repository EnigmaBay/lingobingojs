import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DauberLayer from './DauberLayer';
import randomGen from './funcLib/RandomGen.js';
import wordImporter from './funcLib/WordImporter.js';
import wordProcessor from './funcLib/WordProcessor.js';
import './tempstyle.css';

export default class Gameboard extends React.Component {
  rowBuilder(randWords) {
    let result = [];
    for (let row = 0; row < 5; row++) {
      result.push(<Row key={row} className='mx-0'>{this.tileBuilder(row, randWords)}</Row>);
    }
    return result;
  }

  tileBuilder(row, randWords) {
    console.log('Gameboard itemBuilder(row) accessing param randWords: ' + randWords);
    let result = [];
    const incrementor = row * 5;
    for (let col=0; col < 5; col++) {
      console.log('Gameboard itemBuilder(row) col: ' + col);
      const idx = col + incrementor;
      console.log('Gameboard itemBuilder(row) idx: ' + idx);
      const currentWord = randWords[idx];
      console.log('Gameboard itemBuilder(row) currentWord: ' + currentWord);
      result.push(<Col key={idx} className='word-tile'><DauberLayer styleClass='daubered' word={currentWord}/></Col>);
    }
    return result;
  }

  render() {
    const randInts = randomGen(24);
    let words = wordImporter();
    const randWords = wordProcessor(words, randInts);
    console.log('Gameboard randWords: ' + randWords);
    const rows = this.rowBuilder(randWords);

    return (
      <Container fluid className='px-0' >
        <Row className='mx-0'>
          <Col></Col>
          <Col xs={'auto'}>Lets Play Bingo!</Col>
          <Col></Col>
        </Row>
        {rows}
      </Container>
    );
  }
}
