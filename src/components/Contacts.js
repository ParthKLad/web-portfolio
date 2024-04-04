import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Paper, IconButton, Grow } from '@mui/material';
import { styled } from '@mui/system';
import { Send, LinkedIn, GitHub } from '@mui/icons-material';
import ReCAPTCHA from 'react-google-recaptcha';

// Import your ThemeContext for styling
import { useTheme } from '../context/ThemeContext'; 

const ContactForm = () => {
  const { themeType } = useTheme(); 
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRecaptcha = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      alert("Please verify you're not a robot.");
      return;
    }
    console.log({ ...formData, recaptchaToken });
    // Handle your form submission logic here, such as sending to an API
  };

  // Styled components
  const StyledPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
    position: 'relative',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: theme.palette.background.paper,
    '@media (max-width:600px)': {
      flexDirection: 'column',
      width: '100%',
    },
  }));

  const StyledSection = styled(Box)({
    padding: '16px 32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 1,
    width: '100%',
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
                🙋‍♂️ Parth Lad
              </Typography>
              <Typography variant="h6" gutterBottom noWrap>
                📧 parth.lad@protonmail.com
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
            <TextField fullWidth label="Email" variant="standard" name="email" value={formData.email} onChange={handleChange} />
            <TextField fullWidth label="Subject" variant="standard" name="subject" value={formData.subject} onChange={handleChange} />
            <TextField fullWidth label="Message" variant="standard" multiline rows={4} name="message" value={formData.message} onChange={handleChange} />
            <br></br>
            <ReCAPTCHA
              sitekey="6LeaCa0pAAAAAEHdxAyha8E_sdNkeeOXvXfhwDRy"
              onChange={handleRecaptcha}
              
            />
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
