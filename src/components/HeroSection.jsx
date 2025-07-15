import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
        {/* 👤 3D Tilt Image */}
        <div className="flex justify-center md:justify-end">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            glareBorderRadius="9999px"
            scale={1.05}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            transitionSpeed={1500}
            className="rounded-full"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full shadow-lg border-4 border-primary"
            />
          </Tilt>
        </div>

        {/* 💬 Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="text-primary">
              <Typewriter
                words={["Uan Jimenez", "Innovative", "Quick Learning", "Collaborative", "Focused"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
            I'm a BSIT student who's passionate about Data Analytics and Back-End Development
          </p>

          <div className="pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* ⬇️ Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
