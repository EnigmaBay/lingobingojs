import React from 'react';
import PropTypes from 'prop-types';

export default function Footer(props){
  const enigmaBay = <a href='https://github.com/EnigmaBay' className='themed-hyperlink' data-theme={props.dataTheme}>EnigmaBay</a>;
  const mit = <a href='https://github.com/EnigmaBay/lingobingojs/blob/main/LICENSE' className='themed-hyperlink' data-theme={props.dataTheme}>MIT License</a>;
  return (
    <div data-theme={props.dataTheme} className='text-center themed-footer'>
      <p className='themed-footer-text' data-theme={props.dataTheme}>&#169; Copyright 2022 {enigmaBay}.</p>
      <p className='themed-footer-text' data-theme={props.dataTheme}>The content on this website, of which {enigmaBay} is the author, is released under an {mit}.</p>
      <p className='themed-footer-text' data-theme={props.dataTheme}><a className='themed-hyperlink' data-theme={props.dataTheme} href='http://icons8.com/'>This website makes use of icons by Icons8</a></p>
    </div>
  );
}

Footer.propTypes = {
  dataTheme: PropTypes.string
};
