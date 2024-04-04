import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Paper, IconButton, Grow, useTheme as useMuiTheme } from '@mui/material';
import { styled } from '@mui/system';
import { Send, LinkedIn, GitHub } from '@mui/icons-material';
import ReCAPTCHA from 'react-google-recaptcha';

// Assuming your ThemeContext is set up as described
import { useTheme } from '../context/ThemeContext'; // Adjust the path to where your ThemeContext is defined


const ContactForm = () => {
  const { themeType } = useTheme(); // Use your ThemeContext
  const muiTheme = useMuiTheme(); // MUI Theme for styles
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, subject, message, recaptchaToken });
    // Handle your form submission logic here
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
    <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}>
      <Box sx={{ maxWidth: '1450px', maxHeight: '522px', margin: 'auto', width: '100%' }}>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
          Contact
        </Typography>
        <StyledPaper component="form" onSubmit={handleSubmit} method="POST" data-netlify="true" data-netlify-recaptcha="true">
          <input type="hidden" name="form-name" value="contact" />
          <StyledSection>
            <ContactInfoItem>
              <Typography variant="h5" gutterBottom noWrap>
                Get in touch
              </Typography>
              <Typography variant="h6" gutterBottom noWrap>
                <strong>🙋‍♂️</strong> Parth Lad
              </Typography>
              <Typography variant="h6" gutterBottom noWrap>
                <strong>📧</strong> parth.lad@protonmail.com
              </Typography>
            </ContactInfoItem>
            <SocialIconsRow>
              <IconButton href="https://www.linkedin.com/in/parthlad01" target="_blank" rel="noopener" color="primary">
                <LinkedIn />
              </IconButton>
              <IconButton href="https://github.com/parthlad9" target="_blank" rel="noopener" color="primary">
                <GitHub />
              </IconButton>
            </SocialIconsRow>
          </StyledSection>
          <StyledSection>
            <TextField fullWidth label="Email" variant="standard" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField fullWidth label="Subject" variant="standard" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            <TextField fullWidth label="Message" variant="standard" multiline rows={4} name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <br></br>
            <br></br>
            <Button variant="contained" endIcon={<Send />} type="submit" sx={{ marginTop: '20px' }}>
              Send
            </Button>
          </StyledSection>
        </StyledPaper>
      </Box>
    </Grow>
  );
};

export default ContactForm;