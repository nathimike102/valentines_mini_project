import { useState } from 'react';
import { Heart as HeartIcon } from 'lucide-react';

export const Heart = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        transition-transform duration-500 ease-in-out
        ${isHovered ? 'scale-125' : 'animate-pulse'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <HeartIcon 
        size={120}
        className={`
          transition-colors duration-1000 ease-in-out
          ${isHovered ? 'text-red-500 animate-bounce' : 'text-pink-400'}
        `}
        fill={isHovered ? '#ef4444' : '#f472b6'}
      />
    </div>
  );
};