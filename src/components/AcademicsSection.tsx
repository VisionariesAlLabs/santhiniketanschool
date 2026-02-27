import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { BookOpen, Microscope, Calculator, Globe, Music, Palette, Code, Dumbbell } from "lucide-react";
import { useState } from "react";

const programs = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Primary (I-V)",
    description: "Building strong foundations through interactive learning, storytelling, and activity-based education.",
    subjects: ["English", "Mathematics", "EVS", "Hindi", "Telugu", "Art"],
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Middle School (VI-VIII)",
    description: "Developing analytical thinking with advanced subjects and practical experiments.",
    subjects: ["Science", "Maths", "Social Studies", "Languages", "Computer Science"],
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "Secondary (IX-X)",
    description: "Comprehensive board exam preparation with expert guidance and regular assessments.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English"],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Higher Secondary",
    description: "Specialized streams in Science, Commerce, and Arts with career counseling.",
    subjects: ["MPC", "BiPC", "CEC", "Humanities"],
  },
];

const extracurricular = [
  { icon: <Music className="w-6 h-6" />, name: "Music & Dance" },
  { icon: <Palette className="w-6 h-6" />, name: "Art & Craft" },
  { icon: <Code className="w-6 h-6" />, name: "Coding Club" },
  { icon: <Dumbbell className="w-6 h-6" />, name: "Sports" },
];

const AcademicsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeProgram, setActiveProgram] = useState(0);

  return (
    <section id="academics" className="section-padding bg-muted/50">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Academics</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2">
            Our Academic Programs
          </h2>
        </motion.div>

        {/* Program tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {programs.map((p, i) => (
            <motion.button
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveProgram(i)}
              className={`px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeProgram === i
                  ? "gradient-navy text-primary-foreground shadow-lg scale-105"
                  : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
              }`}
            >
              {p.title}
            </motion.button>
          ))}
        </div>

        {/* Active program detail */}
        <motion.div
          key={activeProgram}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="text-secondary">{programs[activeProgram].icon}</div>
            <h3 className="text-2xl font-display font-bold text-primary">
              {programs[activeProgram].title}
            </h3>
          </div>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            {programs[activeProgram].description}
          </p>
          <div className="flex flex-wrap gap-2">
            {programs[activeProgram].subjects.map((sub) => (
              <span
                key={sub}
                className="px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium"
              >
                {sub}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Extracurricular */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-primary mb-8">
            Extracurricular Activities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {extracurricular.map((ec, i) => (
              <motion.div
                key={ec.name}
                whileHover={{ scale: 1.08, y: -5 }}
                className="bg-card rounded-xl p-6 shadow-md border border-border text-center cursor-default"
              >
                <div className="text-gold flex justify-center mb-3">{ec.icon}</div>
                <p className="text-sm font-semibold text-foreground">{ec.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicsSection;
