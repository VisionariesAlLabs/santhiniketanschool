import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import CounterBox from "./CounterBox";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";
import classroomImg from "@/assets/classroom.jpg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={classroomImg} alt="Classroom" className="w-full h-80 md:h-96 object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-2xl p-6 shadow-xl hidden md:block">
              <p className="text-3xl font-display font-bold">25+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-6">
              Shaping Tomorrow's Leaders Today
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Santhiniketan School, Gara, is dedicated to providing holistic education that nurtures
              intellectual curiosity, moral values, and creative thinking. Inspired by the teachings of
              Rabindranath Tagore, we believe that education should be a joyful journey of discovery.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our experienced faculty, modern infrastructure, and emphasis on both academic excellence
              and extracurricular activities create an environment where every student can thrive and
              reach their full potential.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CounterBox target={1200} suffix="+" label="Students" icon={<Users className="w-6 h-6" />} />
              <CounterBox target={85} suffix="+" label="Teachers" icon={<GraduationCap className="w-6 h-6" />} />
              <CounterBox target={50} suffix="+" label="Awards" icon={<Award className="w-6 h-6" />} />
              <CounterBox target={98} suffix="%" label="Pass Rate" icon={<BookOpen className="w-6 h-6" />} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
