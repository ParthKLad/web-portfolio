import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Button,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import "./Home.css";
import { useThemeContext } from "../context/ThemeContext";

// Add browser tab animation styles
const browserTabAnimationStyles = `
  @keyframes popIn {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .browser-tab-red {
    animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.1s both;
  }

  .browser-tab-yellow {
    animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s both;
  }

  .browser-tab-green {
    animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s both;
  }
`;

// Inject styles
if (!document.querySelector('style[data-browser-tab]')) {
  const styleSheet = document.createElement("style");
  styleSheet.setAttribute('data-browser-tab', 'true');
  styleSheet.textContent = browserTabAnimationStyles;
  document.head.appendChild(styleSheet);
}

const phrases = ["a Developer", "an IT Specialist"];

function Home({ handleNavItemClicked, navItems }) {
  const [phrase, setPhrase] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { themeType } = useThemeContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (subIndex === phrases[index].length + 1 && !reverse) {
        setReverse(true);
        setTimeout(() => setSubIndex(subIndex - 1), 1000);
      } else if (subIndex === 0 && reverse) {
        setReverse(false);
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      } else {
        setPhrase((prev) =>
          phrases[index].substring(
            0,
            reverse ? prev.length - 1 : prev.length + 1
          )
        );
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [subIndex, index, reverse, phrases]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* SSH Terminal Window */}
      <Box className="terminal-window" sx={{
        width: isMobile ? '95%' : '80%',
        maxWidth: '700px',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 20px 68px rgba(0, 0, 0, 0.55)',
        backgroundColor: '#1e1e1e',
      }}>
        {/* Terminal Header */}
        <Box className="terminal-header" sx={{
          backgroundColor: '#3c3c3c',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}>
          {/* Window Controls */}
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <Box className="browser-tab-red" sx={{ width: 12, height: 12, backgroundColor: '#fc605b', borderRadius: '50%', cursor: 'pointer', '&:hover': { backgroundColor: '#ff5f57' } }} />
            <Box className="browser-tab-yellow" sx={{ width: 12, height: 12, backgroundColor: '#fecb2f', borderRadius: '50%', cursor: 'pointer', '&:hover': { backgroundColor: '#ffbd2e' } }} />
            <Box className="browser-tab-green" sx={{ width: 12, height: 12, backgroundColor: '#2aca3e', borderRadius: '50%', cursor: 'pointer', '&:hover': { backgroundColor: '#27c93f' } }} />
          </Box>
          {/* Terminal Title */}
          <Typography sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#9a9a9a',
            fontSize: '13px',
            fontFamily: 'monospace',
          }}>
            parth@portfolio: ~
          </Typography>
        </Box>
        
        {/* Terminal Body */}
        <Box className="terminal-body" sx={{
          padding: isMobile ? '20px 15px' : '30px 25px',
          backgroundColor: '#1e1e1e',
          minHeight: '200px',
        }}>
          <Typography 
            className="terminal-line"
            sx={{ 
              fontFamily: '"Fira Code", "Courier New", Courier, monospace',
              color: '#50fa7b',
              fontSize: isMobile ? '14px' : '18px',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ color: '#ff79c6' }}>parth@portfolio</span>
            <span style={{ color: '#f8f8f2' }}>:</span>
            <span style={{ color: '#8be9fd' }}>~</span>
            <span style={{ color: '#f8f8f2' }}>$ </span>
            <span style={{ color: '#f8f8f2' }}>echo "Hello, my name is Parth Lad"</span>
          </Typography>
          <Typography 
            sx={{ 
              fontFamily: '"Fira Code", "Courier New", Courier, monospace',
              color: '#f8f8f2',
              fontSize: isMobile ? '14px' : '18px',
              marginBottom: '20px',
              paddingLeft: '10px',
            }}
          >
            Hello, my name is Parth Lad
          </Typography>
          
          <Typography 
            className="terminal-line"
            sx={{ 
              fontFamily: '"Fira Code", "Courier New", Courier, monospace',
              color: '#50fa7b',
              fontSize: isMobile ? '14px' : '18px',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ color: '#ff79c6' }}>parth@portfolio</span>
            <span style={{ color: '#f8f8f2' }}>:</span>
            <span style={{ color: '#8be9fd' }}>~</span>
            <span style={{ color: '#f8f8f2' }}>$ </span>
            <span style={{ color: '#f8f8f2' }}>whoami</span>
          </Typography>
          <Typography 
            sx={{ 
              fontFamily: '"Fira Code", "Courier New", Courier, monospace',
              color: '#f8f8f2',
              fontSize: isMobile ? '14px' : '18px',
              marginBottom: '20px',
              paddingLeft: '10px',
            }}
          >
            {phrase}<span className="blinking-cursor">|</span>
          </Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: "rgb(20,206,220)",
          "&:hover": { 
            backgroundColor: "rgb(17,185,197)",
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 16px rgba(20, 206, 220, 0.15)'
          },
          borderRadius: 8,
          transition: 'all 0.3s ease'
        }}
        onClick={() =>
          handleNavItemClicked(
            navItems.find((item) => item.name === "Contact")
          )
        }
      >
        Seeking New Opportunities
      </Button>
    </Container>
  );
}

export default Home;
