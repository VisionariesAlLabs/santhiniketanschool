import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import schoolLogo from "@/assets/school-logo.jpg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top bar */}
      <div className="gradient-navy text-primary-foreground text-sm py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +91 98765 43210</span>
            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> info@santhiniketan.edu</span>
          </div>
          <span className="font-display italic">"Knowledge is Power"</span>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-lg shadow-lg"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <a href="#home" onClick={() => scrollTo("#home")} className="flex items-center gap-3 group">
            <motion.img
              src={schoolLogo}
              alt="Santhiniketan School Logo"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-crimson/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div>
              <h1 className="text-lg font-display font-bold text-primary leading-tight">
                Santhiniketan School
              </h1>
              <p className="text-xs text-muted-foreground">Gara</p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-secondary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-secondary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-background border-t border-border"
            >
              <div className="container mx-auto py-4 px-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(link.href)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-secondary/10 text-secondary"
                        : "text-foreground/70 hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
