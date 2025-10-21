import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  TextField,
  Button
} from '@mui/material';
import { SmartToy } from '@mui/icons-material';

const ChatBot = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your AI assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages(prev => [...prev, { text: inputText, sender: 'user' }]);
      setInputText('');
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Thanks for your message! I'll get back to you soon. Meanwhile, feel free to explore my portfolio!", 
          sender: 'bot' 
        }]);
      }, 1000);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)',
          color: 'white',
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
        }
      }}
    >
      <DialogContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 0 }}>
        <Box sx={{ 
          p: 2, 
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
          <SmartToy sx={{ color: '#21CBF3' }} />
          <Typography variant="h6" sx={{ color: 'white' }}>
            AI Assistant
          </Typography>
        </Box>
        
        <Box sx={{ flex: 1, p: 2, overflowY: 'auto' }}>
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                mb: 2
              }}
            >
              <Box
                sx={{
                  background: message.sender === 'user' 
                    ? 'linear-gradient(45deg, #1976d2, #21CBF3)'
                    : 'rgba(255,255,255,0.1)',
                  color: 'white',
                  p: 2,
                  borderRadius: '20px',
                  maxWidth: '70%',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Typography variant="body1">
                  {message.text}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        
        <Box sx={{ p: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              variant="outlined"
              fullWidth
              size="small"
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': { borderColor: '#1976d2' },
                  '&:hover fieldset': { borderColor: '#21CBF3' },
                }
              }}
            />
            <Button
              onClick={handleSend}
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #1976d2, #21CBF3)',
                minWidth: 'auto',
                px: 3
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ChatBot;