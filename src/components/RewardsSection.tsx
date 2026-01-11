import { motion } from 'framer-motion';
import { DollarSign, Users, GraduationCap, Video, Network, Crown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
const rewards = [{
  icon: DollarSign,
  title: 'Investment & Prize Money',
  description: 'Seed funding to launch your validated idea'
}, {
  icon: Users,
  title: 'Direct Investor Access',
  description: 'Connect with VCs and angel investors'
}, {
  icon: Crown,
  title: 'Inner Circle Membership',
  description: 'Join an exclusive founder community'
}, {
  icon: GraduationCap,
  title: 'Mentoring & Workshops',
  description: 'Learn from successful entrepreneurs'
}, {
  icon: Video,
  title: 'Exclusive Content',
  description: 'Access premium articles and videos'
}, {
  icon: Network,
  title: 'Founder Network',
  description: 'Lifetime access to our alumni network'
}];
const RewardsSection = () => {
  return <section id="rewards" className="relative py-24 md:py-32 overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Crown className="h-4 w-4" />
            <span>Rewards & Inner Circle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Success unlocks <span className="text-gradient">exclusive access</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Winners don't just get funding. They get a launchpad for long-term success — 
            mentorship, network, and resources that keep giving.
          </p>
        </ScrollReveal>

        {/* Rewards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {rewards.map((reward, index) => <ScrollReveal key={reward.title} delay={index * 0.1}>
              <motion.div className="group relative p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_60px_hsl(var(--primary)/0.1)] h-full" whileHover={{
            y: -5,
            scale: 1.02
          }} transition={{
            type: "spring",
            stiffness: 300
          }}>
                {/* Orbiting dot decoration */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/50 animate-pulse-glow" />

                {/* Icon with glow */}
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                  <reward.icon className="h-7 w-7 text-primary" />
                  <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reward.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reward.description}
                </p>
              </motion.div>
            </ScrollReveal>)}
        </div>

        {/* Bottom highlight */}
      </div>
    </section>;
};
export default RewardsSection;