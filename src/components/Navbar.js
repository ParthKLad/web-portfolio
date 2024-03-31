import React, { useState, useContext, useEffect } from 'react';
import {
  AppBar, Toolbar, IconButton, Box, Drawer, List, ListItem, ListItemIcon, ListItemText,
  useMediaQuery, useTheme, CssBaseline, Tooltip, Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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
  const [activeNav, setActiveNav] = useState('Home');

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
    setActiveNav(item.name);
    if (item.ref && item.ref.current) {
      item.ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    handleDrawerToggle();
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" sx={{
        background: activeNav === 'Home' ? 'transparent' : '#14CEDC',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        transition: 'background-color 0.3s',
        color: theme.palette.getContrastText(theme.palette.background.default),
        height: '56px',
        justifyContent: 'space-between',
      }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {!isMobile && (
            <Typography variant="h6" sx={{ flexGrow: 1, userSelect: 'none' }}>
              <div className="name-container">
                <span className="name-part parth" style={{ marginRight: '10px' }}>Parth</span>
                <span className="name-part lad">Lad</span>
              </div>
            </Typography>
          )}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!isMobile && navItems.map((item, index) => (
              <Tooltip key={index} title={item.label} placement="bottom">
                <IconButton
                  onClick={() => handleNavItemClicked(item)}
                  color="inherit"
                  sx={{
                    mx: 2,
                    borderRadius: '10px',
                    '&:hover, &:focus': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    ...(activeNav === item.name && {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      boxShadow: 'inset 0 0 10px 5px rgba(0, 0, 0, 0.1)',
                    }),
                  }}
                >
                  {item.icon}
                </IconButton>
              </Tooltip>
            ))}
            {!isMobile && (
              <Tooltip title="Toggle light/dark theme">
                <IconButton onClick={toggleTheme} color="inherit">
                  {themeType === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </Tooltip>
            )}
          </Box>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                ml: 'auto', // ensures the icon button is aligned to the right on mobile
                ...(drawerOpen && {
                  // Apply the rotate animation when drawer is open
                  animation: 'rotate-open 0.5s forwards',
                }),
                ...(!drawerOpen && {
                  // Apply the rotate animation when drawer is closed
                  animation: 'rotate-close 0.5s forwards',
                }),
              }}
            >
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      
      {isMobile && (
        <Drawer anchor='right' open={drawerOpen} onClose={handleDrawerToggle}>
          <List>
            {navItems.map((item, index) => (
              <ListItem button key={index} onClick={() => handleNavItemClicked(item)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem button onClick={toggleTheme}>
              <ListItemIcon>{themeType === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}</ListItemIcon>
              <ListItemText primary="Toggle" />
            </ListItem>
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
