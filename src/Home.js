import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarMain from './NavbarMain.js';
import Container from 'react-bootstrap/Container';
import './root.css';
import './tempstyle.css';
import './dev-theme.css';


export default function Home() {
  const [theme] = React.useState('light');
  return (
    <Container>
      <NavbarMain />
      <Outlet context={[theme]}/>
    </Container>
  );
}
