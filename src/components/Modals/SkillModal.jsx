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
  LinearProgress
} from '@mui/material';
import { Close, Work, CalendarToday, Folder } from '@mui/icons-material';

const SkillModal = ({ skill, open, onClose }) => {
  if (!skill) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)',
          color: 'white',
          borderRadius: '24px'
        }
      }}
    >
      <DialogContent sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Box sx={{ color: skill.color, mr: 2 }}>
            {skill.icon}
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'white' }}>
            {skill.category}
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ color: '#B0BEC5', mb: 4, lineHeight: 1.6, fontSize: '1.1rem' }}>
          {skill.description}
        </Typography>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Work sx={{ color: skill.color, mr: 1 }} />
              <Typography variant="h6" sx={{ color: 'white' }}>
                Proficiency
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: skill.color, fontWeight: 'bold', mb: 1 }}>
              {skill.proficiency}
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={skill.proficiency === 'Advanced' ? 90 : skill.proficiency === 'Intermediate' ? 70 : 50}
              sx={{ 
                height: 8, 
                borderRadius: 4,
                backgroundColor: 'rgba(255,255,255,0.1)',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: skill.color
                }
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CalendarToday sx={{ color: skill.color, mr: 1 }} />
              <Typography variant="h6" sx={{ color: 'white' }}>
                Experience
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ color: skill.color, fontWeight: 'bold' }}>
              {skill.years}+ years
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Folder sx={{ color: skill.color, mr: 1 }} />
              <Typography variant="h6" sx={{ color: 'white' }}>
                Projects
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ color: skill.color, fontWeight: 'bold' }}>
              {skill.projects}+
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 'bold' }}>
          Technologies & Tools
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skill.technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              sx={{
                background: `rgba(${parseInt(skill.color.slice(1,3), 16)}, ${parseInt(skill.color.slice(3,5), 16)}, ${parseInt(skill.color.slice(5,7), 16)}, 0.2)`,
                color: skill.color,
                border: `1px solid ${skill.color}`,
                fontWeight: 'medium',
                fontSize: '0.9rem',
                padding: '8px 12px'
              }}
            />
          ))}
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
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

export default SkillModal;