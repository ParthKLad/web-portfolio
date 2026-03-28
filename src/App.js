import React, { useRef, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UpArrow from "./components/UpArrow";
import { ThemeProvider } from "./context/ThemeContext";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { Skeleton, Box } from "@mui/material";
import "./style.css";
import "./App.css";

const About    = lazy(() => import("./components/About"));
const Skills   = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contacts = lazy(() => import("./components/Contacts"));
const Footer   = lazy(() => import("./components/footer"));

function SectionSkeleton() {
  return (
    <Box sx={{ px: 3, py: 4, maxWidth: 900, mx: "auto" }}>
      <Skeleton variant="rectangular" height={40} sx={{ mb: 2, borderRadius: 1 }} />
      <Skeleton variant="rectangular" height={120} sx={{ mb: 1, borderRadius: 1 }} />
      <Skeleton variant="rectangular" height={80} sx={{ borderRadius: 1 }} />
    </Box>
  );
}

function App() {
  const homeRef     = useRef(null);
  const aboutRef    = useRef(null);
  const skillsRef   = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);
  const footerRef   = useRef(null);

  const navItems = [
    { name: "Home",     ref: homeRef },
    { name: "About",    ref: aboutRef },
    { name: "Skills",   ref: skillsRef },
    { name: "Projects", ref: projectsRef },
    { name: "Contact",  ref: contactsRef },
  ];

  const homeVisible     = useIntersectionObserver(homeRef,     { threshold: 0.1 });
  const aboutVisible    = useIntersectionObserver(aboutRef,    { threshold: 0.1 });
  const skillsVisible   = useIntersectionObserver(skillsRef,   { threshold: 0.1 });
  const projectsVisible = useIntersectionObserver(projectsRef, { threshold: 0.1 });
  const contactsVisible = useIntersectionObserver(contactsRef, { threshold: 0.1 });
  const footerVisible   = useIntersectionObserver(footerRef,   { threshold: 0.1 });

  const handleNavItemClicked = (item) => {
    if (item?.ref?.current) {
      item.ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ThemeProvider>
      <div className="App">
        <>
          <Navbar refs={{ homeRef, aboutRef, skillsRef, projectsRef, contactsRef, footerRef }} />
          <div className="content">
            <main>
              <div ref={homeRef} className={`section ${homeVisible ? "section-visible" : "section-hidden"}`}>
                <Home handleNavItemClicked={handleNavItemClicked} navItems={navItems} />
              </div>
              <div ref={aboutRef} className={`section ${aboutVisible ? "section-visible" : "section-hidden"}`}>
                <Suspense fallback={<SectionSkeleton />}>
                  <About />
                </Suspense>
              </div>
              <div ref={skillsRef} className={`section ${skillsVisible ? "section-visible" : "section-hidden"}`}>
                <Suspense fallback={<SectionSkeleton />}>
                  <Skills />
                </Suspense>
              </div>
              <div ref={projectsRef} className={`section ${projectsVisible ? "section-visible" : "section-hidden"}`}>
                <Suspense fallback={<SectionSkeleton />}>
                  <Projects />
                </Suspense>
              </div>
              <div ref={contactsRef} className={`section ${contactsVisible ? "section-visible" : "section-hidden"}`}>
                <Suspense fallback={<SectionSkeleton />}>
                  <Contacts />
                </Suspense>
              </div>
              <div ref={footerRef} className={`section ${footerVisible ? "section-visible" : "section-hidden"}`}>
                <Suspense fallback={<SectionSkeleton />}>
                  <Footer />
                </Suspense>
              </div>
            </main>
            <UpArrow homeRef={homeRef} />
          </div>
        </>
      </div>
    </ThemeProvider>
  );
}

export default App;
