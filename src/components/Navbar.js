import React, { useState, useContext } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemText,
  useMediaQuery, useTheme, CssBaseline
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
  const [activeSection, setActiveSection] = useState('Home');
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

  const handleNavItemClicked = (name, ref) => {
    setActiveSection(name);
    handleDrawerClose();
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" sx={{ background: '#123456', color: '#fff' }}>
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
                aria-label={drawerOpen ? "close drawer" : "open drawer"}
                edge="end"
                onClick={drawerOpen ? handleDrawerClose : handleDrawerOpen}
                sx={{
                  ...(drawerOpen && {
                    transform: "rotate(180deg)",
                    transition: theme.transitions.create("transform", {
                      duration: theme.transitions.duration.short,
                    }),
                  }),
                }}
              >
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <Drawer
                anchor={'right'}
                open={drawerOpen}
                onClose={handleDrawerClose}
                sx={{
                  '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: 240,
                    backgroundColor: '#333',
                    color: '#fff',
                    padding: '0 8px',
                  },
                }}
              >
                <Box
                  role="presentation"
                  onClick={handleDrawerClose}
                  onKeyDown={handleDrawerClose}
                >
                  <List>
                    {navItems.map((item, index) => (
                      <ListItem button key={index} onClick={() => handleNavItemClicked(item.name, item.ref)}>
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
                onClick={() => handleNavItemClicked(item.name, item.ref)}
                sx={{
                  margin: '0 10px',
                  cursor: 'pointer',
                  borderBottom: activeSection === item.name ? '3px solid #fff' : 'none',
                  '&:hover': {
                    color: '#0af5e1',
                  },
                }}
              >
                {item.name}
              </Typography>
            ))
          )}
        </Toolbar>
      </AppBar>
      {/* Add padding to the content so it isn't hidden behind the AppBar */}
      <Box sx={{ pt: 8 }}>
        {/* Your page content goes here */}
      </Box>
    </>
  );
}

export default Navbar;
