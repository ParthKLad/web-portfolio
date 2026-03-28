import React from "react";
import {
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  Collapse,
  Grow,
} from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@mui/icons-material/Download";
import "./About.css";
import { useThemeContext } from "../context/ThemeContext";

function About() {
  const [expanded, setExpanded] = React.useState(false);
  const { themeType } = useThemeContext();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3, textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
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
                👋 Hey, I'm Parth. CS grad, Support Engineer at TCS, and the person Exxon calls when things break. I build things, fix things, and occasionally break things on purpose just to fix them again.
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
              {[
                "You know that ticket nobody can figure out, the one that's been quietly aging in the queue while everyone hopes it resolves itself? That one tends to find its way to me. As a Support Engineer at TCS, I became the person teams escalate to when something breaks in a way that defies logic, documentation, and the will to live. I don't mind. Turns out I'm good at it.",
                "A big chunk of that work lives in device management and endpoint environments at Exxon. I know the space well enough to find what's wrong, why it's wrong, and which policy silently broke it six weeks ago. Outside of that, I've built a Flask app for drilling data analytics deployed on AWS, a full Vue.js platform for Community Health Workers with role-based access and multi-org support, and a Discord bot running 24/7 on a Linux VPS that handles moderation, logging, and role management. I'd much rather be the one building and shipping things than spending my afternoons explaining why someone's access request is still pending.",
                "Outside of work I'm either deep in a side project, reading docs I should have opened before I started, or convincing someone that yes, a restart is a legitimate first step. I take the hard problems seriously. Everything else I try to keep light."
              ].map((text, i) => (
                <Typography
                  key={i}
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
                  {text}
                </Typography>
              ))}
            </Collapse>
            <br />
            <Box sx={{ mt: 2 }}>
              <Button
                className="terminal-cmd-btn"
                startIcon={<DownloadIcon />}
                href="/resume/Parth_Lad_Resume.pdf"
                download="Parth_Lad_Resume.pdf"
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
            </Box>
          </Grid>
        </Grid>
      </Paper>
      </motion.div>
    </Box>
  );
}

export default About;