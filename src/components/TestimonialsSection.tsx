import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mrs. Lakshmi Devi",
    role: "Parent",
    text: "Santhiniketan has transformed my child's learning experience. The teachers are dedicated, and the holistic approach to education is truly commendable.",
  },
  {
    name: "Rahul Kumar",
    role: "Alumni (Batch 2020)",
    text: "The values and knowledge I gained at Santhiniketan shaped my career. The school's emphasis on character building alongside academics is unmatched.",
  },
  {
    name: "Mr. Suresh Rao",
    role: "Parent",
    text: "We are extremely happy with the school's infrastructure and teaching methodology. Our son has shown remarkable improvement in both academics and extracurriculars.",
  },
  {
    name: "Priya Sharma",
    role: "Alumni (Batch 2022)",
    text: "The science labs and library were my favorite places. The school provided every resource I needed to excel in competitive exams.",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding gradient-navy text-primary-foreground">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-12"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
            What People Say
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Quote className="w-10 h-10 mx-auto mb-6 text-gold/50" />
            <p className="text-lg md:text-xl leading-relaxed mb-8 italic text-primary-foreground/90">
              "{testimonials[current].text}"
            </p>
            <p className="font-display font-bold text-lg">{testimonials[current].name}</p>
            <p className="text-sm text-primary-foreground/60">{testimonials[current].role}</p>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-gold w-6" : "bg-primary-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((current + 1) % testimonials.length)}
              className="p-2 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
