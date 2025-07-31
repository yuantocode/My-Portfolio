import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Web Development",
    description:
      "Passionate about building dynamic and responsive websites with best practices.",
  },
  {
    icon: <User className="h-6 w-6 text-primary" />,
    title: "UI/UX Design",
    description:
      "Focused on creating user-friendly, aesthetic, and accessible designs.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Project Collaboration",
    description:
      "Strong team player, bringing leadership and adaptability to group projects.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About{" "}
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 🧠 Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              BSIT Student <span className="text-primary">Programmer</span>
            </h3>

            <p className="text-muted-foreground">
              I'm a dedicated BSIT student with 4 years of hands-on programming
              experience and a solid foundation in multiple languages. Known for
              being highly adaptable and sociable, I thrive in collaborative
              environments and can easily blend into any IT team. My persistence
              drives me even when concepts are tough. I keep learning until I
              get it right.
            </p>

            {/* ✅ CENTERED BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/resume/ResumeJimenez.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* 🔷 Skills Cards */}
          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
                className="p-6 rounded-xl bg-background/60 border border-border backdrop-blur-md shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-[1.03] group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{skill.title}</h4>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
