import { useState } from "react";
import { Menu, X } from "lucide-react";
import ContactSalesButton from "@/components/ContactSalesButton";
import { useContactSales } from "@/contexts/ContactSalesContext";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-dark.svg";
import content from "@/content/navbar.json";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { count } = useContactSales();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Pulsive" className="h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {content.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-hero-foreground/70 hover:text-hero-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <span className="text-xs font-medium text-hero-foreground/60 border border-white/15 rounded-full px-3 py-1 bg-white/5">
            {content.badge}
          </span>
          <ContactSalesButton size="sm" className="bg-primary hover:bg-primary/90">
            {content.ctaButton}
          </ContactSalesButton>
          {count > 0 && (
            <span className="text-xs text-accent font-medium">{count} interested</span>
          )}
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
              {content.links.map((link) => (
                <a key={link.label} href={link.href} className="text-hero-foreground/70 hover:text-hero-foreground py-2" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
              <ContactSalesButton className="mt-2 w-full">
                {content.ctaButton}
              </ContactSalesButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
