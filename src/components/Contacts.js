import React, { useState } from 'react';
import { Box, Typography, TextField, Button, styled, Paper, IconButton, useTheme, ThemeProvider, createTheme, Grow } from '@mui/material';
import { Send, LinkedIn, GitHub } from '@mui/icons-material';
import ReCAPTCHA from "react-google-recaptcha";
// Google reCAPTCHA site key
const RECAPTCHA_SITE_KEY = '6LeaCa0pAAAAAEHdxAyha8E_sdNkeeOXvXfhwDRy';

const theme = createTheme({
  palette: {
    primary: {
      main: '#14CEDC',
    },
    secondary: {
      main: '#e91e63',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    background: {
      paper: '#fff',
      default: '#fafafa',
    },
  },
});

const StyledPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'row',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
  position: 'relative',
  width: '80%',
  height: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media (max-width:600px)': {
    flexDirection: 'column',
    width: '100%',
  },
});

const StyledSection = styled(Box)({
  padding: '16px 32px 32px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  zIndex: 1,
  '@media (max-width:600px)': {
    width: '100%',
    '&:first-child': {
      marginBottom: '16px',
    },
  },
  ':first-of-type': {
    width: '60%',
  },
  ':last-child': {
    width: '40%',
  },
});

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: theme.palette.text.secondary,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.primary.main,
  },
  '& label': {
    color: theme.palette.text.secondary,
  },
  '& input': {
    color: theme.palette.text.primary,
  },
  marginBottom: '16px',
}));


  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, handle the form submission to Netlify or your server
    console.log({ email, subject, message, recaptchaToken });
    // Remember to include logic for handling the recaptchaToken with your submission
  };

const CustomButton = styled(Button)({
  color: theme.palette.getContrastText('#000'),
  backgroundColor: '#14CEDC', // Background color changed to black
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker on hover
  },
});

const SocialIconsRow = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '16px',
  gap: '16px',
});

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  marginBottom: '16px',
  '@media (max-width:600px)': {
    alignItems: 'flex-start',
    textAlign: 'left',
    width: '100%',
  },
}));

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState(''); // Correctly define the useState hook for ReCAPTCHA token

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, handle the form submission to Netlify or your server
    console.log({ email, subject, message, recaptchaToken });
    // Remember to include logic for handling the recaptchaToken with your submission
  };

  return (
    <ThemeProvider theme={theme}>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        <Box sx={{ maxWidth: '1450px', margin: 'auto', width: '100%' }}>
          <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
            Contact
          </Typography>
          <Paper component="form" onSubmit={handleSubmit} method="POST" sx={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input type="hidden" name="form-name" value="contact" />
            <TextField 
              fullWidth 
              label="Email" 
              variant="standard" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              sx={{ marginBottom: '20px' }}
            />
            <TextField 
              fullWidth 
              label="Subject" 
              variant="standard" 
              name="subject" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)}
              sx={{ marginBottom: '20px' }}
            />
            <TextField 
              fullWidth 
              label="Message" 
              variant="standard" 
              multiline 
              rows={4} 
              name="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              sx={{ marginBottom: '20px' }}
            />
            <ReCAPTCHA 
              sitekey={RECAPTCHA_SITE_KEY} 
              onChange={setRecaptchaToken} // Make sure this matches the useState setter name
              sx={{ margin: '20px 0' }}
            />
            <Button variant="contained" endIcon={<Send />} type="submit" sx={{ backgroundColor: '#14CEDC', '&:hover': { backgroundColor: 'rgba(20, 206, 220, 0.8)' } }}>
              Send
            </Button>
          </Paper>
        </Box>
      </Grow>
    </ThemeProvider>
  );
};

export default ContactForm;