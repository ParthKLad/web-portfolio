import React, { useState, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import "./Home.css";
import { useTheme } from "../context/ThemeContext"; // Adjust the path as necessary

const phrases = ["a Developer", " an IT Specialist"];

function Home({ handleNavItemClicked, navItems }) {
  const [phrase, setPhrase] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const { themeType } = useTheme(); // Use theme context

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setReverse(true);
      setTimeout(() => setSubIndex(subIndex - 1), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setPhrase((prev) =>
        phrases[index].substring(0, reverse ? prev.length - 1 : prev.length + 1)
      );
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Adjust styles based on the theme
  const boxStyle = {
    backgroundColor:
      themeType === "dark" ? "rgb(36, 36, 36)" : "rgb(255, 255, 255)",
    color: themeType === "dark" ? "rgb(236, 243, 236)" : "rgb(36, 36, 36)",
  };

  return (
    <Box textAlign="left" p={5} className="console-text" sx={boxStyle}>
      <div className="window-controls">
        <span className="close"></span>
        <span className="minimize"></span>
        <span className="maximize"></span>
      </div>
      <Typography variant="h4" gutterBottom>
        $Hello, my name is Parth Lad
      </Typography>
      <Typography variant="h4" gutterBottom>
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
