import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo67x40 from './lingo-bingo-logo-bravo-67-40.png';
import PropTypes from 'prop-types';

export default function NavbarMain(props) {
  const activeFunc = ({isActive}) =>{
    if(!isActive){
      return 'lb-main-nav-link';
    }
    else{
      return 'lb-main-nav-link lb-main-nav-link-active';
    }
  };
  return (
    <Navbar bg="dark" variant="dark" expand="sm" className='round-top-edges'>
      <Container>
        <NavLink to="../">
          <Navbar.Brand>
            <img
              src={logo67x40}
              alt="Click to return to LingoBingo home page"
              width={'67px'}
              height={'40px'}
            />
          </Navbar.Brand>
        </NavLink>
        <img src='icons8-brightness-32.png' className='me-auto enable-pointer' onClick={props.handleSwapTheme()}></img>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className={activeFunc} to="/" end>Home</NavLink>
              <NavLink className={activeFunc} to="../about">About Us</NavLink>
              <NavLink className={activeFunc} to="../signup">Signup</NavLink>
              <NavLink className={activeFunc} to="../login">Login</NavLink>
              <NavLink className={activeFunc} to="../play">Play LingoBingo</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

NavbarMain.propTypes = {
  handleSwapTheme: PropTypes.func
};
