import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const UpArrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Function to update the showArrow state based on scroll position
  const handleScroll = () => {
    const home = document.getElementById('home'); // Ensure you have a home section with an id="home"
    const homeHeight = home ? home.offsetHeight : 0;
    const shouldShow = window.scrollY > homeHeight;
    setShowArrow(shouldShow);
  };

  // Define a function to determine the right position based on screen width
  const getRightPosition = () => {
    return window.innerWidth < 768 ? '-10px' : '10px'; // Example breakpoint at 768px
  };

  const [rightPosition, setRightPosition] = useState(getRightPosition());

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => setRightPosition(getRightPosition()));

    // Check immediately if we're already past the home section on component mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => setRightPosition(getRightPosition()));
    };
  }, []);

  const bounceAnimation = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-20px);
      }
      60% {
        transform: translateY(-10px);
      }
    }
  `;

  if (!showArrow) {
    return null;
  }

  return (
    <>
      <style>{bounceAnimation}</style>
      <IconButton
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: rightPosition,
          zIndex: 1000,
          color: '#15CFDD',
          backgroundColor: 'transparent',
          border: 'none',
          animation: 'bounce 2s infinite',
        }}
      >
        <KeyboardArrowUpIcon style={{ fontSize: '48px' }} />
      </IconButton>
    </>
  );
};

export default UpArrow;
