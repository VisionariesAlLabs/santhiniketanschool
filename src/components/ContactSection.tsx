import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-display font-bold text-primary mb-6">Contact Information</h3>
            <div className="space-y-5">
              {[
                { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "Santhiniketan School, Gara, Srikakulam District, Andhra Pradesh" },
                { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 98765 43210" },
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@santhiniketan.edu" },
                { icon: <Clock className="w-5 h-5" />, label: "Office Hours", value: "Mon - Sat: 8:00 AM - 4:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 text-secondary rounded-lg">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden h-48 bg-muted border border-border">
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.8!2d84.0!3d18.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDE4JzAwLjAiTiA4NMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ x: 40, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all text-sm"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all text-sm"
                >
                  <option value="">Select subject</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="academic">Academic Query</option>
                  <option value="transport">Transport</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all text-sm resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold flex items-center justify-center gap-2 hover:brightness-110 transition-all duration-300 disabled:opacity-60"
            >
              {sending ? (
                <span className="animate-spin w-5 h-5 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full" />
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
