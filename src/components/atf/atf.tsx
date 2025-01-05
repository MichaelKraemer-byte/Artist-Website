import React, { useState, useEffect } from 'react';
import './atf.scss';
import { Button } from '@mui/material';

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

  // useState for managing the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to update the image index every 12 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image or reset to the first image when reaching the end
      setCurrentImageIndex((prevIndex) => (prevIndex) % images.length);
    }, 12000); // 12000ms = 12 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="atf-container">
      <div className="left-content">
        <h1 className="title">Skin-Art of Mythologies</h1>
        <h2 className="subTitle">Tattoo meets Sagas and Legends</h2>
        <Button variant="contained">Book Now</Button>
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

