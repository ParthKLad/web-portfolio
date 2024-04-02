import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, styled, Paper, IconButton, useTheme, ThemeProvider, createTheme, Grow } from '@mui/material';
import { Send, LinkedIn, GitHub } from '@mui/icons-material';

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

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row', // Default to row for larger screens
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
  position: 'relative',
  width: '80%', // Default width for larger screens
  height: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media (max-width:600px)': {
    flexDirection: 'column', // Switch to column layout for screens smaller than 600px
    width: '100%', // Full width for smaller screens
  },
}));

const StyledSection = styled(Box)(({ theme }) => ({
  padding: '16px 32px 32px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  zIndex: 1,
  '@media (max-width:600px)': {
    width: '100%', // Full width for smaller screens
    '&:first-child': {
      marginBottom: '16px', // Add some space between the sections on mobile
    },
  },
  // Adjust widths specifically for larger screens if needed
  ':first-of-type': {
    width: '60%', // Contact info section width on larger screens
  },
  ':last-child': {
    width: '40%', // Form section width on larger screens
  },
}));

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

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.primary.main),
  background: theme.palette.primary.main,
  '&:hover': {
    background: theme.palette.primary.dark,
  },
}));

const SocialIconsRow = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: '8px',
});

const ContactInfoItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px',
});



const ContactForm = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}>
        <Box>
          <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
            Contact
          </Typography>
          <StyledPaper>
            <StyledSection alignTop>
              <ContactInfoItem>
                <Typography variant="h6" marginTop={-5} gutterBottom>
                <br></br>
                  🤙 Contact Me
                </Typography>
                <br></br>
              </ContactInfoItem>
              <Typography variant="h6" gutterBottom style={{ width: '100%' }}>
            📝 Reach out via the form or email for any queries or just to say hi!
          </Typography>
              <br></br>
              <ContactInfoItem>
                <Typography variant="h5" gutterBottom>
                  🙋‍♂️ Parth Lad
                </Typography>
              </ContactInfoItem>
              <ContactInfoItem>
                <Typography gutterBottom>
                  ✉️ parth.lad@protonmail.com
                </Typography>
              </ContactInfoItem>
              <SocialIconsRow>
                <IconButton
                  href="https://www.linkedin.com/in/parthlad01"

                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: theme.palette.primary.main,
                    '&:hover': {
                      color: '#0982B5',
                    },
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  href="https://github.com/parthlad9"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: theme.palette.primary.main,
                    '&:hover': {
                      color: '#0982B5',
                    },
                  }}
                >
                  <GitHub />
                </IconButton>
              </SocialIconsRow>
            </StyledSection>
            <StyledSection style={{ width: '100%', textAlign: 'left' }}>
              <Typography variant="h5" gutterBottom>
                👋 Reach out for queries 
              </Typography>
              <CustomTextField fullWidth label="Your Email" variant="standard" />
              <CustomTextField fullWidth label="Subject" variant="standard" />
              <CustomTextField fullWidth label="Message" variant="standard" multiline rows={4} />
              <CustomButton variant="contained" endIcon={<Send />}>
                Send
              </CustomButton>
            </StyledSection>
          </StyledPaper>
        </Box>
      </Grow>
    </ThemeProvider>
  );
}

export default ContactForm;
