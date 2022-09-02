import React from 'react';
import { Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

export default function DevBio() {
  return (
    <Card style={{
      maxWidth: '19em'
    }}>
      <CardHeader>
        <p>Placeholder Bio</p>
        <Card.Img
          className='dev-bio-image'
          variant='top'
          src='https://place-hold.it/150/9F8404/352C00.png&text=Dev&bold&fontsize=18'
          alt='placeholder image for developer headshot'
        />
      </CardHeader>
      <Card.Title>
        <p>Dev Eloper (they/them)</p>
      </Card.Title>
      <Card.Text>
        <p>Developer biography here.</p>
      </Card.Text>
      <Card.Link>
        <p>LinkedIn link</p>
      </Card.Link>
      <Card.Link>
        <p>GitHub link</p>
      </Card.Link>
    </Card>
  );
}
