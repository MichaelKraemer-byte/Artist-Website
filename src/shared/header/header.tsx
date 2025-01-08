import React from 'react';
import { Button, AppBar, Toolbar, IconButton, Switch, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

interface HeaderProps {
  toggleDarkMode: () => void; // Function to toggle dark mode
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode }) => {
  const theme = useTheme(); // Get the current theme

  return (
    <header className='header-container'>
      <AppBar position="sticky">
        <Toolbar>
          <div className="leftWing">
            <Link to="/">
              <img className="logo" src='/img/logo/mkc-gallery-logo.svg' alt="logo" />
            </Link>

            <Link to="/instagram">
              <Button variant="text">Recent posts</Button>
            </Link>

            <Link to="#aboutMe">
              <Button variant="text">About me</Button>
            </Link>
          </div>

          <div className="rightWing">
            <Link to="/register">
              <Button variant="outlined">Register</Button>
            </Link>
            <Link to="/sign-in">
              <Button variant="contained">Sign in</Button>
            </Link>
          </div>

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
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
