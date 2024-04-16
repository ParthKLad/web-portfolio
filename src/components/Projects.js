import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton,  useTheme,useMediaQuery ,Card,
  CardMedia,Box ,
  CardContent,} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardActionArea from '@mui/material/CardActionArea';
import CloseIcon from '@mui/icons-material/Close';


//Sharewell images
import Sharewell from '../images/Sharewell/sharewell_login.png';
import Sharewell_dash from '../images/Sharewell/sharewell_dashboard.png';
import Sharewell_tool from '../images/Sharewell/sharewell_tool.png';

//Data platform
import Data_Dash from '../images/Data_platform/Data_Dashboard.png';
import Data_client from '../images/Data_platform/Data_Client.png';
import Data_Event from '../images/Data_platform/Data_Events.png';


//Pulse 
import Pulse_Welcome from '../images/Pulse/Pulse_welcome.jpg';
import embed from '../images/Pulse/embed.png';
import info_server from '../images/Pulse/info_server.jpg';
import role from '../images/Pulse/role.png'
import Pulse from '../images/Pulse/Pulse.png'

const projects = [
  {
    title: 'Sharewell HDD : Flask ',
    images: [
        Sharewell,
        Sharewell_dash,
        Sharewell_tool   
    ],
    shortDesc: "In a Project Management course, my team and I developed a Flask-based application for Sharewell to enhance their drilling tools’ efficiency. We analyzed Sharewell’s challenges, integrated advanced drilling data, and utilized a robust tech stack including SQL, JavaScript, Python, Flask, Express, and Node.js. We deployed our application on AWS EC2 and used AWS RDS for our SQL database. Our project management was facilitated by Jira and GitHub, and our solution significantly enhanced Sharewell’s operational decision-making and strategic planning.",
    fullDesc: [
      { title: "Introduction", description: "In a Project Management course, my team and I embarked on a mission to develop a custom Flask-based application for Sharewell. Our goal was to enhance the precision and efficiency of their drilling tools." },
      { title: "Problem Analysis", description: "We conducted a thorough analysis of Sharewell's operational challenges. This helped us understand the issues at hand and guided our solution development process." },
      { title: "Solution Development", description: "We integrated advanced downhole drilling data into our application. This allowed us to address the identified challenges effectively." },
      { title: "Technology Stack", description: "Our project utilized a robust set of technologies including SQL, JavaScript, Python, Flask, Express, and Node.js. This comprehensive tech stack enabled us to perform in-depth data analysis and develop a high-performance application." },
      { title: "Deployment", description: "We deployed both the backend and frontend servers on AWS EC2 instances. For our SQL database, we used AWS RDS, ensuring a scalable and reliable database solution." },
      { title: "Project Management & Version Control", description: "We used Jira and GitHub for effective project management and version control. These tools ensured smooth collaboration among team members and efficient progress tracking." },
      { title: "Outcome", description: "Our solution provided a more detailed and accurate evaluation of long-term data trends. This significantly enhanced operational decision-making and strategic planning for Sharewell." }
    ],
  },
  {
      title: 'Community Health Workers Data Platform : Vue',
      images: [
        Data_Dash,
        Data_client,
        Data_Event
      ],
      shortDesc: "In an Application Development course, my team and I significantly enhanced an existing platform for Community Health Workers (CHWs) in Houston’s non-profit organizations. We utilized the Vue.js framework, Node.js for the backend, and MongoDB for NoSQL databases. The improved platform effectively addresses client needs, facilitates efficient event management, and ensures robust data security.",
      fullDesc: [
        { 
          title: "Introduction", 
          description: "A team of three, including myself, enhanced an existing data platform for Community Health Workers (CHWs) within non-profit organizations in the Houston area. The platform's primary objective is to address fundamental client needs, including provisions such as food aid and adult education assistance. The enhancements were made using Vue.js framework, Node.js for backend, and MongoDB for NoSQL databases." 
        },
        { 
          title: "Core Features", 
          description: "Our team added features to the platform that facilitate event management, allowing CHWs to create, organize, and oversee events that offer crucial services. These services can be meticulously associated with specific events, and the platform tracks their utilization by clients. CHWs also have access to lists of existing clients and events, enabling them to efficiently review and update pertinent information." 
        },
        { 
          title: "User Roles and Permissions", 
          description: "Our team ensured data security by enhancing the system's user roles and permissions, granting varying levels of access to authorized personnel." 
        },
        { 
          title: "Multi-Organization Support", 
          description: "Our team optimized the platform to accommodate multiple non-profit organizations, consolidating their data in a shared database. Each organization benefits from a dedicated instance, easily configured through environment variables, guaranteeing tailored functionality and data separation for each entity." 
        },
        { 
          title: "File Upload and Data Optimization", 
          description: "Our team added new features to the existing application to enhance the client information management process. These include a file upload feature for profile pictures, allowing for a more comprehensive client profile and personalization, and data optimization techniques. Different roles have specific permissions related to profile pictures, ensuring data security and access control." 
        }
      ]
    },
    {
      "title": "Discord Bot: Pulse",
      "images": [
        Pulse,
        role,
        embed,
        info_server,
        Pulse_Welcome
      ],
      "shortDesc": "Pulse, a dynamic Discord bot, streamlines server management, enhances user engagement with interactive features, and brings fun to your community. It offers comprehensive role management, detailed logging, personalized color themes, and custom communication tools. Hosted on a Linux-based VPS, Pulse ensures reliable, around-the-clock operation for an uninterrupted Discord experience.",
        "fullDesc": [
          {
            "title": "Server Administration",
            "description": "Pulse Bot offers an unparalleled suite of tools for server administration. From managing roles and permissions to overseeing user behavior with kick and ban commands, Pulse provides everything you need for meticulous server management."
          },
          {
            "title": "Color Change",
            "description": "Delight in the ability to personalize your server presence with Pulse's color change command. Users can pick their favorite hues for a custom experience, while admins can assign colors to roles for quick identification and flair."
          },
          {
            "title": "Logging",
            "description": "Maintain a clear record of server activity with Pulse's thorough logging. Transparency and oversight are effortless, as Pulse captures detailed information about server events for review and moderation."
          },
          {
            "title": "Custom Embeds & Role Reactions",
            "description": "Pulse enhances server interaction by allowing the creation of custom embedded messages and role reactions, enabling a more engaging and organized way to communicate important updates or fun server activities."
          },
          {
            "title": "Recent Commits Display",
            "description": "Stay informed on the latest enhancements with Pulse’s recent commits feature. Useful for developers and users alike, this function allows everyone to track updates, bug fixes, and new features as they are rolled out, ensuring the community is always in the loop with the bot's evolution."
          },
          {
            "title": "And More!",
            "description": "Pulse Bot is in constant development, adding new features to enrich the functionality and entertainment of your server. Upcoming updates include game patches and free game notifications from stores like Steam, Epic, and GOG, leveraging their respective APIs to keep your gaming community ahead of the curve."
          }
        ]
      }
    
  ]

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
          <Card onClick={() => { setSelectedProject(project); setCurrentImageIndex(0); setOpen(true); }} sx={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
            <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <CardMedia component="img" sx={{ height: 200 }} image={project.images[0]} alt={project.title} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ height: 270 }}> {/* Adjust this height as needed */}
                  <Typography gutterBottom variant="h5">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{project.shortDesc}</Typography>
                </Box>
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
   <DialogContent sx={{ overflowY: 'auto', maxHeight: '80vh', position: 'relative' }}>
     <div style={{ position: 'relative' }}>
       <IconButton 
         onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length)} 
         sx={{ 
           position: 'absolute', 
           left: 0, 
           top: '50%', 
           transform: 'translateY(-50%)', 
           zIndex: 2 
         }}
       >
         <ArrowBackIosNewIcon />
       </IconButton>
       <CardMedia
         component="img"
         image={selectedProject.images[currentImageIndex]}
         alt={`Image ${currentImageIndex + 1}`}
       />
       <IconButton 
         onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length)} 
         sx={{ 
           position: 'absolute', 
           right: 0, 
           top: '50%', 
           transform: 'translateY(-50%)', 
           zIndex: 2 
         }}
       >
         <ArrowForwardIosIcon />
       </IconButton>
     </div>
     <CardContent sx={{ paddingTop: theme.spacing(2) }}>
       <Typography gutterBottom variant="h5" component="div">
         {selectedProject.title}
       </Typography>
       {selectedProject.fullDesc.map((section, index) => (
         <div key={index} style={{ marginBottom: '20px' }}>
           <Typography variant="h6" style={{ color: '#14CEDC' }}>{section.title}</Typography>
           <Typography variant="body2" color="text.secondary">{section.description}</Typography>
         </div>
       ))}
     </CardContent>
   </DialogContent>
 </Dialog>
 
      )}
    </Container>
  );
  
}

export default Projects;