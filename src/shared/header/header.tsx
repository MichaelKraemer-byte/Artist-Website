import React from 'react';
import { Button, AppBar, Toolbar, IconButton, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeContext } from '../../theme/themeContext'; 
import './header.scss';

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useThemeContext(); 

  return (
    <header className={`header-container ${darkMode ? 'darkmode' : 'lightmode'}`}>
          <div className="leftWing">
            <Link to="/">
              <img className='logo' src={`/img/logo/${darkMode? 'mkc-gallery-logo.svg' : 'mkc-gallery-logo-black.svg'}`} alt="logo" />
            </Link>

            <Link to="/instagram">
              <Button variant="text">Recent posts</Button>
            </Link>

            <Link to="#aboutMe">
              <Button variant="text">About me</Button>
            </Link>
          </div>

          <div className="rightWing">
            <div className="darkModeToggle">
              <IconButton color="inherit" onClick={toggleDarkMode}>
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              <Switch
                checked={darkMode}
                onChange={toggleDarkMode}
                color="default"
              />
            </div>
            <Link to="/register">
              <Button variant="outlined">Register</Button>
            </Link>
            <Link to="/sign-in">
              <Button variant="contained">Sign in</Button>
            </Link>
          </div>
    </header>
  );
};

export default Header;
