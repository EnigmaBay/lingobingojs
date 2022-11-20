import React from 'react';
import PropTypes from 'prop-types';
import WordTile from './WordTile.js';

export default function DauberLayer(props) {
  return (
    <div
      className={props.styleClass + ' dauber-layer enable-pointer highlight-tile'}
      data-theme={props.dataTheme}
      onClick={props.handleTileClick}
      id={props.id}
    >
      <WordTile
        word={props.word}
      />
    </div>
  );
}
DauberLayer.propTypes = {
  word: PropTypes.string,
  styleClass: PropTypes.string,
  dataTheme: PropTypes.string,
  handleTileClick: PropTypes.func,
  id: PropTypes.number
};
