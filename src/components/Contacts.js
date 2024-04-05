import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Grow } from '@mui/material';
import { Send } from '@mui/icons-material';

import ReCAPTCHA from 'react-google-recaptcha';
import { useTheme } from '@mui/system';

const ContactForm = () => {
  const theme = useTheme();
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
    const formData = new FormData();
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('g-recaptcha-response', recaptchaToken);
  
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
      } else {
        console.error('Form submission failed!');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <Grow in={checked} style={{ transformOrigin: '0 0 0' }}>
      <Box sx={{ maxWidth: '600px', margin: 'auto', backgroundColor: theme.palette.background.paper }}>
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

