import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Tooltip } from '@mui/material';
import MovieReviewWebsite from '../images/MovieReviewWebsite.png';
import FullStackDevelopment from '../images/FullStackDevelopment.png';
import pulse from '../images/pulse.png';

const projects = [
  {
    title: 'Movie Review Website',
    image: MovieReviewWebsite,
   // link: 'https://parthlad9.github.io/Beastly-Ranked-Movies/',
    shortDesc: 'A website that provides movie reviews, ratings, and recommendations to help users make informed decisions about what to watch.',
    fullDesc: 'Our movie review website allows users to view trailers for upcoming movies and submit their own reviews based on personal opinions. To enhance the user experience, our website is designed to be user-friendly and visually appealing, with a modern and responsive design. No account creation is necessary to access our website',
  },
  {
    title: 'Full Stack Development',
    image: FullStackDevelopment,
    //link: '',
    shortDesc: 'Interstellar Cargo Transportation is a Python API project designed to simulate the transportation of cargo across the galaxy.',
    fullDesc: 'The project is built using Python Flask, a micro web framework, and integrates with a MySQL database to store cargo and ship information. The API allows users to add, edit, and delete cargo and ship information, as well as track the status of cargo shipments. Users can also view detailed information about each shipment, including its origin, destination, and current status. In addition to the API functionality, the project includes a basic user interface built using HTML, CSS, and JavaScript, allowing users to interact with the API through a web browser.',
  },
{
    title: 'Discord Bot',
    image: pulse,
   // link: '',
    shortDesc: 'Discord Bot is a versatile bot that provides various features and commands for managing your Discord server.',
    fullDesc: 'The Discord Bot is a versatile bot that provides various features and commands for managing your Discord server. The bot is built using the disnake library, which allows it to interact with the Discord API and respond to user commands. Some of the features of the bot include the ability to play music, create custom commands and assign role, and moderate chat messages. Overall, the Discord Bot is a useful tool for server owners and administrators looking to enhance their Discord server with additional features and functionality.',
},
  // Add more projects here...
];

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState();

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ py: 5, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>My Projects</Typography>
      <Grid container spacing={2} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea onClick={() => handleClickOpen(project)}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                    title={project.title}
                  />
                </a>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.shortDesc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedProject?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedProject?.fullDesc}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Projects;