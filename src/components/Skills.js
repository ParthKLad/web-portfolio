import React from 'react';
import { keyframes } from '@emotion/react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
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

// Initialize animate on scroll library
AOS.init();

const SkillIcon = styled('img')({
    maxWidth: '48px',
    maxHeight: '48px',
    transition: '0.3s',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    },
  });
  
  const flip = keyframes`
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  `;
  
  const CategoryTitle = styled(Typography)({
    '&:hover': {
      animation: `${flip} 3s infinite`,
    },
    borderBottom: '5px solid ',
    display: 'inline-block',
    marginBottom: '1rem',
        
  });
  
  function Skills() {
    // Group skills by category
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
  
    return (
      <Box sx={{ py: 5, textAlign: 'center' }} id="skills" data-aos="fade-up">
        <Typography variant="h4" gutterBottom>My Skills</Typography>
        {Object.entries(categories).map(([category, skills]) => (
          <Box key={category} sx={{ my: 4 }}>
            <CategoryTitle variant="h5" gutterBottom>{categoryEmojis[category]} {category}</CategoryTitle>
            <Grid container spacing={2} justifyContent="center">
              {skills.map((skill, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <SkillIcon src={skill.icon} alt={skill.name} />
                  <Typography variant="subtitle1">{skill.name}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    );
  }
  
  export default Skills;