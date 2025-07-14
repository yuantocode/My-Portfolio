import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-fade-in">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 🧠 Text Content */}
          <div className="space-y-6 opacity-0 animate-fade-in-delay-1">
            <h3 className="text-2xl font-semibold">BSIT Student Programmer</h3>

            <p className="text-muted-foreground">
              I'm a dedicated BSIT student with 4 years of hands-on programming experience and a solid foundation in multiple languages. Known for being highly adaptable and sociable, I thrive in collaborative environments and can easily blend into any IT team. My persistence drives me — even when concepts are tough, I keep learning until I get it right.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/resume/Julian-Manuel-Jimenez-Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* 🔷 Skills Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover opacity-0 animate-fade-in-delay-2 transition-transform duration-500 hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Passionate about building dynamic and responsive websites with best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover opacity-0 animate-fade-in-delay-3 transition-transform duration-500 hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Focused on creating user-friendly, aesthetic, and accessible designs.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover opacity-0 animate-fade-in-delay-4 transition-transform duration-500 hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Project Collaboration</h4>
                  <p className="text-muted-foreground">
                    Strong team player, bringing leadership and adaptability to group projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
