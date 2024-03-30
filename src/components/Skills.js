import React from 'react';
import { keyframes } from '@emotion/react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
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


// List of skills with their icons and categories
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

  const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const CategoryTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '1rem',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -10, // Adjust this value to increase or decrease the space
    left: '50%',
    transform: 'translateX(-50%)',
    width: '50%',
    height: '5px',
    backgroundImage: 'linear-gradient(45deg, #ff6347, #40e0d0)', // Updated colors
    backgroundSize: '200% 100%',
    animation: `${gradient} 5s ease infinite`,
  },
}));

   
  // Skills component
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
  // Emoji icons for each category
    const categoryEmojis = {
      'Frontend': '💻',
      'Backend': '🖥️',
      'Database': '🗄️',
      'Tools': '🛠️',
      'Cloud': '☁️',
      'Operating System': '💽',
    };
  // Render each category with its skills
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