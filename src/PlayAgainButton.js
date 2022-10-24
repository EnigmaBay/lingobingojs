import PropTypes from 'prop-types';
import React from 'react';

export default function PlayAgainButton(props) {
  return (
    <div
      className='p-1 m-2 rounded-4 lets-play light-theme-text'
      onClick={props.handleClick}>
      {props.isBingoed ? 'Play Again' : 'Restart Game'}
    </div>
  );
}

PlayAgainButton.propTypes = {
  isBingoed: PropTypes.bool,
  handleClick: PropTypes.func
};
