"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Meta (Coursera)",
    date: "June 2025",
    file: "/certs/fullstack-meta.pdf",
  },
  {
    id: 2,
    title: "WearOS: Emerging Technology for Internet and Learning of Everything",
    issuer: "freeCodeCamp",
    date: "March 2025",
    file: "/certs/Certificate-Of-Completion_Jimenez.pdf",
  },
  {
    id: 3,
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services Training and Certification",
    date: "November 13, 2023",
    file: "/certs/Aws-Academy-Jimenez.pdf",
  },
  {
    id: 4,
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "Nov 15, 2022",
    file: "/certs/Cisco-Jimenez.pdf",
  },
];

const CertsSection = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          My <span className="text-primary">Certificates</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          These are some of the certifications I’ve earned from various programs
          to validate my skills and development knowledge.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="group relative rounded-2xl bg-gradient-to-br from-muted/30 to-background/70 p-6 border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-md overflow-hidden"
            >
              {/* Hover glow background */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>

              {/* Date badge */}
              <span className="inline-block px-3 py-1 text-xs text-white bg-primary rounded-full mb-4">
                {cert.date}
              </span>

              {/* External link button */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/90 text-white hover:bg-primary"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertsSection;
