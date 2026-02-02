import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  Box,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import tcsLogoDark from '../images/TCS-logo-white.svg';
import tcsLogoLight from '../images/tcs-logo.svg';
import loneStarLogoDark from '../images/lonestar-vertical-black.svg';
import loneStarLogoLight from '../images/lone-star-logo.svg';
import uhLogo from '../images/uh-logo.svg';
import { useThemeContext } from '../context/ThemeContext';

const timelineData = [
  {
    year: '2020',
    title: 'Associate of Science in Computer Science',
    organization: 'Lone Star College',
    logo: null,
    logoKey: 'lonestar',
    type: 'education',
    description: 'Completed Associate degree in Computer Science',
  },
  {
    year: '2022 - 2024',
    title: 'IT Professional',
    organization: 'University of Houston',
    logo: uhLogo,
    type: 'work',
    description: 'Gained valuable experience in IT operations and support',
  },
  {
    year: '2023',
    title: 'Bachelor of Science in Computer Information Systems',
    organization: 'University of Houston',
    logo: uhLogo,
    type: 'education',
    description: 'Earned Bachelor degree in Computer Information Systems',
  },
  {
    year: '2024 - Present',
    title: 'Support Engineer',
    organization: 'Tata Consultancy Services',
    logo: null, // Will be set dynamically based on theme
    logoKey: 'tcs', // Identifier to set TCS logo based on theme
    type: 'work',
    description: 'Currently working as a Support Engineer',
  },
];

function TimelineComponent() {
  const theme = useTheme();
  const { themeType } = useThemeContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Determine TCS logo based on theme
  const getTcsLogo = () => {
    return themeType === 'dark' ? tcsLogoDark : tcsLogoLight;
  };

  // Determine Lone Star logo based on theme (inverted)
  const getLoneStarLogo = () => {
    return themeType === 'dark' ? loneStarLogoLight : loneStarLogoDark;
  };

  // Map timeline data with correct logos
  const dataWithLogos = timelineData.map(item => ({
    ...item,
    logo: item.logoKey === 'tcs' ? getTcsLogo() : item.logoKey === 'lonestar' ? getLoneStarLogo() : item.logo,
  }));

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ mb: 4 }}>
        My Journey
      </Typography>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Timeline position={isMobile ? 'right' : 'alternate'}>
          {dataWithLogos.map((item, index) => (
            <TimelineItem key={index} component={motion.div} variants={itemVariants}>
            {!isMobile && (
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                {item.year}
              </TimelineOppositeContent>
            )}
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: item.type === 'education' ? '#14CEDC' : '#11B9C5',
                  boxShadow: `0 0 0 4px ${theme.palette.background.paper}`,
                }}
              >
                {item.type === 'education' ? (
                  <SchoolIcon sx={{ color: 'white' }} />
                ) : (
                  <WorkIcon sx={{ color: 'white' }} />
                )}
              </TimelineDot>
              {index < timelineData.length - 1 && (
                <TimelineConnector sx={{ bgcolor: '#14CEDC' }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                {isMobile && (
                  <Typography variant="caption" color="text.secondary">
                    {item.year}
                  </Typography>
                )}
                {item.logo && (
                  <Box
                    component="img"
                    src={item.logo}
                    alt={`${item.organization} logo`}
                    sx={{ 
                      width: item.logoKey === 'tcs' ? { xs: 120, sm: 180 } : item.logoKey === 'lonestar' ? { xs: 60, sm: 90 } : { xs: 80, sm: 120 }, 
                      height: 'auto', 
                      mb: 1
                    }}
                  />
                )}
                <Typography variant="h6" component="h3">
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  {item.organization}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {item.description}
                </Typography>
              </Paper>
            </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </Container>
  );
}

export default TimelineComponent;
