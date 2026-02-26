import { motion } from "framer-motion";
import { Magnet, Zap, Trophy } from "lucide-react";

const steps = [
  {
    icon: Magnet,
    step: "01",
    title: "Capture",
    description: "Leads flow in from forms, ads, WhatsApp, and integrations. AI instantly scores and routes them.",
  },
  {
    icon: Zap,
    step: "02",
    title: "Automate",
    description: "AI Voice Agent qualifies leads, triggers follow-ups via WhatsApp & email, and updates pipeline automatically.",
  },
  {
    icon: Trophy,
    step: "03",
    title: "Close",
    description: "Your reps focus only on hot, qualified deals. AI handles the rest — converting more with less effort.",
  },
];

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
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">How It Works</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-hero-foreground mb-6">
            Three Steps to <span className="text-gradient">Revenue Autopilot</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center p-8"
            >
              <div className="text-6xl font-display font-bold text-white/5 absolute top-4 left-1/2 -translate-x-1/2">
                {s.step}
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                  <s.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-hero-foreground mb-3">{s.title}</h3>
                <p className="text-hero-muted leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
