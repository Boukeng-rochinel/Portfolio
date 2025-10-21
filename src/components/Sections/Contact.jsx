import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Send
} from '@mui/icons-material';
import AnimatedSection from '../UI/AnimatedSection';
import GlowingCard from '../UI/GlowingCard';
import { personalInfo } from '../../data/personalInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    setSnackbar({
      open: true,
      message: 'Thank you for your message! I will get back to you soon.',
      severity: 'success'
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Box id="contact" sx={{ py: 10 }}>
        <Container maxWidth="md">
          <AnimatedSection>
            <Typography variant="h2" align="center" sx={{ mb: 2, fontWeight: 'bold', color: 'white' }}>
              Let's Connect
            </Typography>
            <Typography variant="h5" align="center" sx={{ mb: 6, color: '#B0BEC5' }}>
              Ready to Bring Your Ideas to Life?
            </Typography>

            <GlowingCard>
              <Card sx={{ 
                background: 'rgba(255,255,255,0.05)', 
                backdropFilter: 'blur(10px)', 
                borderRadius: '24px', 
                p: 4 
              }}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ mb: 3, color: 'white', fontWeight: 'bold' }}>
                      Get In Touch
                    </Typography>
                    
                    <Box sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Email sx={{ color: '#1976d2', mr: 2, fontSize: 30 }} />
                        <Box>
                          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                            Email
                          </Typography>
                          <Typography variant="body1" sx={{ color: '#B0BEC5' }}>
                            {personalInfo.email}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Phone sx={{ color: '#1976d2', mr: 2, fontSize: 30 }} />
                        <Box>
                          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                            Phone
                          </Typography>
                          <Typography variant="body1" sx={{ color: '#B0BEC5' }}>
                            {personalInfo.phone}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <LocationOn sx={{ color: '#1976d2', mr: 2, fontSize: 30 }} />
                        <Box>
                          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                            Location
                          </Typography>
                          <Typography variant="body1" sx={{ color: '#B0BEC5' }}>
                            {personalInfo.location}
                          </Typography>
                        </Box>
                      </Box>
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
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <TextField
                        name="name"
                        label="Name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            '& fieldset': { borderColor: '#1976d2' },
                            '&:hover fieldset': { borderColor: '#21CBF3' },
                            '&.Mui-focused fieldset': { borderColor: '#21CBF3' }
                          },
                          '& .MuiInputLabel-root': { 
                            color: '#B0BEC5',
                            '&.Mui-focused': { color: '#21CBF3' }
                          }
                        }}
                      />
                      <TextField
                        name="email"
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            '& fieldset': { borderColor: '#1976d2' },
                            '&:hover fieldset': { borderColor: '#21CBF3' },
                            '&.Mui-focused fieldset': { borderColor: '#21CBF3' }
                          },
                          '& .MuiInputLabel-root': { 
                            color: '#B0BEC5',
                            '&.Mui-focused': { color: '#21CBF3' }
                          }
                        }}
                      />
                      <TextField
                        name="message"
                        label="Message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            '& fieldset': { borderColor: '#1976d2' },
                            '&:hover fieldset': { borderColor: '#21CBF3' },
                            '&.Mui-focused fieldset': { borderColor: '#21CBF3' }
                          },
                          '& .MuiInputLabel-root': { 
                            color: '#B0BEC5',
                            '&.Mui-focused': { color: '#21CBF3' }
                          }
                        }}
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<Send />}
                        sx={{
                          background: 'linear-gradient(45deg, #1976d2, #21CBF3)',
                          borderRadius: '50px',
                          py: 1.5,
                          fontWeight: 'bold',
                          fontSize: '1.1rem',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 10px 20px rgba(33, 203, 243, 0.3)'
                          }
                        }}
                      >
                        Send Message
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </GlowingCard>
          </AnimatedSection>
        </Container>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;