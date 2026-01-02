import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FinalCTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] bg-primary/10 rounded-full blur-[80px] animate-pulse-glow animation-delay-400" />
      </div>

      {/* Rocket visual - simplified */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-t from-primary/50 via-primary/20 to-transparent rounded-full blur-sm" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative stars */}
          <ScrollReveal>
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                >
                  <Sparkles
                    className="h-5 w-5 text-primary animate-twinkle"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your idea is a star.
              <br />
              <span className="text-gradient">Let it shine.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Join thousands of founders who are building the future, together.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                <span className="relative z-10">Start on Starspace</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </ScrollReveal>

          {/* Trust badge */}
          <ScrollReveal delay={0.4}>
            <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <motion.div 
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>Free to join • No credit card required</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
