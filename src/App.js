import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/footer';
import UpArrow from './components/UpArrow';
import Welcome from './components/Welcome';
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

  const [showWelcome, setShowWelcome] = useState(true); // State to control the visibility of the Welcome component

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false); // Hide the Welcome screen after a set time
    }, 5000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: 'Home', ref: homeRef },
    { name: 'About', ref: aboutRef },
    { name: 'Skills', ref: skillsRef },
    { name: 'Projects', ref: projectsRef },
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
        {showWelcome ? (
          <Welcome />
        ) : (
          <>
            <Navbar refs={{ homeRef, aboutRef, skillsRef, projectsRef, contactsRef, footerRef }} />
            <div className="content">
              <main>
                <Home handleNavItemClicked={handleNavItemClicked} navItems={navItems} />
                <div ref={homeRef} className={`section ${homeVisible ? 'section-visible' : 'section-hidden'}`}></div>
                <div ref={aboutRef} className={`section ${aboutVisible ? 'section-visible' : 'section-hidden'}`}><About /></div>
                <div ref={skillsRef} className={`section ${skillsVisible ? 'section-visible' : 'section-hidden'}`}><Skills /></div>
                <div ref={projectsRef} className={`section ${projectsVisible ? 'section-visible' : 'section-hidden'}`}><Projects /></div>
                <div ref={contactsRef} className={`section ${contactsVisible ? 'section-visible' : 'section-hidden'}`}><Contacts /></div>
                <div ref={footerRef} className={`section ${footerVisible ? 'section-visible' : 'section-hidden'}`}><Footer /></div>
              </main>
              <UpArrow />
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
