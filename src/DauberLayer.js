import React from 'react';
import PropTypes from 'prop-types';
import WordTile from './WordTile.js';

export default function DauberLayer(props) {
  return (
    <div className={props.styleClass} onClick={props.handleTileClick} id={props.id}>
      <WordTile
        word={props.word}
      />
    </div>
  );
}
DauberLayer.propTypes = {
  word: PropTypes.string,
  styleClass: PropTypes.string,
  handleTileClick: PropTypes.func,
  id: PropTypes.number
};
