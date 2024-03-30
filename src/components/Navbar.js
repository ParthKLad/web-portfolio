import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeContext } from '../context/ThemeContext'; // Adjust the import path as necessary

function Navbar() {
  const { themeType, toggleTheme } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" sx={{ marginBottom: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Parth Lad
        </Typography>
        {!isMobile && (
          <>
            <Button color="inherit" href="/">Home</Button>
            <Button color="inherit" href="/about">About</Button>
            <Button color="inherit" href="/skill">Skills</Button>
            <Button color="inherit" href="/project">projects</Button>
            <Button color="inherit" href="/contact">Contacts</Button>
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
              <MenuItem onClick={handleClose} component="a" href="/">Home</MenuItem>
              <MenuItem onClick={handleClose} component="a" href="/about">About</MenuItem>
              <MenuItem onClick={handleClose} component="a" href="/skills">Skills</MenuItem>
              <MenuItem onClick={handleClose} component="a" href="/project">projects</MenuItem>
              <MenuItem onClick={handleClose} component="a" href="/contact">Contacts</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
