import './App.scss';
import Header from './shared/header/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InstagramPage from './pages/widgets/instagram/insta-widget.tsx'; 
import HomePage from './pages/home.tsx';
import { SignIn } from './pages/sign-in/sign-in.tsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';


function App() {
    // State for dark mode
    const [darkMode, setDarkMode] = useState(false);

    // Define light and dark themes
    const theme = createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
    });

      // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply baseline styles */}
    <Router>
      <div>
        <Header toggleDarkMode={toggleDarkMode} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/instagram" element={<InstagramPage />} />
          <Route path="/sign-in" element={<SignIn/>} />

        </Routes>
      </div>
    </Router>
    </ThemeProvider>

  );
}

export default App;

