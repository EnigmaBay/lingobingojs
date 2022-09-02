import React from 'react';
import { Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

export default function DevBio() {
  return (
    <Card
      className="text-center"
      style={{
        maxWidth: '19em'
      }}>
      <CardHeader>
        Placeholder Bio
        <Card.Img
          className='dev-bio-image'
          variant='top'
          src='https://place-hold.it/150/9F8404/352C00.png&text=Dev&bold&fontsize=18'
          alt='placeholder image for developer headshot'
        />
      </CardHeader>
      <Card.Title>
        Dev Eloper (they/them)
      </Card.Title>
      <Card.Text>
        Developer biography here.
      </Card.Text>
      <Card.Link>
        LinkedIn link
      </Card.Link>
      <Card.Link>
        GitHub link
      </Card.Link>
    </Card>
  );
}
