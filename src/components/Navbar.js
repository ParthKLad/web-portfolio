import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { ThemeContext } from '../context/ThemeContext'; // Adjust the import path as necessary
import '../components/Navbar.css'; // Add this line to import the CSS file

function Navbar() {
  const { themeType, toggleTheme } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState('Home');
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    handleClose();
  };

  const navItems = [
    { name: 'Home', icon: <HomeIcon />, href: '/' },
    { name: 'About', icon: <InfoIcon />, href: '/about' },
    { name: 'Skills', icon: <BuildIcon />, href: '/skill' },
    { name: 'Projects', icon: <WorkIcon />, href: '/project' },
    { name: 'Contacts', icon: <ContactMailIcon />, href: '/contact' },
  ];

  return (
    <AppBar position="static" color="default" sx={{ marginBottom: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Parth Lad
        </Typography>
        {!isMobile && (
          <>
            {navItems.map((item) => (
              <Button
                key={item.name}
                color="inherit"
                href={item.href}
                onClick={() => handleTabClick(item.name)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textDecoration: activeTab === item.name ? 'underline' : 'none',
                }}
              >
                {item.icon}
                {item.name}
              </Button>
            ))}
          </>
        )}
        <IconButton onClick={toggleTheme} color="inherit">
          {themeType === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        {isMobile && (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.name}
                  onClick={() => handleTabClick(item.name)}
                  component="a"
                  href={item.href}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {item.icon}
                    {item.name}
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
