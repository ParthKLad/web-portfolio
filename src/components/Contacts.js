import React, { useState, useEffect } from 'react';
import {Box,Typography,TextField,Button,styled,Paper,IconButton,useTheme,ThemeProvider,createTheme, Grow
} from '@mui/material';
import { Send, LinkedIn, GitHub } from '@mui/icons-material';
import ReCAPTCHA from 'react-google-recaptcha';
// google recaptcha
const RECAPTCHA_SITE_KEY = '6LeaCa0pAAAAAEHdxAyha8E_sdNkeeOXvXfhwDRy';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
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
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
  },
  '& label': {
    color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary,
  },
  '& input': {
    color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.primary,
  },
  marginBottom: '16px',
}));


const CustomButton = styled(Button)({
  color: theme.palette.getContrastText(theme.palette.primary.main),
  background: theme.palette.primary.main,
  '&:hover': {
    background: theme.palette.primary.dark,
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
  alignItems: 'flex-start', // Align to start for larger screens
  gap: '8px',
  marginBottom: '16px',
  '@media (max-width:600px)': {
    alignItems: 'flex-start', // Align to start for mobile screens
    textAlign: 'left', // Ensure text is aligned left on narrow screens
    width: '100%', // Full width to prevent constraining the content which can cause wrapping
  },
}));


const ContactForm = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    const form = event.target;
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (response.ok) {
        // Handle successful form submission here
      } else {
        // Handle failed form submission here
      }
    } catch (err) {
      // Handle error here
    }
  };

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
          <StyledPaper component="form" onSubmit={handleSubmit} method="POST" data-netlify="true" name="contact">
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
              <CustomTextField fullWidth label="Subject" variant="standard" name="subject" />
              <CustomTextField fullWidth label="Message" variant="standard" multiline rows={4} name="message" />
              <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} />
              <br></br>
              <CustomButton variant="contained" endIcon={<Send />} type="submit">
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