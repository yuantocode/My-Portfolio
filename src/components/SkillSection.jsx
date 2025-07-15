import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 65, category: "frontend" },
  { name: "React", level: 50, category: "frontend" },
  { name: "Tailwind CSS", level: 50, category: "frontend" },

  // Backend
  { name: "Node.js", level: 50, category: "backend" },
  { name: "Express", level: 50, category: "backend" },
  { name: "MongoDB", level: 50, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 50, category: "tools" },
  { name: "Figma", level: 50, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }} // replay on scroll
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        {/* 🔘 Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background text-foreground border-muted hover:bg-muted/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 🎯 Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card p-6 rounded-xl shadow-md border border-border card-hover hover:shadow-lg"
              >
                <div className="mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-muted/30 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-primary h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
