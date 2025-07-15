"use client";

import { ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Barrier System",
    description: "idk pa",
    image: "/projects/Project1.jpg",
    tags: ["C#", "CSS", "JS"],
    githubUrl: "https://github.com/yuantocode/RFID-Controlled-Barrier-Using-Arduino",
  },
  {
    id: 2,
    title: "Employee Timekeep IoT NodeMCU RFID",
    description: "Logs in and Out system",
    image: "/projects/Project2.jpg",
    tags: ["C#", "CSS", "JS"],
    githubUrl: "https://github.com/yuantocode/employee-timekeep-IoT-NodeMCU-RFID",
  },
  {
    id: 3,
    title: "Learning Environment Monitoring System",
    description: "Monitors the Environmental Conditions of a Public Classroom",
    image: "/projects/Project3.jpg",
    tags: ["React", "JS", "MongoDB"],
    githubUrl: "https://github.com/Heracles404/learning-environment-monitoring-system",
  },
  {
    id: 4,
    title: "Car Elevator",
    description: "Elevators for Cars",
    image: "/projects/Project5.jpg",
    tags: ["PHP", "C#", "Notepad ++"],
    githubUrl: "https://github.com/yuantocode/elevated_car",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </motion.p>

        {/* Scroll arrow */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: [0, 5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-primary pointer-events-none"
        >
          <ArrowRight size={28} />
        </motion.div>

        {/* Horizontal scroll container */}
        <motion.div
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            className="flex gap-6 px-1"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="min-w-[300px] md:min-w-[360px] snap-start bg-card rounded-xl shadow-md border border-border hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-muted text-foreground/80 border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex justify-end mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/yuantocode"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
