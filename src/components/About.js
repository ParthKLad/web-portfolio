import React from "react";
import {
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  Collapse,
  Grow,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@mui/icons-material/Download"; // For the download button
import "./About.css"; // Ensure styles complement the modern look

function About() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3, textAlign: "center" }}>
      <Paper elevation={3} sx={{ p: 3, my: 2 }}>
        <Typography variant="h4" gutterBottom align="center">
          About Me
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={1000}>
              <Typography
                paragraph
                align="center"
                variant="h6"
                sx={{
                  userSelect: "none",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "bold",
                  animation: "dynamic 2s infinite",
                }}
              >
                Hello World! I'm Parth Lad, and my expertise lies in web
                development and Information Technology.
              </Typography>
            </Grow>
            <Button
              onClick={handleExpandClick}
              endIcon={<ExpandMoreIcon />}
              sx={{
                mb: 2,
                color: "#14CEDC", // Set text color to #14CEDC
                "&:hover": {
                  color: "#11B9C5", // Darker shade on hover
                },
              }}
            >
              {expanded ? "Less About Me" : "More About Me"}
            </Button>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Typography
                paragraph
                align="left"
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.6",
                  marginTop: "1em",
                  marginBottom: "1em",
                  textIndent: "2em",
                }}
              >
                I bring a strong foundation in front-end technologies, including
                HTML, CSS, and JavaScript. I have advanced skills in popular
                frameworks like React and Vue, enhancing my web development
                capabilities. In the realm of back-end development, I excel in
                creating efficient and scalable server-side applications with
                Node.js and Express. Additionally, I possess extensive
                experience in database management, utilizing AWS RDS to host SQL
                databases for reliable and easily accessible data storage
                solutions. My technical abilities extend to deploying
                applications on cloud platforms such as AWS EC2. This enhances
                my capability to develop responsive and user-centric websites. I
                am also adept at configuring and managing complex cloud
                environments, which bolsters application performance and
                security. Passionate about technology and committed to
                continuous learning, I keep abreast of the latest trends in web
                development. My quick learning aptitude and eagerness to tackle
                complex challenges drive my efforts to deliver innovative and
                efficient solutions. With a broad skill set and a strong
                dedication, I am well-equipped to develop projects that meet and
                surpass contemporary development standards.
              </Typography>
            </Collapse>
            <br />
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href="https://ladresume.s3.amazonaws.com/Lad_Resume.pdf"
              target="_blank"
              sx={{
                mt: 2,
                backgroundColor: "rgb(20, 206, 220)",
                "&:hover": { backgroundColor: "rgb(17,185,197)" },
              }}
            >
              Download Resume
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default About;
