import React from 'react';
import heroImage from '../assets/hero-image.png'

const Home = () => (
  <div className="home-container">
    <div className="hero-image-container">
      <img 
        src={heroImage}
        alt="Film Reel" 
        className="hero-image" 
      />
      <div className="hero-text">
        <h1>Benvenuto nella Libreria dei Film</h1>
        <p>Iscriviti ora e lascia le tue recensioni sui film!</p>
      </div>
    </div>
  </div>
);

export default Home;
