import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Welcome = () => {
  const [text, setText] = useState('');
  const [opacity, setOpacity] = useState(0); // Initial opacity set to 0 to start hidden
  const messages = [
    '> Hello World ...',
    '> Initializing...',
    '> Loading modules...',
    '> Access Granted.',
    '> Welcome to Parthl.com...'
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  
  useEffect(() => {
    if (index >= messages.length) {
      setTimeout(() => {
        setOpacity(0); // Fade out after all messages are displayed
      }, 2000); // Delay fade out to allow reading the last message
      return;
    }

    const timeout = setTimeout(() => {
      setText(text + messages[index][subIndex]);
      setSubIndex(subIndex + 1);

      if (subIndex >= messages[index].length - 1) {
        setText(text => text + '\n'); // Move to next line after a message is complete
        setIndex(index + 1);
        setSubIndex(0);
      }
    }, 40); // Adjust the speed of typing here

    return () => clearTimeout(timeout);
  }, [text, subIndex, index]);

  useEffect(() => {
    setTimeout(() => {
      setBlink(false); // Stop blinking cursor after 2 seconds
    }, 2000);

    setTimeout(() => {
      setOpacity(1); // Start fading in almost immediately after component mounts
    }, 100);

  }, []);

  const handleScreenClick = () => {
    setOpacity(0); // Hide the screen on click
  };

  return (
    <Box sx={{
      backgroundColor: 'rgb(21,50,65)',
      color: 'lime',
      fontFamily: 'Courier New, Courier, monospace',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1200,
      overflow: 'hidden',
      flexDirection: 'column',
      padding: '20px',
      transition: 'opacity 1s ease-in-out',
      opacity: opacity,
      cursor: 'pointer'
    }} onClick={handleScreenClick}>
      <Typography component="pre" variant="body1" sx={{
        color: 'lime',
        fontFamily: 'monospace',
        textAlign: 'left',
        whiteSpace: 'pre-wrap',
        padding: '10px',
        border: '1px solid lime',
        width: '80%',
        maxWidth: '700px'
      }}>
        {text}<span style={{
          opacity: 1,
          animation: blink ? 'blink-animation 1s steps(5, start) infinite' : 'none',
          display: 'inline'
        }}>_</span>
      </Typography>
    </Box>
  );
};

export default Welcome;
