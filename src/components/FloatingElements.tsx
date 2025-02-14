import { Heart } from 'lucide-react';

// Create an array of heart styles for variety
const heartStyles = [
  { gradient: 'from-red-500 to-pink-500', size: 24 },
  { gradient: 'from-purple-500 to-pink-500', size: 32 },
  { gradient: 'from-pink-500 to-red-500', size: 28 },
  { gradient: 'from-white to-gray-100', size: 20 },
  { gradient: 'from-black to-gray-900', size: 36 }
];

const roses = [
  './media/cat1.jpeg',
  './media/rose.jpeg',
  './media/cats.jpg'
];

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Hearts */}
      {Array.from({ length: 20 }).map((_, index) => {
        const style = heartStyles[index % heartStyles.length];
        const rotation = Math.random() * 360;
        const delay = Math.random() * 30;
        
        return (
          <div
            key={index}
            className={`absolute animate-float opacity-80`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${delay}s`,
              transform: `rotate(${rotation}deg)`,
              filter: 'drop-shadow(0 0 4px currentColor)',
            }}
          >
            <div 
              className={`bg-gradient-to-br ${style.gradient} p-2 rounded-full
                shadow-lg backdrop-blur-sm transition-all duration-300
                animate-pulse`}
              style={{ width: style.size, height: style.size }}
            >
              <Heart 
                size={style.size - 8}
                className="text-white/90"
                fill="currentColor"
              />
            </div>
          </div>
        );
      })}

      {/* Scattered Roses */}
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={`rose-${index}`}
          className="absolute animate-float opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`,
          }}
        >
          <img
            src={roses[index % roses.length]}
            alt="Rose"
            className="w-20 h-20 object-cover rounded-full
              shadow-lg filter brightness-75"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255, 192, 203, 0.5))'
            }}
          />
        </div>
      ))}
    </div>
  );
};