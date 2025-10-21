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
import { Work, Event, OpenInNew } from '@mui/icons-material';
import AnimatedSection from '../UI/AnimatedSection';
import GlowingCard from '../UI/GlowingCard';
import EventModal from '../Modals/EventModal';
import { experience } from '../../data/experienceData';
import { events } from '../../data/eventsData';

const Journey = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <Box id="journey" sx={{ py: 10, background: 'rgba(255,255,255,0.02)' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography variant="h2" align="center" sx={{ mb: 2, fontWeight: 'bold', color: 'white' }}>
              My Journey
            </Typography>
            <Typography variant="h5" align="center" sx={{ mb: 6, color: '#B0BEC5' }}>
              Professional Growth & Community Engagement
            </Typography>

            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" sx={{ mb: 4, color: '#21CBF3', fontWeight: 'bold' }}>
                  <Work sx={{ verticalAlign: 'middle', mr: 2, fontSize: 40 }} />
                  Experience
                </Typography>
                {experience.map((exp, index) => (
                  <GlowingCard key={index} delay={index * 0.2}>
                    <Card sx={{ 
                      background: 'rgba(255,255,255,0.05)', 
                      backdropFilter: 'blur(10px)', 
                      borderRadius: '24px', 
                      p: 3, 
                      mb: 3 
                    }}>
                      <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}>
                          {exp.role}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#1976d2', mb: 2, fontWeight: 'medium' }}>
                          {exp.company} • {exp.period}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#B0BEC5', mb: 2, fontStyle: 'italic' }}>
                          {exp.location} • {exp.type}
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, color: '#B0BEC5' }}>
                          {exp.achievements.map((achievement, achIndex) => (
                            <Typography component="li" key={achIndex} variant="body1" sx={{ mb: 1, lineHeight: 1.6 }}>
                              {achievement}
                            </Typography>
                          ))}
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                          {exp.technologies.map((tech, techIndex) => (
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
                      </CardContent>
                    </Card>
                  </GlowingCard>
                ))}
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h3" sx={{ mb: 4, color: '#21CBF3', fontWeight: 'bold' }}>
                  <Event sx={{ verticalAlign: 'middle', mr: 2, fontSize: 40 }} />
                  Events & Learning
                </Typography>
                {events.map((event, index) => (
                  <GlowingCard key={index} delay={index * 0.2}>
                    <Card sx={{ 
                      background: 'rgba(255,255,255,0.05)', 
                      backdropFilter: 'blur(10px)', 
                      borderRadius: '24px', 
                      p: 3, 
                      mb: 3,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)'
                      }
                    }}
                    onClick={() => setSelectedEvent(event)}
                    >
                      <CardContent sx={{ p: 0 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
                            {event.title}
                          </Typography>
                          <Chip
                            label={event.type}
                            size="small"
                            sx={{
                              background: 'rgba(33, 203, 243, 0.2)',
                              color: '#21CBF3',
                              border: '1px solid #21CBF3',
                              fontWeight: 'medium'
                            }}
                          />
                        </Box>
                        <Typography variant="h6" sx={{ color: '#1976d2', mb: 1, fontWeight: 'medium' }}>
                          {event.date} • {event.location}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#B0BEC5', mb: 2, lineHeight: 1.6 }}>
                          {event.description.substring(0, 120)}...
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {event.skills.slice(0, 2).map((skill, skillIndex) => (
                              <Chip
                                key={skillIndex}
                                label={skill}
                                size="small"
                                sx={{
                                  background: 'rgba(25, 118, 210, 0.2)',
                                  color: '#1976d2',
                                  border: '1px solid #1976d2',
                                  fontWeight: 'medium',
                                  fontSize: '0.7rem'
                                }}
                              />
                            ))}
                            {event.skills.length > 2 && (
                              <Chip
                                label={`+${event.skills.length - 2}`}
                                size="small"
                                sx={{
                                  background: 'rgba(255,255,255,0.1)',
                                  color: '#B0BEC5',
                                  fontWeight: 'medium',
                                  fontSize: '0.7rem'
                                }}
                              />
                            )}
                          </Box>
                          <Button
                            size="small"
                            endIcon={<OpenInNew />}
                            sx={{
                              color: '#21CBF3',
                              '&:hover': {
                                color: '#1976d2'
                              }
                            }}
                          >
                            Details
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </GlowingCard>
                ))}
              </Grid>
            </Grid>
          </AnimatedSection>
        </Container>
      </Box>

      <EventModal 
        event={selectedEvent} 
        open={!!selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
    </>
  );
};

export default Journey;