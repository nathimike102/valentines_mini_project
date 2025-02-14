import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const celebrationMessages = [
  "Happy Valentine's Day, my love! You make every day special just by being in it.",
  "You are my heart's greatest joy. Wishing you a Valentine's Day as wonderful as you!",
  "Every day with you is a reason to celebrate love. Happy Valentine's Day, my darling!",
  "You make my world brighter and my heart fuller. Love you today and always!",
  "To the love of my life—thank you for making every moment magical.",
  "Happy Valentine's Day to my forever Valentine! I cherish every moment with you.",
  "You are my best friend, my love, and my greatest blessing. Wishing you a day as amazing as you!",
  "My heart belongs to you, today and forever. Happy Valentine's Day, sweetheart!",
  "Being with you is my favorite place to be. Sending all my love to you today!",
  "Every love story is beautiful, but ours is my favorite. Happy Valentine's Day, my dear!",
  "Happy Valentine's Day, my love! You make my heart skip a beat every day.",
  "I feel so lucky to have you in my life. Wishing you a day full of love and happiness!",
  "Life is sweeter with you by my side. Sending you all my love today!",
  "You are my favorite reason to smile. Happy Valentine's Day, my love!",
  "Falling in love with you was the best thing that ever happened to me.",
  "No matter where life takes us, my heart will always belong to you. Happy Valentine's Day!"
];

export const CelebrationScreen = () => {
  const [messages, setMessages] = useState<Array<{ id: number; text: string; style: any }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newMessage = {
        id: Date.now(),
        text: celebrationMessages[Math.floor(Math.random() * celebrationMessages.length)],
        style: {
          left: `${Math.random() * 80}%`,
          animationDuration: `${30 + Math.random() * 5}s`,
          animationDelay: `${Math.random() * 3}s`,
        },
      };

      setMessages(prev => [...prev, newMessage]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setMessages(prev => prev.filter(msg => Date.now() - msg.id < 6000));
    }, 1000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0">
        {messages.map(message => (
          <div
            key={message.id}
            className="absolute animate-float-message text-white text-2xl font-serif"
            style={message.style}
          >
            {message.text}
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-8">
          <Heart className="w-32 h-32 text-pink-500 animate-pulse mx-auto" fill="rgb(236, 72, 153)" />
          <h1 className="text-6xl font-serif text-white animate-glow">
            Happy Valentine's Day!
          </h1>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-pink-500 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
            size={16}
          />
        ))}
      </div>
    </div>
  );
};