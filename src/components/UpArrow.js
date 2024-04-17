// In UpArrow.js
import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const UpArrow = ({ homeRef }) => { // Accept homeRef as a prop
  const [showArrow, setShowArrow] = useState(false);

  const scrollToTop = () => {
    if (homeRef && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Home ref is not assigned');
    }
  };

  const handleScroll = () => {
    const shouldShow = window.scrollY > 100; // Simplified for demonstration
    setShowArrow(shouldShow);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!showArrow) {
    return null;
  }

  return (
    <IconButton
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '10px', // Simplified for demonstration
        zIndex: 1000,
        color: '#15CFDD',
        backgroundColor: 'transparent',
        border: 'none',
      }}
    >
      <KeyboardArrowUpIcon style={{ fontSize: '48px' }} />
    </IconButton>
  );
};

export default UpArrow;
