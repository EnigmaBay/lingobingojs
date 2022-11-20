import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarMain from './NavbarMain.js';
import Container from 'react-bootstrap/Container';
import './root.css';
import './dev-theme.css';


export default function Home() {
  const [theme, setTheme] = React.useState('dark');
  const swapTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  return (
    <Container>
      <NavbarMain handleSwapTheme={()=>swapTheme}/>
      <Outlet context={[theme]}/>
    </Container>
  );
}
