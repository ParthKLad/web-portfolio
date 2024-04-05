import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Grow, Grid } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import ConfettiExplosion from 'react-confetti-explosion';


const ContactForm = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false);
  const [runConfetti, setRunConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Error state
  const [errors, setErrors] = useState({
    email: '',
    subject: '',
    message: '',
  });

 // Confetti effect
 useEffect(() => {
  if (runConfetti) {
    const timer = setTimeout(() => {
      setRunConfetti(false);
    }, 5000); // Confetti runs for 5 seconds

    return () => clearTimeout(timer);
  }
}, [runConfetti]);

// Window size effect
useEffect(() => {
  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

// Set checked state to true after the component mounts
useEffect(() => {
  setChecked(true); 

}, []);


  const validateForm = () => {
    let formIsValid = true;
    let tempErrors = {};

    if (!email.trim()) {
      tempErrors.email = 'Email is required';
      formIsValid = false;
    }
    if (!subject.trim()) {
      tempErrors.subject = 'Subject is required';
      formIsValid = false;
    }
    if (!message.trim()) {
      tempErrors.message = 'Message is required';
      formIsValid = false;
    }

    setErrors(tempErrors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop here if form is not valid

    // Form submission logic
    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: new URLSearchParams(formData).toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setOpen(true);
        setRunConfetti(true);
        setEmail('');
        setSubject('');
        setMessage('');
        setErrors({}); // Clear errors after successful submission
      } else {
        console.error('Form submission failed!', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setRunConfetti(false);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom textAlign="center">
        Contact
      </Typography>
      <br></br>
      <Grow in={checked} style={{ transformOrigin: '0 0 0' }}>
        <Box sx={{ maxWidth: matches ? '62%' : '90%', margin: 'auto', backgroundColor: theme.palette.mode === 'dark' ? '#252424' : '#fff', borderRadius: '16px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%', paddingLeft: matches ? '10%' : '5%' }}>
                <br></br>
                <br></br>
                <br></br>
                <Typography variant="h5" gutterBottom sx={{ marginTop: matches ? '-50%' : '0%' }}>
                  📝 Get in touch
                </Typography>
                <br></br>
                <br></br>
                <Typography variant="h6" gutterBottom>
                  👋: Parth Lad
                </Typography>
                <Typography variant="h6" gutterBottom>
                  📧: Parth.lad@protonmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
            <br></br>
            <br></br>
              <Box sx={{ paddingLeft: '30px', paddingRight: '50px', paddingBottom: '50px' }}>
                <form onSubmit={handleSubmit} method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    error={!!errors.subject}
                    helperText={errors.subject}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    error={!!errors.message}
                    helperText={errors.message}
                  />
                  <Button
                    variant="contained"
                    endIcon={<Send />}
                    type="submit"
                    sx={{
                      marginTop: '20px',
                      backgroundColor: '#15CEDC',
                      color: '#ffffff',
                      '&:hover': {
                        backgroundColor: '#0B83B3',
                      },
                    }}
                  >
                    Send
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grow>
      {runConfetti && <ConfettiExplosion />}
      <Dialog open={open} onClose={handleClose}>
        <IconButton /* IconButton properties */>
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Box /* Box properties */>          
            🎉 Form submitted successfully!
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactForm;