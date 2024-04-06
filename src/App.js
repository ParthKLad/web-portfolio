// App.js
import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/footer';
import UpArrow from './components/UpArrow';
import { ThemeProvider } from './context/ThemeContext';
import './style.css';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);
  
  const [showUpArrow, setShowUpArrow] = useState(false); // State to control UpArrow visibility

  useEffect(() => {
    const handleScroll = () => {
      if (homeRef.current) {
        const { bottom } = homeRef.current.getBoundingClientRect();
        setShowUpArrow(window.scrollY > bottom); // Show UpArrow if we've scrolled past Home section
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <Footer />
          {showUpArrow && <UpArrow />} {/* Conditionally render the UpArrow component */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
