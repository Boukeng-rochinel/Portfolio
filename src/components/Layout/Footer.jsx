import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 4, background: 'rgba(0,0,0,0.5)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body1" sx={{ color: '#B0BEC5' }}>
            © {new Date().getFullYear()} Boukeng Rochinel. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Typography variant="body2" sx={{ color: '#8d9092ff' }}>
              Powered by NashSoft Systems
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;