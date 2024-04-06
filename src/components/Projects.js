import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton,  useTheme,useMediaQuery ,Card,
  CardMedia,Box, CardActionArea ,
  CardContent,} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Assuming these imports are correct
import Sharewell from '../images/Sharewell/sharewell_login.png';
import Sharewell_dash from '../images/Sharewell/sharewell_dashboard.png';
import Sharewell_tool from '../images/Sharewell/sharewell_tool.png';

const projects = [
  {
    title: 'Sharewell HDD',
    images: [
        Sharewell,
        Sharewell_dash,
        Sharewell_tool   
    ],
   // link: 'https://parthlad9.github.io/Beastly-Ranked-Movies/',
   shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper aliquam felis, non volutpat felis.",
  
  fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum malesuada pellentesque. Vivamus pretium felis eu ipsum fringilla condimentum. Integer tincidunt, nunc eget rhoncus semper, eros justo molestie arcu, a...Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum malesuada pellentesque. Vivamus pretium felis eu ipsum fringilla condimentum. Integer tincidunt, nunc eget rhoncus semper, eros justo molestie arcu, a."
  },

  {
    title: 'Sharewell HDD',
    images: [
        Sharewell,
        Sharewell_dash,
        Sharewell_tool   
    ],
   // link: 'https://parthlad9.github.io/Beastly-Ranked-Movies/',
   shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper aliquam felis, non volutpat felis.",
  
  fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum malesuada pellentesque. Vivamus pretium felis eu ipsum fringilla condimentum. Integer tincidunt, nunc eget rhoncus semper, eros justo molestie arcu, a...Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum malesuada pellentesque. Vivamus pretium felis eu ipsum fringilla condimentum. Integer tincidunt, nunc eget rhoncus semper, eros justo molestie arcu, a."
  },

  {
    title: 'Sharewell HDD',
    images: [
        Sharewell,
        Sharewell_dash,
        Sharewell_tool   
    ],
   // link: 'https://parthlad9.github.io/Beastly-Ranked-Movies/',
   shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper aliquam felis, non volutpat felis.",
  
  fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum malesuada pellentesque. Vivamus pretium felis eu ipsum fringilla condimentum. Integer tincidunt, nunc eget rhoncus semper, eros justo molestie arcu, a...Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum malesuada pellentesque. Vivamus pretium felis eu ipsum fringilla condimentum. Integer tincidunt, nunc eget rhoncus semper, eros justo molestie arcu, a."
  },

  {
    title: 'Sharewell HDD',
    images: [
        Sharewell,
        Sharewell_dash,
        Sharewell_tool   
    ],
   // link: 'https://parthlad9.github.io/Beastly-Ranked-Movies/',
   shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper aliquam felis, non volutpat felis.",
  
  fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum malesuada pellentesque. Vivamus pretium felis eu ipsum fringilla condimentum. Integer tincidunt, nunc eget rhoncus semper, eros justo molestie arcu, a...Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum malesuada pellentesque. Vivamus pretium felis eu ipsum fringilla condimentum. Integer tincidunt, nunc eget rhoncus semper, eros justo molestie arcu, a."
  },

  {
    title: 'Sharewell HDD',
    images: [
        Sharewell,
        Sharewell_dash,
        Sharewell_tool   
    ],
   // link: 'https://parthlad9.github.io/Beastly-Ranked-Movies/',
   shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper aliquam felis, non volutpat felis.",
  
  fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum malesuada pellentesque. Vivamus pretium felis eu ipsum fringilla condimentum. Integer tincidunt, nunc eget rhoncus semper, eros justo molestie arcu, a...Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum malesuada pellentesque. Vivamus pretium felis eu ipsum fringilla condimentum. Integer tincidunt, nunc eget rhoncus semper, eros justo molestie arcu, a."
  },

  {
    title: 'Sharewell HDD',
    images: [
        Sharewell,
        Sharewell_dash,
        Sharewell_tool   
    ],
   // link: 'https://parthlad9.github.io/Beastly-Ranked-Movies/',
   shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper aliquam felis, non volutpat felis.",
  
  fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum malesuada pellentesque. Vivamus pretium felis eu ipsum fringilla condimentum. Integer tincidunt, nunc eget rhoncus semper, eros justo molestie arcu, a...Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum malesuada pellentesque. Vivamus pretium felis eu ipsum fringilla condimentum. Integer tincidunt, nunc eget rhoncus semper, eros justo molestie arcu, a."
  },


  

];

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  console.log(projects);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length);
  };


  
  // Automatic slideshow effect
  useEffect(() => {
    if (open) {
      const interval = setInterval(() => {
        handleNextImage();
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [open, currentImageIndex, selectedProject]);


  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card onClick={() => { setSelectedProject(project); setCurrentImageIndex(0); setOpen(true); }} sx={{ cursor: 'pointer' }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image={project.images[0]} alt={project.title} />
                <CardContent>
                  <Typography gutterBottom variant="h5">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{project.shortDesc}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedProject && (
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullWidth
          maxWidth="md"
          fullScreen={fullScreen}
        >
          <IconButton onClick={() => setOpen(false)} sx={{ position: 'absolute', right: 8, top: 8, zIndex: 2, color: 'white' }}>
          <CloseIcon />
          </IconButton>
          <DialogContent sx={{ overflowY: 'hidden' }}>
            <IconButton onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length)} sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <CardMedia
              component="img"
              image={selectedProject.images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
            />
            <CardContent sx={{ paddingTop: theme.spacing(2) }}>
              <Typography gutterBottom variant="h5" component="div">
                {selectedProject.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedProject.fullDesc}
                </Typography>
              </CardContent>
              <IconButton onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length)} sx={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </DialogContent>
          </Dialog>
        )}
      </Container>
    );
  }
  
  export default Projects;
  