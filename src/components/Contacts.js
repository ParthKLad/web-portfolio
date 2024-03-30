import React from 'react';
import { Box, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { LinkedIn, GitHub, Person, Email } from '@mui/icons-material';

const contactInfo = {
  name: 'Parth Lad',
  email: 'parth.lad@protonmail.com',
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/parthlad01', icon: <LinkedIn fontSize="large" /> },
    { name: 'GitHub', url: 'https://github.com/parthlad9', icon: <GitHub fontSize="large" /> },
  ],
};

function Contact() {
  return (
    <Box sx={{ py: 5, textAlign: 'left' }}>
      <Typography variant="h4" gutterBottom>Contact me</Typography>
      <Grid container spacing={2} justifyContent="flex-start">
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>Get in Touch</Typography>
          <Typography variant="body1">
            If you would like to contact me regarding any of the information provided above, you can reach me by filling out the form or sending an email to the address provided.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6"><Person fontSize="large" sx={{ mr: 1 }} /> {contactInfo.name}</Typography>
            <Typography variant="body1"><Email fontSize="large" sx={{ mr: 1 }} /> {contactInfo.email}</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            {contactInfo.socials.map((social, index) => (
              <Link key={index} href={social.url} target="_blank" rel="noopener" sx={{ mx: 1 }}>
                {React.cloneElement(social.icon, { fontSize: 'large' })}
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>Message me</Typography>
          <form method="post" action="/success" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <TextField name="name" label="Name" variant="outlined" fullWidth required sx={{ mb: 2 }} />
            <TextField name="email" label="Email" variant="outlined" fullWidth required sx={{ mb: 2 }} />
            <TextField name="subject" label="Subject" variant="outlined" fullWidth required sx={{ mb: 2 }} />
            <TextField name="message" label="Message" variant="outlined" multiline rows={4} fullWidth required sx={{ mb: 2 }} />
            <Button type="submit" variant="contained" color="primary">Send</Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
