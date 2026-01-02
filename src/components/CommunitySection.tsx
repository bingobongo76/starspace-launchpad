import { MessageCircle, ThumbsUp, GitBranch, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ideas = [
  {
    title: 'AI-powered skill matching for remote teams',
    tags: ['AI/ML', 'HR Tech', 'SaaS'],
    stage: 'Team Forming',
    stageColor: 'bg-accent/20 text-accent',
    comments: 47,
    upvotes: 234,
    iterations: 8,
  },
  {
    title: 'Decentralized carbon credit marketplace',
    tags: ['Climate Tech', 'Blockchain', 'Marketplace'],
    stage: 'Refined',
    stageColor: 'bg-primary/20 text-primary',
    comments: 32,
    upvotes: 189,
    iterations: 5,
  },
  {
    title: 'Mental health companion for gen Z',
    tags: ['Health Tech', 'Consumer', 'Mobile'],
    stage: 'Launch Ready',
    stageColor: 'bg-green-500/20 text-green-400',
    comments: 89,
    upvotes: 412,
    iterations: 12,
  },
  {
    title: 'No-code backend for indie hackers',
    tags: ['Developer Tools', 'No-Code', 'SaaS'],
    stage: 'Idea',
    stageColor: 'bg-muted text-muted-foreground',
    comments: 15,
    upvotes: 78,
    iterations: 2,
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ideas evolve through <span className="text-gradient">collaboration</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every great startup begins with a raw idea. On Starspace, the community 
              helps you refine, validate, and strengthen your concept through open 
              feedback and iteration.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Constructive feedback</div>
                  <div className="text-sm text-muted-foreground">Get real insights from founders and experts</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GitBranch className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Iteration history</div>
                  <div className="text-sm text-muted-foreground">Track how your idea evolves over time</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ThumbsUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Community validation</div>
                  <div className="text-sm text-muted-foreground">See what resonates with potential users</div>
                </div>
              </div>
            </div>

            <Button variant="cta" className="group">
              Explore all ideas
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>

          {/* Right: Idea cards */}
          <div className="relative">
            {/* Decorative glow */}
            <div className="absolute -inset-10 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl" />

            <div className="relative space-y-4">
              {ideas.map((idea, index) => (
                <div
                  key={idea.title}
                  className="group p-5 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:bg-card hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] cursor-pointer"
                  style={{
                    transform: `translateX(${index % 2 === 0 ? '0' : '20px'})`,
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {idea.title}
                    </h3>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${idea.stageColor}`}>
                      {idea.stage}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {idea.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-xs bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{idea.upvotes}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="h-4 w-4" />
                      <span>{idea.comments}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GitBranch className="h-4 w-4" />
                      <span>{idea.iterations} iterations</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
