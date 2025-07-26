import React from 'react';
import ReactDOM from 'react-dom/client';
// import Portfolio from './Portfolio'; // Assuming your component is in Portfolio.jsx
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // Good for consistent baseline styles

const theme = createTheme({
  palette: {
    primary: {
      main: '#4f46e5', // A strong indigo
      light: '#e0e7ff', // Light indigo for backgrounds
      dark: '#3730a3', // Darker indigo
    },
    secondary: {
      main: '#6366f1', // Another indigo shade
    },
    text: {
      primary: '#1e293b', // slate-800
      secondary: '#475569', // slate-600
    },
    background: {
      default: '#f8fafc', // slate-50
      paper: '#ffffff', // white
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // MUI's default is Roboto
    h1: { fontSize: '3.75rem' }, // 60px
    h2: { fontSize: '2.25rem' }, // 36px
    h3: { fontSize: '3rem' },   // 48px, used in Hero
    h4: { fontSize: '2.25rem' }, // 36px, used for section titles
    h5: { fontSize: '1.5rem' },  // 24px, used for sub-titles
    h6: { fontSize: '1.25rem' }, // 20px
    body1: { fontSize: '1rem' }, // 16px
    body2: { fontSize: '0.875rem' }, // 14px
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Applies a CSS reset */}
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
);