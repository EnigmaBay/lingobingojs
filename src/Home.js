import React from 'react';
import Logo from './Logo.js';
import About from './About.js';
import Description from './Description.js';
import './root.css';
import './tempstyle.css';
import Gameboard from './Gameboard.js';

export default function Home() {
  return (
    <div>
      <header>
        <div className='logo-container'>
          <Logo />
        </div>
        <div className='nav-container'>
          <h3>Nav placeholder</h3>
        </div>
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
