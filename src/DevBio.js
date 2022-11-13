import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import LinkedinSvg from './about-us/linkedinSvg';
import GithubSvg from './about-us/githubSvg';

export default function DevBio(props) {
  return (
    <Col className='dev-bio-column' >
      <Card className='text-center mb-3 themed-text' data-theme={props.dataTheme}>
        <CardHeader>
          <Card.Title>
            {props.name}
          </Card.Title>
          <Card.Img
            className='fluid'
            variant='top'
            src={props.img}
            alt={props.name}
          />
        </CardHeader>
        <Card.Text
          className='m-2 p-2'
        >
          {props.bio}
        </Card.Text>
        <span>
          <Card.Link
            className='mx-auto my-1 enable-pointer themed-hyperlink'
            data-theme={props.dataTheme}
            href={props.linkedin}
          >
            <LinkedinSvg />LinkedIn
          </Card.Link>
          <Card.Link
            className='mx-auto my-1 enable-pointer themed-hyperlink'
            data-theme={props.dataTheme}
            href={props.github}
          >
            <GithubSvg />GitHub
          </Card.Link>
        </span>
      </Card>
    </Col>
  );
}

DevBio.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  dataTheme: PropTypes.string
};
