import React from 'react';
import Words from './itu-wordlist.json';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DauberLayer from './DauberLayer';
import './tempstyle.css';

export default class Gameboard extends React.Component {
  render() {
    const rowOneWords = Words.map((item, idx) => {
      if (idx >= 0 && idx <= 4) {
        return <Col key={idx} xs={2} className='word-tile'><DauberLayer styleclass={'daubered'} word={item.word} /></Col>;
      }
    });
    const rowTwoWords = Words.map((item, idx) => {
      if (idx >= 5 && idx <= 9) {
        return <Col key={idx} xs={2} className='word-tile'><DauberLayer styleclass={'plain'} word={item.word} /></Col>;
      }
    });
    const rowThreeWords = Words.map((item, idx) => {
      if (idx === 12) {
        return <Col key={idx} xs={2} className='word-tile'><DauberLayer styleclass={'daubered'} word={'FREE'} /></Col>;
      }
      if (idx >= 10 && idx <= 14) {
        return <Col key={idx} xs={2} className='word-tile'><DauberLayer styleclass={'plain'} word={item.word} /></Col>;
      }
    });
    const rowFourWords = Words.map((item, idx) => {
      if (idx >= 15 && idx <= 19) {
        return <Col key={idx} xs={2} className='word-tile'><DauberLayer styleclass={'daubered'} word={item.word} /></Col>;
      }
    });
    const rowFiveWords = Words.map((item, idx) => {
      if (idx >= 20 && idx <= 24) {
        return <Col key={idx} xs={2} className='word-tile'><DauberLayer styleclass={'plain'} word={item.word} /></Col>;
      }
    });

    return (
      <Container fluid className='px-0' >
        <Row className='mx-0'>
          <Col></Col>
          <Col xs={'auto'}>Lets Play Bingo!</Col>
          <Col></Col>
        </Row>
        <Row className='mx-0'>
          <Col xs={1}></Col>
          {rowOneWords}
          <Col xs={1}></Col>
        </Row>
        <Row className='mx-0'>
          <Col xs={1}></Col>
          {rowTwoWords}
          <Col xs={1}></Col>
        </Row>
        <Row className='mx-0'>
          <Col xs={1}></Col>
          {rowThreeWords}
          <Col xs={1}></Col>
        </Row>
        <Row className='mx-0'>
          <Col xs={1}></Col>
          {rowFourWords}
          <Col xs={1}></Col>
        </Row>
        <Row className='mx-0'>
          <Col xs={1}></Col>
          {rowFiveWords}
          <Col xs={1}></Col>
        </Row>
      </Container>
    );
  }
}
