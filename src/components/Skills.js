import React from 'react';
import { Typography, Box, Grid, Paper, useTheme } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { styled } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css';

//Icon imports
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

const skills = [
  { name: 'HTML', icon: htmlIcon, category: 'Frontend' },
  { name: 'CSS', icon: cssIcon, category: 'Frontend' },
  { name: 'JavaScript', icon: JavascriptIcon, category: 'Frontend' },
  { name: 'No SQL', icon: NoSQLIcon, category: 'Database' },
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

const SkillIcon = styled(motion.img)(({ theme }) => ({
  width: '100%',
  maxWidth: '48px',
  maxHeight: '48px',
  padding: '8px',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#333',
  borderRadius: '8px',
  boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
}));

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

const skillBoxStyle = (theme) => ({
  my: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 1,
  [theme.breakpoints.down('sm')]: {
    width: '100%', // Increase width for small screens
  },
});

function Skills() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const categoryEmojis = {
    'Frontend': '💻',
    'Backend': '🖥️',
    'Database': '🗄️',
    'Tools': '🛠️',
    'Cloud': '☁️',
    'Operating System': '💽',
  };
  const paperStyle = {
    p: 1,
    my: 4,
    height: 'auto', // This will allow the box to adjust its height based on its content
    width: '100%', // This will make the box take up 90% of the screen width on smaller screens
    margin: '0 auto', // This will center the tile
    alignItems: 'center',
    backgroundColor: '121212',
    color: theme.palette.text.primary,
    transition: 'all 0.5s ease', // This will apply the transition to all properties
    '&:hover': {
      boxShadow: theme.palette.mode === 'dark' ? '0px 5px 15px rgba(255, 255, 255, 0.2)' : '0px 5px 15px rgba(0, 0, 0, 0.2)',
      transform: 'scale(1.1) translateY(-10px)', // This will scale the box up and move it up
    },
    '@media (max-width:600px)': { // This will apply the styles inside this block only on screens smaller than 600px
      width: '100%', // This will make the box take up the full screen width on very small screens
      height: 'auto', // This will allow the box to adjust its height based on its content
    },
    '@media (min-width:601px) and (max-width:1024px)': { // This will apply the styles inside this block only on screens between 601px and 1024px
      width: '80%', // This will make the box take up 80% of the screen width on medium screens
      height: 'auto', // This will allow the box to adjust its height based on its content
    },
    '@media (min-width:1025px)': { // This will apply the styles inside this block only on screens larger than 1024px
      width: '60%', // This will make the box take up 60% of the screen width on large screens
      height: 'auto', // This will allow the box to adjust its height based on its content
    },
  };
  
  const gridContainerSpacing = 3; // Adjust as needed for overall spacing
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
                  <Grid item xs={6} sm={4} md={4} key={skill.name} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <SkillIcon src={skill.icon} alt={skill.name} whileHover={{ scale: 1.1 }} />
                    <Typography variant={isXsScreen ? "body2" : "subtitle1"} style={{ textAlign: 'center', wordWrap: 'break-word' }}>
                      {skill.name}
                    </Typography>
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
