import React, { useState, useEffect, useContext } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';
import './Home.css';

const phrases = [" a Developer", " an IT Specialist"];

function Home({ handleNavItemClicked, navItems }) {
  const [phrase, setPhrase] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const { themeType } = useContext(ThemeContext);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setReverse(true);
      setTimeout(() => setSubIndex(subIndex - 1), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setPhrase((prev) => phrases[index].substring(0, reverse ? prev.length - 1 : prev.length + 1));
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <Box 
      textAlign="left" 
      p={5} 
      className="console-text"
      sx={{
        backgroundColor: themeType === 'dark' ? 'rgb(36, 36, 36)' : 'rgb(255, 255, 255)',
        color: themeType === 'dark' ? 'rgb(236, 243, 236)' : 'rgb(0, 0, 0)'
      }}
    >
      <div className="window-controls">
        <span className="close"></span>
        <span className="minimize"></span>
        <span className="maximize"></span>
      </div>
      <Typography variant="h4" gutterBottom>Hello, my name is Parth Lad</Typography>
      <Typography variant="h4" gutterBottom>
        I am {phrase}<span className="blinking-cursor"></span>
      </Typography>
      <Button 
        variant="contained" 
        sx={{
          mt: 2,
          backgroundColor: 'rgb(20,206,220)',
          color: themeType === 'dark' ? 'rgb(236, 243, 236)' : 'rgb(255, 255, 255)', // Invert the text color based on the theme
          '&:hover': {
            backgroundColor: 'rgb(15,196,210)', // A slightly darker shade for the hover state
            color: themeType === 'dark' ? 'rgb(236, 243, 236)' : 'rgb(255, 255, 255)'
          }
        }} 
        onClick={() => handleNavItemClicked(navItems.find(item => item.name === 'Contact'))}
      >
        Hire Me
      </Button>
    </Box>
  );
}

export default Home;