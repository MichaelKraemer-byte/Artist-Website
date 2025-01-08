import React, { useState } from 'react';
import { IconButton, Switch } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ColorModeSelect = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <IconButton onClick={toggleDarkMode}>
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
      <Switch checked={darkMode} onChange={toggleDarkMode} />
    </div>
  );
};

export default ColorModeSelect;
