import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import ContactSalesButton from "@/components/ContactSalesButton";

const features = [
  "AI Voice Agent (inbound & outbound)",
  "WhatsApp & Email automation",
  "Pipeline CRM & deal tracking",
  "AI-powered pipeline predictions",
  "Integrations (Salesforce, HubSpot & more)",
  "Reporting & analytics dashboard",
  "Dedicated onboarding support",
  "SOC2-compliant infrastructure",
];

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
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-hero-foreground mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-hero-muted">
            One plan. Everything included. No surprises.
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
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest shadow-lg">
                <Zap className="w-3 h-3" />
                First 100 Customers Only
              </span>
            </div>

            <div className="text-center mb-8 pt-2">
              <p className="text-hero-muted text-sm mb-2">Early Adopter Plan</p>
              <div className="flex items-end justify-center gap-1">
                <span className="text-hero-muted text-lg">₹</span>
                <span className="font-display text-6xl font-bold text-white">30,000</span>
              </div>
              <p className="text-hero-muted text-sm mt-1">+ GST &nbsp;/&nbsp; year</p>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-hero-muted text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <ContactSalesButton className="w-full bg-primary hover:bg-primary/90 glow-primary">
              Claim Early Adopter Offer
            </ContactSalesButton>

            <p className="text-center text-xs text-hero-muted mt-4">
              Price locks in for life as long as your subscription is active.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
