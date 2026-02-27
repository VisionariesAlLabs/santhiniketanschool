import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { Calendar, MapPin, Clock, ChevronRight } from "lucide-react";
import { useState } from "react";

const events = [
  {
    date: "March 15, 2026",
    title: "Annual Day Celebrations",
    description: "Join us for a spectacular showcase of talent featuring dance, drama, and music performances by our students.",
    time: "10:00 AM - 4:00 PM",
    venue: "School Auditorium",
    category: "Cultural",
  },
  {
    date: "April 5, 2026",
    title: "Science Exhibition",
    description: "Students present innovative science projects and working models. Open for parents and public.",
    time: "9:00 AM - 2:00 PM",
    venue: "Science Block",
    category: "Academic",
  },
  {
    date: "April 20, 2026",
    title: "Inter-School Sports Meet",
    description: "Annual athletics championship with schools from across the district competing in various events.",
    time: "8:00 AM - 5:00 PM",
    venue: "Sports Ground",
    category: "Sports",
  },
  {
    date: "May 1, 2026",
    title: "Parent-Teacher Meeting",
    description: "Discuss your child's academic progress, strengths, and areas for improvement with our faculty.",
    time: "10:00 AM - 1:00 PM",
    venue: "Respective Classrooms",
    category: "Academic",
  },
];

const categories = ["All", "Cultural", "Academic", "Sports"];

const EventsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <section id="events" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Events</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2">
            Upcoming Events
          </h2>
        </motion.div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === c
                  ? "bg-secondary text-secondary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filtered.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ y: 30, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              layout
              className="bg-card rounded-2xl p-6 shadow-md border border-border hover-lift group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  {event.category}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {event.date}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                {event.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{event.description}</p>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {event.time}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {event.venue}</span>
              </div>
              <button className="mt-4 text-sm font-semibold text-secondary flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
