"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
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
    <section id="certificates" className="py-24 px-4 relative bg-transparent">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          My <span className="text-primary">Certificates</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          These are some of the certifications I’ve earned from various programs
          to validate my skills and development knowledge.
        </motion.p>

        {/* Scrollable carousel */}
        <div className="relative">
          {/* Scroll hint arrow */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-primary pointer-events-none"
          >
            <ArrowRight size={28} />
          </motion.div>

          <motion.div
            className="cursor-grab active:cursor-grabbing overflow-hidden"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: -1000, right: 0 }}
              className="flex gap-6 px-1"
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  whileHover={{ scale: 1.03 }}
                  className="min-w-[280px] md:min-w-[340px] snap-start rounded-2xl border border-border bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 relative shadow-md transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {cert.issuer}
                  </p>
                  <span className="inline-block px-3 py-1 text-xs text-white bg-primary rounded-full mb-4">
                    {cert.date}
                  </span>
                  <div className="absolute bottom-4 right-4">
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
            </motion.div>
          </motion.div>
        </div>

        {/* External link to Credly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.credly.com/users/julian-manuel-jimenez"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            View Other Certificates <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CertsSection;
