import React, { useState, useEffect } from "react";
import { Typography, Box, Button, useTheme } from "@mui/material";
import "./Home.css";
import { useThemeContext } from "../context/ThemeContext"; // Adjust the path as necessary

const phrases = ["a Developer", "an IT Specialist"];

function Home({ handleNavItemClicked, navItems }) {
  const [phrase, setPhrase] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const theme = useTheme(); // Use MUI theme hook
  const { themeType } = useThemeContext(); // Use theme context

  useEffect(() => {
    const timer = setTimeout(() => {
      if (subIndex === phrases[index].length + 1 && !reverse) {
        setReverse(true);
        setTimeout(() => setSubIndex(subIndex - 1), 1000);
      } else if (subIndex === 0 && reverse) {
        setReverse(false);
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      } else {
        setPhrase((prev) =>
          phrases[index].substring(
            0,
            reverse ? prev.length - 1 : prev.length + 1
          )
        );
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [subIndex, index, reverse]);
  // Responsive Box styles
  const boxStyle = {
    width: "100%", // Ensure full width usage
    maxWidth: 1200, // Max width similar to About section
    mx: "auto", // Center horizontally
    p: theme.spacing(5), // Responsive padding
    backgroundColor:
      themeType === "dark" ? "rgb(36, 36, 36)" : "rgb(255, 255, 255)",
    color: themeType === "dark" ? "rgb(236, 243, 236)" : "rgb(36, 36, 36)",
    textAlign: "left",
    fontSize: "1rem", // Responsive font size
  };

  return (
    <Box className="console-text" sx={boxStyle}>
      <div className="window-controls">
        <span className="close"></span>
        <span className="minimize"></span>
        <span className="maximize"></span>
      </div>
      <Typography variant="h4" gutterBottom component="div">
        $Hello, my name is Parth Lad
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        $I am {phrase}
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: "rgb(20,206,220)",
          "&:hover": { backgroundColor: "rgb(17,185,197)" },
        }}
        onClick={() =>
          handleNavItemClicked(navItems.find((item) => item.name === "Contact"))
        }
      >
        Seeking New Opportunities
      </Button>
    </Box>
  );
}

export default Home;
