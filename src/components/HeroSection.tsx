import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import ContactSalesButton from "@/components/ContactSalesButton";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="relative bg-hero pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            AI-Powered Sales Execution Platform
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-hero-foreground leading-[1.1] mb-6">
            Your AI Sales Team That{" "}
            <span className="text-gradient">Never Sleeps</span>
          </h1>

          <p className="text-lg md:text-xl text-hero-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Automate lead qualification with AI Voice Agents, trigger WhatsApp &amp; email follow-ups instantly, and close more deals — with fewer salespeople.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ContactSalesButton size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 glow-primary">
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </ContactSalesButton>
            <ContactSalesButton size="lg" className="text-base px-8 py-6 border border-white/10 text-hero-foreground hover:bg-white/5 bg-transparent">
              <PlayCircle className="mr-2 h-5 w-5" />
              Book a Live Demo
            </ContactSalesButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 lg:mt-24 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 glow-primary">
            <img
              src={heroDashboard}
              alt="Pulsive sales dashboard showing pipeline analytics, conversations, and performance metrics"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hero via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
