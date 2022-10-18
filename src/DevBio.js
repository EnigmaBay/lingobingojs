import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import CardHeader from 'react-bootstrap/esm/CardHeader';

export default function DevBio(props) {
  return (
    <Col className="dev-bio-column">
      <Card
        className="text-center mb-3"
        style={{
          maxWidth: '19em'
        }}>
        <CardHeader>
          Placeholder Bio
          <Card.Img
            className='dev-bio-image'
            variant='top'
            src={props.img}
            alt={props.name}
          />
        </CardHeader>
        <Card.Title>
          {props.name}
        </Card.Title>
        <Card.Text style={{margin: '.5em'}}>
          {props.bio}
        </Card.Text>
        <Card.Link
          style={{margin: '.5em'}}
          href={props.linkedin}
        >
          LinkedIn
        </Card.Link>
        <Card.Link
          style={{margin: '.5em'}}
          href={props.github}
        >
          GitHub
        </Card.Link>
      </Card>
    </Col>
  );
}

DevBio.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string
};
