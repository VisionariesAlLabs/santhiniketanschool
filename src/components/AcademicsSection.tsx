import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { Baby, BookOpen, Microscope, Calculator, Music, Palette, Code, Dumbbell, Sparkles, GraduationCap } from "lucide-react";
import { useState } from "react";

const programs = [
  {
    icon: <Baby className="w-8 h-8" />,
    title: "Play School",
    age: "Age 2.5 - 4",
    description: "A fun, safe, and nurturing environment where toddlers learn through play, songs, rhymes, and sensory activities that spark curiosity.",
    subjects: ["Rhymes & Stories", "Art & Craft", "Motor Skills", "Social Skills", "Basic Numbers"],
    gradient: "from-pink-500/20 to-purple-500/20",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Nursery - UKG",
    age: "Age 3 - 6",
    description: "Building foundational literacy and numeracy skills through interactive, activity-based learning with dedicated attention to every child.",
    subjects: ["English", "Mathematics", "EVS", "Hindi", "Telugu", "Drawing"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Primary (I-V)",
    age: "Age 6 - 11",
    description: "Strengthening fundamentals through interactive learning, storytelling, experiments, and project-based education.",
    subjects: ["English", "Mathematics", "EVS", "Hindi", "Telugu", "Art & Craft"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Middle School (VI-VIII)",
    age: "Age 11 - 14",
    description: "Developing analytical thinking with advanced subjects, practical experiments, and competitive exam preparation.",
    subjects: ["Science", "Maths", "Social Studies", "Languages", "Computer Science"],
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "Secondary (IX-X)",
    age: "Age 14 - 16",
    description: "Comprehensive board exam preparation with expert guidance, regular assessments, and career counseling.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Social Studies"],
    gradient: "from-violet-500/20 to-indigo-500/20",
  },
];

const extracurricular = [
  { icon: <Music className="w-6 h-6" />, name: "Music & Dance", color: "from-pink-500/10 to-rose-500/10" },
  { icon: <Palette className="w-6 h-6" />, name: "Art & Craft", color: "from-amber-500/10 to-yellow-500/10" },
  { icon: <Code className="w-6 h-6" />, name: "Coding Club", color: "from-cyan-500/10 to-blue-500/10" },
  { icon: <Dumbbell className="w-6 h-6" />, name: "Sports", color: "from-emerald-500/10 to-green-500/10" },
  { icon: <GraduationCap className="w-6 h-6" />, name: "Quiz Club", color: "from-violet-500/10 to-purple-500/10" },
];

const AcademicsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeProgram, setActiveProgram] = useState(0);

  return (
    <section id="academics" className="section-padding bg-muted/50 overflow-hidden">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Academics</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2">
            Play School to 10th Class
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            A complete learning journey from early childhood to secondary education, tailored to every stage of growth.
          </p>
        </motion.div>

        {/* Program tabs — horizontal scrollable on mobile */}
        <div className="flex overflow-x-auto pb-2 gap-3 mb-10 scrollbar-hide justify-start md:justify-center px-1">
          {programs.map((p, i) => (
            <motion.button
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActiveProgram(i)}
              className={`flex-shrink-0 px-5 py-3 rounded-2xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                activeProgram === i
                  ? "gradient-navy text-primary-foreground shadow-lg scale-105"
                  : "bg-card text-muted-foreground hover:bg-card/80 border border-border hover:shadow-md"
              }`}
            >
              <span className={activeProgram === i ? "text-gold" : "text-muted-foreground"}>
                {p.icon}
              </span>
              <span className="whitespace-nowrap">{p.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Active program detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProgram}
            initial={{ y: 30, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border max-w-3xl mx-auto relative overflow-hidden`}
          >
            {/* Decorative gradient blob */}
            <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${programs[activeProgram].gradient} blur-3xl opacity-60`} />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-2">
                <motion.div
                  initial={{ rotate: -20, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="p-3 rounded-2xl bg-secondary/10 text-secondary"
                >
                  {programs[activeProgram].icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary">
                    {programs[activeProgram].title}
                  </h3>
                  <span className="text-sm text-gold font-medium">{programs[activeProgram].age}</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed mt-4">
                {programs[activeProgram].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {programs[activeProgram].subjects.map((sub, i) => (
                  <motion.span
                    key={sub}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium border border-border/50 hover:bg-accent/20 hover:border-accent transition-colors cursor-default"
                  >
                    {sub}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Extracurricular */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-primary mb-3">
            Beyond the Classroom
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-sm">
            We nurture talents through diverse extracurricular activities
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {extracurricular.map((ec, i) => (
              <motion.div
                key={ec.name}
                initial={{ y: 20, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.08, y: -5 }}
                className={`bg-gradient-to-br ${ec.color} backdrop-blur-sm rounded-2xl p-5 shadow-md border border-border/50 text-center cursor-default group`}
              >
                <div className="text-gold flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">{ec.icon}</div>
                <p className="text-xs sm:text-sm font-semibold text-foreground">{ec.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicsSection;
