import PropTypes from 'prop-types';
import React from 'react';

export default function WordTile({word}) {
  return (
    <div>{word}</div>
  );
}
WordTile.propTypes = {
  word: PropTypes.string
};
