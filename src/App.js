import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar
          refs={{
            homeRef,
            aboutRef,
            skillsRef,
            projectsRef,
            contactsRef,
          }}
        />
        <div className="content">
          <main>
            <div ref={homeRef}><Home /></div>
            <div ref={aboutRef}><About /></div>
            <div ref={skillsRef}><Skills /></div>
            <div ref={projectsRef}><Projects /></div>
            <div ref={contactsRef}><Contacts /></div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
