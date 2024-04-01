import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, styled, Paper, IconButton, useTheme, ThemeProvider, createTheme,Grow } from '@mui/material';
import { Send, LinkedIn, GitHub } from '@mui/icons-material';



// Create a theme instance
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
  width: '80%', // Adjusted to be less wide
  height: '500px', // Set a specific height to make it taller
  left: '10%', // Move it to the right relative to its current position

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backdropFilter: 'blur(10px)',
    zIndex: -1,
  },
});


// Modify StyledSection for left alignment of text
const StyledSection = styled(Box)(({ theme, alignTop }) => ({
  flex: 1,
  padding: alignTop ? '16px 32px 32px' : '32px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: alignTop ? 'flex-start' : 'center',
  alignItems: 'flex-start', // Change this to left align the text
  zIndex: 1,
  background: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
  color: theme.palette.text.primary,
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
  gap: '8px', // Space between the icon and text
  marginBottom: '8px', // Space between the contact items
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
          <StyledPaper style={{ justifyContent: 'space-between' }}>
            <StyledSection alignTop style={{ width: '60%' }}>
              <ContactInfoItem>
                <Typography variant="h5" gutterBottom>
                  <br></br>
                  <br></br>
                  🤙 Contact Me
                </Typography>
              </ContactInfoItem>
              <Typography variant="body1" gutterBottom> {/* 'h7' does not exist in MUI Typography variants */}
                If you would like to contact me regarding any of the information provided above, you can reach me by filling out the form or sending an email to the address provided.
              </Typography>
              <br />
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
            <StyledSection style={{ width: '40%', textAlign: 'left' }}>
              <Typography variant="h5" gutterBottom>
                👋 Reach out for queries or just to say hi!
              </Typography>
              <CustomTextField fullWidth label="Your Email" variant="standard" />
              <CustomTextField fullWidth label="Subject" variant="standard" />
              <CustomTextField fullWidth label="Message" variant="standard" multiline rows={4} />
              <CustomButton variant="contained" endIcon={<Send />}>
                Send Message
              </CustomButton>
            </StyledSection>
          </StyledPaper>
        </Box>
      </Grow>
    </ThemeProvider>
  );
}

export default ContactForm;