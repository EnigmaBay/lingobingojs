import React, { useEffect, useState } from 'react';
import Gameboard from './Gameboard.js';
import randomGen from '../funcLib/RandomGen.js';
import wordProcessor from '../funcLib/WordProcessor.js';
import wordImporter from '../funcLib/WordImporter.js';
import PlayAgainButton from './PlayAgainButton.js';
import { Col, Container, Row } from 'react-bootstrap';
import checkForBingo from '../funcLib/CheckForBingo';
import { useOutletContext, useParams } from 'react-router-dom';

export default function GameSession() {
  const [moves, setMoves] = useState(0);
  const [isBingoed, setBingoed] = useState(false);
  const [dauberedTiles, setDauberedTiles] = useState([]);
  const [gamesStarted, setGamesStarted] = useState([1]);
  const [randWords, setRandWords] = useState(initRandomWords());
  let {gameboardId, param2} = useParams();
  const [theme] = useOutletContext();

  console.log(gameboardId + ' ' + param2);

  function initRandomWords() {
    const randInts = randomGen(24);
    let words = wordImporter();
    return wordProcessor(words, randInts);
  }

  function handleTileClick(e) {
    let id = e.currentTarget.id;
    if (id !== null) {
      setDauberedTiles((prev) => {
        let modDauberedTiles = prev;
        modDauberedTiles[id] = true;
        return modDauberedTiles;
      });
      setMoves(moves + 1);
    }
  }

  function dauberTile(id) {
    setDauberedTiles((prev) => {
      let modDauberedTiles = prev;
      modDauberedTiles[id] = true;
      return modDauberedTiles;
    });
  }

  function restartGame() {
    setGamesStarted(gamesStarted + 1);
    setMoves(0);
    setDauberedTiles([]);
    setGamesStarted(gamesStarted + 1);
  }

  useEffect(() => {
    setBingoed(checkForBingo(dauberedTiles, moves));
  }, [dauberedTiles, moves]);

  useEffect(() => {
    setRandWords(initRandomWords());
    // daubers center tile
    dauberTile(12);
  }, [gamesStarted]);

  return (
    <Container fluid
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
        <Col className="d-flex justify-content-center">
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
