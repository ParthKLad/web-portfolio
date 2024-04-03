import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  styled,
  Paper,
  IconButton,
  useTheme,
  ThemeProvider,
  createTheme,
  Grow
} from '@mui/material';
import { Send, LinkedIn, GitHub } from '@mui/icons-material';
import { useForm, ValidationError } from '@formspree/react'; // Importing the useForm and ValidationError from Formspree

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
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  const [state, handleSubmit] = useForm("yourFormspreeID"); // Replace "yourFormspreeID" with your actual Formspree form ID

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}>
        <Box sx={{ maxWidth: '1445px', maxHeight: '651px', margin: 'auto', width: '100%' }}>
          <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
            Contact
          </Typography>
          <StyledPaper component="form" onSubmit={handleSubmit} method="POST">
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
            <StyledSection style={{ width: '100%', textAlign: 'center' }}>
              <CustomTextField fullWidth label="Email" variant="standard" name="email" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <CustomTextField fullWidth label="Subject" variant="standard" name="subject" />
              <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              <CustomTextField fullWidth label="Message" variant="standard" multiline rows={4} name="message" />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <CustomButton variant="contained" endIcon={<Send />} type="submit" disabled={state.submitting}>
                Send
              </CustomButton>
            </StyledSection>
          </StyledPaper>
        </Box>
      </Grow>
    </ThemeProvider>
  );
};

export default ContactForm;
