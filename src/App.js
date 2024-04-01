import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/footer';
import { ThemeProvider } from './context/ThemeContext';
import './style.css';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const navItems = [
    { name: 'Home', ref: homeRef },
    { name: 'About', ref: aboutRef },
    { name: 'Projects', ref: projectsRef },
    { name: 'Skills', ref: skillsRef },
    { name: 'Contact', ref: contactsRef },
  ];

  const handleNavItemClicked = (item) => {
    if (item.ref && item.ref.current) {
      item.ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <div ref={homeRef}><Home handleNavItemClicked={handleNavItemClicked} navItems={navItems} /></div>
            <div ref={aboutRef}><About /></div>
            <div ref={skillsRef}><Skills /></div>
            <div ref={projectsRef}><Projects /></div>
            <div ref={contactsRef}><Contacts /></div>
          </main>
          <Footer /> {/* Add this line to include the Footer component */}

        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
