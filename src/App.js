import React from 'react';
import Navbar from './components/Navbar'; // Add this line to import Navbar
import Home from './components/Home';
import About from './components/About';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar /> {/* Now Navbar is defined and should not cause an error */}
        <div className="content">
          <main>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contacts />
          </main>
        </div>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
