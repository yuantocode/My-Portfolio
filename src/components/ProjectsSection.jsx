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
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Attendance System",
    description: "Logs in and Out system",
    image: "/projects/Project2.jpg",
    tags: ["C#", "CSS", "JS"],
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Classroom Conduciveness Monitoring System",
    description: "Monitors the Environmental Conditions of a Public Classroom",
    image: "/projects/Project3.jpg",
    tags: ["React", "JS", "MongoDB"],
    githubUrl: "https://github.com/Heracles404/learning-environment-monitoring-system",
  },
  {
    id: 4,
    title: "Visitor Counter System",
    description: "Counts Visitors",
    image: "/projects/Project4.jpg",
    tags: ["HTML", "CSS", "JS"],
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Car Elevator",
    description: "Elevators for Cars",
    image: "/projects/Project5.jpg",
    tags: ["C#", "JS"],
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }} // <--- changed here
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false }} // <--- changed here
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: false }} // <--- changed here
              className="group bg-card rounded-xl overflow-hidden shadow-md card-hover hover:shadow-lg border border-border transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-full">
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

                <div className="flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }} // <--- changed here
          className="text-center mt-12"
        >
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/yuantocode"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
