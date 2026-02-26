const Footer = () => {
  return (
    <footer className="bg-hero border-t border-white/5 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-display text-xl font-bold text-hero-foreground tracking-tight">
            <span className="text-gradient">Nexus</span>AI
          </a>
          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Security"].map((link) => (
              <a key={link} href="#" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
          <p className="text-sm text-hero-muted">© 2026 NexusAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
