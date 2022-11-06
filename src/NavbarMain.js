import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo67x40 from './lingo-bingo-logo-bravo-67-40.png';

export default function NavbarMain() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" className='round-top-edges'>
      <Container>
        <Navbar.Brand to="../">
          <img
            src={logo67x40}
            alt="Partial bingo board with words lingo bingo emblazoned over the top."
            width={'67px'}
            height={'40px'}
          />
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink exact to="../" >Home</NavLink>
              <NavLink className="nav-link main-nav-link" to="../about">About Us</NavLink>
              <NavLink className="nav-link main-nav-link" to="../signup">Signup</NavLink>
              <NavLink className="nav-link main-nav-link" to="../login">Login</NavLink>
              <NavLink className="nav-link main-nav-link" to="../play">Play LingoBingo</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
