import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Grow, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Send } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import ConfettiExplosion from "react-confetti-explosion";

const ContactForm = () => {
  const theme = useTheme();
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

    // Form submission logic
    const formData = new FormData();
    formData.append("form-name", "contact");
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
      <Typography variant="h4" gutterBottom textAlign="center">
        Contact
      </Typography>
      <br></br>
      <Grow in={checked} style={{ transformOrigin: "0 0 0" }}>
        <Box
          sx={{
            maxWidth: 1150,
            margin: "auto",
            backgroundColor: theme.palette.mode === "dark" ? "#252424" : "#fff",
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
                  <Typography variant="h5" component="span">
                    📝 Get in touch
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mb: 5, // Adding bottom margin for spacing after the name
                  }}
                >
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
                    href="mailto:parth.k.lad@outlook.com"
                    style={{
                      color: theme.palette.mode === "dark" ? "#fff" : "#2C2F33", // Change color based on theme
                      textDecoration: "none", // Remove underline
                    }}
                  >
                    {" "}
                    Parth.K.Lad@outlook.com
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
                <form onSubmit={handleSubmit} method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <TextField
                    fullWidth
                    label="Name" // New field for name
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
                    label="Email"
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
                    label="Subject"
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
                    label="Message"
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
                    variant="contained"
                    endIcon={<Send />}
                    type="submit"
                    sx={{
                      borderRadius: 8,
                      marginTop: "20px",
                      backgroundColor: "rgb(20, 206, 220)",
                      "&:hover": { backgroundColor: "rgb(17,185,197)" },
                      "&:disabled": {
                        backgroundColor: "rgba(20, 206, 220, 0.5)",
                      },
                    }}
                  >
                    Send
                  </Button>
                </form>
              </Box>
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
