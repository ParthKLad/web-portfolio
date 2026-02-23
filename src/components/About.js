import React from "react";
import {
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  Collapse,
  Grow,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@mui/icons-material/Download";
import "./About.css";
import { useThemeContext } from "../context/ThemeContext";

function About() {
  const [expanded, setExpanded] = React.useState(false);
  const [showResumeOptions, setShowResumeOptions] = React.useState(false);
  const { themeType } = useThemeContext();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleResumeClick = () => {
    setShowResumeOptions(!showResumeOptions);
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3, textAlign: "center" }}>
      <Paper elevation={3} sx={{ p: 3, my: 2 }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          align="center"
          sx={{
            fontFamily: '"Fira Code", monospace',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <span style={{ color: themeType === 'dark' ? '#ff79c6' : '#c2185b' }}>$</span>
          <span style={{ color: themeType === 'dark' ? '#f1fa8c' : '#ca8a04' }}>cat</span>
          <span style={{ color: themeType === 'dark' ? '#f8f8f2' : '#333' }}>about.txt</span>
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={1000}>
              <Typography
                paragraph
                align="center"
                variant="h6"
                sx={{
                  userSelect: "none",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "bold",
                  animation: "dynamic 2s infinite",
                }}
              >
                Hey there! 👋 I'm Parth Lad — a developer who runs on coffee, 
                Stack Overflow, and the occasional "it works on my machine" excuse.
              </Typography>
            </Grow>
            <Button
              className="terminal-cmd-btn"
              onClick={handleExpandClick}
              endIcon={<ExpandMoreIcon sx={{ 
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }} />}
              sx={{
                mb: 2,
                fontFamily: '"Fira Code", monospace',
                fontSize: '13px',
                textTransform: 'none',
                padding: '6px 14px',
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
              {expanded ? "cat about.txt --less" : "cat about.txt --more"}
            </Button>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Typography
                paragraph
                align="left"
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.6",
                  marginTop: "1em",
                  marginBottom: "1em",
                  textIndent: "2em",
                }}
              >
                So here's the deal — I started coding because I wanted to build cool stuff, 
                stayed because debugging gives me a weird sense of accomplishment (and Stockholm syndrome). 
                I'm fluent in the ancient arts of HTML, CSS, and JavaScript, and I've befriended 
                React and Vue along the way. On the backend, Node.js and Express are my trusty sidekicks 
                for building things that actually work (most of the time). I've also tamed databases 
                with AWS RDS and deployed apps to the cloud using EC2 — basically, I make things 
                live on the internet and pray they don't break at 3 AM. When I'm not googling 
                "why isn't this working" or closing 47 browser tabs, I'm probably learning something 
                new or pretending I understand Kubernetes. Long story short: I build stuff, break stuff, 
                fix stuff, and somehow get paid for it. 🚀
              </Typography>
            </Collapse>
            <br />
            <Box sx={{ mt: 2 }}>
              <Button
                className="terminal-cmd-btn"
                startIcon={<DownloadIcon />}
                onClick={handleResumeClick}
                sx={{
                  fontFamily: '"Fira Code", monospace',
                  fontSize: '14px',
                  textTransform: 'none',
                  padding: '10px 20px',
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
                $ ./download-resume.sh
              </Button>
              
              <Collapse in={showResumeOptions} timeout="auto" unmountOnExit>
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={2} 
                  sx={{ mt: 2 }}
                  justifyContent="center"
                >
                  <Button
                    className="terminal-cmd-btn"
                    startIcon={<DownloadIcon />}
                    href="/resume/Lad_Resume.pdf"
                    download="Parth_Lad_Resume_Software.pdf"
                    sx={{
                      fontFamily: '"Fira Code", monospace',
                      fontSize: '13px',
                      textTransform: 'none',
                      padding: '8px 16px',
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
                    software-resume.pdf
                  </Button>
                  <Button
                    className="terminal-cmd-btn"
                    startIcon={<DownloadIcon />}
                    href="/resume/Lad_Resume_IT.pdf"
                    download="Parth_Lad_Resume_IT.pdf"
                    sx={{
                      fontFamily: '"Fira Code", monospace',
                      fontSize: '13px',
                      textTransform: 'none',
                      padding: '8px 16px',
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
                    it-resume.pdf
                  </Button>
                </Stack>
              </Collapse>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default About;