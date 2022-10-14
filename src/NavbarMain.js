import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function NavbarMain() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand to="../">LingoBingo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link main-nav-link" to="../">Home</NavLink>
            <NavLink className="nav-link main-nav-link" to="../about">About Us</NavLink>
            <NavLink className="nav-link main-nav-link" to="../signup">Signup</NavLink>
            <NavLink className="nav-link main-nav-link" to="../login">Login</NavLink>
            <NavLink className="nav-link main-nav-link" to="../play">Play LingoBingo</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
