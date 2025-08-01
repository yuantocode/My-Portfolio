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
    thumbnail: "/certs/COURSERA.jpg",
  },
  {
    id: 2,
    title: "WearOS: Emerging Technology for Internet and Learning of Everything",
    issuer: "freeCodeCamp",
    date: "March 2025",
    file: "/certs/Certificate-Of-Completion_Jimenez.pdf",
    thumbnail: "/certs/OS.jpg",
  },
  {
    id: 3,
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services Training and Certification",
    date: "November 13, 2023",
    file: "/certs/Aws-Academy-Jimenez.pdf",
    thumbnail: "/certs/AWS.jpg",
  },
  {
    id: 4,
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "Nov 15, 2022",
    file: "/certs/Cisco-Jimenez.pdf",
    thumbnail: "/certs/CS.jpg",
  },
];

const CertsSection = () => {
  return (
    <section
      id="certificates"
      className="py-24 px-4 relative bg-transparent"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground"
        >
          My <span className="text-primary">Certificates</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          These are some of the certifications I’ve earned to validate my skills and development knowledge.
        </motion.p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-2xl border border-border bg-background/70 backdrop-blur-md shadow-xl p-4 flex flex-col justify-between"
            >
              {/* Thumbnail Placeholder */}
              <div className="w-full h-48 bg-white/10 rounded-xl overflow-hidden mb-4 flex items-center justify-center text-muted-foreground text-sm">
                {cert.thumbnail ? (
                  <img
                    src={cert.thumbnail}
                    alt={`${cert.title} thumbnail`}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-xs">[Certificate Preview]</span>
                )}
              </div>

              {/* Certificate Info */}
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-foreground mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                <span className="inline-block px-3 py-1 text-xs text-white bg-primary rounded-full mb-4">
                  {cert.date}
                </span>
              </div>

              {/* View Button */}
              <div className="mt-auto">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium"
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            View Other Certificates <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CertsSection;
