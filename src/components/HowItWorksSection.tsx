import { motion } from "framer-motion";
import content from "@/content/how-it-works.json";
import { iconMap } from "@/lib/icons";

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-hero" id="how-it-works">
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
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {content.steps.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center p-8"
              >
                <div className="text-6xl font-display font-semibold text-white/5 absolute top-4 left-1/2 -translate-x-1/2">
                  {s.step}
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-hero-foreground mb-3">{s.title}</h3>
                  <p className="text-hero-muted leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
