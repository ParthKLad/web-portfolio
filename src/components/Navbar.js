import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Adjust the path as necessary
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './Navbar.css';

function Navbar() {
  const { themeType, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2> Parth Lad</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <button onClick={toggleTheme} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
        {themeType === 'dark' ? <LightModeIcon style={{ color: '#FFF' }} /> : <DarkModeIcon style={{ color: '#000' }} />}
      </button>
    </nav>
  );
}

export default Navbar;
