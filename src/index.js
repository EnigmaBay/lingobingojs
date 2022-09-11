import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './root.css';
// import App from './App';
import Home from './Home';
import Gameboard from './Gameboard.js';
import About from './About.js';
import Description from './Description.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './root.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="about" element = {<About/>}/>
          <Route path="home" element = {<Description/>}/>
          <Route path="signup" element = {''}/>
          <Route path="login" element = {''}/>
          <Route path="play" element = {<Gameboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
