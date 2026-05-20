import { motion } from "framer-motion";

const integrations = [
  "Salesforce", "HubSpot", "Google Ads", "Meta Ads", "Slack", "Zapier",
  "Twilio", "Mailchimp", "Calendly", "Stripe", "Zoom", "Google Sheets",
];

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
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Integrations</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-hero-foreground mb-6">
            Connects With Your <span className="text-gradient">Entire Stack</span>
          </h2>
          <p className="text-lg text-hero-muted">
            Plug into the tools your team already uses — no migration headaches. Bi-directional sync out of the box.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {integrations.map((name, i) => (
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
