import React from 'react';
import PropTypes from 'prop-types';
import WordTile from './WordTile.js';

export default function DauberLayer(props) {
  return (
    <div className={props.styleclass}><WordTile word={props.word} /></div>
  );
}
DauberLayer.propTypes = {
  word: PropTypes.string,
  styleclass: PropTypes.string
};
