import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Chip,
  Link
} from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material';
import { projects } from '../../data/projectsData';

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: { xs: 6, md: 8 }, background: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              color: '#1a1a1a',
              fontSize: { xs: '1.75rem', md: '2rem' },
              mb: 1
            }}
          >
            Featured Projects
          </Typography>
          <Typography 
            sx={{ 
              color: '#737373', 
              maxWidth: 500,
              mx: 'auto',
              fontSize: '0.9rem'
            }}
          >
            A selection of projects that showcase my technical skills
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: '#fff',
                borderRadius: '12px',
                border: '1px solid #e5e5e5',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#d4d4d4',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }
              }}>
                <Box sx={{ 
                  height: 130,
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#f5f5f5'
                }}>
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
                
                <Box sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.9rem', mb: 0.5 }}>
                    {project.title}
                  </Typography>
                  
                  <Typography sx={{ color: '#525252', mb: 1.5, lineHeight: 1.4, fontSize: '0.8rem', flex: 1 }}>
                    {project.description.substring(0, 80)}...
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5 }}>
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          background: '#f5f5f5',
                          color: '#525252',
                          fontWeight: 500,
                          fontSize: '0.6rem',
                          height: '20px',
                          fontFamily: 'monospace'
                        }}
                      />
                    ))}
                  </Box>
                  
                  <Box sx={{ mt: 'auto', display: 'flex', gap: 1 }}>
                    {project.github && (
                      <Link href={project.github} target="_blank" underline="none">
                        <Button
                          size="small"
                          startIcon={<GitHub sx={{ fontSize: '12px' }} />}
                          sx={{
                            color: '#525252',
                            borderColor: '#e5e5e5',
                            fontSize: '0.65rem',
                            py: 0.25,
                            px: 1,
                            '&:hover': {
                              borderColor: '#1a1a1a',
                              color: '#1a1a1a',
                              background: '#f5f5f5'
                            }
                          }}
                          variant="outlined"
                        >
                          Code
                        </Button>
                      </Link>
                    )}
                    {project.live && (
                      <Link href={project.live} target="_blank" underline="none">
                        <Button
                          size="small"
                          endIcon={<OpenInNew sx={{ fontSize: '12px' }} />}
                          sx={{
                            background: '#1a1a1a',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '0.65rem',
                            py: 0.25,
                            px: 1,
                            '&:hover': {
                              background: '#333'
                            }
                          }}
                          variant="contained"
                        >
                          Demo
                        </Button>
                      </Link>
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
