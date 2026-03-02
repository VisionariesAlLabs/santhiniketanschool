import { motion } from "framer-motion";
import { Heart, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import schoolLogo from "@/assets/school-logo.jpg";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={schoolLogo} alt="Logo" className="w-12 h-12 rounded-full ring-2 ring-gold/30" />
              <div>
                <h3 className="font-display font-bold text-lg">Santhiniketan</h3>
                <p className="text-xs text-primary-foreground/60">School, Gara</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Nurturing young minds with quality education, moral values, and holistic development since 2000.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Academics", "Facilities", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link.toLowerCase())}
                    className="text-sm text-primary-foreground/70 hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h4 className="font-display font-bold mb-4 text-gold">Academic</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Play School</li>
              <li>Nursery - UKG</li>
              <li>Primary School (I-V)</li>
              <li>Middle School (VI-VIII)</li>
              <li>Secondary School (IX-X)</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold mb-4 text-gold">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="p-2.5 rounded-lg bg-primary-foreground/10 hover:bg-gold/20 text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-primary-foreground/70">
              Subscribe for updates and news from our school.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-4 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50 gap-2">
          <p>© 2026 Santhiniketan School, Gara. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-secondary" /> for education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
