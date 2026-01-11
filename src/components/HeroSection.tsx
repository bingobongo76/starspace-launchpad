import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const constellationY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const constellationScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  return <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient orbs with parallax */}
      <motion.div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" style={{
      y: orbY1
    }} />
      <motion.div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-pulse-glow animation-delay-200" style={{
      y: orbY2
    }} />

      {/* Constellation visual with parallax */}
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none" style={{
      y: constellationY,
      scale: constellationScale
    }}>
        <svg className="absolute w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <line x1="200" y1="300" x2="350" y2="250" className="constellation-line" strokeDasharray="5,5" />
          <line x1="350" y1="250" x2="450" y2="350" className="constellation-line" strokeDasharray="5,5" />
          <line x1="450" y1="350" x2="600" y2="280" className="constellation-line" strokeDasharray="5,5" />
          <line x1="600" y1="280" x2="750" y2="400" className="constellation-line" strokeDasharray="5,5" />
          <line x1="550" y1="600" x2="700" y2="550" className="constellation-line" strokeDasharray="5,5" />
          <line x1="700" y1="550" x2="800" y2="650" className="constellation-line" strokeDasharray="5,5" />
          
          <circle cx="200" cy="300" r="4" fill="hsl(var(--primary))" className="animate-pulse-glow" />
          <circle cx="350" cy="250" r="3" fill="hsl(var(--star-white))" className="animate-twinkle" />
          <circle cx="450" cy="350" r="5" fill="hsl(var(--primary))" className="animate-pulse-glow" />
          <circle cx="600" cy="280" r="3" fill="hsl(var(--star-white))" className="animate-twinkle animation-delay-200" />
          <circle cx="750" cy="400" r="4" fill="hsl(var(--accent))" className="animate-pulse-glow animation-delay-400" />
          <circle cx="550" cy="600" r="3" fill="hsl(var(--star-white))" className="animate-twinkle animation-delay-400" />
          <circle cx="700" cy="550" r="4" fill="hsl(var(--primary))" className="animate-pulse-glow animation-delay-600" />
          <circle cx="800" cy="650" r="3" fill="hsl(var(--star-white))" className="animate-twinkle animation-delay-600" />
        </svg>
      </motion.div>

      <motion.div className="container mx-auto relative z-10 px-6 py-10" style={{
      y: contentY
    }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}>
            <span className="text-gradient">Turn ideas into teams.</span>
            <br />
            <span className="text-foreground">Teams into startups.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}>
            Join the community where raw ideas become funded startups.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}>
            <Button variant="hero" size="xl" className="group">
              <span className="relative z-10">Launch your idea</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Explore ideas
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/50" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient">0</div>
              <div className="text-sm text-muted-foreground mt-1">barriers to entry</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Remote & Global</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Access</div>
            </div>
        </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1.2
    }}>
        
      </motion.div>
    </section>;
};
export default HeroSection;