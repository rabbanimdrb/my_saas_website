import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the AI Voice Agent work?",
    a: "Our AI Voice Agent uses advanced natural language processing to have real conversations with leads. It qualifies prospects based on your criteria, handles common objections, and books meetings directly on your reps' calendars. It works 24/7 across inbound and outbound calls.",
  },
  {
    q: "Can I use my existing phone numbers and WhatsApp?",
    a: "Yes. Pulsive integrates with your existing phone numbers via Twilio and connects to the official WhatsApp Business API. Your leads will see messages from your brand, not ours.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams are up and running within 48 hours. Our onboarding team handles data migration, workflow configuration, and team training. Complex enterprise setups typically take 1-2 weeks.",
  },
  {
    q: "Does it replace my existing CRM?",
    a: "Pulsive can work as your primary CRM or integrate alongside Salesforce, HubSpot, and others. Many teams use Pulsive for execution and sync data back to their existing CRM for reporting.",
  },
  {
    q: "What kind of ROI can I expect?",
    a: "Our customers typically see a 2-3x increase in qualified meetings, 40% reduction in cost per lead, and 30% improvement in close rates within the first 90 days.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We use enterprise-grade encryption, SOC2-compliant infrastructure, and offer role-based access controls. Your data is never used to train AI models and remains exclusively yours.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-section-alt" id="faq">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Got Questions?
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/20">
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
