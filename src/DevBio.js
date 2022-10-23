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
<<<<<<< HEAD
        style={{
          maxWidth: '19em'
        }}>
=======
      >
>>>>>>> 8b2ac4618d5a30a0e3d2146bdea9e0107b8e8ced
        <CardHeader>
          Placeholder Bio
          <Card.Img
            className='fluid'
            variant='top'
            src={props.img}
            alt={props.name}
          />
        </CardHeader>
        <Card.Title>
          {props.name}
        </Card.Title>
        <Card.Text
          className='m-2 p-2'
        >
          {props.bio}
        </Card.Text>
        <Card.Link
          className='m-1'
          href={props.linkedin}
        >
          LinkedIn
        </Card.Link>
        <Card.Link
          className='m-1'
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
