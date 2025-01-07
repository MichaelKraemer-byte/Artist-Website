import './App.scss';
import Header from './shared/header/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InstagramPage from './pages/widgets/instagram/insta-widget.tsx'; 
import HomePage from './pages/home.tsx';
import JoySignInSideTemplate from './pages/sign-in/sign-in.tsx';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/instagram" element={<InstagramPage />} />
          <Route path="/sign-in" element={<JoySignInSideTemplate />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

