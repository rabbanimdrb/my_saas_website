import { motion } from "framer-motion";
import { Bot, MessageCircle, Mail, BarChart3, Workflow, Phone, FileText, Shield } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Voice Agent",
    description: "Autonomous outbound and inbound calling that qualifies leads, handles objections, and books meetings on your calendar.",
  },
  {
    icon: Phone,
    title: "Hybrid Calling System",
    description: "Seamlessly switch between AI and human agents. Your reps pick up exactly where AI left off.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp API Automation",
    description: "Send templated messages, trigger reminders, and manage conversations directly from your pipeline.",
  },
  {
    icon: Mail,
    title: "Email Sequences",
    description: "Drip campaigns that adapt based on lead behavior. AI writes, sends, and optimizes your outreach.",
  },
  {
    icon: BarChart3,
    title: "Visual Pipeline",
    description: "Drag-and-drop deal management with AI-powered stage predictions and win probability scoring.",
  },
  {
    icon: Workflow,
    title: "Custom Workflow Builder",
    description: "No-code automation builder. Create complex multi-step workflows with conditional logic and triggers.",
  },
  {
    icon: FileText,
    title: "Custom Reports",
    description: "Build reports tailored to your KPIs. Track conversion rates, rep performance, and revenue metrics your way.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC2-ready infrastructure with role-based access, audit logs, and data encryption at rest and in transit.",
  },
];

const FeaturesSection = () => {
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
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Features</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Everything You Need to <span className="text-gradient">Dominate Sales</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete AI sales execution stack — not just another CRM with a chatbot bolted on.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all hover:shadow-lg group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
