import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavbarMain(props) {

  const[expanded, setExpanded] = useState(false);
  const activeFunc = ({isActive}) =>{
    if(!isActive){
      return 'lb-main-nav-link';
    }
    else{
      return 'lb-main-nav-link lb-main-nav-link-active';
    }
  };
  const toggle = () => {
    setExpanded((isExpanded)=>!isExpanded);
  };
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="sm"
      className='round-top-edges'
      id='lb-main-navbar'
      expanded={expanded}
    >
      <Container>
        <NavLink to="../">
          <Navbar.Brand>
            <img
              src='lingo-bingo-logo-bravo-67-40.png'
              alt="Click to return to LingoBingo home page"
              width={'67px'}
              height={'40px'}
            />
          </Navbar.Brand>
        </NavLink>
        <img src='icons8-brightness-32.png' alt="click to switch themes" className='me-auto enable-pointer' onClick={props.handleSwapTheme()}></img>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggle}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink onClick={toggle} className={activeFunc} to="/" end>Home</NavLink>
              <NavLink onClick={toggle} className={activeFunc} to="../about">About Us</NavLink>
              <NavLink onClick={toggle} className={activeFunc} to="../play">Play LingoBingo</NavLink>
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
