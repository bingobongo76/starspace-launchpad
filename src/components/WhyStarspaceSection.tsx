import { Globe, FileX, Users, Repeat, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'No elite gatekeeping',
    description: "Open to everyone with an idea. Your background doesn't determine your future.",
  },
  {
    icon: FileX,
    title: 'No pitch decks required',
    description: 'Start with a raw idea. Let the community help you shape it.',
  },
  {
    icon: Globe,
    title: 'Fully online & global',
    description: 'Connect with founders and mentors worldwide. No location barriers.',
  },
  {
    icon: Users,
    title: 'Community-driven validation',
    description: 'Real feedback from real people. Not just investor opinions.',
  },
  {
    icon: Repeat,
    title: 'Continuous opportunities',
    description: 'Not batch-based. Join and participate anytime.',
  },
  {
    icon: Zap,
    title: 'Fast & frictionless',
    description: 'Post today, get feedback tomorrow. Move at startup speed.',
  },
];

const WhyStarspaceSection = () => {
  return (
    <section id="why-starspace" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-gradient">Starspace</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Traditional accelerators have high barriers. We're building something different — 
            accessible, community-powered, and designed for the next generation of founders.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:bg-card/50 hover:border-primary/30 hover:shadow-[0_0_50px_hsl(var(--primary)/0.08)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStarspaceSection;
