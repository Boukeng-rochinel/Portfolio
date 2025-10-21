import React from 'react';
import { Box } from '@mui/material';

const GlowingCard = ({ children, delay = 0 }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '24px',
          padding: '2px',
          background: 'linear-gradient(45deg, #1976d2, #21CBF3)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: `glow 3s ease-in-out ${delay}s infinite alternate`,
          '@keyframes glow': {
            '0%': { opacity: 0.7, transform: 'scale(1)' },
            '100%': { opacity: 1, transform: 'scale(1.02)' },
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default GlowingCard;