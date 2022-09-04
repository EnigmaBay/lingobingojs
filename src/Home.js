import React from 'react';
import Logo from './Logo.js';
import About from './About.js';
import Description from './Description.js';
import NavbarMain from './NavbarMain.js';
import Container from 'react-bootstrap/Container';
import './root.css';
import './tempstyle.css';

export default function Home() {
  return (
    <div>
      <header>
        <div className='logo-container'>
          <Logo />
        </div>
        <Container fluid>
          <NavbarMain/>
        </Container>
      </header>
      <section>
        <h1>Home Component</h1>
        <Description/>
        <About />
        <p>Gameboard component placeholder</p>
      </section>
    </div>
  );
}
