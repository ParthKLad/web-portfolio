import React, { useState, useEffect } from 'react';
import './BootScreen.css';

const bootSequence = [
  { text: "BIOS v2.0.26 - parthlad.netlify.app", delay: 50 },
  { text: "Initializing system...", delay: 80 },
  { text: "", delay: 40 },
  { text: "[    0.000000] Linux version 6.1.0-parth (gcc 12.2.0)", delay: 40 },
  { text: "[    0.000042] Command line: BOOT_IMAGE=/vmlinuz-portfolio", delay: 40 },
  { text: "[    0.000089] Loading creativity modules...", delay: 50 },
  { text: "[    0.001337] Coffee dependency detected [OK]", delay: 40 },
  { text: "[    0.002048] Mounting /dev/skills...", delay: 50 },
  { text: "[    0.003141] Loading JavaScript runtime... [OK]", delay: 40 },
  { text: "[    0.004269] Loading React components... [OK]", delay: 40 },
  { text: "[    0.005420] Initializing CSS animations... [OK]", delay: 40 },
  { text: "[    0.006969] Found 99 problems, CSS ain't one [OK]", delay: 50 },
  { text: "[    0.008192] Starting portfolio-services...", delay: 40 },
  { text: "", delay: 30 },
  { text: "Starting Portfolio OS...", delay: 80 },
  { text: "", delay: 40 },
  { text: "   ____             __  __    __          __", delay: 20 },
  { text: "  / __ \\____ ______/ /_/ /_  / /   ____ _/ /", delay: 20 },
  { text: " / /_/ / __ `/ ___/ __/ __ \\/ /   / __ `/ / ", delay: 20 },
  { text: "/ ____/ /_/ / /  / /_/ / / / /___/ /_/ / /  ", delay: 20 },
  { text: "/_/    \\__,_/_/   \\__/_/ /_/_____/\\__,_/_/   ", delay: 20 },
  { text: "", delay: 50 },
  { text: "Welcome to ParthLad OS v2026.02", delay: 60 },
  { text: "", delay: 30 },
  { text: "parth@portfolio:~$ ./launch-website.sh", delay: 100 },
  { text: "Launching in 3...", delay: 150 },
  { text: "Launching in 2...", delay: 150 },
  { text: "Launching in 1...", delay: 150 },
  { text: "", delay: 30 },
  { text: "[SUCCESS] Welcome aboard! 🚀", delay: 100 },
];

function BootScreen({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (currentIndex < bootSequence.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, bootSequence[currentIndex].text]);
        setCurrentIndex(currentIndex + 1);
      }, bootSequence[currentIndex].delay);
      return () => clearTimeout(timer);
    } else {
      // Boot sequence complete, start fade out
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(onComplete, 300); // Wait for fade animation
      }, 200);
      return () => clearTimeout(fadeTimer);
    }
  }, [currentIndex, onComplete]);

  // Skip boot screen on click or keypress
  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(onComplete, 300);
  };

  useEffect(() => {
    const handleKeyPress = () => handleSkip();
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div 
      className={`boot-screen ${fadeOut ? 'fade-out' : ''}`}
      onClick={handleSkip}
    >
      <div className="terminal">
        <div className="terminal-content">
          {lines.map((line, index) => (
            <div key={index} className="terminal-line">
              {line}
            </div>
          ))}
          <span className="cursor">█</span>
        </div>
      </div>
      <div className="skip-hint">Click or press any key to skip</div>
    </div>
  );
}

export default BootScreen;
