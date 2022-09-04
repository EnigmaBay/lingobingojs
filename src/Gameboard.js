import React from 'react';
import Words from './itu-wordlist.json';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './tempstyle.css';

export default function Gameboard() {
  const rowOneWords = Words.map((item, idx) => {
    if (idx >= 0 && idx <= 4) {
      return <Col key={idx} xs={2} className='word-tile'><div className='center-tile-content'>{item.word}</div></Col>;
    }
  });
  const rowTwoWords = Words.map((item, idx) => {
    if (idx >= 5 && idx <= 9) {
      return <Col key={idx} xs={2} className='word-tile'><div className='center-tile-content'>{item.word}</div></Col>;
    }
  });
  const rowThreeWords = Words.map((item, idx) => {
    if (idx === 12) {
      return <Col key={idx} xs={2} className='word-tile'><div className='center-tile-content'>{item.word}</div></Col>;
    }
    if (idx >= 10 && idx <= 14) {
      return <Col key={idx} xs={2} className='word-tile'><div className='center-tile-content'>{item.word}</div></Col>;
    }
  });
  const rowFourWords = Words.map((item, idx) => {
    if (idx >= 15 && idx <= 19) {
      return <Col key={idx} xs={2} className='word-tile'><div className='center-tile-content'>{item.word}</div></Col>;
    }
  });
  const rowFiveWords = Words.map((item, idx) => {
    if (idx >= 20 && idx <= 24) {
      return <Col key={idx} xs={2} className='word-tile'><div className='center-tile-content'>{item.word}</div></Col>;
    }
  });

  return (
    <Container>
      <Row>
        <Col></Col>
        {rowOneWords}
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        {rowTwoWords}
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        {rowThreeWords}
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        {rowFourWords}
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        {rowFiveWords}
        <Col></Col>
      </Row>
    </Container>
  );
}
