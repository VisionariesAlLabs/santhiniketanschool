import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import CounterBox from "./CounterBox";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";
import schoolBuilding from "@/assets/school-building.jpg";
import campusEntrance from "@/assets/campus-entrance.jpg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Stack */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={schoolBuilding} alt="School Building" className="w-full h-80 md:h-96 object-cover" />
            </div>
            {/* Floating second image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 md:-right-8 w-40 md:w-52 rounded-xl overflow-hidden shadow-xl border-4 border-background hidden sm:block"
            >
              <img src={campusEntrance} alt="Campus Entrance" className="w-full h-32 md:h-40 object-cover" />
            </motion.div>
            <div className="absolute -bottom-6 -left-4 md:left-auto md:-bottom-6 md:right-auto md:left-4 bg-secondary text-secondary-foreground rounded-2xl p-4 md:p-6 shadow-xl">
              <p className="text-2xl md:text-3xl font-display font-bold">34+</p>
              <p className="text-xs md:text-sm">Years of Excellence</p>
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
              Shaping Tomorrow's Leaders Since 1988
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Santhiniketan School, Gara, was established on April 21, 1988 with just 27 students.
              Today, we proudly serve over 700 students from Play School through 10th Class.
              Our lush green campus, surrounded by coconut groves, provides a serene
              environment for holistic learning and growth.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With 100% pass rate in 10th class board exams every year, experienced faculty,
              digital classrooms, and a strong focus on moral values and all-round development,
              Santhiniketan has become a beacon of quality education in Srikakulam district.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CounterBox target={700} suffix="+" label="Students" icon={<Users className="w-6 h-6" />} />
              <CounterBox target={34} suffix="+" label="Years" icon={<GraduationCap className="w-6 h-6" />} />
              <CounterBox target={100} suffix="%" label="Pass Rate" icon={<Award className="w-6 h-6" />} />
              <CounterBox target={50} suffix="+" label="Awards" icon={<BookOpen className="w-6 h-6" />} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
