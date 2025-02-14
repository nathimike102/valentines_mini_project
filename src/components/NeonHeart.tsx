export const NeonHeart = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M50 80 C25 55, 0 35, 0 20 C0 0, 25 0, 35 10 L50 25 L65 10 C75 0, 100 0, 100 20 C100 35, 75 55, 50 80"
          fill="none"
          stroke="rgba(255, 0, 128, 0.8)"
          strokeWidth="0.5"
          className="neon-heart"
        />
      </svg>
    </div>
  );
};