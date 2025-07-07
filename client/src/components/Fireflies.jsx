import React, { useEffect } from 'react';

const Fireflies = () => {
  useEffect(() => {
    const container = document.querySelector('#fireflies');
    for (let i = 0; i < 30; i++) {
      const div = document.createElement('div');
      div.className = 'firefly';
      container.appendChild(div);
    }
  }, []);

  return <div id="fireflies" className="fixed inset-0 z-0 overflow-hidden"></div>;
};

export default Fireflies;
