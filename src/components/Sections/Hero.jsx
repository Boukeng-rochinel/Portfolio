import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Link,
  Grid,
  Paper
} from '@mui/material';
import { ArrowForward, Email, GitHub, LinkedIn, Code, Terminal } from '@mui/icons-material';
import { personalInfo } from '../../data/personalInfo';

const Hero = ({ scrollToSection }) => {
  return (
    <Box 
      id="about" 
      sx={{ 
        pt: { xs: 16, md: 20 }, 
        pb: { xs: 10, md: 14 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#ffffff'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box sx={{ maxWidth: 600 }}>
              <Typography 
                sx={{ 
                  color: '#6366f1',
                  fontWeight: 600,
                  fontSize: '1rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  mb: 2
                }}
              >
                Hello, I'm
              </Typography>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 800, 
                  mb: 2,
                  color: '#1a1a1a',
                  fontSize: { xs: '2.75rem', md: '4rem' },
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}
              >
                {personalInfo.name}
              </Typography>
              <Typography 
                sx={{ 
                  color: '#525252', 
                  mb: 3, 
                  fontWeight: 500,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  lineHeight: 1.5
                }}
              >
                {personalInfo.title}
              </Typography>
              
              {/* Code-style Quote/Tagline */}
              <Paper 
                elevation={0}
                sx={{ 
                  background: '#1a1a1a', 
                  borderRadius: '12px', 
                  p: 3, 
                  mb: 4,
                  borderLeft: '4px solid #6366f1'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Terminal sx={{ color: '#6366f1', mt: 0.5 }} />
                  <Box>
                    <Typography 
                      sx={{ 
                        color: '#a0a0a0', 
                        fontFamily: 'monospace',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                        fontStyle: 'italic'
                      }}
                    >
                      "{personalInfo.tagline}"
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: '#6366f1', 
                        fontFamily: 'monospace',
                        fontSize: '0.75rem',
                        mt: 1.5
                      }}
                    >
                      {`// ${personalInfo.specialization}`}
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              <Typography 
                sx={{ 
                  color: '#737373', 
                  mb: 4, 
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.1rem' }
                }}
              >
                {personalInfo.description}
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 3, mb: 5, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    background: '#1a1a1a',
                    color: '#fff',
                    borderRadius: '12px',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'none',
                    boxShadow: 'none',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      background: '#333',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href={personalInfo.cvLink}
                  target="_blank"
                  sx={{
                    borderColor: '#d4d4d4',
                    color: '#1a1a1a',
                    borderRadius: '12px',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'none',
                    borderWidth: 2,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: '#1a1a1a',
                      borderWidth: 2,
                      background: 'transparent'
                    }
                  }}
                >
                  Download CV
                </Button>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link 
                  href={personalInfo.github} 
                  target="_blank"
                  sx={{ 
                    color: '#737373',
                    transition: 'all 0.2s ease',
                    '&:hover': { 
                      color: '#1a1a1a',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <GitHub fontSize="large" />
                </Link>
                <Link 
                  href={personalInfo.linkedin} 
                  target="_blank"
                  sx={{ 
                    color: '#737373',
                    transition: 'all 0.2s ease',
                    '&:hover': { 
                      color: '#1a1a1a',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <LinkedIn fontSize="large" />
                </Link>
                <Link 
                  href={`mailto:${personalInfo.email}`}
                  sx={{ 
                    color: '#737373',
                    transition: 'all 0.2s ease',
                    '&:hover': { 
                      color: '#1a1a1a',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <Email fontSize="large" />
                </Link>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ 
              position: 'relative',
              width: '100%',
              maxWidth: 400,
              mx: 'auto'
            }}>
              <Box
                component="img"
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '24px',
                  objectFit: 'cover',
                  aspectRatio: '1/1'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
