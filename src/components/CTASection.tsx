import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-6">
            Ready to Let AI <span className="text-gradient">Close Your Deals?</span>
          </h2>
          <p className="text-lg md:text-xl text-hero-muted mb-10 max-w-2xl mx-auto">
            Join hundreds of sales teams already using NexusAI to crush their targets. Book a personalized demo today.
          </p>
          <Button size="lg" className="text-base px-10 py-6 bg-primary hover:bg-primary/90 glow-primary">
            Contact Sales
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
