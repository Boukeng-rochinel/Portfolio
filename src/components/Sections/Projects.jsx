import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Button
} from '@mui/material';
import { OpenInNew, GitHub } from '@mui/icons-material';
import AnimatedSection from '../UI/AnimatedSection';
import GlowingCard from '../UI/GlowingCard';
import ProjectModal from '../Modals/ProjectModal';
import { projects } from '../../data/projectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Box id="projects" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography variant="h2" align="center" sx={{ mb: 2, fontWeight: 'bold', color: 'white' }}>
              Featured Projects
            </Typography>
            <Typography variant="h5" align="center" sx={{ mb: 6, color: '#B0BEC5' }}>
              Web & Mobile Development Showcase
            </Typography>

            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <GlowingCard delay={index * 0.3}>
                    <Card sx={{ 
                      background: 'rgba(255,255,255,0.05)', 
                      backdropFilter: 'blur(10px)', 
                      borderRadius: '24px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      height: '100%',
                      '&:hover': {
                        transform: 'translateY(-10px)'
                      }
                    }}
                    onClick={() => setSelectedProject(project)}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                          width: '100%',
                          height: 250,
                          objectFit: 'cover',
                          borderTopLeftRadius: '24px',
                          borderTopRightRadius: '24px'
                        }}
                      />
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
                            {project.title}
                          </Typography>
                          {project.featured && (
                            <Chip 
                              label="Featured" 
                              size="small" 
                              sx={{ 
                                background: 'linear-gradient(45deg, #1976d2, #21CBF3)',
                                color: 'white',
                                fontWeight: 'bold'
                              }} 
                            />
                          )}
                        </Box>
                        <Typography variant="body1" sx={{ color: '#B0BEC5', mb: 3, lineHeight: 1.6 }}>
                          {project.description.substring(0, 150)}...
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <Chip
                              key={techIndex}
                              label={tech}
                              size="small"
                              sx={{
                                background: 'rgba(25, 118, 210, 0.2)',
                                color: '#1976d2',
                                border: '1px solid #1976d2',
                                fontWeight: 'medium'
                              }}
                            />
                          ))}
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                          {project.github && (
                            <Button
                              size="small"
                              startIcon={<GitHub />}
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.github, '_blank');
                              }}
                              sx={{
                                color: '#1976d2',
                                borderColor: '#1976d2',
                                '&:hover': {
                                  borderColor: '#21CBF3',
                                  color: '#21CBF3'
                                }
                              }}
                              variant="outlined"
                            >
                              Code
                            </Button>
                          )}
                          {project.live && (
                            <Button
                              size="small"
                              startIcon={<OpenInNew />}
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.live, '_blank');
                              }}
                              sx={{
                                background: 'linear-gradient(45deg, #1976d2, #21CBF3)',
                                color: 'white',
                                '&:hover': {
                                  background: 'linear-gradient(45deg, #1565c0, #1EA0D2)'
                                }
                              }}
                              variant="contained"
                            >
                              Live Demo
                            </Button>
                          )}
                          <Button
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                            }}
                            sx={{
                              color: '#B0BEC5',
                              '&:hover': {
                                color: 'white'
                              }
                            }}
                          >
                            View Details
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </GlowingCard>
                </Grid>
              ))}
            </Grid>
          </AnimatedSection>
        </Container>
      </Box>

      <ProjectModal 
        project={selectedProject} 
        open={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
};

export default Projects;