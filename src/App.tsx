import './App.scss';
import Header from './shared/header/header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InstagramPage from './pages/widgets/instagram/insta-widget.tsx'; 

function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* Button, der zum Instagram-Widget führt */}
        <Link to="/instagram">
          <button>Zu meinen Instagram-Inhalten</button>
        </Link>

        {/* Routing-Logik */}
        <Routes>
          {/* Route für die Startseite (Root-Pfad) */}
          <Route path="/" element={
            <div>
              <h1>Hello World!</h1>
              <img className='logo' src='/img/logo/mkc-gallery-logo.svg' alt="MKC Gallery Logo"/>
            </div>
          } />

          {/* Route für das Instagram-Widget */}
          <Route path="/instagram" element={<InstagramPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

