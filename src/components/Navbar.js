import React, { useState, useContext, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Typography, Button, useMediaQuery, useTheme, CssBaseline,
  List, ListItem, ListItemText, IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeContext } from '../context/ThemeContext';
import './Navbar.css';

function Navbar({ refs }) {
  // Theme context for light/dark mode toggle
  const { themeType, toggleTheme } = useContext(ThemeContext);
  
  // State for active navigation link
  const [activeNav, setActiveNav] = useState('Home');
  
  // State to handle the drawer toggle
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  // Media query hook to handle mobile screen size detection
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Effect hook to handle scroll events for activating navigation links
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
  }, [refs, activeNav]);

  // Navigation items for the app
  const navItems = [
    { name: 'Home', ref: refs.homeRef },
    { name: 'About', ref: refs.aboutRef },
    { name: 'Projects', ref: refs.projectsRef },
    { name: 'Skills', ref: refs.skillsRef },
    { name: 'Contact', ref: refs.contactsRef },
  ];

  // Function to handle the drawer toggle action
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Function to handle clicking on a navigation item
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
        background: 'transparent',
        boxShadow: 'none',
        color: themeType === 'dark' ? '#FFF' : '#000',
        transition: 'all 0.3s ease',
      }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo and Title: Clicking redirects to the home section */}
          <Box onClick={() => handleNavItemClicked('Home', refs.homeRef)} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" className="led-effect" sx={{ color: themeType === 'dark' ? '#0982B5' : '#0982B5', transition: 'color 0.3s' }}>Parth</Typography>
          <Typography variant="h5" className="led-effect" sx={{ color: themeType === 'dark' ? '#FFF' : '#0982B5', transition: 'color 0.3s', ml: 0.5 }}>Lad</Typography>
        </Box>
          {/* Mobile-specific Toolbar layout */}
          {isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* Theme mode toggle button */}
              <IconButton onClick={toggleTheme} color="inherit">
                {themeType === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              {/* Spacer to push hamburger to the right */}
              <Box sx={{ flexGrow: 1 }} />
              {/* Hamburger menu button */}
              <IconButton onClick={handleDrawerToggle} color="inherit" className={`hamburger ${drawerOpen ? 'open' : ''}`}>
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            // Non-mobile navigation layout
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                onClick={() => handleNavItemClicked(item.name, item.ref)}
                className="nav-item" // Added a class for targeting
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
                    backgroundColor: 'transparent', // Default state is transparent
                    opacity: 0,
                    transition: 'opacity 300ms, backgroundColor 300ms', // Added backgroundColor to the transition
                  },
                  '&:hover::after': {
                    opacity: 1,
                    backgroundColor: themeType === 'dark' ? '#10f3e8' : '#10f3e8', // LED color on hover
                  },
                }}
              >
                {item.name}
              </Button>
              ))}
              {/* Theme mode toggle button for non-mobile */}
              <IconButton onClick={toggleTheme} color="inherit">
                {themeType === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      {/* Mobile drawer and overlay for navigation */}
      {isMobile && (
        <>
          {drawerOpen && (
            // Overlay that closes the drawer on click
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1299,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                cursor: 'pointer',
              }}
              onClick={handleDrawerToggle}
            ></div>
          )}
          {/* Drawer for mobile navigation items */}
          <div
            className={`${drawerOpen ? 'drawerSlideIn' : 'drawerSlideOut'} ${themeType === 'dark' ? 'drawerDark' : 'drawerLight'}`}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '250px',
              height: '100%',
              overflowX: 'hidden',
              zIndex: 1300,
              backdropFilter: drawerOpen ? 'blur(8px)' : 'none',
              backgroundColor: drawerOpen ? (themeType === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)') : 'transparent',
              color: themeType === 'dark' ? '#FFF' : '#000',
            }}
          >
            <List>
              {/* List of navigation items in the drawer */}
              {navItems.map((item, index) => (
                <ListItem 
                  button 
                  key={index} 
                  onClick={() => handleNavItemClicked(item.name, item.ref)}
                  style={{ color: themeType === 'dark' ? '#FFF' : '#000' }}
                >
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </div>
        </>
      )}
      {/* Main content container spacing */}
      <Box sx={{ pt: 8 }}>
        {/* Page Content */}
      </Box>
    </>
  );
}

export default Navbar;
