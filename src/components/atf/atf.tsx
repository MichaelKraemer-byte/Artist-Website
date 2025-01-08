import React, { useState, useEffect } from 'react';
import './atf.scss';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const AtTheTopFold: React.FC = () => {
  const images = [
    'deerfish.jpg',
    'fvahik.jpg',
    'hephaistos.jpg',
    'lakosonback.jpg',
    'lakosheretics.jpg',
    'libelle.jpg',
    'raven.jpg',
    'schnabelschleicher.jpg',
    'treeoflife.jpg',
    'troll.jpg'
  ];


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
<div className="atf-container">
  <div className="left-content">
    <h1 className="title">Skin-Art of Mythologies</h1>
    <h2 className="subTitle">Tattoo meets Sagas and Legends</h2>
    <div className='button-row'>
      <Button variant="contained">Book Now</Button>
      <span>or</span>
      <Link to="/sign-in">
        <Button variant="outlined">
          Sign in
        </Button>
      </Link>
    </div>
  </div>
  
  <div className="right-content">
    <div className="image-slideshow">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url('/img/freshTattoos/${image}')` }}
        ></div>
      ))}
    </div>
  </div>
</div>

  );
};

export default AtTheTopFold;

