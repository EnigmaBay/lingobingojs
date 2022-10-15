import React from 'react';
import PropTypes from 'prop-types';

export default function BingoAnnouncer() {
  return (
    <div
      className={this.props.classname}
    >{this.props.text}</div>
  );
}

BingoAnnouncer.propTypes = {
  classname: PropTypes.string,
  text: PropTypes.string,
};
