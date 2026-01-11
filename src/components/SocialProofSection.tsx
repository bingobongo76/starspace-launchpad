import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    quote: "Starspace helped me find the perfect co-founder. Our idea went from a napkin sketch to funded startup in 6 months.",
    author: "Sarah Chen",
    role: "Founder, DataBridge AI",
    avatar: "SC",
  },
  {
    quote: "The community feedback was invaluable. People saw potential I hadn't even considered.",
    author: "Marcus Weber",
    role: "CTO, GreenLoop",
    avatar: "MW",
  },
  {
    quote: "No gatekeeping, no politics. Just pure focus on great ideas and passionate people.",
    author: "Aisha Patel",
    role: "CEO, HealthSync",
    avatar: "AP",
  },
];

const partners = [
  'Investors Coming Soon',
];

const SocialProofSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Testimonials */}
        <div className="max-w-5xl mx-auto mb-20">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Founders who <span className="text-gradient">launched here</span>
            </h2>
            <p className="text-muted-foreground">
              Join a growing community of ambitious builders
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.author} delay={index * 0.15}>
                <motion.div
                  className="relative p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm h-full"
                  whileHover={{ y: -5, borderColor: 'hsl(var(--primary) / 0.3)' }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-semibold text-primary-foreground">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Partners */}
        <ScrollReveal className="border-t border-border/50 pt-16">
          <div className="text-center mb-10">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Backed by investors from
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SocialProofSection;
