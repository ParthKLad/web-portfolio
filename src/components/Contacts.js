import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Grid,
  Button,
  TextField,
  Grow,
  useTheme,
  useMediaQuery,
  IconButton,
  Dialog,
  DialogContent,
  Link,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import ConfettiExplosion from "react-confetti-explosion";

const ContactForm = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [runConfetti, setRunConfetti] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    if (runConfetti) {
      const timer = setTimeout(() => {
        setRunConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [runConfetti]);

  const validateForm = () => {
    let formIsValid = true;
    let tempErrors = {};

    if (!name.trim()) tempErrors.name = "Name is required";
    if (!email.trim()) tempErrors.email = "Email is required";
    if (!subject.trim()) tempErrors.subject = "Subject is required";
    if (!message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return formIsValid && Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: new URLSearchParams(formData).toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.ok) {
        setOpen(true);
        setRunConfetti(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setErrors({});
      } else {
        console.error("Form submission failed", response.status);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setRunConfetti(false);
  };

  
  return (
    <>
           <Typography variant="h4" gutterBottom align="center">
          Contact Me
        </Typography>
      <Grow in={checked}>
        <Box
          sx={{
            maxWidth: 1150,
            mx: "auto",
            p: 3,
            textAlign: "center",
            backgroundColor: theme.palette.mode === "dark" ? "#242425" : "#fff",
            borderRadius: "16px",
            boxShadow: theme.shadows[3]
          }}
        >
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={5} sx={{ textAlign: "left", pl: 5 }}>
            <Typography variant="h5" component="span">
              <br></br>
                    📝 Get in touch
                  </Typography>
                  
                  <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mb: 5, // Adding bottom margin for spacing after the name
                  }}
                >
                  <br></br>
                  👨‍💻: Parth K Lad
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mb: 5, // Adding bottom margin for spacing after the email
                  }}
                >
                  📧:{" "}
                  <a
                    href="mailto:ladparthk@outlook.com"
                    style={{
                      color: theme.palette.mode === "dark" ? "#fff" : "#2C2F33", // Change color based on theme
                      textDecoration: "none", // Remove underline
                    }}
                  >
                    {" "}
                    LadParthK@outlook.com
                  </a>
                </Typography>
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
                      window.open("https://www.linkedin.com/in/ladparthk/")
                    }
                    sx={{
                      backgroundColor: "#0077B5", // LinkedIn blue for all modes
                      color: "white", // White icon color for contrast
                      padding: "2px", // Reduce the padding to shrink the circle size
                      fontSize: "2rem", // Increase the icon size to make it slightly larger
                      "@media (max-width:600px)": { fontSize: "1.5rem" }, // Adjust for mobile sizes
                      "&:hover": {
                        backgroundColor: "#005582", // A slightly darker shade of LinkedIn blue for hover
                      },
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: "inherit" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => window.open("https://github.com/ladparthk")}
                    sx={{
                      backgroundColor: "#763EC6", // Custom purple
                      color: "white", // Set GitHub icon color to white for visibility
                      padding: "2px", // Reduce the padding to shrink the circle size
                      fontSize: "2rem", // Make it smaller
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

            </Grid>
            <Grid item xs={12} md={7}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!!errors.name}
                  helperText={errors.name}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  error={!!errors.subject}
                  helperText={errors.subject}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  error={!!errors.message}
                  helperText={errors.message}
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="contained"
                  endIcon={<Send />}
                  type="submit"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Send
                </Button>
              </form>
            </Grid>
          </Grid>
        </Box>
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
          <Box sx={{ borderRadius: "16px", padding: "20px" }}>
            🎉 Form submitted successfully!
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactForm;
