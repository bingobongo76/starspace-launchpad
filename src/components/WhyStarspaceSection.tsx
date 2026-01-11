import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const eliminatedBarriers = [
  {
    title: 'No elite gatekeeping',
    description: "Open to everyone with an idea. Your background doesn't determine your future.",
  },
  {
    title: 'No pitch decks required',
    description: 'Start with a raw idea. Let the community help you shape it.',
  },
];

const offerings = [
  {
    title: 'Fully online & global',
    description: 'Connect with founders and mentors worldwide. No location barriers.',
  },
  {
    title: 'Community-driven validation',
    description: 'Real feedback from real people. Not just investor opinions.',
  },
  {
    title: 'Continuous opportunities',
    description: 'Not batch-based. Join and participate anytime.',
  },
  {
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
        <ScrollReveal className="max-w-2xl mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-gradient">Starspace</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Traditional accelerators have high barriers. We're building something different — 
            accessible, community-powered, and designed for the next generation of founders.
          </p>
        </ScrollReveal>

        {/* Two-column layout: Eliminate vs Offer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* What We Eliminate Column */}
          <div className="space-y-6">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X className="h-4 w-4 text-red-400" />
                </div>
                <h3 className="text-lg font-medium text-muted-foreground">What We Eliminate</h3>
              </div>
            </ScrollReveal>
            
            {eliminatedBarriers.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <motion.div
                  className="group relative p-6 rounded-2xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm transition-all duration-500 hover:bg-red-500/10 hover:border-red-500/30"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
                      <X className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* What We Offer Column */}
          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-emerald-400" />
                </div>
                <h3 className="text-lg font-medium text-muted-foreground">What We Offer</h3>
              </div>
            </ScrollReveal>
            
            {offerings.map((item, index) => (
              <ScrollReveal key={item.title} delay={0.1 + index * 0.1}>
                <motion.div
                  className="group relative p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm transition-all duration-500 hover:bg-emerald-500/10 hover:border-emerald-500/30"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStarspaceSection;
