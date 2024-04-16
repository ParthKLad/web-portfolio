import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/footer'; // Correct casing based on your earlier message
import UpArrow from './components/UpArrow';
import { ThemeProvider } from './context/ThemeContext';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import './style.css';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);
  const footerRef = useRef(null);


  const navItems = [
    { name: 'Contact', ref: contactsRef },

  ];


  const homeVisible = useIntersectionObserver(homeRef, { threshold: 0.1 });
  const aboutVisible = useIntersectionObserver(aboutRef, { threshold: 0.1 });
  const skillsVisible = useIntersectionObserver(skillsRef, { threshold: 0.1 });
  const projectsVisible = useIntersectionObserver(projectsRef, { threshold: 0.1 });
  const contactsVisible = useIntersectionObserver(contactsRef, { threshold: 0.1 });
  const footerVisible = useIntersectionObserver(footerRef, { threshold: 0.1 });

  const handleNavItemClicked = (item) => {
    if (item.ref && item.ref.current) {
      item.ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Navigation item or ref is undefined');
    }
  };
  


  return (
    <ThemeProvider>
      <div className="App">
        <Navbar refs={{ homeRef, aboutRef, skillsRef, projectsRef, contactsRef, footerRef }} />
        <div className="content">
          <main>
            <div ref={homeRef} className={`section ${homeVisible ? 'section-visible' : 'section-hidden'}`}><Home /></div>
            <div ref={aboutRef} className={`section ${aboutVisible ? 'section-visible' : 'section-hidden'}`}><About /></div>
            <div ref={skillsRef} className={`section ${skillsVisible ? 'section-visible' : 'section-hidden'}`}><Skills /></div>
            <div ref={projectsRef} className={`section ${projectsVisible ? 'section-visible' : 'section-hidden'}`}><Projects /></div>
            <div ref={contactsRef} className={`section ${contactsVisible ? 'section-visible' : 'section-hidden'}`}><Contacts /></div>
            <div ref={footerRef} className={`section ${footerVisible ? 'section-visible' : 'section-hidden'}`}><Footer /></div>
          </main>
          <UpArrow />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
