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

// Theme colors for terminal
const terminalThemes = {
  dark: {
    windowBg: '#1e1e1e',
    headerBg: '#3c3c3c',
    headerBorder: '#4a4a4a',
    titleColor: '#9a9a9a',
    bodyBg: '#1e1e1e',
    prompt: '#50fa7b',
    username: '#ff79c6',
    separator: '#f8f8f2',
    path: '#8be9fd',
    text: '#f8f8f2',
    shadow: '0 20px 68px rgba(0, 0, 0, 0.55)',
  },
  light: {
    windowBg: '#f5f5f5',
    headerBg: '#e0e0e0',
    headerBorder: '#d0d0d0',
    titleColor: '#666666',
    bodyBg: '#fafafa',
    prompt: '#2e7d32',
    username: '#c2185b',
    separator: '#333333',
    path: '#0277bd',
    text: '#333333',
    shadow: '0 20px 68px rgba(0, 0, 0, 0.15)',
  },
};

function Home({ handleNavItemClicked, navItems }) {
  const [phrase, setPhrase] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { themeType } = useThemeContext();
  const colors = terminalThemes[themeType] || terminalThemes.dark;

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
      <Box className={`terminal-window ${themeType === 'light' ? 'terminal-light' : ''}`} sx={{
        width: isMobile ? '95%' : '80%',
        maxWidth: '700px',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: colors.shadow,
        backgroundColor: colors.windowBg,
        transition: 'all 0.3s ease',
      }}>
        {/* Terminal Header */}
        <Box className="terminal-header" sx={{
          backgroundColor: colors.headerBg,
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          borderBottom: `1px solid ${colors.headerBorder}`,
          transition: 'all 0.3s ease',
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
            color: colors.titleColor,
            fontSize: '13px',
            fontFamily: 'monospace',
            transition: 'color 0.3s ease',
          }}>
            parth@portfolio: ~
          </Typography>
        </Box>
        
        {/* Terminal Body */}
        <Box className={`terminal-body ${themeType === 'light' ? 'terminal-body-light' : ''}`} sx={{
          padding: isMobile ? '20px 15px' : '30px 25px',
          backgroundColor: colors.bodyBg,
          minHeight: '200px',
          transition: 'all 0.3s ease',
          position: 'relative',
        }}>
          <Typography 
            className="terminal-line"
            sx={{ 
              fontFamily: '"Fira Code", "Courier New", Courier, monospace',
              color: colors.prompt,
              fontSize: isMobile ? '14px' : '18px',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              transition: 'color 0.3s ease',
            }}
          >
            <span style={{ color: colors.username, transition: 'color 0.3s ease' }}>parth@portfolio</span>
            <span style={{ color: colors.separator, transition: 'color 0.3s ease' }}>:</span>
            <span style={{ color: colors.path, transition: 'color 0.3s ease' }}>~</span>
            <span style={{ color: colors.separator, transition: 'color 0.3s ease' }}>$ </span>
            <span style={{ color: colors.text, transition: 'color 0.3s ease' }}>echo "Hello, my name is Parth Lad"</span>
          </Typography>
          <Typography 
            sx={{ 
              fontFamily: '"Fira Code", "Courier New", Courier, monospace',
              color: colors.text,
              fontSize: isMobile ? '14px' : '18px',
              marginBottom: '20px',
              paddingLeft: '10px',
              transition: 'color 0.3s ease',
            }}
          >
            Hello, my name is Parth Lad
          </Typography>
          
          <Typography 
            className="terminal-line"
            sx={{ 
              fontFamily: '"Fira Code", "Courier New", Courier, monospace',
              color: colors.prompt,
              fontSize: isMobile ? '14px' : '18px',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              transition: 'color 0.3s ease',
            }}
          >
            <span style={{ color: colors.username, transition: 'color 0.3s ease' }}>parth@portfolio</span>
            <span style={{ color: colors.separator, transition: 'color 0.3s ease' }}>:</span>
            <span style={{ color: colors.path, transition: 'color 0.3s ease' }}>~</span>
            <span style={{ color: colors.separator, transition: 'color 0.3s ease' }}>$ </span>
            <span style={{ color: colors.text, transition: 'color 0.3s ease' }}>whoami</span>
          </Typography>
          <Typography 
            sx={{ 
              fontFamily: '"Fira Code", "Courier New", Courier, monospace',
              color: colors.text,
              fontSize: isMobile ? '14px' : '18px',
              marginBottom: '20px',
              paddingLeft: '10px',
              transition: 'color 0.3s ease',
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
