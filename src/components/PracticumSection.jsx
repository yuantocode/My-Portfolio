import { motion } from "framer-motion";
import {
  Download,
  BookOpen,
  Building2,
  Code2,
  Clock3,
  Sparkles,
} from "lucide-react";

export const PracticumSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="practicum"
      className="relative z-10 py-28 px-4 bg-gradient-to-br from-secondary/30 to-background/90"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="backdrop-blur-md bg-background/70 border border-border rounded-3xl shadow-2xl p-10 space-y-14"
        >
          <h2 className="text-5xl font-extrabold text-center text-foreground">
            My <span className="text-primary">Practicum Journey</span>
          </h2>

          {/* Introduction */}
          <Section
            icon={<BookOpen className="w-6 h-6 text-primary" />}
            title="Introduction"
            content="I interned at STMicroelectronics in Calamba, Laguna, a global semiconductor leader known for its innovation, quality, and sustainable practices. The experience provided exposure to cutting-edge manufacturing operations supporting industries from automotive to consumer electronics."
          />

          {/* Company Background */}
          <Section
            icon={<Building2 className="w-6 h-6 text-primary" />}
            title="Company Background"
            content={
              <>
                <p>
                  STMicroelectronics’ Calamba site exemplifies service
                  excellence and global innovation. The plant ensures
                  high-quality production that aligns with ST's global mission.
                </p>
                <p className="mt-2">
                  <strong className="text-primary">Vision:</strong> To be the{" "}
                  <em>preferred choice</em> in delivering outstanding products
                  and services.
                </p>
                <p>
                  <strong className="text-primary">Mission:</strong> To
                  efficiently sort, assemble, and test integrated circuits and
                  modules, contributing value to clients.
                </p>
                <p>
                  <strong className="text-primary">Purpose:</strong>{" "}
                  <em>Be the preferred choice.</em>
                </p>
              </>
            }
          />

          {/* Contributions */}
          <Section
            icon={<Code2 className="w-6 h-6 text-primary" />}
            title="My Individual Contributions"
            content={
              <div className="space-y-2 text-muted-foreground">
                Developed a web-based internal tool using HTML, CSS, and
                JavaScript to optimize departmental processes.
              </div>
            }
          />

          {/* Hours Rendered */}
          <Section
            icon={<Clock3 className="w-6 h-6 text-primary" />}
            title="Total Hours Rendered"
            content={
              <p className="text-muted-foreground">
                I completed a total of{" "}
                <span className="font-bold text-primary">360 hours</span>{" "}
                during my internship.
              </p>
            }
          />

          {/* Realizations */}
          <Section
            icon={<Sparkles className="w-6 h-6 text-primary" />}
            title="Realizations"
            content="The practicum bridged academic theory and practical IT work. I developed professionally through exposure to real-world systems, reinforcing my passion for full-stack development and the role of digital tools in process improvement."
          />

          {/* Download Button */}
          <div className="text-center pt-4">
            <a
              href="/report/FINAL REPORT_JIMENEZ.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-white bg-primary hover:bg-primary/90 transition rounded-full shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download My Report
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Section = ({ icon, title, content }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-3"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/20 rounded-full">{icon}</div>
        <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="leading-relaxed text-muted-foreground">{content}</div>
    </motion.div>
  );
};
