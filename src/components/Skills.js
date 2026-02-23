import React from 'react';
import { Typography, Grid, Paper, Container, Box } from '@mui/material';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useThemeContext } from '../context/ThemeContext';

import htmlIcon from '../images/html.png';
import cssIcon from '../images/css.png';
import JavascriptIcon from '../images/javascript.png';
import NoSQLIcon from '../images/NoSql.png';
import nodejsIcon from '../images/nodejs.png';
import pythonIcon from '../images/python.png';
import npmIcon from '../images/icons8-npm-48.png';
import gitIcon from '../images/git.png';
import nativeIcon from '../images/native.png';
import awsIcon from '../images/aws.png';
import qlIcon from '../images/sql.png';
import linuxIcon from '../images/linux.png';
import vueIcon from '../images/vue.png';
import WindowsIcon from '../images/windows.png';
import MacOsIcon from '../images/macos.png';

//Icon imports

const skills = [
  { name: 'HTML', icon: htmlIcon, category: 'Frontend-End' },
  { name: 'CSS', icon: cssIcon, category: 'Frontend-End' },
  { name: 'JavaScript', icon: JavascriptIcon, category: 'Frontend-End' },
  { name: 'No SQL', icon: NoSQLIcon, category: 'Database' },
  { name: 'Node.js', icon: nodejsIcon, category: 'Backend-End' },
  { name: 'Python', icon: pythonIcon, category: 'Backend-End' },
  { name: 'npm', icon: npmIcon, category: 'Tools' },
  { name: 'Git', icon: gitIcon, category: 'Tools' },
  { name: 'React', icon: nativeIcon, category: 'Frontend-End' },
  { name: 'vue', icon: vueIcon, category: 'Frontend-End' },
  { name: 'AWS', icon: awsIcon, category: 'Cloud' },
  { name: 'SQL', icon: qlIcon, category: 'Database' },
  { name: 'Linux', icon: linuxIcon, category: 'Operating System' },
  { name: 'Windows', icon: WindowsIcon, category: 'Operating System' },
  { name: 'MacOs', icon: MacOsIcon, category: 'Operating System' },
];


AOS.init();

function Skills() {
  const { themeType } = useThemeContext();

  // Utility function to group skills by category
  const categories = skills.reduce((groups, skill) => {
    const category = skill.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(skill);
    return groups;
  }, {});

  const categoryEmojis = {
    'Frontend-End': '💻',
    'Backend-End': '🖥️',
    'Database': '🗄️',
    'Tools': '🛠️',
    'Cloud': '☁️',
    'Operating System': '💽',
  };

  const categoryDescriptions = {
    'Frontend-End': 'The pretty stuff people actually see',
    'Backend-End': 'The magic behind the curtain',
    'Database': 'Where data goes to be organized',
    'Tools': 'My digital toolbox',
    'Cloud': 'Basically other people\'s computers',
    'Operating System': 'The OS wars I\'ve survived',
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        textAlign="center"
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
        <span style={{ color: themeType === 'dark' ? '#f8f8f2' : '#333' }}>skills.json</span>
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {Object.entries(categories).map(([category, skills]) => (
          <Grid item xs={12} sm={6} md={4} key={category}>
            <Paper elevation={3} sx={{ p: 2, margin: 'auto', flexGrow: 1 }}>
              <Typography 
                gutterBottom 
                textAlign="center" 
                variant="h6" 
                sx={{ 
                  mb: 1,
                  fontFamily: '"Fira Code", monospace',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <span style={{ color: themeType === 'dark' ? '#6272a4' : '#888' }}>#</span>
                {categoryEmojis[category]}
                <span style={{ color: themeType === 'dark' ? '#8be9fd' : '#0277bd' }}>{category}</span>
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: '"Fira Code", monospace',
                  fontSize: '11px',
                  textAlign: 'center',
                  color: themeType === 'dark' ? '#6272a4' : '#888',
                  mb: 2,
                  fontStyle: 'italic',
                }}
              >
                // {categoryDescriptions[category]}
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {skills.map((skill) => (
                  <Grid item xs={4} key={skill.name} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                    <motion.img
                      src={skill.icon}
                      alt={skill.name}
                      whileHover={{ translateY: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      style={{ maxWidth: '48px', maxHeight: '48px', marginBottom: '8px', cursor: 'pointer', transition: 'all 0.3s ease' }}
                      onHoverStart={(event) => {
                        event.currentTarget.style.boxShadow = '0 8px 16px rgba(20, 206, 220, 0.15)';
                      }}
                      onHoverEnd={(event) => {
                        event.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                    <Typography variant="subtitle2" textAlign="center">
                      {skill.name}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Skills;