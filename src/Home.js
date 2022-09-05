import React from 'react';
import About from './About.js';
import Description from './Description.js';
import NavbarMain from './NavbarMain.js';
import Container from 'react-bootstrap/Container';
import './root.css';
import './tempstyle.css';
import Gameboard from './Gameboard.js';

export default function Home() {
  return (
    <div>
      <header>
        <Container fluid>
          <NavbarMain/>
        </Container>
      </header>
      <section>
        <h1>Home Component</h1>
        <Description/>
        <About />
        <Gameboard />
      </section>
    </div>
  );
}
