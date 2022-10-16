import React from 'react';
import PropTypes from 'prop-types';

export default function BingoAnnouncer(props) {
  return (
    <div
      className={props.classname}
    >{props.text}</div>
  );
}

BingoAnnouncer.propTypes = {
  classname: PropTypes.string,
  text: PropTypes.string,
};
