import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


export default function PlayAgainButton(props){
  return <Button disabled={props.disabled} className='center-button'>Play Again</Button>;
}

PlayAgainButton.propTypes = {
  disabled: PropTypes.bool
};
