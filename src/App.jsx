import React, { useState } from 'react';
import { Box, Fab, Zoom, useScrollTrigger } from '@mui/material';
import { KeyboardArrowUp, SmartToy } from '@mui/icons-material';

// Layout Components
import FloatingParticles from './components/Layout/FloatingParticles';
import AnimatedCursor from './components/Layout/AnimatedCursor';
import Navigation from './components/Layout/Navigation';
import ScrollToTop from './components/Layout/ScrollToTop';

// Section Components
import Hero from './components/Sections/Hero';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Journey from './components/Sections/Journey';
import Contact from './components/Sections/Contact';

// Modal Components
import ChatBot from './components/UI/ChatBot';

// Footer
import Footer from './components/Layout/Footer';

const App = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [cursorEnabled, setCursorEnabled] = useState(true);
  const [chatBotOpen, setChatBotOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Journey', id: 'journey' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)', 
      minHeight: '100vh', 
      color: 'white',
      cursor: cursorEnabled ? 'none' : 'auto'
    }}>
      <FloatingParticles />
      {cursorEnabled && <AnimatedCursor />}
      
      <Navigation 
        navItems={navItems}
        scrollToSection={scrollToSection}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
        cursorEnabled={cursorEnabled}
        setCursorEnabled={setCursorEnabled}
      />

      <Hero scrollToSection={scrollToSection} />
      <Skills />
      <Projects />
      <Journey />
      <Contact />

      <Footer />

      {/* Floating Action Buttons */}
      <Box sx={{ position: 'fixed', bottom: 24, left: 24, zIndex: 1000, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* AI Chat Bot Button */}
        <Zoom in={true}>
          <Fab
            onClick={() => setChatBotOpen(true)}
            sx={{
              background: 'linear-gradient(45deg, #9C27B0, #E91E63)',
              color: 'white',
              '&:hover': {
                transform: 'scale(1.1)',
                background: 'linear-gradient(45deg, #8E24AA, #D81B60)'
              }
            }}
          >
            <SmartToy />
          </Fab>
        </Zoom>
      </Box>

      <ScrollToTop>
        <Fab size="medium" sx={{ 
          background: 'linear-gradient(45deg, #1976d2, #21CBF3)', 
          color: 'white',
          '&:hover': {
            transform: 'scale(1.1)'
          }
        }}>
          <KeyboardArrowUp />
        </Fab>
      </ScrollToTop>

      <ChatBot open={chatBotOpen} onClose={() => setChatBotOpen(false)} />
    </Box>
  );
};

export default App;