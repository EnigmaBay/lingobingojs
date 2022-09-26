import React from 'react';
import PropTypes from 'prop-types';
import WordTile from './WordTile.js';

export default function DauberLayer(props) {
  return (
    <WordTile word={props.word} styleClass={props.styleClass} handleTileClick={props.handleTileClick}/>
  );
}
DauberLayer.propTypes = {
  word: PropTypes.string,
  styleClass: PropTypes.string,
  handleTileClick: PropTypes.func
};
