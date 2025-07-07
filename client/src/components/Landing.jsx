import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Landing.css';

const Landing = ({ next }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-container">
      {/* Animated Stars */}
      {[...Array(30)].map((_, i) => (
        <div key={i} className="star" style={{ '--i': i }} />
      ))}

      {/* Title */}
      <h1 className="birthday-title heartbeat">
        🎉 Happy Birthday <span className="highlight">Afreen</span> 🎂
      </h1>

      {/* Floating Cake */}
      <img src="/cake.png" alt="Cake" className="cake-image" />

      {/* Balloons */}
      <div className="balloons">
        {[...Array(6)].map((_, i) => (
          <img key={i} src="/balloon.png" className={`balloon balloon-${i}`} alt="Balloon" />
        ))}
      </div>

      {/* Button */}
      {showButton && (
        <button className="start-button shine" onClick={next}>
          💖 Tap to Begin Your Surprise 💖
        </button>
      )}
    </div>
  );
};

Landing.propTypes = {
  next: PropTypes.func.isRequired,
};

export default Landing;
