import { motion } from "framer-motion";
import content from "@/content/solution.json";
import { iconMap } from "@/lib/icons";

const SolutionSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-section-alt" id="features">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">{content.label}</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
            {content.heading} <span className="text-gradient">{content.headingHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {content.subheading}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.items.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all hover:shadow-xl"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
