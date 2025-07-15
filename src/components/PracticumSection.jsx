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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vel dui at nulla vehicula porttitor.
            </p>
          </section>

          {/* Company Background */}
          <section>
            <h3 className="text-xl font-semibold text-primary border-b pb-1 mb-2 border-primary/30">
              Company Background
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              eget efficitur odio. Maecenas id dignissim augue.
            </p>
          </section>

          {/* Individual Contributions */}
          <section>
            <h3 className="text-xl font-semibold text-primary border-b pb-1 mb-2 border-primary/30">
              My Individual Contributions
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Created backend APIs for data management.</li>
              <li>Designed and tested dashboards for internal tools.</li>
              <li>Handled documentation and code cleanup.</li>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. I’ve
              gained deeper insight into working in real-world environments.
            </p>
          </section>

          {/* Download Button */}
          <div className="text-center pt-6 z-10 relative">
            <a
              href="/assets/YOUR_REPORT.pdf" // ✅ Update this path
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
