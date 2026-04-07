import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { MapPin, Phone, Mail, Clock, Send, User, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const SCHOOL_WHATSAPP_NUMBER = "919912192695"; // +91 99121 92695

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();

  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const buildWhatsAppMessage = () => {
    const subjectLabels: Record<string, string> = {
      admission: "Admission Inquiry",
      academic: "Academic Query",
      transport: "Transport",
      feedback: "Feedback",
      other: "Other",
    };

    const readableSubject = subjectLabels[form.subject] || form.subject || "Not Provided";

    return `Hello Santiniketan School,

You have received a new enquiry from the website.

Full Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || "Not Provided"}
Subject: ${readableSubject}
Message: ${form.message}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill all required fields before sending.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);

    try {
      const message = buildWhatsAppMessage();
      const encodedMessage = encodeURIComponent(message);

      // Works for desktop WhatsApp Web and mobile WhatsApp app/browser
      const whatsappUrl = `https://wa.me/${SCHOOL_WHATSAPP_NUMBER}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

      toast({
        title: "WhatsApp Opened",
        description: "Your message has been prepared in WhatsApp.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("WhatsApp redirect error:", error);
      toast({
        title: "Something went wrong",
        description: "Unable to open WhatsApp. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            Contact
          </span>
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
            <h3 className="text-xl font-display font-bold text-primary mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 text-secondary rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Address</p>
                  <p className="text-muted-foreground text-sm">
                    Santhiniketan School, Gara, Srikakulam District, Andhra Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 text-secondary rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">School Email</p>
                  <a
                    href="mailto:santiniketanschoolgara@gmail.com"
                    className="text-muted-foreground text-sm hover:text-secondary transition-colors"
                  >
                    santiniketanschoolgara@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 text-secondary rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">WhatsApp</p>
                  <a
                    href={`https://wa.me/${SCHOOL_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-secondary transition-colors"
                  >
                    +91 99121 92695
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 text-secondary rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Office Hours</p>
                  <p className="text-muted-foreground text-sm">Mon - Sat: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Management Contacts */}
            <div className="mt-8 space-y-4">
              <h4 className="font-display font-bold text-primary text-base">Management</h4>

              {[
                {
                  name: "Korlam Appalacharyulu",
                  role: "Correspondent",
                  phone: "9441883589",
                  email: "appalacharyulukorlam@gmail.com",
                },
                {
                  name: "Korlam Deepchand",
                  role: "Director",
                  phone: "9494100300",
                  email: "deepchandkorlam@gmail.com",
                },
              ].map((person) => (
                <motion.div
                  key={person.name}
                  whileHover={{ x: 4 }}
                  className="bg-card rounded-xl p-4 border border-border shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gold/10 text-gold rounded-full">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{person.name}</p>
                      <p className="text-xs text-muted-foreground">{person.role}</p>
                    </div>
                  </div>

                  <div className="pl-11 space-y-1">
                    <a
                      href={`tel:+91${person.phone}`}
                      className="flex items-center gap-2 text-xs text-muted-foreground hover:text-secondary transition-colors"
                    >
                      <Phone className="w-3 h-3" /> +91 {person.phone}
                    </a>

                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-2 text-xs text-muted-foreground hover:text-secondary transition-colors"
                    >
                      <Mail className="w-3 h-3" /> {person.email}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden h-48 bg-muted border border-border">
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3787.4154762996686!2d84.04819207518703!3d18.32832038272832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c38847fabf7eb%3A0xf3897436917dc75!2sSantiniketan%20School%2C%20Gara!5e0!3m2!1sen!2sin!4v1773230293259!5m2!1sen!2sin"
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
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all text-sm"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Subject
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
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
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                required
                value={form.message}
                onChange={handleChange}
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
                  <MessageCircle className="w-4 h-4" />
                  Send WhatsApp Message
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