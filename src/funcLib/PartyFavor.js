import React from 'react';
import PropTypes from 'prop-types';

export default function PartyFavor(props) {
  return (
    <img
      className={props.classname}
      src={props.src}
      alt={props.alt}
    ></img>
  );
}

PartyFavor.propTypes = {
  classname: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};
