import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import scienceLabImg from "@/assets/science-lab.jpg";
import libraryImg from "@/assets/library.jpg";
import sportsImg from "@/assets/sports.jpg";
import { FlaskConical, BookOpen, Trophy, Monitor, Bus, Utensils } from "lucide-react";

const facilities = [
  { img: scienceLabImg, icon: <FlaskConical className="w-6 h-6" />, title: "Science Laboratories", desc: "Well-equipped physics, chemistry, and biology labs with modern instruments for hands-on experiments." },
  { img: libraryImg, icon: <BookOpen className="w-6 h-6" />, title: "Library & Media Center", desc: "Over 10,000 books, digital resources, and a quiet reading space for research and exploration." },
  { img: sportsImg, icon: <Trophy className="w-6 h-6" />, title: "Sports Complex", desc: "Cricket ground, basketball court, running track, and indoor games facility for all-round development." },
];

const otherFacilities = [
  { icon: <Monitor className="w-5 h-5" />, name: "Computer Lab" },
  { icon: <Bus className="w-5 h-5" />, name: "Transport" },
  { icon: <Utensils className="w-5 h-5" />, name: "Canteen" },
];

const FacilitiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="facilities" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Facilities</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2">
            World-Class Infrastructure
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 40, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover-lift"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-primary-foreground">
                  {f.icon}
                  <span className="font-display font-bold text-lg">{f.title}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          {otherFacilities.map((f) => (
            <div key={f.name} className="flex items-center gap-2 bg-muted rounded-full px-5 py-2.5 text-sm font-medium text-foreground">
              <span className="text-gold">{f.icon}</span>
              {f.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
