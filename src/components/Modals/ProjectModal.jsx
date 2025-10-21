import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Button,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon
} from '@mui/material';
import { Close, GitHub, OpenInNew, CheckCircle, Build, CalendarToday } from '@mui/icons-material';

const ProjectModal = ({ project, open, onClose }) => {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)',
          color: 'white',
          borderRadius: '24px'
        }
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{ width: '100%', height: 400, objectFit: 'cover' }}
        />
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
            {project.title}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
            <Chip
              icon={<Build />}
              label={project.category}
              sx={{
                background: 'rgba(25, 118, 210, 0.2)',
                color: '#1976d2',
                border: '1px solid #1976d2',
                fontWeight: 'medium'
              }}
            />
            <Chip
              icon={<CalendarToday />}
              label={project.status}
              sx={{
                background: project.status === 'Completed' 
                  ? 'rgba(46, 125, 50, 0.2)' 
                  : 'rgba(237, 108, 2, 0.2)',
                color: project.status === 'Completed' ? '#2E7D32' : '#ED6C02',
                border: `1px solid ${project.status === 'Completed' ? '#2E7D32' : '#ED6C02'}`,
                fontWeight: 'medium'
              }}
            />
            <Chip
              label={`Timeline: ${project.timeline}`}
              sx={{
                background: 'rgba(156, 39, 176, 0.2)',
                color: '#9C27B0',
                border: '1px solid #9C27B0',
                fontWeight: 'medium'
              }}
            />
          </Box>

          <Typography variant="body1" sx={{ mb: 4, color: '#B0BEC5', lineHeight: 1.6, fontSize: '1.1rem' }}>
            {project.description}
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: 'white' }}>
                Key Challenges
              </Typography>
              <List>
                {project.challenges.map((challenge, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Build sx={{ color: '#1976d2', fontSize: 20 }} />
                    </ListItemIcon>
                    <Typography variant="body1" sx={{ color: '#B0BEC5' }}>
                      {challenge}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: 'white' }}>
                Achievements
              </Typography>
              <List>
                {project.achievements.map((achievement, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircle sx={{ color: '#2E7D32', fontSize: 20 }} />
                    </ListItemIcon>
                    <Typography variant="body1" sx={{ color: '#B0BEC5' }}>
                      {achievement}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>

          <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'white' }}>
            Technologies Used
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
            {project.technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                sx={{
                  background: 'rgba(25, 118, 210, 0.2)',
                  color: '#1976d2',
                  border: '1px solid #1976d2',
                  fontSize: '0.9rem',
                  fontWeight: 'medium'
                }}
              />
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 3, gap: 2 }}>
        {project.github && (
          <Button
            href={project.github}
            target="_blank"
            startIcon={<GitHub />}
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
            GitHub
          </Button>
        )}
        {project.live && (
          <Button
            href={project.live}
            target="_blank"
            startIcon={<OpenInNew />}
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
          onClick={onClose}
          startIcon={<Close />}
          sx={{ 
            color: '#B0BEC5',
            '&:hover': {
              color: 'white'
            }
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectModal;