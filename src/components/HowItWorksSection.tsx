import { motion } from 'framer-motion';
import { Star, Lightbulb, Users, Trophy, Rocket } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
const steps = [{
  icon: Lightbulb,
  title: 'Post your idea',
  description: 'Share your raw idea. No pitch deck required.'
}, {
  icon: Star,
  title: 'Refine together',
  description: 'Get feedback. Iterate. Watch your idea evolve.'
}, {
  icon: Users,
  title: 'Build your team',
  description: 'Connect with passionate cofounders who share your vision.'
}, {
  icon: Trophy,
  title: 'Win selection',
  description: 'The best idea + team combinations rise to the top.'
}, {
  icon: Rocket,
  title: 'Get rewarded',
  description: 'Access investment, mentorship, and the Inner Circle.'
}];
const HowItWorksSection = () => {
  return <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">From spark to launch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Five steps to transform your idea into a funded startup
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => <ScrollReveal key={step.title} delay={index * 0.1}>
                <motion.div className="relative group h-full" whileHover={{
              scale: 1.05
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                  {/* Step card */}
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:bg-card hover:border-primary/30 hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)] h-full">
                    {/* Step number */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border border-border flex items-center justify-center text-xs font-medium bg-primary text-primary-foreground">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="relative mb-6 mt-2">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center transition-all duration-300 group-hover:from-primary/30 group-hover:to-accent/30">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>)}
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;