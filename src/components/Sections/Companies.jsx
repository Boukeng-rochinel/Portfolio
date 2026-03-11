import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper
} from '@mui/material';
import { Business, Store, Groups, AccountBalance } from '@mui/icons-material';

const companies = [
  {
    name: "Heverest Consulting",
    role: "Odoo Developer",
    icon: <Business sx={{ fontSize: 40 }} />,
    color: "#2E7D32"
  },
  {
    name: "Myle-Africa",
    role: "Full Stack Developer",
    icon: <Groups sx={{ fontSize: 40 }} />,
    color: "#1565C0"
  },
  {
    name: "Ethnic Restaurant",
    role: "Web Developer",
    icon: <Store sx={{ fontSize: 40 }} />,
    color: "#ED6C02"
  },
  {
    name: "ADC Groupe",
    role: "System Administrator",
    icon: <AccountBalance sx={{ fontSize: 40 }} />,
    color: "#7B1FA2"
  }
];

const Companies = () => {
  return (
    <Box id="companies" sx={{ py: { xs: 6, md: 8 }, background: '#ffffff' }}>
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
            Professional Journey
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
            Companies I've Worked With
          </Typography>
          <Typography 
            sx={{ 
              color: '#737373', 
              maxWidth: 500,
              mx: 'auto',
              fontSize: '0.9rem'
            }}
          >
            Organizations where I've contributed my skills and expertise
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {companies.map((company, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper 
                elevation={0}
                sx={{ 
                  background: '#fff',
                  borderRadius: '16px',
                  border: '1px solid #e5e5e5',
                  p: 4,
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: '#d4d4d4',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
                  }
                }}
              >
                <Box sx={{ 
                  color: company.color,
                  mb: 2,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {company.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 0.5 }}>
                  {company.name}
                </Typography>
                <Typography sx={{ color: '#6366f1', fontSize: '0.85rem', fontWeight: 500 }}>
                  {company.role}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Companies;
