import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarMain from './NavbarMain.js';
import Container from 'react-bootstrap/Container';
import '../CSS/root.css';
import '../CSS/dev-theme.css';


export default function Home() {
  const [theme, setTheme] = React.useState('dark');
  const swapTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  return (
    <Container id='home-component' fluid='sm'>
      <NavbarMain handleSwapTheme={()=>swapTheme}/>
      <Outlet id='content' context={[theme]}/>
    </Container>
  );
}
