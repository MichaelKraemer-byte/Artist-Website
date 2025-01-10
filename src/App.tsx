import './App.scss';
import Header from './shared/header/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InstagramPage from './pages/widgets/instagram/insta-widget.tsx'; 
import HomePage from './pages/home.tsx';
import { SignIn } from './pages/sign-in/sign-in.tsx'
import { ThemeContextProvider } from './theme/themeContext.tsx';

const App = () => {


  return (
    <ThemeContextProvider>

    <Router>
      <div>
        <Header/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/instagram" element={<InstagramPage />} />
          <Route path="/sign-in" element={<SignIn/>} />

        </Routes>
      </div>
    </Router>
    </ThemeContextProvider>

  );
}

export default App;

