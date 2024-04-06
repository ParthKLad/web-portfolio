import React from 'react';
import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const UpArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Define a function to determine the right position based on screen width
  const getRightPosition = () => {
    return window.innerWidth < 768 ? '-10px' : '10px'; // Example breakpoint at 768px
  };

  const [rightPosition, setRightPosition] = React.useState(getRightPosition());

  React.useEffect(() => {
    const handleResize = () => {
      setRightPosition(getRightPosition());
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
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

  return (
    <>
      <style>{bounceAnimation}</style>
      <IconButton
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: rightPosition, // Use the state variable
          zIndex: 1000,
          color: '#15CFDD', // Arrow color
          backgroundColor: 'transparent', // Background color
          border: 'none',
          animation: 'bounce 2s infinite', // Applying bounce animation
        }}
      >
        <KeyboardArrowUpIcon style={{ fontSize: '48px' }} /> {/* Making the arrow bigger */}
      </IconButton>
    </>
  );
};

export default UpArrow;
