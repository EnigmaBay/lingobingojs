import React from 'react';
import PropTypes from 'prop-types';

export default function WordTile(props) {
  return (
    <div onClick={props.handleTileClick} className={props.styleClass}>{props.word}</div>
  );
}
WordTile.propTypes = {
  word: PropTypes.string,
  styleClass: PropTypes.string,
  handleTileClick: PropTypes.func
};
