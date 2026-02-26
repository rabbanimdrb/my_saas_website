import { motion } from "framer-motion";
import { Phone, MessageSquare, BarChart3, Workflow } from "lucide-react";

const solutions = [
  {
    icon: Phone,
    title: "AI Voice Agent",
    description: "Automatically qualify leads, make follow-up calls, and book meetings — 24/7. Your tireless AI SDR.",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp & Email Automation",
    description: "Trigger instant WhatsApp messages and email sequences based on pipeline actions. Never miss a touchpoint.",
    gradient: "from-accent to-accent/60",
  },
  {
    icon: BarChart3,
    title: "Smart Sales Pipeline",
    description: "Visual pipeline with AI-driven deal scoring, stage predictions, and revenue forecasting in real-time.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Build custom workflows that automate repetitive tasks. If-this-then-that logic for your entire sales process.",
    gradient: "from-accent to-primary",
  },
];

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
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">The Solution</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            AI That Sells <span className="text-gradient">While You Sleep</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            An AI-first execution platform that replaces headcount with intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all hover:shadow-xl"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-6`}>
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-base">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
