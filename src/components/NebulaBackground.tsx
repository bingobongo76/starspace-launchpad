const NebulaBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Primary Green Nebula - Large, dominant */}
      <div 
        className="absolute w-[1200px] h-[1200px] rounded-full animate-nebula-drift"
        style={{
          top: '5%',
          left: '50%',
          background: 'radial-gradient(ellipse, rgba(126, 231, 135, 0.18) 0%, rgba(60, 93, 66, 0.1) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      
      {/* Secondary Green Nebula - Bottom left */}
      <div 
        className="absolute w-[900px] h-[900px] rounded-full animate-nebula-drift-reverse"
        style={{
          bottom: '10%',
          left: '5%',
          background: 'radial-gradient(ellipse, rgba(211, 251, 216, 0.14) 0%, rgba(60, 93, 66, 0.08) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Third Green Nebula - Center right */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full animate-nebula-pulse"
        style={{
          top: '40%',
          right: '10%',
          background: 'radial-gradient(ellipse, rgba(126, 231, 135, 0.12) 0%, rgba(60, 93, 66, 0.06) 60%, transparent 80%)',
          filter: 'blur(90px)',
        }}
      />
      
      {/* Purple Accent - Larger, more visible */}
      <div 
        className="absolute w-[700px] h-[700px] rounded-full animate-nebula-pulse"
        style={{
          top: '20%',
          right: '20%',
          background: 'radial-gradient(ellipse, rgba(167, 139, 250, 0.12) 0%, rgba(139, 92, 246, 0.06) 50%, transparent 70%)',
          filter: 'blur(70px)',
          animationDelay: '-3s',
        }}
      />
      
      {/* Purple Accent - Bottom area */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full animate-nebula-drift"
        style={{
          bottom: '20%',
          right: '30%',
          background: 'radial-gradient(ellipse, rgba(167, 139, 250, 0.1) 0%, transparent 60%)',
          filter: 'blur(60px)',
          animationDelay: '-8s',
        }}
      />

      {/* Green-Purple blend area - creates color mixing effect */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full animate-nebula-drift-reverse"
        style={{
          top: '50%',
          left: '60%',
          background: 'radial-gradient(ellipse, rgba(126, 231, 135, 0.1) 0%, rgba(167, 139, 250, 0.08) 50%, transparent 70%)',
          filter: 'blur(75px)',
          animationDelay: '-12s',
        }}
      />

      {/* Extra large ambient green glow */}
      <div 
        className="absolute w-[1400px] h-[1400px] rounded-full"
        style={{
          top: '30%',
          left: '20%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(60, 93, 66, 0.08) 0%, transparent 60%)',
          filter: 'blur(120px)',
        }}
      />
    </div>
  );
};

export default NebulaBackground;
