import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Grow, Grid } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const ContactForm = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setChecked(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        console.error('Form submission failed!', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <Grow in={checked} style={{ transformOrigin: '0 0 0' }}>
          <Box sx={{ maxWidth: '1150px', height: '350px', margin: 'auto', backgroundColor: theme.palette.mode === 'dark' ? '#252424' : '#fff' }}>
      <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%', paddingLeft: '50%' }}>
        <Typography variant="h4" gutterBottom sx={{ position: 'relative', right: '50%' }}>
          Get in touch 
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ position: 'relative', right: '50%' }}>
            👋: Name
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ position: 'relative', right: '50%' }}>
          📧: email@example.com
        </Typography>
      </Box>
    </Grid>
    <Grid item xs={12} md={7}>
      <Box sx={{ paddingLeft: '30px', paddingRight: '50px', paddingBottom: '50px' }}> {/* Adjust these values as needed */}
        <form onSubmit={handleSubmit} method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <TextField fullWidth label="Email" variant="outlined" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField fullWidth label="Subject" variant="outlined" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <TextField fullWidth label="Message" variant="outlined" multiline rows={4} name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button variant="contained" endIcon={<Send />} type="submit" sx={{ marginTop: '20px' }}> {/* Add space before the button */}
            Send
          </Button>
        </form>
      </Box>
    </Grid>
      </Grid>
    </Box>
    </Grow>
  );
};

export default ContactForm;
