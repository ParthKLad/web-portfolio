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

const CustomTextField = styled(TextField)({
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
});

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
              <br></br>
              <ContactInfoItem>
              <Typography variant="h5" gutterBottom noWrap>
                  Get in touch 
                </Typography>
                <br></br>
                <Typography variant="h8" gutterBottom noWrap>
                  <strong>Name:</strong> Parth Lad
                </Typography>
                <Typography variant="h8" gutterBottom noWrap>
                  <strong>Email:</strong> parth.lad@protonmail.com
                </Typography>
              </ContactInfoItem>
              <SocialIconsRow>
                <IconButton
                  href="https://www.linkedin.com/in/parthlad01"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: '1.5rem',
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
                    fontSize: '1.5rem',
                    '&:hover': {
                      color: '#0982B5',
                    },
                  }}
                >
                  <GitHub />
                </IconButton>
              </SocialIconsRow>
            </StyledSection>
            <StyledSection style={{ width: '100%', textAlign: 'center' }}>
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
};

export default ContactForm;
