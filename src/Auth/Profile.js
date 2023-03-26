import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useOutletContext } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function Profile() {
  const [theme] = useOutletContext();
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <Card data-theme={theme} className='themed-background mt-4'>
        <Card.Header data-theme={theme}>
          <Card.Text data-theme={theme}>Loading. . .</Card.Text>
        </Card.Header>
      </Card>
    );
  }
  console.log('Profile: user name is ', user.name);
  return (
    isAuthenticated && (
      <Card data-theme={theme} className='themed-background mt-4 themed-button'>
        <Card.Header data-theme={theme}>
          <Card.Text data-theme={theme}>Welcome, {user.name}!</Card.Text>
        </Card.Header>
      </Card>
    )
  );
}
