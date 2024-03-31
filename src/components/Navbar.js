import React, { useState, useContext } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemIcon, ListItemText,
  useMediaQuery, useTheme, CssBaseline, Tooltip
} from '@mui/material';

// eslint-disable-next-line no-unused-vars
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import PersonIcon from '@mui/icons-material/PersonOutline';
import WorkIcon from '@mui/icons-material/WorkOutline';
import CodeIcon from '@mui/icons-material/CodeOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeContext } from '../context/ThemeContext';

function Navbar({ refs }) {
  const { themeType, toggleTheme } = useContext(ThemeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { name: 'Home', ref: refs.homeRef, icon: <HomeIcon />, label: 'Home' },
    { name: 'About', ref: refs.aboutRef, icon: <PersonIcon />, label: 'About' },
    { name: 'Projects', ref: refs.projectsRef, icon: <WorkIcon />, label: 'Projects' },
    { name: 'Skills', ref: refs.skillsRef, icon: <CodeIcon />, label: 'Skills' },
    { name: 'Contact', ref: refs.contactsRef, icon: <EmailIcon />, label: 'Contact' },
  ];

  const handleNavItemClicked = (item) => {
    if (item.ref && item.ref.current) {
      item.ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      handleDrawerToggle();
    }
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" sx={{ background: '#1A1A1A', color: '#fff', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between', padding: '0 10px' }}>
          <Typography variant="h6" sx={{ flexGrow: 1, userSelect: 'none' }}>
            Parth Lad
          </Typography>
          
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navItems.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>
                  <IconButton
                    onClick={() => handleNavItemClicked(item)}
                    color="inherit"
                    sx={{ padding: 0, marginRight: '8px' }}
                  >
                    {item.icon}
                  </IconButton>
                  <Typography
                    onClick={() => handleNavItemClicked(item)}
                    sx={{ cursor: 'pointer', display: 'block', color: '#fff', '&:hover': { color: '#11B9C5' } }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
          
          {/* Theme Toggle Button */}
          <Tooltip title="Toggle light/dark theme">
            <IconButton onClick={toggleTheme} color="inherit">
              {themeType === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
          
          {/* Hamburger Menu for Mobile */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              backgroundColor: '#1A1A1A',
              color: '#fff',
              width: 240
            },
          }}
        >
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.name} onClick={() => handleNavItemClicked(item)}>
                <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}

      {/* Padding to offset content behind AppBar */}
      <Box sx={{ pt: 10 }}>
        {/* Page Content */}
      </Box>
    </>
  );
}

export default Navbar;
