import { useEffect, useRef, useState } from 'react';

const roles = [
  { label: 'Technical', color: 'hsl(265, 89%, 66%)' },
  { label: 'Business', color: 'hsl(220, 90%, 56%)' },
  { label: 'Design', color: 'hsl(340, 80%, 60%)' },
  { label: 'Marketing', color: 'hsl(160, 70%, 50%)' },
];

const TeamFormationSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const nodes = [
      { x: 150, y: 120, role: 0, connected: [1, 2] },
      { x: 300, y: 80, role: 1, connected: [0, 2, 3] },
      { x: 250, y: 200, role: 2, connected: [0, 1, 3] },
      { x: 400, y: 160, role: 3, connected: [1, 2] },
    ];

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      nodes.forEach((node, i) => {
        node.connected.forEach((targetIndex) => {
          if (targetIndex > i) {
            const target = nodes[targetIndex];
            const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y);
            gradient.addColorStop(0, `${roles[node.role].color}40`);
            gradient.addColorStop(1, `${roles[target.role].color}40`);

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulse = Math.sin(time * 0.002 + i) * 0.2 + 0.8;
        const size = hoveredNode === i ? 14 : 10;

        // Glow
        const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size * 3);
        glowGradient.addColorStop(0, `${roles[node.role].color}${Math.floor(pulse * 60).toString(16).padStart(2, '0')}`);
        glowGradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle = roles[node.role].color;
        ctx.fill();

        // Inner highlight
        ctx.beginPath();
        ctx.arc(node.x - size * 0.3, node.y - size * 0.3, size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
  }, [hoveredNode]);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />

              {/* Canvas constellation */}
              <canvas
                ref={canvasRef}
                width={500}
                height={300}
                className="w-full h-auto"
              />

              {/* Role legend */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 flex-wrap">
                {roles.map((role) => (
                  <div key={role.label} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: role.color }}
                    />
                    <span className="text-sm text-muted-foreground">{role.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Teams form <span className="text-gradient">organically</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Like stars forming constellations, the right people naturally connect 
              around compelling ideas. Our matching system considers skills, interests, 
              and working styles to suggest ideal co-founders.
            </p>

            <div className="space-y-6">
              <div className="p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h3 className="font-semibold text-foreground mb-2">Skill-based matching</h3>
                <p className="text-sm text-muted-foreground">
                  Find technical, business, and creative co-founders who complement your strengths.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h3 className="font-semibold text-foreground mb-2">Shared vision alignment</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with people who are passionate about the same problem space.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h3 className="font-semibold text-foreground mb-2">Natural collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Start working together on idea refinement before formalizing the team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamFormationSection;
