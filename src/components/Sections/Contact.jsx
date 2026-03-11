import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Paper
} from '@mui/material';
import { Email, Phone, LocationOn, GitHub, LinkedIn, Send, Business } from '@mui/icons-material';
import { personalInfo } from '../../data/personalInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Box id="contact" sx={{ py: { xs: 6, md: 8 }, background: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            sx={{ 
              color: '#6366f1',
              fontWeight: 600,
              fontSize: '0.875rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              mb: 2
            }}
          >
            Get In Touch
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              color: '#1a1a1a',
              fontSize: { xs: '1.75rem', md: '2rem' },
              mb: 1
            }}
          >
            Let's Work Together
          </Typography>
          <Typography 
            sx={{ 
              color: '#737373', 
              maxWidth: 500,
              mx: 'auto',
              fontSize: '0.9rem'
            }}
          >
            Have a project in mind? Reach out for Odoo implementations or custom development.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10}>
            <Paper elevation={0} sx={{ 
              background: '#fff',
              borderRadius: '16px',
              border: '1px solid #e5e5e5',
              p: { xs: 3, md: 5 }
            }}>
              <Grid container spacing={4}>
                {/* Contact Info */}
                <Grid item xs={12} md={5}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 3 }}>
                    Contact Information
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2.5 }}>
                      <Box sx={{ 
                        color: '#6366f1',
                        mr: 2,
                        p: 0.75,
                        background: 'rgba(99, 102, 241, 0.1)',
                        borderRadius: '8px'
                      }}>
                        <Business />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ color: '#737373', mb: 0.5 }}>
                          Company
                        </Typography>
                        <Typography sx={{ color: '#1a1a1a', fontWeight: 500, fontSize: '0.95rem' }}>
                          {personalInfo.company}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2.5 }}>
                      <Box sx={{ 
                        color: '#6366f1',
                        mr: 2,
                        p: 0.75,
                        background: 'rgba(99, 102, 241, 0.1)',
                        borderRadius: '8px'
                      }}>
                        <Email />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ color: '#737373', mb: 0.5 }}>
                          Email
                        </Typography>
                        <Link 
                          href={`mailto:${personalInfo.email}`}
                          sx={{ color: '#1a1a1a', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}
                        >
                          {personalInfo.email}
                        </Link>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2.5 }}>
                      <Box sx={{ 
                        color: '#6366f1',
                        mr: 2,
                        p: 0.75,
                        background: 'rgba(99, 102, 241, 0.1)',
                        borderRadius: '8px'
                      }}>
                        <Phone />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ color: '#737373', mb: 0.5 }}>
                          Phone
                        </Typography>
                        <Typography sx={{ color: '#1a1a1a', fontWeight: 500, fontSize: '0.95rem' }}>
                          {personalInfo.phone}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2.5 }}>
                      <Box sx={{ 
                        color: '#6366f1',
                        mr: 2,
                        p: 0.75,
                        background: 'rgba(99, 102, 241, 0.1)',
                        borderRadius: '8px'
                      }}>
                        <LocationOn />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ color: '#737373', mb: 0.5 }}>
                          Location
                        </Typography>
                        <Typography sx={{ color: '#1a1a1a', fontWeight: 500, fontSize: '0.95rem' }}>
                          {personalInfo.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Typography variant="h6" sx={{ color: '#1a1a1a', fontWeight: 600, mb: 2 }}>
                    Follow Me
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
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
                  </Box>
                </Grid>

                {/* Contact Form */}
                <Grid item xs={12} md={7}>
                  <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    <TextField
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#1a1a1a',
                          background: '#fafafa',
                          borderRadius: '10px',
                          '& fieldset': { borderColor: '#e5e5e5' },
                          '&:hover fieldset': { borderColor: '#d4d4d4' },
                          '&.Mui-focused fieldset': { borderColor: '#6366f1' }
                        }
                      }}
                    />
                    <TextField
                      name="email"
                      placeholder="Your Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#1a1a1a',
                          background: '#fafafa',
                          borderRadius: '10px',
                          '& fieldset': { borderColor: '#e5e5e5' },
                          '&:hover fieldset': { borderColor: '#d4d4d4' },
                          '&.Mui-focused fieldset': { borderColor: '#6366f1' }
                        }
                      }}
                    />
                    <TextField
                      name="message"
                      placeholder="Your Message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#1a1a1a',
                          background: '#fafafa',
                          borderRadius: '10px',
                          '& fieldset': { borderColor: '#e5e5e5' },
                          '&:hover fieldset': { borderColor: '#d4d4d4' },
                          '&.Mui-focused fieldset': { borderColor: '#6366f1' }
                        }
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<Send />}
                      sx={{
                        background: '#1a1a1a',
                        color: '#fff',
                        borderRadius: '10px',
                        py: 1.25,
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        alignSelf: 'flex-start',
                        px: 4,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          background: '#333',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
