import logo from "@/assets/logo-dark.svg";

const Footer = () => {
  return (
    <footer className="bg-hero border-t border-white/5 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Pulsive" className="h-8 w-auto" />
          </a>
          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Security"].map((link) => (
              <span key={link} className="text-sm text-hero-muted/50 cursor-not-allowed" title="Coming soon">
                {link}
              </span>
            ))}
          </div>
          <p className="text-sm text-hero-muted">© 2026 Pulsive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
