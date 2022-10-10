import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


export default function PlayAgainButton(props){
  return <Button onClick={props.handleClick}>Play Again</Button>;
}

PlayAgainButton.propTypes = {
  handleClick: PropTypes.func
};
