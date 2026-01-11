import { useEffect, useState } from 'react';

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  angle: number;
  duration: number;
  delay: number;
}

const ShootingStars = () => {
  const [stars, setStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    const createShootingStar = () => {
      const id = Date.now() + Math.random();
      const newStar: ShootingStar = {
        id,
        startX: Math.random() * 100,
        startY: Math.random() * 40,
        angle: 30 + Math.random() * 30, // 30-60 degrees
        duration: 0.8 + Math.random() * 0.6, // 0.8-1.4 seconds
        delay: 0,
      };

      setStars(prev => [...prev, newStar]);

      // Remove star after animation completes
      setTimeout(() => {
        setStars(prev => prev.filter(star => star.id !== id));
      }, (newStar.duration + 0.5) * 1000);
    };

    // Create shooting stars at random intervals
    const createStarLoop = () => {
      createShootingStar();
      const nextInterval = 2000 + Math.random() * 4000; // 2-6 seconds between stars
      setTimeout(createStarLoop, nextInterval);
    };

    // Start after a short delay
    const initialTimeout = setTimeout(createStarLoop, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            transform: `rotate(${star.angle}deg)`,
          }}
        >
          <div
            className="shooting-star"
            style={{
              animation: `shoot ${star.duration}s ease-out forwards`,
            }}
          >
            {/* Star head */}
            <div 
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(167, 139, 250, 0.8) 50%, transparent 100%)',
                boxShadow: '0 0 10px rgba(167, 139, 250, 0.8), 0 0 20px rgba(167, 139, 250, 0.5), 0 0 30px rgba(139, 92, 246, 0.3)',
              }}
            />
            {/* Star tail */}
            <div 
              className="absolute h-[2px] -left-24 top-1/2 -translate-y-1/2"
              style={{
                width: '100px',
                background: 'linear-gradient(90deg, transparent 0%, rgba(167, 139, 250, 0.1) 30%, rgba(167, 139, 250, 0.5) 70%, rgba(255,255,255,0.8) 100%)',
                filter: 'blur(1px)',
              }}
            />
            {/* Outer glow trail */}
            <div 
              className="absolute h-[6px] -left-32 top-1/2 -translate-y-1/2"
              style={{
                width: '130px',
                background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.05) 40%, rgba(167, 139, 250, 0.2) 80%, transparent 100%)',
                filter: 'blur(3px)',
              }}
            />
          </div>
        </div>
      ))}

      <style>{`
        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(400px) translateY(400px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ShootingStars;
