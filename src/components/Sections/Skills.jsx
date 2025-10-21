import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip
} from '@mui/material';
import AnimatedSection from '../UI/AnimatedSection';
import GlowingCard from '../UI/GlowingCard';
import SkillModal from '../Modals/SkillModal';
import { skills } from '../../data/skillsData';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <>
      <Box id="skills" sx={{ py: 10, background: 'rgba(255,255,255,0.02)' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography variant="h2" align="center" sx={{ mb: 2, fontWeight: 'bold', color: 'white' }}>
              Technical Expertise
            </Typography>
            <Typography variant="h5" align="center" sx={{ mb: 6, color: '#B0BEC5' }}>
              Full-Stack Development Across Web & Mobile
            </Typography>
            
            <Grid container spacing={4}>
              {skills.map((skill, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <GlowingCard delay={index * 0.2}>
                    <Card 
                      sx={{ 
                        background: 'rgba(255,255,255,0.05)', 
                        backdropFilter: 'blur(10px)', 
                        borderRadius: '24px', 
                        p: 3,
                        height: '100%',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-10px)'
                        }
                      }}
                      onClick={() => setSelectedSkill(skill)}
                    >
                      <CardContent sx={{ p: 0 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                          <Box sx={{ color: skill.color, mr: 2 }}>
                            {skill.icon}
                          </Box>
                          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
                            {skill.category}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: '#B0BEC5', mb: 3, lineHeight: 1.5 }}>
                          {skill.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {skill.technologies.slice(0, 4).map((tech, techIndex) => (
                            <Chip
                              key={techIndex}
                              label={tech}
                              size="small"
                              sx={{
                                background: `rgba(${parseInt(skill.color.slice(1,3), 16)}, ${parseInt(skill.color.slice(3,5), 16)}, ${parseInt(skill.color.slice(5,7), 16)}, 0.2)`,
                                color: skill.color,
                                border: `1px solid ${skill.color}`,
                                fontWeight: 'medium',
                                fontSize: '0.7rem'
                              }}
                            />
                          ))}
                          {skill.technologies.length > 4 && (
                            <Chip
                              label={`+${skill.technologies.length - 4} more`}
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
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3, pt: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                          <Typography variant="body2" sx={{ color: skill.color, fontWeight: 'bold' }}>
                            {skill.proficiency}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#B0BEC5' }}>
                            {skill.years}y exp
                          </Typography>
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

      <SkillModal 
        skill={selectedSkill} 
        open={!!selectedSkill} 
        onClose={() => setSelectedSkill(null)} 
      />
    </>
  );
};

export default Skills;