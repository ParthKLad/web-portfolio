import React from 'react';
import { Box, Typography, TextField, Button, Grid, Link, styled, Card, CardContent, Avatar, Paper } from '@mui/material';
import { LinkedIn, GitHub, Person, Email } from '@mui/icons-material';

const contactInfo = {
  name: 'Parth Lad',
  email: 'parth.lad@protonmail.com',
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/parthlad01', icon: <LinkedIn /> },
    { name: 'GitHub', url: 'https://github.com/parthlad9', icon: <GitHub /> },
  ],
};

const StyledLink = styled(Link)(({ theme }) => ({
  mx: 1,
  transition: 'transform .2s',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    transform: 'scale(1.2)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  transition: 'background-color .2s',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function Contact() {
  return (
    <Box sx={{ py: 5, textAlign: 'left' }}>
      <Typography variant="h3" gutterBottom>Contact me</Typography>
      <Grid container spacing={2} justifyContent="flex-start">
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>Get in Touch</Typography>
              <Typography variant="body1">
                If you would like to contact me regarding any of the information provided above, you can reach me by filling out the form or sending an email to the address provided.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h5"><Person sx={{ mr: 1 }} /> {contactInfo.name}</Typography>
                <Typography variant="body1"><Email sx={{ mr: 1 }} /> {contactInfo.email}</Typography>
              </Box>
              <Box sx={{ mt: 2, display: 'flex', flexDirection: 'row' }}>
                {contactInfo.socials.map((social, index) => (
                  <StyledLink key={index} href={social.url} target="_blank" rel="noopener">
                    <Avatar>{React.cloneElement(social.icon)}</Avatar>
                    <Typography variant="body1" sx={{ ml: 1 }}>{social.name}</Typography>
                  </StyledLink>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>Message me</Typography>
            <form method="post" action="/success" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <TextField name="name" label="Name" variant="outlined" fullWidth required sx={{ mb: 2 }} />
              <TextField name="email" label="Email" variant="outlined" fullWidth required sx={{ mb: 2 }} />
              <TextField name="subject" label="Subject" variant="outlined" fullWidth required sx={{ mb: 2 }} />
              <TextField name="message" label="Message" variant="outlined" multiline rows={4} fullWidth required sx={{ mb: 2 }} />
              <StyledButton type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Send</StyledButton>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
