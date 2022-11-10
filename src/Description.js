import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useOutletContext } from 'react-router-dom';

export default function Description() {
  // theme can be converted to a prop or user-accessible variable to select a theme
  const [theme] = useOutletContext();
  return (
    <Container
      fluid='md'
      className='main-output-borders themed-background'
      data-theme={theme}
    >
      <Row className='p-2'>
        <Col md='auto'></Col>
        <Col className='md-8'></Col>
        <Col md='auto'></Col>
      </Row>
      <Row className='p-2'>
        <Col md='auto'></Col>
        <Col className='md-8'>
          <h2 className='themed-header' data-theme={theme}>Make Your Webinars Interactive</h2>
        </Col>
        <Col md='auto'></Col>
      </Row>
      <Row className='p-2'>
        <Col md='auto'></Col>
        <Col className='md-8'>
          <div
            className='rounded-4 themed-text'
            data-theme={theme}
          >
            LingoBingo creates a more engaging experience for participants during webinars. Participants select words from their LingoBingo board as they hear or see them during a presentation. This keeps participants minds actively engaged with the speaker and the presentation content.
          </div>
        </Col>
        <Col md='auto'></Col>
      </Row>
      <Row className='p-2'>
        <Col md='auto'></Col>
        <Col className='md-8'>
          <h2 className='themed-header' data-theme={theme}>How to Play</h2>
        </Col>
        <Col md='auto'></Col>
      </Row>
      <Row className='p-2 mb-3'>
        <Col md='auto'></Col>
        <Col className='md-8'>
          <div
            className='rounded-4 themed-text'
            data-theme={theme}
          >
            If you are attending a webinar and have been invited to join a LingoBingo game, use the link provided by the host to join the game. LingoBingo will create a bingo board for you based on the vocabulary chosen by your host.
          </div>
        </Col>
        <Col md='auto'></Col>
      </Row>
      <Row className='p-2 mb-3'>
        <Col md='auto'></Col>
        <Col className='md-8'>
          <div
            className='rounded-4 themed-text'
            data-theme={theme}
          >
            <ul>
              <li>Whenever you hear or see a word on your bingoboard, just click it to select it.</li>
              <li>Select five-in-a-row in any direction to win!</li>
              <li>You can restart your game at any time by clicking &quot;Restart Game&quot;. A fresh set of words will appear.</li>
              <li>If you get a bingo and want to continue, click &quot;Play Again&quot; below the bingo board to refresh your board with a new set of words.</li>
            </ul>
          </div>
        </Col>
        <Col md='auto'></Col>
      </Row>
    </Container>
  );
}

