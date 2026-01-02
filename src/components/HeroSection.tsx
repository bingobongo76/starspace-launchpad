import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-pulse-glow animation-delay-200" />

      {/* Constellation visual */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-20" viewBox="0 0 1000 1000">
          {/* Constellation lines */}
          <line x1="200" y1="300" x2="350" y2="250" className="constellation-line" strokeDasharray="5,5" />
          <line x1="350" y1="250" x2="450" y2="350" className="constellation-line" strokeDasharray="5,5" />
          <line x1="450" y1="350" x2="600" y2="280" className="constellation-line" strokeDasharray="5,5" />
          <line x1="600" y1="280" x2="750" y2="400" className="constellation-line" strokeDasharray="5,5" />
          <line x1="550" y1="600" x2="700" y2="550" className="constellation-line" strokeDasharray="5,5" />
          <line x1="700" y1="550" x2="800" y2="650" className="constellation-line" strokeDasharray="5,5" />
          
          {/* Star nodes */}
          <circle cx="200" cy="300" r="4" fill="hsl(var(--primary))" className="animate-pulse-glow" />
          <circle cx="350" cy="250" r="3" fill="hsl(var(--star-white))" className="animate-twinkle" />
          <circle cx="450" cy="350" r="5" fill="hsl(var(--primary))" className="animate-pulse-glow" />
          <circle cx="600" cy="280" r="3" fill="hsl(var(--star-white))" className="animate-twinkle animation-delay-200" />
          <circle cx="750" cy="400" r="4" fill="hsl(var(--accent))" className="animate-pulse-glow animation-delay-400" />
          <circle cx="550" cy="600" r="3" fill="hsl(var(--star-white))" className="animate-twinkle animation-delay-400" />
          <circle cx="700" cy="550" r="4" fill="hsl(var(--primary))" className="animate-pulse-glow animation-delay-600" />
          <circle cx="800" cy="650" r="3" fill="hsl(var(--star-white))" className="animate-twinkle animation-delay-600" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 px-[30px]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-200">
            <span className="text-gradient">Turn ideas into teams.</span>
            <br />
            <span className="text-foreground">Teams into startups.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
            Post an idea. Build a team. Get rewarded. 
            Join the community where raw ideas become funded startups.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Button variant="hero" size="xl" className="group">
              <span className="relative z-10">Launch your idea</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Explore ideas
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/50 animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Ideas posted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient">120+</div>
              <div className="text-sm text-muted-foreground mt-1">Teams formed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient">€2M+</div>
              <div className="text-sm text-muted-foreground mt-1">Rewards distributed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>;
};
export default HeroSection;