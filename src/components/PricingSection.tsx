import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import ContactSalesButton from "@/components/ContactSalesButton";
import content from "@/content/pricing.json";

const PricingSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-hero" id="pricing">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">{content.label}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-hero-foreground mb-6">
            {content.heading}
          </h2>
          <p className="text-lg text-hero-muted">
            {content.subheading}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-md mx-auto"
        >
          <div className="relative rounded-2xl border border-primary/40 bg-hero p-8 shadow-2xl">
            {/* Early bird badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest shadow-lg">
                <Zap className="w-3 h-3" />
                {content.badge}
              </span>
            </div>

            <div className="text-center mb-8 pt-2">
              <p className="text-hero-muted text-sm mb-2">{content.planName}</p>
              <div className="flex items-end justify-center gap-1">
                <span className="text-hero-muted text-lg">{content.currency}</span>
                <span className="font-display text-6xl font-semibold text-white">{content.price}</span>
              </div>
              <p className="text-hero-muted text-sm mt-1">{content.period}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {content.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-hero-muted text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <ContactSalesButton className="w-full bg-primary hover:bg-primary/90 glow-primary">
              {content.ctaButton}
            </ContactSalesButton>

            <p className="text-center text-xs text-hero-muted mt-4">
              {content.footnote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
