import React from 'react';
import './root.css';
import './tempstyle.css';

export default function Home() {
  return (
    <div>
      <header>
        <div className='logo-container'>
          <h2>Logo</h2>
        </div>
        <div className='nav-container'>
          <h3>Nav placeholder</h3>
        </div>
      </header>
      <section>
        <h1>Home Component</h1>
        <p>About component placeholder</p>
        <p>Description component placeholder</p>
        <p>GameBoard placeholder</p>
      </section>
    </div>
  );
}
