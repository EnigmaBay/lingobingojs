import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';


export default function PlayAgainButton(props){
  return <Button onClick={props.handleClick}>
    {props.isBingoed ? 'Play Again' : 'Restart Game'}
  </Button>;
}

PlayAgainButton.propTypes = {
  isBingoed: PropTypes.bool,
  handleClick: PropTypes.func
};
