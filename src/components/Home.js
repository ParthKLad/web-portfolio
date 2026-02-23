import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Button,
  useTheme,
  useMediaQuery,
  Box,
  Paper,
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

const phrases = ["a Code Wizard 🧙", "a Bug Whisperer 🐛", "a Coffee-to-Code Converter ☕"];

// Theme colors for terminal text
const terminalThemes = {
  dark: {
    titleColor: '#808080',
    prompt: '#50fa7b',
    username: '#ff79c6',
    separator: '#f8f8f2',
    path: '#8be9fd',
    text: '#f8f8f2',
  },
  light: {
    titleColor: '#666666',
    prompt: '#2e7d32',
    username: '#c2185b',
    separator: '#333333',
    path: '#0277bd',
    text: '#333333',
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
      <Paper 
        elevation={3}
        className={`terminal-window ${themeType === 'light' ? 'terminal-light' : ''}`} 
        sx={{
          width: isMobile ? '95%' : '80%',
          maxWidth: '700px',
          borderRadius: '10px',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Terminal Header */}
        <Box className="terminal-header" sx={{
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          borderBottom: `1px solid ${themeType === 'dark' ? '#333' : '#e0e0e0'}`,
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
            parth@parthlad.netlify.app: ~
          </Typography>
        </Box>
        
        {/* Terminal Body */}
        <Box className={`terminal-body ${themeType === 'light' ? 'terminal-body-light' : ''}`} sx={{
          padding: isMobile ? '16px 12px' : '24px 20px',
          minHeight: '320px',
          transition: 'all 0.3s ease',
          position: 'relative',
          fontFamily: '"Fira Code", "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',
        }}>
          {/* SSH Connection Info */}
          <Typography 
            className="terminal-line ssh-banner"
            sx={{ 
              fontFamily: 'inherit',
              color: colors.prompt,
              fontSize: isMobile ? '11px' : '14px',
              marginBottom: '12px',
              opacity: 0.9,
            }}
          >
            ssh parth@parthlad.netlify.app -p 22
          </Typography>
          
          {/* Welcome Banner */}
          <Box sx={{ 
            marginBottom: '16px', 
            padding: '8px 0',
            borderTop: `1px solid ${themeType === 'dark' ? '#333' : '#ddd'}`,
            borderBottom: `1px solid ${themeType === 'dark' ? '#333' : '#ddd'}`,
          }}>
            <Typography 
              component="pre"
              sx={{ 
                fontFamily: 'inherit',
                color: colors.path,
                fontSize: isMobile ? '6px' : '10px',
                lineHeight: 1.2,
                margin: 0,
                textAlign: 'center',
                letterSpacing: '0px',
              }}
            >
{`  ____            _   _       _              _ 
 |  _ \\ __ _ _ __| |_| |__   | |    __ _  __| |
 | |_) / _\` | '__| __| '_ \\  | |   / _\` |/ _\` |
 |  __/ (_| | |  | |_| | | | | |__| (_| | (_| |
 |_|   \\__,_|_|   \\__|_| |_| |_____\\__,_|\\__,_|`}
            </Typography>
            <Typography 
              sx={{ 
                fontFamily: 'inherit',
                color: themeType === 'dark' ? '#666' : '#888',
                fontSize: isMobile ? '9px' : '11px',
                textAlign: 'center',
                marginTop: '8px',
              }}
            >
              Welcome, fellow human (or bot, I don't judge) 🤖
            </Typography>
          </Box>

          {/* Command: echo */}
          <Typography 
            className="terminal-line"
            component="div"
            sx={{ 
              fontFamily: 'inherit',
              fontSize: isMobile ? '12px' : '15px',
              marginBottom: '4px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0px',
            }}
          >
            <span style={{ color: colors.username }}>parth</span>
            <span style={{ color: themeType === 'dark' ? '#6272a4' : '#666' }}>@</span>
            <span style={{ color: colors.path }}>portfolio</span>
            <span style={{ color: colors.separator }}>:</span>
            <span style={{ color: themeType === 'dark' ? '#bd93f9' : '#7c3aed' }}>~</span>
            <span style={{ color: colors.separator }}>$ </span>
            <span style={{ color: themeType === 'dark' ? '#f1fa8c' : '#ca8a04' }}>echo</span>
            <span style={{ color: colors.text }}>&nbsp;</span>
            <span style={{ color: themeType === 'dark' ? '#f1fa8c' : '#ca8a04' }}>"Hello, I'm Parth Lad"</span>
          </Typography>
          <Typography 
            sx={{ 
              fontFamily: 'inherit',
              color: colors.text,
              fontSize: isMobile ? '12px' : '15px',
              marginBottom: '12px',
              paddingLeft: '0px',
            }}
          >
            Hello, I'm Parth Lad
          </Typography>
          
          {/* Command: cat role.txt */}
          <Typography 
            className="terminal-line"
            component="div"
            sx={{ 
              fontFamily: 'inherit',
              fontSize: isMobile ? '12px' : '15px',
              marginBottom: '4px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ color: colors.username }}>parth</span>
            <span style={{ color: themeType === 'dark' ? '#6272a4' : '#666' }}>@</span>
            <span style={{ color: colors.path }}>portfolio</span>
            <span style={{ color: colors.separator }}>:</span>
            <span style={{ color: themeType === 'dark' ? '#bd93f9' : '#7c3aed' }}>~</span>
            <span style={{ color: colors.separator }}>$ </span>
            <span style={{ color: themeType === 'dark' ? '#f1fa8c' : '#ca8a04' }}>cat</span>
            <span style={{ color: colors.text }}>&nbsp;role.txt</span>
          </Typography>
          <Typography 
            sx={{ 
              fontFamily: 'inherit',
              color: colors.text,
              fontSize: isMobile ? '12px' : '15px',
              marginBottom: '16px',
              paddingLeft: '0px',
            }}
          >
            {phrase}<span className="blinking-cursor"></span>
          </Typography>

          {/* Interactive Commands */}
          <Box sx={{ 
            marginTop: '8px',
            paddingTop: '12px',
            borderTop: `1px dashed ${themeType === 'dark' ? '#333' : '#ddd'}`,
          }}>
            <Typography 
              sx={{ 
                fontFamily: 'inherit',
                color: themeType === 'dark' ? '#6272a4' : '#888',
                fontSize: isMobile ? '10px' : '12px',
                marginBottom: '10px',
              }}
            >
              # Quick commands (try clicking, they won't bite):
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: isMobile ? '6px' : '10px',
            }}>
              <Button
                className="terminal-cmd-btn"
                onClick={() => handleNavItemClicked(navItems.find((item) => item.name === "About"))}
                sx={{
                  fontFamily: '"Fira Code", monospace',
                  fontSize: isMobile ? '11px' : '13px',
                  textTransform: 'none',
                  padding: '4px 12px',
                  minWidth: 'auto',
                  backgroundColor: themeType === 'dark' ? '#0d0d0d' : '#e8e8e8',
                  color: themeType === 'dark' ? '#8be9fd' : '#0277bd',
                  border: `1px solid ${themeType === 'dark' ? '#333' : '#ccc'}`,
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: themeType === 'dark' ? '#1a1a1a' : '#ddd',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                ./download-resume.sh
              </Button>
              <Button
                className="terminal-cmd-btn"
                onClick={() => handleNavItemClicked(navItems.find((item) => item.name === "Projects"))}
                sx={{
                  fontFamily: '"Fira Code", monospace',
                  fontSize: isMobile ? '11px' : '13px',
                  textTransform: 'none',
                  padding: '4px 12px',
                  minWidth: 'auto',
                  backgroundColor: themeType === 'dark' ? '#0d0d0d' : '#e8e8e8',
                  color: themeType === 'dark' ? '#8be9fd' : '#0277bd',
                  border: `1px solid ${themeType === 'dark' ? '#333' : '#ccc'}`,
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: themeType === 'dark' ? '#1a1a1a' : '#ddd',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                ls ~/projects
              </Button>
              <Button
                className="terminal-cmd-btn"
                onClick={() => handleNavItemClicked(navItems.find((item) => item.name === "Skills"))}
                sx={{
                  fontFamily: '"Fira Code", monospace',
                  fontSize: isMobile ? '11px' : '13px',
                  textTransform: 'none',
                  padding: '4px 12px',
                  minWidth: 'auto',
                  backgroundColor: themeType === 'dark' ? '#0d0d0d' : '#e8e8e8',
                  color: themeType === 'dark' ? '#bd93f9' : '#7c3aed',
                  border: `1px solid ${themeType === 'dark' ? '#333' : '#ccc'}`,
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: themeType === 'dark' ? '#1a1a1a' : '#ddd',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                cat skills.json
              </Button>
              <Button
                className="terminal-cmd-btn"
                onClick={() => handleNavItemClicked(navItems.find((item) => item.name === "Contact"))}
                sx={{
                  fontFamily: '"Fira Code", monospace',
                  fontSize: isMobile ? '11px' : '13px',
                  textTransform: 'none',
                  padding: '4px 12px',
                  minWidth: 'auto',
                  backgroundColor: themeType === 'dark' ? '#0d0d0d' : '#e8e8e8',
                  color: themeType === 'dark' ? '#ff79c6' : '#c2185b',
                  border: `1px solid ${themeType === 'dark' ? '#333' : '#ccc'}`,
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: themeType === 'dark' ? '#1a1a1a' : '#ddd',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                ./contact.sh
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
      
      {/* Seeking New Opportunities Button - Terminal Style */}
      <Button
        className="terminal-cmd-btn opportunity-btn"
        onClick={() => handleNavItemClicked(navItems.find((item) => item.name === "Contact"))}
        sx={{
          mt: 3,
          fontFamily: '"Fira Code", monospace',
          fontSize: isMobile ? '12px' : '14px',
          textTransform: 'none',
          padding: '10px 24px',
          backgroundColor: themeType === 'dark' ? '#0d0d0d' : '#e8e8e8',
          color: themeType === 'dark' ? '#8be9fd' : '#0277bd',
          border: `2px solid ${themeType === 'dark' ? '#8be9fd' : '#0277bd'}`,
          borderRadius: '6px',
          '&:hover': {
            backgroundColor: themeType === 'dark' ? '#8be9fd' : '#0277bd',
            color: themeType === 'dark' ? '#0d0d0d' : '#fff',
            transform: 'translateY(-3px)',
            boxShadow: `0 6px 20px ${themeType === 'dark' ? 'rgba(139, 233, 253, 0.3)' : 'rgba(2, 119, 189, 0.3)'}`,
          },
          transition: 'all 0.3s ease',
        }}
      >
        $ ./hire-me-please.sh 🙏
      </Button>
    </Container>
  );
}

export default Home;
