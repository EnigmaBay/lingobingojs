import React from 'react';
import PropTypes from 'prop-types';

export default function WordTile(props) {
  return (
    <div className='enable-pointer'>
      {props.word}
    </div>
  );
}
WordTile.propTypes = {
  word: PropTypes.string,
};
