import { motion } from "framer-motion";
import { FloatingPlanet } from "./FloatingPlanet";

const seminars = [
  {
    title: "Future of Data Science",
    organizer: "Google Dev Group",
    date: "April 2024",
    description: "Explored new trends in AI, ML, and data visualization techniques."
  },
  {
    title: "Modern Web Backend Architectures",
    organizer: "MongoDB University",
    date: "January 2024",
    description: "Deep dive into scalable backend systems using Node.js and NoSQL."
  },
  {
    title: "Cybersecurity Essentials",
    organizer: "PLDT x TechTalks PH",
    date: "October 2023",
    description: "Learned about network protection, endpoint security, and threat mitigation."
  }
];

export const SeminarsSection = () => {
  return (
    <section id="seminars" className="relative py-24 px-6 sm:px-10 lg:px-24 bg-background text-foreground">
      <FloatingPlanet /> {/* 🪐 3D floating orb */}

      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Seminars Attended
        </motion.h2>

        <motion.p
          className="text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A few of the events and seminars that helped shape my technical foundation.
        </motion.p>

        <div className="grid gap-8 mt-10">
          {seminars.map((seminar, index) => (
            <motion.div
              key={index}
              className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-border text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-1">{seminar.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{seminar.organizer} — {seminar.date}</p>
              <p className="text-base">{seminar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
