import React from 'react';
import './Landing.css'; // For background

function Confession() {
  return (
    <div className="landing-container">
      <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center max-w-2xl mx-auto shadow-lg animate-fadeIn">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4 drop-shadow animate-typewriter border-r-2 border-yellow-400 whitespace-nowrap overflow-hidden">
          A Tiny Secret…
        </h2>
        <p className="text-lg text-white italic leading-relaxed drop-shadow-sm animate-fadeDelay">
          This isn’t just a website. It’s a feeling. <br />
          A tiny space in the universe where someone thinks you’re unforgettable. 🌌
        </p>
      </div>
    </div>
  );
}

export default Confession;
