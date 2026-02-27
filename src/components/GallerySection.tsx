import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import classroomImg from "@/assets/classroom.jpg";
import scienceLabImg from "@/assets/science-lab.jpg";
import sportsImg from "@/assets/sports.jpg";
import libraryImg from "@/assets/library.jpg";
import culturalImg from "@/assets/cultural.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const images = [
  { src: heroBg, caption: "Our Beautiful Campus" },
  { src: classroomImg, caption: "Smart Classrooms" },
  { src: scienceLabImg, caption: "Science Laboratory" },
  { src: sportsImg, caption: "Sports Ground" },
  { src: libraryImg, caption: "School Library" },
  { src: culturalImg, caption: "Annual Day Celebrations" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + images.length) % images.length);
  };

  return (
    <section id="gallery" className="section-padding bg-muted/50">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2">
            Campus Life in Pictures
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setLightbox(i)}
              className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-all duration-300 flex items-end">
                <p className="text-primary-foreground p-4 font-medium text-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground">
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 text-primary-foreground/80 hover:text-primary-foreground"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 text-primary-foreground/80 hover:text-primary-foreground"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[lightbox].src}
              alt={images[lightbox].caption}
              className="max-w-full max-h-[85vh] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-8 text-primary-foreground text-lg font-display">
              {images[lightbox].caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
