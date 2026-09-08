import { motion } from "framer-motion";
import content from "@/content/integrations.json";

const IntegrationsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-hero" id="integrations">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">{content.label}</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-hero-foreground mb-6">
            {content.heading} <span className="text-gradient">{content.headingHighlight}</span>
          </h2>
          <p className="text-lg text-hero-muted">
            {content.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {content.items.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center justify-center p-5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all"
            >
              <span className="text-sm font-medium text-hero-muted text-center">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
