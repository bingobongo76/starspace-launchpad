import { Rocket, Star } from 'lucide-react';
const Footer = () => {
  const footerLinks = {
    product: [{
      label: 'How it Works',
      href: '#how-it-works'
    }, {
      label: 'Community',
      href: '#community'
    }, {
      label: 'Rewards',
      href: '#rewards'
    }, {
      label: 'Pricing',
      href: '#'
    }],
    company: [{
      label: 'About',
      href: '#'
    }, {
      label: 'Blog',
      href: '#'
    }, {
      label: 'Careers',
      href: '#'
    }, {
      label: 'Press',
      href: '#'
    }],
    legal: [{
      label: 'Terms',
      href: '#'
    }, {
      label: 'Privacy',
      href: '#'
    }, {
      label: 'Cookies',
      href: '#'
    }],
    social: [{
      label: 'Twitter',
      href: '#'
    }, {
      label: 'LinkedIn',
      href: '#'
    }, {
      label: 'Discord',
      href: '#'
    }]
  };
  return <footer className="relative border-t border-border/50 bg-space-deep">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Rocket className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold text-foreground">Starspace</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where ideas become startups.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map(link => <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.social.map(link => <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Starspace. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built for</span>
            <Star className="h-3 w-3 text-primary fill-primary" />
            <Star className="h-3 w-3 text-primary fill-primary" />
            <Star className="h-3 w-3 text-primary fill-primary" />
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;