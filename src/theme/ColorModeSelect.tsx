import React, { useState } from 'react';
import { IconButton, Switch, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ColorModeSelect = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="darkModeToggle">
    <IconButton color="inherit" onClick={toggleDarkMode}>
      {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
    <Switch
      checked={theme.palette.mode === 'dark'}
      onChange={toggleDarkMode}
      color="default"
    />
  </div>
  );
};

export default ColorModeSelect;
