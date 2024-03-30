import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Grow } from '@mui/material';
import './Home.css'; // Ensure this is adjusted or augmented for new styling

function Home() {
  const [phrase, setPhrase] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const phrases = ["Developer", "Information Technology Specialist", "Cloud Specialist"];

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
  }, [subIndex, index, reverse, phrases]);

  return (
    <Box textAlign="center" p={5}>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
        <Typography variant="h4" gutterBottom>Hello, my name is</Typography>
      </Grow>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1500 } : {})}>
        <Typography variant="h3" gutterBottom>Parth Lad</Typography>
      </Grow>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 2000 } : {})}>
        <Typography variant="h5">And I'm a <span className="typing">{phrase}</span></Typography>
      </Grow>
      <Button variant="contained" sx={{ mt: 2, backgroundColor: 'rgb(20,206,220)', '&:hover': { backgroundColor: 'rgb(17,185,197)' } }} href="#contact">
        Hire Me
      </Button>
    </Box>
  );
}

export default Home;
