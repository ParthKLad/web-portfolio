import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import "./Home.css";
import { useThemeContext } from "../context/ThemeContext";

const phrases = ["a Developer", "an IT Specialist"];

function Home({ handleNavItemClicked, navItems }) {
  const [phrase, setPhrase] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { themeType } = useThemeContext();

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
  }, [subIndex, index, reverse, phrases]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative", // Set position for absolute positioning of nav buttons
      }}
    >
      <Box sx={{
        position: "absolute",
        top: 4,
        left: 4,
        display: 'flex',
        gap: '4px',
      }}>
        <IconButton size="small" sx={{ width: 12, height: 12, backgroundColor: "red", '&:hover': { backgroundColor: "#ff5f57" } }} />
        <IconButton size="small" sx={{ width: 12, height: 12, backgroundColor: "yellow", '&:hover': { backgroundColor: "#ffbd2e" } }} />
        <IconButton size="small" sx={{ width: 12, height: 12, backgroundColor: "green", '&:hover': { backgroundColor: "#27c93f" } }} />
      </Box>
      <Typography variant={isMobile ? "h5" : "h4"} gutterBottom component="div" sx={{ textAlign: "center", width: "100%" }}>
        $Hello, my name is Parth Lad
      </Typography>
      <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: "center", width: "100%" }}>
        $I am {phrase}
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: "rgb(20,206,220)",
          "&:hover": { backgroundColor: "rgb(17,185,197)" },
          borderRadius: 8,
        }}
        onClick={() =>
          handleNavItemClicked(
            navItems.find((item) => item.name === "Contact")
          )
        }
      >
        Seeking New Opportunities
      </Button>
    </Container>
  );
}

export default Home;
