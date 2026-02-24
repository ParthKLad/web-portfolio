import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton,  useTheme,useMediaQuery ,Card,
  CardMedia,Box ,
  CardContent,} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardActionArea from '@mui/material/CardActionArea';
import CloseIcon from '@mui/icons-material/Close';
import { useThemeContext } from '../context/ThemeContext';


//Sharewell images
import Sharewell from '../images/Sharewell/sharewell_login.png';
import Sharewell_dash from '../images/Sharewell/sharewell_dashboard.png';
import Sharewell_tool from '../images/Sharewell/sharewell_tool.png';

//Data platform
import Data_Dash from '../images/Data_platform/Data_Dashboard.png';
import Data_client from '../images/Data_platform/Data_Client.png';
import Data_Event from '../images/Data_platform/Data_Events.png';


//Pulse 
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
    shortDesc: "Built a Flask app for drilling data because apparently, holes in the ground need software too. Turned complex drilling metrics into pretty dashboards that even non-engineers could understand. Deployed on AWS because 'it works on my machine' wasn't good enough. 🛢️",
    fullDesc: [
      { title: "💡 The 'Why'", description: "Project Management course + Sharewell needed help = your boy stepped up. We built a Flask app to make their drilling tools less... chaotic." },
      { title: "🔍 The Problem", description: "Sharewell had data. Lots of it. Scattered everywhere. Like my browser tabs at 3 AM. We analyzed their operational mess and figured out what was broken." },
      { title: "🛠️ The Fix", description: "Integrated downhole drilling data into one clean app. Think of it like Spotify Wrapped, but for holes in the ground." },
      { title: "🧩 Tech Stack", description: "SQL, JavaScript, Python, Flask, Express, Node.js — basically threw everything at it until it worked. (It did.)" },
      { title: "☁️ Cloud Stuff", description: "Deployed on AWS EC2 with RDS for the database. Because 'localhost' doesn't impress recruiters." },
      { title: "📊 Project Management", description: "Jira for tickets, GitHub for code, coffee for survival. Classic combo." },
      { title: "🎉 The W", description: "Delivered accurate data trends that actually helped decision-making. Client happy. Professor happy. We passed. Everyone wins." }
    ],
  },
  {
      title: 'Community Health Workers Data Platform : Vue',
      images: [
        Data_Dash,
        Data_client,
        Data_Event
      ],
      shortDesc: "Made a Vue.js platform for Community Health Workers because heroes deserve good software too. Tracks clients, manages events, and doesn't crash (most of the time). Built with Node.js and MongoDB because SQL felt too mainstream that semester. 💪",
      fullDesc: [
        { 
          title: "🦸 The Mission", 
          description: "Teamed up to help Community Health Workers in Houston do their thing better. Food aid, education, client tracking — all in one app that doesn't suck." 
        },
        { 
          title: "✨ Features We Added", 
          description: "Event management, service tracking, client lists — basically turned chaos into organized chaos. CHWs can now find info without digging through spreadsheets." 
        },
        { 
          title: "🔐 Security (Because Duh)", 
          description: "Added roles and permissions so not everyone can see everything. Intern can't delete the database. You're welcome." 
        },
        { 
          title: "🏢 Multi-Org Support", 
          description: "One database, multiple non-profits, zero drama. Each org gets their own sandbox to play in." 
        },
        { 
          title: "📸 Profile Pics & Polish", 
          description: "File uploads for profile pictures because clients deserve to be more than just a row in a table. Also optimized the heck out of everything." 
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
      ],
      "shortDesc": "Created a Discord bot because I had strong opinions about server management. Pulse handles roles, logging, custom colors, and basically keeps your Discord from becoming chaos. Runs 24/7 on a Linux VPS because bots don't need sleep (unlike me). 🤖",
        "fullDesc": [
          {
            "title": "👑 Server Admin Stuff",
            "description": "Kick, ban, manage roles — all the power trips you need for keeping your server from becoming a lawless wasteland. Mods who've witnessed Discord drama will weep tears of joy."
          },
          {
            "title": "🎨 Be Your Own Rainbow",
            "description": "Let users pick their name colors because we're all just trying to stand out in a sea of gray usernames. Admins can assign role colors too for maximum ✨aesthetic✨ energy."
          },
          {
            "title": "📝 Everything Gets Logged",
            "description": "Who deleted what? Who rage-quit at 3am? Pulse remembers everything like that one friend who never forgets that embarrassing thing you said 5 years ago."
          },
          {
            "title": "🎭 Embeds & Role Reactions",
            "description": "Gorgeous custom embeds and role reactions that'll make your server look so professional, people will assume there's an actual adult running things."
          },
          {
            "title": "🔧 Dev Transparency",
            "description": "Recent commits display so users can watch me fix bugs in real-time. It's like a reality show but sadder and with more semicolons."
          },
          {
            "title": "🚀 Coming Soon™",
            "description": "Free game alerts from Steam, Epic, GOG. Because your backlog isn't big enough and Pulse believes in enabling your poor life choices."
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
  const { themeType } = useThemeContext();


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
      <Typography 
        variant="h4" 
        textAlign="center" 
        gutterBottom
        sx={{
          fontFamily: '"Fira Code", monospace',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        <span style={{ color: themeType === 'dark' ? '#ff79c6' : '#c2185b' }}>$</span>
        <span style={{ color: themeType === 'dark' ? '#f1fa8c' : '#ca8a04' }}>ls</span>
        <span style={{ color: themeType === 'dark' ? '#f8f8f2' : '#333' }}>~/projects</span>
      </Typography>
      <Grid container spacing={3} justifyContent="center">
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card 
            onClick={() => handleClickOpen(project)} 
            sx={{ 
              cursor: 'pointer', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 24px rgba(20, 206, 220, 0.3)'
              }
            }}
          >
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
     <div style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
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
         sx={{ 
           maxHeight: '400px', 
           width: '100%', 
           objectFit: 'contain' 
         }}
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