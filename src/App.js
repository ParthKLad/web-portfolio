import React from 'react';
import Navbar from './components/Navbar'; // Add this line to import Navbar
import Home from './components/Home';
import About from './components/About';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar /> {/* Now Navbar is defined and should not cause an error */}
        <div className="content">
          <main>
            <Home />
            <About />
            {/* Your main content goes here */}
          </main>
        </div>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
