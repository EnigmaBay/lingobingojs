import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './CSS/root.css';
import Home from './Components/Home';
import GameSession from './Components/GameSession.js';
import About from './Components/About.js';
import Description from './Components/Description.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProviderWrapper from './Auth/AuthProviderWrapper';
import PresenterPage from './Components/PresenterPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <BrowserRouter className='top-level-container'>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Description />} />
            <Route path='about' element={<About />} />
            <Route path='presenter' element={<PresenterPage />} />
            <Route path='play' element={<GameSession />} />
            <Route path='play/:gameboardId' element={<GameSession />} />
            <Route path='play/:gameboardId/:param2' element={<GameSession />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProviderWrapper>
  </React.StrictMode>
);
