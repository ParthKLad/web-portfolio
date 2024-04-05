import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Grow } from '@mui/material';
import { Send } from '@mui/icons-material';

const ContactForm = () => {
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
        // Optionally reset form fields here
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        console.error('Form submission failed!');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <Grow in={checked} style={{ transformOrigin: '0 0 0' }}>
      <Box sx={{ maxWidth: '600px', margin: 'auto' }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Contact
        </Typography>
        <form onSubmit={handleSubmit} method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <TextField fullWidth label="Email" variant="outlined" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField fullWidth label="Subject" variant="outlined" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <TextField fullWidth label="Message" variant="outlined" multiline rows={4} name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button variant="contained" endIcon={<Send />} type="submit">
            Send
          </Button>
        </form>
      </Box>
    </Grow>
  );
};

export default ContactForm;
