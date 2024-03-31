import React, { useState, useContext, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Typography, Button, useMediaQuery, useTheme, CssBaseline,
  Drawer, List, ListItem, ListItemText
} from '@mui/material';
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
  }, [refs.homeRef]);


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
    handleDrawerToggle();
  };
  

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" sx={{
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        transition: 'all 0.3s',
      }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
            <Box onClick={() => handleNavItemClicked('Home', refs.homeRef)}>
              <Typography
                sx={{
                  mr: 1, fontWeight: themeType === 'dark' ? 300 : 700,
                  color: themeType === 'dark' ? '#0B83B3' : '#FFF',
                  '&:hover': { color: themeType === 'dark' ? '#FFF' : '#0B83B3', },
                }}
              >
                Parth
              </Typography>
              <Typography
                sx={{
                  fontWeight: themeType === 'dark' ? 700 : 300,
                  color: themeType === 'dark' ? '#FFF' : '#0B83B3',
                  '&:hover': { color: themeType === 'dark' ? '#0B83B3' : '#FFF', },
                }}
              >
                Lad
              </Typography>
            </Box>
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => handleNavItemClicked(item.name, item.ref)}
                  sx={{
                    mx: 2,
                    color: 'inherit',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: activeNav === item.name ? '100%' : '0',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      bgcolor: '#0B83B3',
                      transition: 'width 0.3s',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                    '&:hover': {
                      color: '#0B83B3',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Button onClick={toggleTheme} sx={{ ml: 2 }}>
                {themeType === 'dark' ? <Typography>Light</Typography> : <Typography>Dark</Typography>}
              </Button>
            </Box>
          )}

          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button onClick={toggleTheme}>
                {themeType === 'dark' ? <Typography>Light</Typography> : <Typography>Dark</Typography>}
              </Button>
              <Button onClick={handleDrawerToggle} sx={{ ml: 2 }}>
                <Typography sx={{ transform: drawerOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
                  {drawerOpen ? '✕' : '☰'}
                </Typography>
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {isMobile && (
        <Drawer anchor='right' open={drawerOpen} onClose={handleDrawerToggle} sx={{ '.MuiDrawer-paper': { width: '75%' } }}>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.name} onClick={() => handleNavItemClicked(item.name, item.ref)}>
                <ListItemText primary={item.name} sx={{ textAlign: 'center' }} />
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