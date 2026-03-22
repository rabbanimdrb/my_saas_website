import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactSalesButton from "@/components/ContactSalesButton";
import { useContactSales } from "@/contexts/ContactSalesContext";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { count } = useContactSales();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Client Orbit" className="h-9 w-auto" />
          <span className="font-display text-xl font-bold text-hero-foreground tracking-tight">Client Orbit</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-hero-muted hover:text-hero-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-hero-muted hover:text-hero-foreground hover:bg-white/5">
            Log In
          </Button>
          <ContactSalesButton size="sm" className="bg-primary hover:bg-primary/90">
            Contact Sales
          </ContactSalesButton>
          <span className="text-sm text-hero-muted">({count})</span>
        </div>

        <button className="md:hidden text-hero-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-hero border-t border-white/5"
          >
            <div className="container px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-hero-muted hover:text-hero-foreground py-2" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
              <ContactSalesButton className="mt-2 w-full">
                Contact Sales
              </ContactSalesButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
