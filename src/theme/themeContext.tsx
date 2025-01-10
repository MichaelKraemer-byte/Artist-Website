import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Unsere Themes importieren
import { lightTheme, darkTheme } from './theme';

// 1. Context erstellen
const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

// 2. Provider-Komponente
export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'true';
      });
      
    const toggleDarkMode = () => {
        setDarkMode((prev) => {
          const newMode = !prev;
          localStorage.setItem('darkMode', newMode.toString());
          return newMode;
        });
    };
      

  // Wähle das passende Theme basierend auf darkMode
  const currentTheme = createTheme(darkMode ? darkTheme : lightTheme);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom Hook, um den Kontext einfacher zu verwenden
export const useThemeContext = () => useContext(ThemeContext);
