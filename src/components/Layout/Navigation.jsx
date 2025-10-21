import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Dialog,
  Box,
  Switch,
  FormControlLabel,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  Menu,
  Close,
  Fullscreen,
  FullscreenExit
} from '@mui/icons-material';

const Navigation = ({ 
  navItems, 
  scrollToSection, 
  isFullscreen, 
  toggleFullscreen, 
  cursorEnabled, 
  setCursorEnabled 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <AppBar position="fixed" sx={{ 
        background: 'rgba(10, 10, 10, 0.95)', 
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Toolbar>
          <Typography variant="h6" sx={{ 
            flexGrow: 1, 
            fontWeight: 'bold', 
            background: 'linear-gradient(45deg, #1976d2, #21CBF3)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: '1.5rem'
          }}>
            BR
          </Typography>
          
          {!isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: 'white',
                    textTransform: 'none',
                    fontWeight: 'medium',
                    fontSize: '1rem',
                    '&:hover': {
                      background: 'rgba(25, 118, 210, 0.1)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <IconButton onClick={toggleFullscreen} sx={{ color: '#21CBF3' }}>
                {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
              </IconButton>
              <FormControlLabel
                control={
                  <Switch
                    checked={cursorEnabled}
                    onChange={(e) => setCursorEnabled(e.target.checked)}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#21CBF3',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#21CBF3',
                      },
                    }}
                  />
                }
                label="Cursor"
                sx={{ color: 'white', ml: 1 }}
              />
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton onClick={toggleFullscreen} sx={{ color: '#21CBF3' }}>
                {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
              </IconButton>
              <IconButton onClick={() => setMobileMenuOpen(true)} sx={{ color: 'white' }}>
                <Menu />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Menu */}
      <Dialog fullScreen open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} sx={{ zIndex: 9999 }}>
        <Box sx={{ 
          p: 2, 
          background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)', 
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h6" sx={{ color: '#21CBF3', fontWeight: 'bold' }}>
              Menu
            </Typography>
            <IconButton onClick={() => setMobileMenuOpen(false)} sx={{ color: 'white' }}>
              <Close />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flexGrow: 1, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  fontSize: '1.5rem',
                  py: 3,
                  fontWeight: 'bold',
                  '&:hover': {
                    background: 'rgba(25, 118, 210, 0.1)'
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default Navigation;