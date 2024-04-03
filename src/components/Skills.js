import React from 'react';
import { Typography, Grid, Paper, useTheme, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        My Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {Object.entries(categories).map(([category, skills]) => (
          <Grid item xs={12} sm={6} md={4} key={category}>
            <Paper elevation={3} sx={{ p: 2, margin: 'auto', flexGrow: 1 }}>
              <Typography gutterBottom textAlign="center" variant="h6" sx={{ mb: 2 }}>
                {categoryEmojis[category]} {category}
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {skills.map((skill) => (
                  <Grid item xs={4} key={skill.name} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                    <motion.img
                      src={skill.icon}
                      alt={skill.name}
                      whileHover={{ scale: 1.1, translateY: -10, boxShadow: "0px 10px 15px rgba(0,0,0,0.2)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      style={{ maxWidth: '48px', maxHeight: '48px', marginBottom: '8px' }}
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