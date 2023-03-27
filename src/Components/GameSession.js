import React, { useEffect, useState } from 'react';
import Gameboard from './Gameboard.js';
import randomGen from '../funcLib/RandomGen.js';
import wordProcessor from '../funcLib/WordProcessor.js';
import wordImporter from '../funcLib/WordImporter.js';
import PlayAgainButton from './PlayAgainButton.js';
import { Col, Container, Row } from 'react-bootstrap';
import checkForBingo from '../funcLib/CheckForBingo';
import { useOutletContext, useParams } from 'react-router-dom';
import axios from 'axios';

export default function GameSession() {
  const [moves, setMoves] = useState(0);
  const [isBingoed, setBingoed] = useState(false);
  const defaultDauberedTiles = [];
  defaultDauberedTiles[12] = true;
  const [dauberedTiles, setDauberedTiles] = useState(defaultDauberedTiles);
  const [gamesStarted, setGamesStarted] = useState([1]);
  const [randWords, setRandWords] = useState([]);
  let { gameboardId } = useParams();
  const [theme] = useOutletContext();

  function handleTileClick(e) {
    let id = e.currentTarget.id;
    if (id !== null) {
      dauberTile(id);
    }
  }

  function dauberTile(id) {
    const currentDauberedTiles = dauberedTiles;
    if (currentDauberedTiles[id] !== true) {
      currentDauberedTiles[id] = true;
      let moveCount = moves;
      moveCount++;
      setMoves(moveCount);
      setDauberedTiles(currentDauberedTiles);
    }
  }

  function restartGame() {
    setMoves(0);
    setDauberedTiles(defaultDauberedTiles);
    let gamesStartedCount = gamesStarted;
    gamesStartedCount++;
    // dauberTile(12);
    setGamesStarted(gamesStartedCount);
  }

  useEffect(() => {
    setBingoed(checkForBingo(dauberedTiles, moves));
    // let currentDauberedTiles = dauberedTiles;
    // currentDauberedTiles[12] = true;
    // setDauberedTiles(currentDauberedTiles);
  }, [dauberedTiles, moves]);

  useEffect(() => {
    const randInts = randomGen(24);

    if (gameboardId !== undefined) {
      const urlWithId = `${process.env.REACT_APP_GAMEBOARD_URI}${gameboardId}`;
      const apiServer = process.env.REACT_APP_API_SERVER;

      const config = {
        method: 'get',
        baseURL: apiServer,
        url: urlWithId,
      };

      axios(config)
        .then((res) => res.data)
        .then((words) => wordProcessor(words, randInts))
        .then((processedWords) => setRandWords(processedWords))
        .catch(() => {
          importDefaultWords(randInts);
        });
    } else {
      importDefaultWords(randInts);
    }
  }, [gameboardId, gamesStarted]);

  function importDefaultWords(randInts) {
    const words = wordImporter();
    const processedWords = wordProcessor(words, randInts);
    setRandWords(processedWords);
  }

  return (
    <Container
      fluid
      className='main-output-borders themed-background page'
      id='game-session'
      data-theme={theme}
    >
      <Row>
        <Col>
          <Gameboard
            dataTheme={theme}
            randwords={randWords}
            moves={moves}
            isBingoed={isBingoed}
            dauberedTiles={dauberedTiles}
            handleTileClick={(e) => handleTileClick(e)}
          />
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center'>
          {/* Center the button */}
          <PlayAgainButton
            isBingoed={isBingoed}
            handleClick={() => restartGame()}
            dataTheme={theme}
          />
        </Col>
      </Row>
    </Container>
  );
}
