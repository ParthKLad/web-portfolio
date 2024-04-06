import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton,  useTheme,useMediaQuery ,Card,
  CardMedia,Box ,
  CardContent,} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardActionArea from '@mui/material/CardActionArea';
import CloseIcon from '@mui/icons-material/Close';


// Assuming these imports are correct
import Sharewell from '../images/Sharewell/sharewell_login.png';
import Sharewell_dash from '../images/Sharewell/sharewell_dashboard.png';
import Sharewell_tool from '../images/Sharewell/sharewell_tool.png';

const projects = [
  {
    title: 'Coming Soon ',
    images: [
        Sharewell,
        Sharewell_dash,
        Sharewell_tool   
    ],
   // link: 'https://parthlad9.github.io/Beastly-Ranked-Movies/',
   shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dolor quis dolor volutpat convallis. Vivamus eleifend ex vel felis cursus aliquam. Phasellus tempus dolor ac tincidunt cursus. Sed convallis sagittis libero, eu porta ligula consequat sed.",
  
  fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies justo ac metus suscipit congue. Donec euismod faucibus nibh, ut varius risus fermentum a. Proin purus nulla, hendrerit quis egestas vel, imperdiet quis felis. Suspendisse suscipit sapien eget nisi molestie egestas. Mauris quis lectus laoreet, pulvinar diam vitae, sodales massa. Mauris a risus et ipsum venenatis sodales id id nibh. Vivamus fermentum venenatis tortor, consectetur tempor ex vulputate ac. Etiam accumsan purus ac ipsum auctor, sed scelerisque libero posuere. Integer malesuada purus ex, sit amet venenatis eros mollis eget. Donec lobortis risus diam, eu viverra est mattis eu. Aenean vehicula felis vel ligula facilisis, vel dignissim mi sollicitudin. Nullam id ligula sapien. Suspendisse potenti. Morbi quis felis non dui scelerisque gravida. Curabitur ultricies vehicula ante sit amet fermentum.Proin ornare tortor quam, vel volutpat lectus aliquet in. Vestibulum vitae risus posuere, tincidunt enim a, dictum magna. Donec vel auctor elit, non porttitor dui. Pellentesque non bibendum nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras iaculis turpis laoreet nibh condimentum blandit. Nam tincidunt, ligula ut convallis eleifend, tortor mi sagittis nunc, sit amet aliquam eros nulla vel tellus. Curabitur eu condimentum dolor."
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
            <IconButton onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length)} sx={{ position: 'absolute', left: 8, top: fullScreen ? '50%' : '30%', transform: 'translateY(-50%)', zIndex: 2 }}>
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
            <IconButton onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length)} sx={{ position: 'absolute', right: 8, top: fullScreen ? '50%' : '30%', transform: 'translateY(-50%)', zIndex: 2 }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </DialogContent>
        </Dialog>
      )}
    </Container>
  );
  
}

export default Projects;