import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Web Development",
    description:
      "Crafting responsive and performant websites using modern frameworks and best practices.",
  },
  {
    icon: <User className="h-6 w-6 text-primary" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive and accessible user interfaces focused on seamless user experience.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Project Collaboration",
    description:
      "Team-oriented with strong communication, leadership, and adaptability in agile environments.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-4 bg-transparent relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          About{" "}
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* 💻 Skills */}
          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-background/70 border border-border p-6 rounded-2xl shadow-md backdrop-blur-sm hover:shadow-xl hover:scale-[1.02] transition-transform group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{skill.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 👤 Bio & Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold leading-snug">
              BSIT Student & <span className="text-primary">Aspiring Developer</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base">
              I'm a passionate IT student with 4+ years of programming experience and a growing skillset in full-stack development. Known for being adaptable and collaborative, I bring curiosity, determination, and people skills to every project I join. I enjoy building things that are both functional and user-friendly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-md"
              >
                Get In Touch
              </a>
              <a
                href="/resume/ResumeJimenez.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
