import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarMain from './NavbarMain.js';
import Container from 'react-bootstrap/Container';
import './root.css';
import './tempstyle.css';

export default function Home() {
  return (
    <Container>
      <NavbarMain />
      <Outlet />
    </Container>
  );
}
