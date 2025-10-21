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
import { 
  Close, 
  CalendarToday, 
  LocationOn, 
  Schedule,
  CheckCircle,
  Image as ImageIcon
} from '@mui/icons-material';

const EventModal = ({ event, open, onClose }) => {
  if (!event) return null;

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
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'white', mb: 2 }}>
          {event.title}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
          <Chip
            icon={<CalendarToday />}
            label={event.type}
            sx={{
              background: 'rgba(33, 203, 243, 0.2)',
              color: '#21CBF3',
              border: '1px solid #21CBF3',
              fontWeight: 'medium'
            }}
          />
          <Chip
            icon={<Schedule />}
            label={event.duration}
            sx={{
              background: 'rgba(25, 118, 210, 0.2)',
              color: '#1976d2',
              border: '1px solid #1976d2',
              fontWeight: 'medium'
            }}
          />
          <Chip
            icon={<LocationOn />}
            label={event.location}
            sx={{
              background: 'rgba(46, 125, 50, 0.2)',
              color: '#2E7D32',
              border: '1px solid #2E7D32',
              fontWeight: 'medium'
            }}
          />
        </Box>

        <Typography variant="body1" sx={{ color: '#B0BEC5', mb: 4, lineHeight: 1.6, fontSize: '1.1rem' }}>
          {event.description}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ color: 'white', mb: 3, fontWeight: 'bold' }}>
              Key Takeaways
            </Typography>
            <List>
              {event.takeaways.map((takeaway, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircle sx={{ color: '#21CBF3', fontSize: 20 }} />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ color: '#B0BEC5' }}>
                    {takeaway}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ color: 'white', mb: 3, fontWeight: 'bold' }}>
              Skills Gained
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {event.skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
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

            {event.certificate && (
              <Box sx={{ mt: 3 }}>
                <Button
                  href={event.certificate}
                  target="_blank"
                  variant="outlined"
                  startIcon={<ImageIcon />}
                  sx={{
                    borderColor: '#1976d2',
                    color: '#1976d2',
                    '&:hover': {
                      borderColor: '#21CBF3',
                      color: '#21CBF3'
                    }
                  }}
                >
                  View Certificate
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>

        {event.images && event.images.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 'bold' }}>
              Event Photos
            </Typography>
            <Grid container spacing={2}>
              {event.images.map((image, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box
                    component="img"
                    src={image}
                    alt={`Event ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                      borderRadius: '12px',
                      border: '2px solid rgba(255,255,255,0.1)'
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
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

export default EventModal;