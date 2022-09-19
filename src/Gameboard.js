import React from 'react';
import Words from './itu-wordlist.json';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import WordTile from './WordTile.js';
import './tempstyle.css';

export default function Gameboard() {
  const rowOneWords = Words.map((item, idx) => {
    if (idx >= 0 && idx <= 4) {
      return <Col key={idx} xs={2} className='word-tile'><div className='center-tile-content'><WordTile word={item.word} /></div></Col>;
    }
  });
  const rowTwoWords = Words.map((item, idx) => {
    if (idx >= 5 && idx <= 9) {
      return <Col key={idx} xs={2} className='word-tile'><div className='center-tile-content'><WordTile word={item.word} /></div></Col>;
    }
  });
  const rowThreeWords = Words.map((item, idx) => {
    if (idx === 12) {
      return <Col key={idx} xs={2} className='word-tile'><div className='center-tile-content'><WordTile word={'FREE'} /></div></Col>;
    }
    if (idx >= 10 && idx <= 14) {
      return <Col key={idx} xs={2} className='word-tile'><div className='center-tile-content'><WordTile word={item.word} /></div></Col>;
    }
  });
  const rowFourWords = Words.map((item, idx) => {
    if (idx >= 15 && idx <= 19) {
      return <Col key={idx} xs={2} className='word-tile'><div className='center-tile-content'><WordTile word={item.word} /></div></Col>;
    }
  });
  const rowFiveWords = Words.map((item, idx) => {
    if (idx >= 20 && idx <= 24) {
      return <Col key={idx} xs={2} className='word-tile'><div className='center-tile-content'><WordTile word={item.word} /></div></Col>;
    }
  });

  return (
    <Container fluid className='px-0'>
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
