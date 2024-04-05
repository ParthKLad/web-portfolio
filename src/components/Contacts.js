import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Paper, IconButton, Grow, useTheme as useMuiTheme } from '@mui/material';
import { styled } from '@mui/system';
import { Send, LinkedIn, GitHub } from '@mui/icons-material';
import ReCAPTCHA from 'react-google-recaptcha';

// Assuming your ThemeContext is set up as described
import { useTheme } from '../context/ThemeContext'; // Adjust the path to where your ThemeContext is defined


const ContactForm = () => {
  const muiTheme = useMuiTheme(); // Correctly invoke useMuiTheme if using Material-UI's theme.
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');


  useEffect(() => {
    setChecked(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create a FormData object and append the form data to it
    const formData = new FormData();
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('g-recaptcha-response', recaptchaToken);
  
    // Use the fetch API to POST data to Netlify
    try {
      const response = await fetch('/', {
        method: 'POST',
        body: new URLSearchParams(formData).toString(), // Convert FormData to URLSearchParams string
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
  
      if (response.ok) {
        // Handle the successful submission here
        console.log('Form submitted successfully!');
      } else {
        // Handle errors here
        console.error('Form submission failed!');
      }
    } catch (error) {
      // Catch any network errors and log them
      console.error('An error occurred:', error);
    }
  };
  
  // Define styled components
  const StyledPaper = styled(Paper)({
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
    position: 'relative',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: muiTheme.palette.background.paper,
    '@media (max-width:600px)': {
      flexDirection: 'column',
      width: '100%',
    },
  });

  const StyledSection = styled(Box)({
    padding: '16px 32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 1,
    width: '100%', // Adjust based on your layout needs
    
  });
  

  const SocialIconsRow = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '16px',
    gap: '16px',
  });

  const ContactInfoItem = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px',
    marginBottom: '16px',
  });
  return (
    <Grow in={checked} style={{ transformOrigin: '0 0 0' }}>
      <Box sx={{ maxWidth: '600px', margin: 'auto' }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Contact
        </Typography>
        <form onSubmit={handleSubmit} method="POST" data-netlify="true" data-netlify-recaptcha="true">
          <input type="hidden" name="form-name" value="contact" />
          <TextField fullWidth label="Email" variant="outlined" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField fullWidth label="Subject" variant="outlined" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <TextField fullWidth label="Message" variant="outlined" multiline rows={4} name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <ReCAPTCHA
            sitekey="6LeaCa0pAAAAAEHdxAyha8E_sdNkeeOXvXfhwDRy" 
            onChange={setRecaptchaToken}
            style={{ margin: '10px 0' }}
          />
          <Button variant="contained" endIcon={<Send />} type="submit">
            Send
          </Button>
        </form>
      </Box>
    </Grow>
  );
};

export default ContactForm;