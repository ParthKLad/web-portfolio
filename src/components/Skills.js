import React from 'react';
import { Typography, Box, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css';

//Icon imports
import htmlIcon from '../images/html.png';
import cssIcon from '../images/css.png';
import JavascriptIcon from '../images/javascript.png';
import mongodbIcon from '../images/mongodb.png';
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

const skills = [
  { name: 'HTML', icon: htmlIcon, category: 'Frontend' },
  { name: 'CSS', icon: cssIcon, category: 'Frontend' },
  { name: 'JavaScript', icon: JavascriptIcon, category: 'Frontend' },
  { name: 'MongoDB', icon: mongodbIcon, category: 'Database' },
  { name: 'Node.js', icon: nodejsIcon, category: 'Backend' },
  { name: 'Python', icon: pythonIcon, category: 'Backend' },
  { name: 'npm', icon: npmIcon, category: 'Tools' },
  { name: 'Git', icon: gitIcon, category: 'Tools' },
  { name: 'React', icon: nativeIcon, category: 'Frontend' },
  { name: 'vue', icon: vueIcon, category: 'Frontend' },
  { name: 'AWS', icon: awsIcon, category: 'Cloud' },
  { name: 'SQL', icon: qlIcon, category: 'Database' },
  { name: 'Linux', icon: linuxIcon, category: 'Operating System' },
  { name: 'Windows', icon: WindowsIcon, category: 'Operating System' },
  { name: 'MacOs', icon: MacOsIcon, category: 'Operating System' },
];

AOS.init();

const SkillIcon = styled(motion.img)({
  maxWidth: '48px',
  maxHeight: '48px',
});

const CategoryTitle = styled(Typography)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1rem',
  '&:hover': {
    scale: 1.05,
    color: '#40e0d0',
    transition: 'scale 0.3s ease',
  },
});

function Skills() {
  const theme = useTheme();

  const categories = skills.reduce((groups, skill) => {
    const category = skill.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(skill);
    return groups;
  }, {});

  const categoryEmojis = {
    'Frontend': '💻',
    'Backend': '🖥️',
    'Database': '🗄️',
    'Tools': '🛠️',
    'Cloud': '☁️',
    'Operating System': '💽',
  };

  const paperStyle = {
    p: 3,
    my: 2,
    height: '100%',
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
    color: theme.palette.text.primary,
    '&:hover': {
      boxShadow: theme.palette.mode === 'dark' ? '0px 5px 15px rgba(255, 255, 255, 0.2)' : '0px 5px 15px rgba(0, 0, 0, 0.2)',
      transform: 'scale(1.05)',
      transition: 'transform 0.5s ease',
    },
  };

  return (
    <Box sx={{ py: 5, textAlign: 'center' }} id="skills">
      <Typography variant="h4" gutterBottom>My Skills</Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {Object.entries(categories).map(([category, skills]) => (
          <Grid item xs={12} sm={6} md={4} key={category}>
            <Paper elevation={3} sx={paperStyle}>
              <CategoryTitle>{categoryEmojis[category]} {category}</CategoryTitle>
              <Grid container spacing={2} justifyContent="center">
                {skills.map((skill) => (
                  <Grid item xs={6} sm={4} md={3} key={skill.name}>
                    <Box sx={{ my: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <SkillIcon src={skill.icon} alt={skill.name} whileHover={{ scale: 1.1, translateY: -10, boxShadow: "0px 10px 15px rgba(0,0,0,0.2)" }} transition={{ type: "spring", stiffness: 300 }} />
                      <Typography variant="subtitle1">{skill.name}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;
