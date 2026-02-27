import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import schoolLogo from "@/assets/school-logo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Animated wave at bottom */}
      <div className="absolute bottom-0 left-0 w-[200%] h-24 opacity-30">
        <svg viewBox="0 0 2880 100" className="w-full h-full animate-wave">
          <path
            fill="hsl(var(--cream))"
            d="M0,50 C360,100 720,0 1080,50 C1440,100 1800,0 2160,50 C2520,100 2880,50 2880,50 L2880,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="mx-auto mb-8"
        >
          <img
            src={schoolLogo}
            alt="Santhiniketan School Logo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto ring-4 ring-gold/50 shadow-2xl animate-pulse-glow"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-4 leading-tight"
        >
          Santhiniketan School
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl md:text-2xl font-display italic text-gold-light mb-2"
        >
          "Knowledge is Power"
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg text-primary-foreground/70 mb-10 font-body"
        >
          Nurturing Minds, Building Futures — Gara
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold text-lg hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Explore Our School
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Admissions Open
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-primary-foreground/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
