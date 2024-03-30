import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, } from '@mui/material';
import MovieReviewWebsite from '../images/MovieReviewWebsite.png';
import FullStackDevelopment from '../images/FullStackDevelopment.png';
//import pulse from '../images/pulse.png';

const projects = [
  {
    title: 'Coming soon...',
    image: MovieReviewWebsite,
   // link: 'https://parthlad9.github.io/Beastly-Ranked-Movies/',
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Coming soon...',
    image: MovieReviewWebsite,
   // link: 'https://parthlad9.github.io/Beastly-Ranked-Movies/',
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Coming soon...',
    image: FullStackDevelopment,
    //link: '',
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna sit amet purus gravida quis blandit turpis. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Ut tristique et egestas quis ipsum. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Sed elementum tempus egestas sed sed risus pretium quam. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Id venenatis a condimentum vitae sapien pellentesque. Ut tristique et egestas quis ipsum suspendisse. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Vitae aliquet nec ullamcorper sit. Eu nisl nunc mi ipsum faucibus vitae aliquet. Pellentesque id nibh tortor id aliquet lectus. Lectus nulla at volutpat diam. Nulla aliquet enim tortor at auctor urna nunc id cursus. Urna porttitor rhoncus dolor purus non enim praesent.',
  },
  {
    title: 'Coming soon...',
    image: FullStackDevelopment,
    //link: '',
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna sit amet purus gravida quis blandit turpis. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Ut tristique et egestas quis ipsum. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Sed elementum tempus egestas sed sed risus pretium quam. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Id venenatis a condimentum vitae sapien pellentesque. Ut tristique et egestas quis ipsum suspendisse. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Vitae aliquet nec ullamcorper sit. Eu nisl nunc mi ipsum faucibus vitae aliquet. Pellentesque id nibh tortor id aliquet lectus. Lectus nulla at volutpat diam. Nulla aliquet enim tortor at auctor urna nunc id cursus. Urna porttitor rhoncus dolor purus non enim praesent.',
  },
  {
    title: 'Coming soon...',
    image: FullStackDevelopment,
    //link: '',
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna sit amet purus gravida quis blandit turpis. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Ut tristique et egestas quis ipsum. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Sed elementum tempus egestas sed sed risus pretium quam. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Id venenatis a condimentum vitae sapien pellentesque. Ut tristique et egestas quis ipsum suspendisse. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Vitae aliquet nec ullamcorper sit. Eu nisl nunc mi ipsum faucibus vitae aliquet. Pellentesque id nibh tortor id aliquet lectus. Lectus nulla at volutpat diam. Nulla aliquet enim tortor at auctor urna nunc id cursus. Urna porttitor rhoncus dolor purus non enim praesent.',
  },
  
  
/*
{
   // title: 'Discord Bot',
    //image: pulse,
   // link: '',
   // shortDesc: 'Discord Bot is a versatile bot that provides various features and commands for managing your Discord server.',
   // fullDesc: 'The Discord Bot is a versatile bot that provides various features and commands for managing your Discord server. The bot is built using the disnake library, which allows it to interact with the Discord API and respond to user commands. Some of the features of the bot include the ability to play music, create custom commands and assign role, and moderate chat messages. Overall, the Discord Bot is a useful tool for server owners and administrators looking to enhance their Discord server with additional features and functionality.',
},
*/
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