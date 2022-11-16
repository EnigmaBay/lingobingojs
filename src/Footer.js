import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export default function Footer(props){
  const enigmaBay = <a href='https://github.com/EnigmaBay' className='themed-hyperlink' data-theme={props.dataTheme}>EnigmaBay</a>;
  const mit = <a href='https://opensource.org/licenses/MIT' className='themed-hyperlink' data-theme={props.dataTheme}>MIT License</a>;
  return (
    <Card data-theme={props.dataTheme} className='text-center themed-footer'>
      <Card.Title className='themed-header'data-theme={props.dataTheme}><h2>LingoBingoJS</h2></Card.Title>
      <Card.Text className='themed-text' data-theme={props.dataTheme}>&#169; Copyright 2022 {enigmaBay}.</Card.Text>
      <Card.Text className='themed-text' data-theme={props.dataTheme}>The content on this website, of which {enigmaBay} is the author, is released under an {mit}.</Card.Text>
      <Card.Text className='themed-text' data-theme={props.dataTheme}><a className='themed-hyperlink' data-theme={props.dataTheme} href='http://icons8.com/'>This website makes use of icons by Icons8</a></Card.Text>
      <Card.Img></Card.Img>
    </Card>
  );
}

Footer.propTypes = {
  dataTheme: PropTypes.string
};
