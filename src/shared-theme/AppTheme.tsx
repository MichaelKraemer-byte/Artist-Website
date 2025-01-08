import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Erstelle ein benutzerdefiniertes Thema
const AppTheme = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    palette: {
      mode: 'light', // Ändere das zu 'dark', wenn du einen Dark Mode wünschst
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#d32f2f',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Globale Basiskonfiguration */}
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
