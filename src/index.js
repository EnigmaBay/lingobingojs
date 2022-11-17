import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './root.css';
// import App from './App';
import Home from './Home';
import GameSession from './GameSession.js';
import About from './About.js';
import Description from './Description.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './root.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='root-container'>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route index element={<Description/>} />
            <Route path="about" element = {<About/>}/>
            <Route path="signup" element = {''}/>
            <Route path="login" element = {''}/>
            <Route path="play" element = {<GameSession/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);
