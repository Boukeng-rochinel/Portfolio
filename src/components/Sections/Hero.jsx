import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Chip,
  IconButton
} from '@mui/material';
import {
  Download,
  Web,
  Smartphone,
  Psychology,
  GitHub,
  LinkedIn,
  Email
} from '@mui/icons-material';
import AnimatedSection from '../UI/AnimatedSection';
import GlowingCard from '../UI/GlowingCard';
import { personalInfo } from '../../data/personalInfo';

const Hero = ({ scrollToSection }) => {
  const [typedName, setTypedName] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullName = personalInfo.name;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setTypedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [fullName]);

  return (
    <Box id="home" sx={{ pt: 12, pb: 8, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="xl">
          <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 6,
              width: '100%'
            }}>
              {/* Text Content */}
              <Box sx={{ 
                flex: 1,
                textAlign: { xs: 'center', md: 'left' }
              }}>
            <AnimatedSection>
              <Typography variant="h1" sx={{ 
                fontWeight: 'bold', 
                mb: 2,
                background: 'linear-gradient(45deg, #1976d2, #21CBF3)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: { xs: '3rem', md: '4.5rem' },
                lineHeight: 1.2,
                minHeight: { xs: '3.6rem', md: '5.4rem' }
              }}>
                {typedName}
                {!isTypingComplete && (
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-block',
                      width: '4px',
                      height: { xs: '3rem', md: '4.5rem' },
                      background: 'linear-gradient(45deg, #1976d2, #21CBF3)',
                      ml: 0.5,
                      animation: 'blink 1s infinite',
                      '@keyframes blink': {
                        '0%, 50%': { opacity: 1 },
                        '51%, 100%': { opacity: 0 }
                      }
                    }}
                  />
                )}
              </Typography>
              <Typography variant="h2" sx={{ 
                color: '#21CBF3', 
                mb: 1, 
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', md: '2.5rem' }
              }}>
                {personalInfo.title}
              </Typography>
              <Typography variant="h3" sx={{ 
                color: '#B0BEC5', 
                mb: 3, 
                fontWeight: 'medium',
                fontSize: { xs: '1.1rem', md: '1.5rem' },
                fontStyle: 'italic'
              }}>
                {personalInfo.specialization}
              </Typography>
              <Typography variant="body1" sx={{ 
                color: '#B0BEC5', 
                mb: 4, 
                lineHeight: 1.8,
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                maxWidth: '95%'
              }}>
                {personalInfo.description}
              </Typography>
              
              {/* Action Buttons */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    background: 'linear-gradient(45deg, #1976d2, #21CBF3)',
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 20px rgba(33, 203, 243, 0.3)'
                    }
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Download />}
                  href={personalInfo.cvLink}
                  target="_blank"
                  sx={{
                    borderColor: '#1976d2',
                    color: '#1976d2',
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#21CBF3',
                      color: '#21CBF3',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Download CV
                </Button>
              </Box>
              
              {/* Skills Chips */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                <Chip 
                  icon={<Web />} 
                  label="Web Development" 
                  sx={{ 
                    background: 'rgba(25, 118, 210, 0.2)', 
                    color: '#1976d2', 
                    border: '1px solid #1976d2',
                    fontWeight: 500
                  }} 
                />
                <Chip 
                  icon={<Smartphone />} 
                  label="Mobile Apps" 
                  sx={{ 
                    background: 'rgba(237, 108, 2, 0.2)', 
                    color: '#ED6C02', 
                    border: '1px solid #ED6C02',
                    fontWeight: 500
                  }} 
                />
                <Chip 
                  icon={<Psychology />} 
                  label="AI Integration" 
                  sx={{ 
                    background: 'rgba(156, 39, 176, 0.2)', 
                    color: '#9C27B0', 
                    border: '1px solid #9C27B0',
                    fontWeight: 500
                  }} 
                />
              </Box>
              
              {/* Social Icons */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton 
                  href={personalInfo.github} 
                  target="_blank"
                  aria-label="GitHub Profile"
                  sx={{ 
                    color: '#1976d2', 
                    background: 'rgba(25, 118, 210, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      color: '#21CBF3',
                      background: 'rgba(33, 203, 243, 0.2)',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <GitHub />
                </IconButton>
                <IconButton 
                  href={personalInfo.linkedin} 
                  target="_blank"
                  aria-label="LinkedIn Profile"
                  sx={{ 
                    color: '#1976d2', 
                    background: 'rgba(25, 118, 210, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      color: '#21CBF3',
                      background: 'rgba(33, 203, 243, 0.2)',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton 
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Contact"
                  sx={{ 
                    color: '#1976d2', 
                    background: 'rgba(25, 118, 210, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      color: '#21CBF3',
                      background: 'rgba(33, 203, 243, 0.2)',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <Email />
                </IconButton>
              </Box>
            </AnimatedSection>
          </Box>
          
          {/* Right Column - Profile Image */}
           <Box sx={{ 
                flex: 1, 
                display: 'flex', 
                justifyContent: 'center',
                order: { xs: -1, md: 0 }
              }}>
            <AnimatedSection>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                position: 'relative'
              }}>
                <GlowingCard delay={0.5}>
                  <Box
                    component="img"
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    sx={{
                      width: '100%',
                      maxWidth: 500,
                      height: 'auto',
                      borderRadius: '24px',
                      boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                      border: '3px solid transparent',
                      backgroundImage: 'linear-gradient(#0a1929, #0a1929), linear-gradient(45deg, #1976d2, #21CBF3)',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box'
                    }}
                  />
                </GlowingCard>
              </Box>
            </AnimatedSection>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;