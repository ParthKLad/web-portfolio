import React, { useState, useContext, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Typography, Button, useMediaQuery, useTheme, CssBaseline,
  Drawer, List, ListItem, ListItemText, IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import the Menu icon for the hamburger menu
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeContext } from '../context/ThemeContext';

function Navbar({ refs }) {
  const { themeType, toggleTheme } = useContext(ThemeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const homePosition = refs.homeRef.current ? refs.homeRef.current.getBoundingClientRect() : null;
      if (homePosition && homePosition.top >= -10) {
        setActiveNav('Home');
      } else {
        setActiveNav('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [refs]);

  const navItems = [
    { name: 'Home', ref: refs.homeRef },
    { name: 'About', ref: refs.aboutRef },
    { name: 'Projects', ref: refs.projectsRef },
    { name: 'Skills', ref: refs.skillsRef },
    { name: 'Contact', ref: refs.contactsRef },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavItemClicked = (name, ref) => {
    setActiveNav(name);
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      handleDrawerToggle();
    }
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" sx={{
        background: themeType === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        color: theme.palette.getContrastText(theme.palette.background.default),
        transition: 'all 0.3s ease',
      }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Box onClick={() => handleNavItemClicked('Home', refs.homeRef)} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ color: themeType === 'dark' ? '#0982B5' : '#FFF', '&:hover': { color: '#FFF' }, transition: 'color 0.3s' }}>Parth</Typography>
            <Typography variant="h6" sx={{ color: themeType === 'dark' ? '#FFF' : '#0982B5', '&:hover': { color: '#0982B5' }, transition: 'color 0.3s', ml: 1 }}>Lad</Typography>
          </Box>
          {isMobile ? ( // Render hamburger menu icon for mobile
            <IconButton onClick={handleDrawerToggle} color="inherit">
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => handleNavItemClicked(item.name, item.ref)}
                  sx={{
                    color: 'inherit',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-3px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: theme.palette.primary.main,
                      opacity: 0,
                      transition: 'opacity 300ms',
                    },
                    '&:hover::after': {
                      opacity: 1,
                    },

                    
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <IconButton onClick={toggleTheme} color="inherit">
                {themeType === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer anchor='right' open={drawerOpen} onClose={handleDrawerToggle}>
          <List>
            {navItems.map((item, index) => (
              <ListItem button key={index} onClick={() => handleNavItemClicked(item.name, item.ref)}>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
      <Box sx={{ pt: 8 }}>
        {/* Page Content */}
      </Box>
    </>
  );
}

export default Navbar;
