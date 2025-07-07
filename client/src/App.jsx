import React, { useState } from 'react';
import Fireflies from './components/Fireflies';
import Landing from './components/Landing';
import Questions from './components/Questions';
import Shayari from './components/Shayari';
import Confession from './components/Confession';

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="relative min-h-screen text-white bg-black overflow-auto">
      <Fireflies />
      <audio autoPlay loop hidden>
        <source src="/bg-music.mp3" type="audio/mpeg" />
      </audio>

      {step === 1 && <Landing next={() => setStep(2)} />}
      {step === 2 && <Shayari next={() => setStep(3)} />}
      {step === 3 && <Questions next={() => setStep(4)} />}
      {step === 4 && <Confession />}
    </div>
  );
}

export default App;
