import './App.scss';
import Header from './shared/header/header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InstagramPage from './pages/widgets/instagram/insta-widget.tsx'; 
import HomePage from './pages/home.tsx'

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/instagram" element={<InstagramPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

