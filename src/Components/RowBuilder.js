import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DauberLayer from './DauberLayer';

export default function RowBuilder(
  randWords,
  dataTheme,
  dauberedTiles,
  handleTileClick
) {
  function tileBuilder(row) {
    let result = [];
    const incrementor = row * 5;
    for (let col = 0; col < 5; col++) {
      const idx = col + incrementor;
      const currentWord = randWords[idx];
      result.push(
        <Col key={idx} className="word-col p-1" data-theme={dataTheme}>
          <DauberLayer
            id={idx}
            styleClass={dauberedTiles[idx] ? 'daubered' : 'plain'}
            dataTheme={dataTheme}
            word={currentWord}
            handleTileClick={(e) => handleTileClick(e)}
          />
        </Col>
      );
    }
    return result;
  }

  let result = [];
  for (let row = 0; row < 5; row++) {
    result.push(
      <Row key={row} className="mx-0">
        {tileBuilder(row)}
      </Row>
    );
  }

  return result;
}
