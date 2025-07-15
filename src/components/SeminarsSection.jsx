import { motion } from "framer-motion";

const seminars = [
  {
    title: "Ethical Hacking Fundamentals",
    organizer: "Christopher ER Laylo",
    date: "August 31, 2024",
    description: "The significance of this workshop on Ethical Hacking and Pentesting is that it brings into reality the cybersecurity-enacting practices at both the individual and organizational levels."
  },
  {
    title: "The Complete Node.js Course",
    organizer: "Mosh Hamidani",
    date: "October 3, 2024",
    description: "The Complete Node.js Course played a critical role in broadening my understanding of server-side JavaScript development."
  },
  {
    title: "The Ultimate Docker Course",
    organizer: "Mosh Hamidani",
    date: "September 16, 2024",
    description: "Learned about network protection, endpoint security, and threat mitigation."
  }
];

export const SeminarsSection = () => {
  return (
    <section
      id="seminars"
      className="relative py-24 px-6 sm:px-10 lg:px-24"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Seminars and Workshops
        </motion.h2>

        <motion.p
          className="text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A few of the workshops and seminars that helped shape my technical foundation.
        </motion.p>

        <div className="grid gap-8 mt-10">
          {seminars.map((seminar, index) => (
            <motion.div
              key={index}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md border border-border text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-1">{seminar.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">
                {seminar.organizer} — {seminar.date}
              </p>
              <p className="text-base">{seminar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
