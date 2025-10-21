import React from 'react';
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
  return (
    <Box id="home" sx={{ pt: 12, pb: 20, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center" sx={{ minHeight: '100vh' }}>
          <Grid item xs={12} md={6}>
            <AnimatedSection>
              <Typography variant="h1" sx={{ 
                fontWeight: 'bold', 
                mb: 2,
                background: 'linear-gradient(45deg, #1976d2, #21CBF3)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: { xs: '3rem', md: '5rem' },
                lineHeight: 1.1
              }}>
                {personalInfo.name}
              </Typography>
              <Typography variant="h2" sx={{ 
                color: '#21CBF3', 
                mb: 1, 
                fontWeight: 'bold',
                fontSize: { xs: '1.8rem', md: '3rem' }
              }}>
                {personalInfo.title}
              </Typography>
              <Typography variant="h3" sx={{ 
                color: '#B0BEC5', 
                mb: 3, 
                fontWeight: 'medium',
                fontSize: { xs: '1.2rem', md: '2rem' },
                fontStyle: 'italic'
              }}>
                {personalInfo.specialization}
              </Typography>
              <Typography variant="h6" sx={{ 
                color: '#B0BEC5', 
                mb: 4, 
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.3rem' },
                maxWidth: '90%'
              }}>
                {personalInfo.description}
              </Typography>
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
                    fontSize: '1.1rem',
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
                    fontSize: '1.1rem',
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
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                <Chip 
                  icon={<Web />} 
                  label="Web Development" 
                  sx={{ background: 'rgba(25, 118, 210, 0.2)', color: '#1976d2', border: '1px solid #1976d2' }} 
                />
                <Chip 
                  icon={<Smartphone />} 
                  label="Mobile Apps" 
                  sx={{ background: 'rgba(237, 108, 2, 0.2)', color: '#ED6C02', border: '1px solid #ED6C02' }} 
                />
                <Chip 
                  icon={<Psychology />} 
                  label="AI Integration" 
                  sx={{ background: 'rgba(156, 39, 176, 0.2)', color: '#9C27B0', border: '1px solid #9C27B0' }} 
                />
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton 
                  href={personalInfo.github} 
                  target="_blank" 
                  sx={{ 
                    color: '#1976d2', 
                    background: 'rgba(25, 118, 210, 0.1)',
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
                  sx={{ 
                    color: '#1976d2', 
                    background: 'rgba(25, 118, 210, 0.1)',
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
                  sx={{ 
                    color: '#1976d2', 
                    background: 'rgba(25, 118, 210, 0.1)',
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
          </Grid>
          <Grid item xs={12} md={6}>
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
                      background: 'linear-gradient(45deg, #1976d2, #21CBF3) border-box'
                    }}
                  />
                </GlowingCard>
              </Box>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;