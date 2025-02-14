import React, { useState, useEffect } from 'react';

const messages = [
  "Every moment with you feels like a beautiful dream come true.",
  "You make my heart skip a beat every time I see you smile.",
  "In your love, I've found my home, my heart, my everything."
];

export const MessageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-20 flex items-center justify-center">
      <p 
        className={`
          text-2xl font-serif text-pink-700 text-center
          transition-opacity duration-500 ease-in-out
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {messages[currentIndex]}
      </p>
    </div>
  );
};