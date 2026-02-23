import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Grow, Grid, Paper } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Send, Chat, Person, Email } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import ConfettiExplosion from "react-confetti-explosion";
import { useThemeContext } from "../context/ThemeContext";

const ContactForm = () => {
  const theme = useTheme();
  const { themeType } = useThemeContext();
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState(""); // Add state for name
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);
  const [runConfetti, setRunConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Error state
  const [errors, setErrors] = useState({
    name: "", //
    email: "",
    subject: "",
    message: "",
  });

  // Confetti effect
  useEffect(() => {
    if (runConfetti) {
      const timer = setTimeout(() => {
        setRunConfetti(false);
      }, 5000); // Confetti runs for 5 seconds

      return () => clearTimeout(timer);
    }
  }, [runConfetti]);

  // Window size effect
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set checked state to true after the component mounts
  useEffect(() => {
    setChecked(true);
  }, []);

  // Validation updated to include name
  const validateForm = () => {
    let formIsValid = true;
    let tempErrors = {};

    if (!name.trim()) {
      tempErrors.name = "Name is required";
      formIsValid = false;
    }
    if (!email.trim()) {
      tempErrors.email = "Email is required";
      formIsValid = false;
    }
    if (!subject.trim()) {
      tempErrors.subject = "Subject is required";
      formIsValid = false;
    }
    if (!message.trim()) {
      tempErrors.message = "Message is required";
      formIsValid = false;
    }

    setErrors(tempErrors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop here if form is not valid

    // Form submission logic - encode as URL-encoded string for Netlify
    const formData = new URLSearchParams();
    formData.append("form-name", "contact");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData.toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        setOpen(true);
        setRunConfetti(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setErrors({}); // Clear errors after successful submission
      } else {
        console.error("Form submission failed!", response.status);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setRunConfetti(false);
  };

  return (
    <>
      <Typography 
        variant="h4" 
        gutterBottom 
        textAlign="center"
        sx={{
          fontFamily: '"Fira Code", monospace',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        <span style={{ color: themeType === 'dark' ? '#ff79c6' : '#c2185b' }}>$</span>
        <span style={{ color: themeType === 'dark' ? '#f1fa8c' : '#ca8a04' }}>./</span>
        <span style={{ color: themeType === 'dark' ? '#f8f8f2' : '#333' }}>contact.sh</span>
      </Typography>
      <br></br>
      <Grow in={checked} style={{ transformOrigin: "0 0 0" }}>
        <Paper
          elevation={3}
          sx={{
            maxWidth: 1150,
            margin: "auto",
            borderRadius: "16px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  height: "100%",
                  paddingLeft: matches ? "10%" : "5%",
                  paddingTop: "20px",
                }}
              >
                <Box
                  sx={{
                    mt: { xs: 1, sm: 2, md: -15 },
                    mb: 5, // Existing bottom margin
                    display: "inline-block", // Necessary for positioning the pseudo-element
                    position: "relative", // Establish a positioning context for pseudo-elements
                    "::after": {
                      // Pseudo-element for the underline

                      content: '""',
                      position: "absolute",
                      bottom: -10,
                      left: 6,
                      right: 1,
                      height: "3px", // Make the underline a bit thicker for
                      backgroundImage:
                        "linear-gradient(90deg, #15CEDC, #0B83B3, #15CEDC)", // Create a gradient for the underline
                      backgroundSize: "200% 100%", // Extend the background size for the animation effect
                      borderRadius: theme.shape.borderRadius, // This line sets the border radius
                      animation: "shift 3s infinite linear", // Apply the animation
                    },
                    "@keyframes shift": {
                      // Define the keyframes for the animation
                      "0%": {
                        backgroundPosition: "200% 0",
                      },
                      "100%": {
                        backgroundPosition: "-200% 0",
                      },
                    },
                  }}
                >
                  <Typography variant="h5" component="span" sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: 1,
                    cursor: 'default',
                    '&:hover': { 
                      transform: 'scale(1.1) rotate(-2deg)', 
                      transition: 'transform 0.3s ease' 
                    }
                  }}>
                    <Chat sx={{ 
                      animation: 'wiggle 0.5s ease-in-out infinite',
                      '@keyframes wiggle': {
                        '0%, 100%': { transform: 'rotate(-5deg)' },
                        '50%': { transform: 'rotate(5deg)' }
                      }
                    }} /> Slide into my DMs
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    cursor: 'default',
                    '&:hover': { 
                      color: theme.palette.mode === 'dark' ? '#8be9fd' : '#0277bd', 
                      transform: 'scale(1.05)',
                      transition: 'all 0.2s ease' 
                    }
                  }}
                >
                  <Person sx={{ 
                    '&:hover': { animation: 'spin 0.5s ease' },
                    '@keyframes spin': { '100%': { transform: 'rotate(360deg)' } }
                  }} /> Parth (yes, that's me)
                </Typography>
                <Box
                  component="a"
                  href="mailto:parth.k.lad@outlook.com"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    mb: 2,
                    color: theme.palette.mode === 'dark' ? '#fff' : '#2C2F33',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    border: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#ccc'}`,
                    '&:hover': { 
                      color: theme.palette.mode === 'dark' ? '#0d0d0d' : '#fff',
                      backgroundColor: theme.palette.mode === 'dark' ? '#8be9fd' : '#0277bd',
                      transform: 'translateY(-3px) scale(1.02)',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <Email sx={{ 
                    animation: 'float 2s ease-in-out infinite',
                    '@keyframes float': {
                      '0%, 100%': { transform: 'translateY(0)' },
                      '50%': { transform: 'translateY(-3px)' }
                    }
                  }} /> parth.k.lad@outlook.com
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: 2,
                    padding: "10px",
                    flexWrap: "wrap",
                    marginLeft: "-7px",
                  }}
                >
                  <IconButton
                    onClick={() =>
                      window.open("https://www.linkedin.com/in/parthklad/")
                    }
                    sx={{
                      backgroundColor: "#0077B5", // LinkedIn blue for all modes
                      color: "white", // White icon color for contrast
                      padding: "2px", // Reduce the padding to shrink the circle size
                      fontSize: "2.5rem", // Increase the icon size to make it slightly larger
                      "@media (max-width:600px)": { fontSize: "1.5rem" }, // Adjust for mobile sizes
                      "&:hover": {
                        backgroundColor: "#005582", // A slightly darker shade of LinkedIn blue for hover
                      },
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: "inherit" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => window.open("https://github.com/ParthKLad")}
                    sx={{
                      backgroundColor: "#763EC6", // Custom purple
                      color: "white", // Set GitHub icon color to white for visibility
                      padding: "2px", // Reduce the padding to shrink the circle size
                      fontSize: "2.5rem", // Make it smaller
                      "@media (max-width:600px)": { fontSize: "1.5rem" }, // Smaller for mobile
                      "&:hover": {
                        backgroundColor:
                          theme.palette.mode === "dark" ? "#6228A4" : "#5d28a4", // Adjust hover color for visibility, slightly darker purple
                      },
                      padding: "2px",
                    }}
                  >
                    <GitHubIcon
                      sx={{ fontSize: "inherit", color: "inherit" }}
                    />{" "}
                    {/* Ensure the icon color matches the specified `color` in `sx` */}
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <br></br>
              <Box
                sx={{
                  paddingLeft: "30px",
                  paddingRight: "50px",
                  paddingBottom: "50px",
                  borderRadius: theme.shape.borderRadius,
                }}
              >
                <form name="contact" onSubmit={handleSubmit} method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <TextField
                    fullWidth
                    label="Your alias (or real name, we don't judge)"
                    variant="outlined"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!errors.name}
                    helperText={errors.name}
                    sx={{
                      marginBottom: "16px", // Existing style
                      "& .MuiOutlinedInput-root": {
                        // Target the root of the OutlinedInput component
                        "&.Mui-focused fieldset": {
                          // Target the fieldset when the component is focused
                          borderColor: "#15CEDC", // Set the border color on focus
                        },
                      },
                      "& .MuiInputLabel-outlined": {
                        // Target the label of the OutlinedInput component
                        "&.Mui-focused": {
                          // Target when the label is focused
                          color: "#15CEDC", // Set the label color on focus
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="your@email.com (no spam, pinky promise)"
                    variant="outlined"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={{
                      marginBottom: "16px", // Existing style
                      "& .MuiOutlinedInput-root": {
                        // Target the root of the OutlinedInput component
                        "&.Mui-focused fieldset": {
                          // Target the fieldset when the component is focused
                          borderColor: "#15CEDC", // Set the border color on focus
                        },
                      },
                      "& .MuiInputLabel-outlined": {
                        // Target the label of the OutlinedInput component
                        "&.Mui-focused": {
                          // Target when the label is focused
                          color: "#15CEDC", // Set the label color on focus
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Subject (TL;DR version)"
                    variant="outlined"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    error={!!errors.subject}
                    helperText={errors.subject}
                    sx={{
                      marginBottom: "16px", // Existing style
                      "& .MuiOutlinedInput-root": {
                        // Target the root of the OutlinedInput component
                        "&.Mui-focused fieldset": {
                          // Target the fieldset when the component is focused
                          borderColor: "#15CEDC", // Set the border color on focus
                        },
                      },
                      "& .MuiInputLabel-outlined": {
                        // Target the label of the OutlinedInput component
                        "&.Mui-focused": {
                          // Target when the label is focused
                          color: "#15CEDC", // Set the label color on focus
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Pour your heart out (or just say hi)"
                    variant="outlined"
                    multiline
                    rows={4}
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    error={!!errors.message}
                    helperText={errors.message}
                    sx={{
                      marginBottom: "16px", // Existing style
                      "& .MuiOutlinedInput-root": {
                        // Target the root of the OutlinedInput component
                        "&.Mui-focused fieldset": {
                          // Target the fieldset when the component is focused
                          borderColor: "#15CEDC", // Set the border color on focus
                        },
                      },
                      "& .MuiInputLabel-outlined": {
                        // Target the label of the OutlinedInput component
                        "&.Mui-focused": {
                          // Target when the label is focused
                          color: "#15CEDC", // Set the label color on focus
                        },
                      },
                    }}
                  />
                  <Button
                    className="terminal-cmd-btn"
                    endIcon={<Send />}
                    type="submit"
                    sx={{
                      fontFamily: '"Fira Code", monospace',
                      fontSize: '14px',
                      textTransform: 'none',
                      padding: '10px 24px',
                      marginTop: "20px",
                      backgroundColor: themeType === 'dark' ? '#0d0d0d' : '#e8e8e8',
                      color: themeType === 'dark' ? '#8be9fd' : '#0277bd',
                      border: `2px solid ${themeType === 'dark' ? '#8be9fd' : '#0277bd'}`,
                      borderRadius: '6px',
                      '&:hover': {
                        backgroundColor: themeType === 'dark' ? '#8be9fd' : '#0277bd',
                        color: themeType === 'dark' ? '#0d0d0d' : '#fff',
                        transform: 'translateY(-3px)',
                        boxShadow: `0 6px 20px ${themeType === 'dark' ? 'rgba(139, 233, 253, 0.3)' : 'rgba(2, 119, 189, 0.3)'}`,
                      },
                      "&:disabled": {
                        backgroundColor: themeType === 'dark' ? 'rgba(13, 13, 13, 0.5)' : 'rgba(232, 232, 232, 0.5)',
                        color: themeType === 'dark' ? 'rgba(139, 233, 253, 0.3)' : 'rgba(2, 119, 189, 0.3)',
                        borderColor: themeType === 'dark' ? 'rgba(139, 233, 253, 0.3)' : 'rgba(2, 119, 189, 0.3)',
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    $ git push message --force 🚀
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grow>
      {runConfetti && <ConfettiExplosion />}
      <Dialog open={open} onClose={handleClose} onTouchEnd={handleClose}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Box sx={{ borderRadius: "16px", padding: "20px", fontFamily: '"Fira Code", monospace', textAlign: 'center' }}>
            <span style={{ fontSize: '24px' }}>🚀</span>
            <br />
            <span style={{ color: '#50fa7b' }}>Message.sent()</span> → <span style={{ color: '#8be9fd' }}>return 200 OK</span>
            <br />
            <span style={{ fontSize: '12px', color: '#6272a4' }}>// Your message is traveling through the interwebs...</span>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactForm;
