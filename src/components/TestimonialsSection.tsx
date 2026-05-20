import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We replaced 3 SDRs with Pulsive's voice agent. Our pipeline is 2x bigger and our cost per lead dropped by 60%.",
    name: "Sarah Chen",
    role: "VP of Sales, TechScale",
  },
  {
    quote: "The WhatsApp automation alone paid for itself in the first month. Our response time went from 4 hours to 4 seconds.",
    name: "Marcus Rivera",
    role: "Head of Growth, FinBridge",
  },
  {
    quote: "Finally, a CRM that actually helps close deals instead of just tracking them. The AI pipeline predictions are eerily accurate.",
    name: "Priya Sharma",
    role: "CRO, DataSync",
  },
];

const TestimonialsSection = () => {
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
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Loved by Sales Teams
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
