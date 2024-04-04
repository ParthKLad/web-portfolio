import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      alert("Please verify you're not a robot.");
      return;
    }

    // You might use Fetch API or another method to submit the form data and ReCAPTCHA token to your server or an API endpoint
    console.log("Form Data: ", formData, "ReCAPTCHA Token: ", recaptchaToken);
    // Reset form and ReCAPTCHA token state if needed
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      {/* Your form fields here */}
      <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={handleRecaptcha} />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Send
      </Button>
    </Box>
  );
};

export default ContactForm;

