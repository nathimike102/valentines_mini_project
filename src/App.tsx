import { useState, useEffect } from 'react';
import { FloatingElements } from './components/FloatingElements';
import { CelebrationScreen } from './components/CelebrationScreen';
import { NeonHeart } from './components/NeonHeart';
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  const [yesButtons, setYesButtons] = useState<Array<{ id: number; position: { x: number; y: number } }>>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [finalYes, setFinalYes] = useState(false);
  const [audio] = useState(new Audio('/media/Nokusingaperi.mp3'));

  useEffect(() => {
    audio.loop = true;
    audio.volume = 1;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const handleNoClick = () => {
    if (yesButtons.length >= 10) {
      setFinalYes(true);
      return;
    }

    const newButton = {
      id: Date.now(),
      position: {
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 50),
      },
    };


    setYesButtons(prev => [...prev, newButton]);
  };

  const handleYesClick = () => {
    setShowCelebration(true);
    audio.play().catch(error => {
      console.error("Audio playback failed:", error);
    });
  };

  if (showCelebration) {
    return <CelebrationScreen />;
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] overflow-hidden">
      <FloatingElements />
      <NeonHeart />
      
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8 z-10">
          <h1 className="text-6xl font-serif text-white animate-glow">
            Will you be my Valentine?
          </h1>
          
          <div className="flex items-center justify-center space-x-4">
            {!finalYes && (
              <button
                onClick={handleNoClick}
                className="px-8 py-3 glass-effect text-white rounded-full
                  hover:bg-white/30 transition-all duration-300 text-xl font-serif"
              >
                No
              </button>
            )}
            
            {finalYes ? (
              <button
                onClick={handleYesClick}
                className="px-12 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white 
                  rounded-full text-2xl font-serif animate-pulse-scale shadow-lg 
                  hover:from-pink-600 hover:to-red-600 transition-all duration-300
                  shadow-pink-500/50"
              >
                Yes 💖
              </button>
            ) : (
              <button
                onClick={handleYesClick}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white 
                  rounded-full hover:from-pink-600 hover:to-red-600 transition-all 
                  duration-300 text-xl font-serif"
              >
                Yes
              </button>
            )}
          </div>
        </div>

        {yesButtons.map(button => (
          <button
            key={button.id}
            onClick={handleYesClick}
            className="absolute px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 
              text-white rounded-full hover:from-pink-600 hover:to-red-600 
              transition-all duration-300 text-xl font-serif animate-pop-in"
            style={{
              left: button.position.x,
              top: button.position.y,
            }}
          >
            Yes
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;