"use client";

import { useState } from "react";
import { ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Barrier System",
    description: "A basic barrier system using RFID and microcontroller to control access points like gates or doors.",
    image: "/projects/Project1.jpg",
    tags: ["C#", "CSS", "JS"],
    githubUrl: "https://github.com/yuantocode/RFID-Controlled-Barrier-Using-Arduino",
  },
{
  id: 2,
  title: "Student / Employee Time Keeping System",
  description:
    "A digital time-in/time-out tracking system for students and employees, allowing administrators to log attendance efficiently and export reports for performance or compliance monitoring.",
  image: "/projects/Project2.jpg",
  tags: [
    "PHP",
    "MySQL",
    "JavaScript",
    "Bootstrap",
    "HTML/CSS",
    "RFID (13.56 MHz)",
    "XAMPP",
    "WebStorm"
  ],
  githubUrl: "https://github.com/yuantocode/employee-timekeep-IoT-NodeMCU-RFID",
}
,
  {
    id: 3,
    title: "Learning Environment Monitoring System (LEMS)",
    description:
      "LEMS is a monitoring tool designed to help school heads assess the conduciveness of classrooms and other learning spaces. It tracks key environmental parameters such as temperature, humidity, smog levels, and air quality in 30-minute intervals. LEMS provides reliable data through visual dashboards and logs, enabling school administrators to make informed decisions based on actual classroom conditions. The system is purely observational, serving as a valuable reference for maintaining a healthy and effective learning environment. Historical data insights can support infrastructure planning and academic scheduling. LEMS encourages data-informed decisions to foster optimal educational conditions for both students and teachers.",
    image: "/projects/Project3.jpg",
    tags: [
      "MERN Stack",
      "C++",
      "Environmental Sensors",
      "REST APIs",
      "VPS (Hostinger)",
      "WebStorm",
      "Visual Studio",
    ],
    githubUrl: "https://github.com/Heracles404/learning-environment-monitoring-system",
  },
{
  id: 4,
  title: "Visitor Counter System",
  description:
    "A simple yet effective system that uses sensors to count and log the number of visitors entering or exiting a facility. Data is displayed in real time to help track foot traffic and monitor occupancy levels.",
  image: "/projects/Project4.jpg", // You can update this to a new image if you have one
  tags: [
    "PHP",
    "MySQL",
    "JavaScript",
    "Bootstrap",
    "HTML/CSS",
    "Laser Sensor",
    "XAMPP",
    "WebStorm"
  ],
  githubUrl: "https://github.com/yuantocode/elevated_car", // Update this if a new repo exists
}
,
];

function TruncatedDescription({ text, maxLength = 200 }) {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <>
      <p className="text-muted-foreground text-sm leading-relaxed mb-2">
        {expanded ? text : `${text.slice(0, maxLength)}...`}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-primary text-sm underline hover:opacity-80 transition"
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </>
  );
}

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
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </motion.p>

        {/* Grid Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-xl shadow-md border border-border hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-muted text-foreground/80 border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold">{project.title}</h3>

                <TruncatedDescription text={project.description} />

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
