import { motion } from "framer-motion";
import content from "@/content/problem.json";
import { iconMap } from "@/lib/icons";

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
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
            {content.heading}
          </h2>
          <p className="text-lg text-muted-foreground">
            {content.subheading}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {content.items.map((p, i) => {
            const Icon = iconMap[p.icon];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
