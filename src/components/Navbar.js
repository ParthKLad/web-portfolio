import React, { useState, useContext } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemText,
  useMediaQuery, useTheme 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeContext } from '../context/ThemeContext';
import '../components/Navbar.css';

function Navbar({ refs }) {
  const { themeType, toggleTheme } = useContext(ThemeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const navItems = [
    { name: 'Home', ref: refs.homeRef },
    { name: 'About', ref: refs.aboutRef },
    { name: 'Projects', ref: refs.projectsRef },
    { name: 'Skills', ref: refs.skillsRef },
    { name: 'Contact', ref: refs.contactsRef },
  ];

  const handleNavItemClicked = (ref) => {
    // Close the drawer if open, navigate to the selected section
    handleDrawerClose();
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="static" sx={{ background: '#123456', color: '#fff' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Parth Lad
        </Typography>
        
        {/* Theme Toggle Button */}
        <IconButton onClick={toggleTheme} color="inherit">
          {themeType === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        
        {/* Hamburger Menu for Mobile */}
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={'right'}
              open={drawerOpen}
              onClose={handleDrawerClose}
              sx={{
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: 'auto',
                  backgroundColor: '#333',
                  color: '#fff'
                },
              }}
            >
              <Box
                role="presentation"
                onClick={handleDrawerClose}
                onKeyDown={handleDrawerClose}
                sx={{ width: '250px' }}
              >
                <IconButton onClick={handleDrawerClose} sx={{ justifyContent: 'flex-end', display: 'block' }}>
                  <CloseIcon />
                </IconButton>
                <List>
                  {navItems.map((item, index) => (
                    <ListItem button key={index} onClick={() => handleNavItemClicked(item.ref)}>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          // Navigation for Larger Screens
          navItems.map((item, index) => (
            <Typography
              key={index}
              onClick={() => handleNavItemClicked(item.ref)}
              sx={{ margin: '0 10px', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
            >
              {item.name}
            </Typography>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
