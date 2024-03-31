import React from 'react';
import { Typography, Box, Paper, Grid, Button, Collapse, Grow } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DownloadIcon from '@mui/icons-material/Download'; // For the download button
import selfieImage from '../images/1.jpg';
import './About.css'; // Ensure styles complement the modern look

function About() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3, textAlign: 'center' }}>
      <Paper elevation={3} sx={{ p: 3, my: 2 }}>
        <Typography variant="h4" gutterBottom align="center">
          About Me
        </Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
              <Box
                component="img"
                sx={{
                  width: '100%',
                  borderRadius: '10px',
                  boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
                }}
                src={selfieImage}
                alt="selfie of Parth Lad"
              />
            </Grow>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1500 } : {})}>
              <Box>
              <Typography paragraph align="left">
                  Hello World! I'm Parth Lad, and my expertise lies in web development and Information Technology.
                </Typography>
                <Button onClick={handleExpandClick} endIcon={<ExpandMoreIcon />} sx={{ mb: 2 }}>
                  {expanded ? 'Less About Me' : 'More About Me'}
                </Button>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography paragraph align="left">
                  I have a strong foundation in front-end technologies like HTML, CSS, and JavaScript. I have experience working with popular libraries and frameworks like React and Bootstrap, which have helped me build responsive and user-friendly websites.
                  I am passionate about learning new technologies and keeping up with the latest trends in web development. I am a quick learner and enjoy working on challenging 
                </Typography>
              </Collapse>

                <br></br>
                <Button variant="contained" startIcon={<DownloadIcon />} href="https://ladresume.s3.amazonaws.com/Lad_Resume.pdf" target="_blank" sx={{ mt: 2, backgroundColor: 'rgb(20, 206, 220)', '&:hover': { backgroundColor: 'rgb(17,185,197)' } }}>
                  Download Resume
                </Button>
              </Box>
            </Grow>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default About;

