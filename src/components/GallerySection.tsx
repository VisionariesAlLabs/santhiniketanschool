import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import schoolBuilding from "@/assets/school-building.jpg";
import campusEntrance from "@/assets/campus-entrance.jpg";
import classroomImg from "@/assets/classroom.jpg";
import assemblyImg from "@/assets/assembly.jpg";
import childrensDayImg from "@/assets/childrens-day.jpg";
import rangoliImg from "@/assets/rangoli.jpg";
import schoolBusImg from "@/assets/school-bus.jpg";
import meditationImg from "@/assets/meditation.jpg";
import newspaperImg from "@/assets/newspaper.jpg";

const images = [
  { src: campusEntrance, caption: "Campus Entrance — Palm-Lined Pathway", category: "Campus" },
  { src: schoolBuilding, caption: "School Building", category: "Campus" },
  { src: heroBg, caption: "Our Beautiful Campus", category: "Campus" },
  { src: classroomImg, caption: "Students in Examination", category: "Academics" },
  { src: assemblyImg, caption: "Morning Assembly", category: "Activities" },
  { src: childrensDayImg, caption: "Children's Day Celebrations", category: "Events" },
  { src: rangoliImg, caption: "Rangoli Art Competition", category: "Events" },
  { src: meditationImg, caption: "Yoga & Meditation Session", category: "Activities" },
  { src: schoolBusImg, caption: "School Transport Fleet", category: "Campus" },
  { src: newspaperImg, caption: "Media Coverage — 34 Years of Excellence", category: "Achievements" },
];

const categories = ["All", "Campus", "Academics", "Activities", "Events", "Achievements"];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    const currentImg = images[lightbox];
    const currentFilteredIndex = filtered.indexOf(currentImg);
    const nextFilteredIndex = (currentFilteredIndex + dir + filtered.length) % filtered.length;
    const nextImg = filtered[nextFilteredIndex];
    setLightbox(images.indexOf(nextImg));
  };

  return (
    <section id="gallery" className="section-padding bg-muted/50">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-8"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2">
            Campus Life in Pictures
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Glimpses of our vibrant school life — from academics to cultural celebrations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-10 flex-wrap"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                filter === c
                  ? "bg-secondary text-secondary-foreground shadow-md scale-105"
                  : "bg-card text-muted-foreground border border-border hover:border-secondary/50 hover:text-secondary"
              }`}
            >
              {c}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => {
              const globalIndex = images.indexOf(img);
              const isLarge = i === 0 || i === 3;
              return (
                <motion.div
                  key={img.caption}
                  layout
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  onClick={() => setLightbox(globalIndex)}
                  className={`relative group cursor-pointer rounded-2xl overflow-hidden ${
                    isLarge ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider mb-1">{img.category}</span>
                    <p className="text-primary-foreground font-display font-bold text-sm md:text-base leading-tight">
                      {img.caption}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-foreground/20 backdrop-blur-sm text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-90">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-md p-4"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground z-10 p-2 rounded-full bg-foreground/30 hover:bg-foreground/50 transition-colors">
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-2 md:left-6 text-primary-foreground/80 hover:text-primary-foreground p-2 rounded-full bg-foreground/30 hover:bg-foreground/50 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-2 md:right-6 text-primary-foreground/80 hover:text-primary-foreground p-2 rounded-full bg-foreground/30 hover:bg-foreground/50 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              src={images[lightbox].src}
              alt={images[lightbox].caption}
              className="max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 text-center">
              <span className="text-xs text-gold uppercase tracking-wider font-semibold">{images[lightbox].category}</span>
              <p className="text-primary-foreground text-lg font-display mt-1">
                {images[lightbox].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
