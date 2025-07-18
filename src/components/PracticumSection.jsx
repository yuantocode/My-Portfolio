import { motion } from "framer-motion";
import { Download } from "lucide-react";

export const PracticumSection = () => {
  return (
    <section
      id="practicum"
      className="py-24 px-4 bg-gradient-to-b from-background to-secondary/40 relative z-10"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Main Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card p-10 rounded-2xl shadow-xl border border-border space-y-10"
        >
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center text-foreground mb-6">
            Practicum <span className="text-primary">Overview</span>
          </h2>

          {/* Introduction */}
          <section>
            <h3 className="text-xl font-semibold text-primary border-b pb-1 mb-2 border-primary/30">
              Introduction
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The student interned at STMicroelectronics, a global leader in semiconductor solutions, at its manufacturing facility in Calamba, Laguna. The company is known for producing a wide range of electronic components and systems used in diverse industries including automotive, industrial, and consumer electronics. STMicroelectronics is committed to innovation, quality, and sustainable practices across its global operations.
            </p>
          </section>

          {/* Company Background */}
          <section>
            <h3 className="text-xl font-semibold text-primary border-b pb-1 mb-2 border-primary/30">
              Company Background
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              STMicroelectronics’ Calamba site operates with a strong commitment to quality, innovation, and service excellence. It supports the company’s global mission by providing efficient, high-quality manufacturing services.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">
              <span className="font-semibold text-foreground">Vision:</span> To be the <em>preferred choice</em> for excellent products and services, fostering a culture of accountability, growth, and sustainability driven by empowered people.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">
              <span className="font-semibold text-foreground">Mission:</span> To sort, assemble, and test integrated circuits and modules through innovative, fast, and cost-effective solutions. The site delivers these products and services to customers, becoming an integral part of their value creation and contributing to mutual business growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Purpose:</span> <em>Be the preferred choice.</em>
            </p>
          </section>

          {/* Individual Contributions */}
          <section>
            <h3 className="text-xl font-semibold text-primary border-b pb-1 mb-2 border-primary/30">
              My Individual Contributions
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                The main assignment given to the student involved the development of a web-based internal tool intended to assist with certain operational processes in the department. The project was developed using front-end technologies such as HTML, CSS, and JavaScript.
              </li>
            </ul>
          </section>

          {/* Total Hours Rendered */}
          <section>
            <h3 className="text-xl font-semibold text-primary border-b pb-1 mb-2 border-primary/30">
              Total Hours Rendered
            </h3>
            <p className="text-muted-foreground">
              A total of{" "}
              <span className="font-bold text-foreground">486 hours</span> were
              rendered during the internship.
            </p>
          </section>

          {/* Realizations */}
          <section>
            <h3 className="text-xl font-semibold text-primary border-b pb-1 mb-2 border-primary/30">
              Realizations
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The practicum allowed me to grow professionally by combining practical industrial training with structured IT learning. It helped me see the connection between quality processes and information systems while reinforcing my interest in full-stack development. This experience has prepared me to take on future roles where technical knowledge, analytical thinking, and digital tools come together.
            </p>
          </section>

          {/* Download Button */}
          <div className="text-center pt-6 z-10 relative">
            <a
              href="/report/Final Report Jimenez.pdf" // 🔁 Make sure this path is valid
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
