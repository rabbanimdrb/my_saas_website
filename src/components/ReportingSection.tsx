import { motion } from "framer-motion";
import { PieChart, TrendingUp, Filter, Download } from "lucide-react";

const ReportingSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Custom Reporting</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Reports Built for <span className="text-gradient">Your Business</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Stop wrestling with rigid dashboards. Build custom reports that answer your specific business questions — from conversion funnels to rep performance to revenue attribution.
            </p>

            <div className="space-y-4">
              {[
                { icon: PieChart, text: "Drag-and-drop report builder with 50+ metrics" },
                { icon: TrendingUp, text: "Real-time data with automated refresh" },
                { icon: Filter, text: "Advanced filters by team, region, product, and date" },
                { icon: Download, text: "Export to PDF, CSV, or schedule automated delivery" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl bg-hero border border-white/10 p-8 glow-primary">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-hero-foreground text-sm font-medium mb-6">
                  <span className="font-display text-lg">Revenue by Channel</span>
                  <span className="text-hero-muted text-xs">Last 30 days</span>
                </div>
                {[
                  { label: "AI Voice", value: 42, color: "bg-primary" },
                  { label: "WhatsApp", value: 28, color: "bg-accent" },
                  { label: "Email", value: 18, color: "bg-primary/60" },
                  { label: "Manual", value: 12, color: "bg-accent/60" },
                ].map((bar) => (
                  <div key={bar.label} className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-hero-muted">{bar.label}</span>
                      <span className="text-hero-foreground font-medium">{bar.value}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className={`h-full ${bar.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReportingSection;
