// context/ThemeContext.js
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import React, { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [themeType, setThemeType] = useState('dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', themeType);
  }, [themeType]);

  const toggleTheme = () => {
    setThemeType((prevThemeType) => (prevThemeType === 'dark' ? 'light' : 'dark'));
  };
  const theme = createTheme({
    palette: {
      mode: themeType, // Correct property for theme mode in MUI v5
    },
  });

  return (
    <ThemeContext.Provider value={{ themeType, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
