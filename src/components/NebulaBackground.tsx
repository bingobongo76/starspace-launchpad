const NebulaBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Primary Green Nebula - Large, dominant */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full animate-nebula-drift"
        style={{
          top: '10%',
          left: '60%',
          background: 'radial-gradient(ellipse, rgba(126, 231, 135, 0.08) 0%, rgba(60, 93, 66, 0.04) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Secondary Green Nebula - Bottom left */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full animate-nebula-drift-reverse"
        style={{
          bottom: '20%',
          left: '10%',
          background: 'radial-gradient(ellipse, rgba(211, 251, 216, 0.06) 0%, rgba(60, 93, 66, 0.03) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Third Green Nebula - Center */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full animate-nebula-pulse"
        style={{
          top: '50%',
          left: '40%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(126, 231, 135, 0.05) 0%, rgba(60, 93, 66, 0.02) 60%, transparent 80%)',
          filter: 'blur(70px)',
        }}
      />
      
      {/* Purple Accent - Subtle, top right */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full animate-nebula-pulse"
        style={{
          top: '30%',
          right: '15%',
          background: 'radial-gradient(ellipse, rgba(167, 139, 250, 0.05) 0%, rgba(139, 92, 246, 0.02) 50%, transparent 70%)',
          filter: 'blur(50px)',
          animationDelay: '-3s',
        }}
      />
      
      {/* Purple Accent - Bottom right corner */}
      <div 
        className="absolute w-[300px] h-[300px] rounded-full animate-nebula-drift"
        style={{
          bottom: '15%',
          right: '25%',
          background: 'radial-gradient(ellipse, rgba(167, 139, 250, 0.04) 0%, transparent 60%)',
          filter: 'blur(40px)',
          animationDelay: '-8s',
        }}
      />

      {/* Green-Purple blend area - creates color mixing effect */}
      <div 
        className="absolute w-[350px] h-[350px] rounded-full animate-nebula-drift-reverse"
        style={{
          top: '60%',
          left: '70%',
          background: 'radial-gradient(ellipse, rgba(126, 231, 135, 0.04) 0%, rgba(167, 139, 250, 0.03) 50%, transparent 70%)',
          filter: 'blur(55px)',
          animationDelay: '-12s',
        }}
      />
    </div>
  );
};

export default NebulaBackground;
