import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { useRef } from "react";

export const HeroSection = () => {
  const imageRef = useRef(null);

  // Mouse movement effect for tilt
  const handleMouseMove = (e) => {
    const image = imageRef.current;
    if (!image) return;

    const { left, top, width, height } = image.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 30; // max rotate 15deg
    const y = ((e.clientY - top) / height - 0.5) * -30;

    image.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;
  };

  const resetTransform = () => {
    const image = imageRef.current;
    if (!image) return;

    image.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
        {/* 👤 Image Section */}
        <div className="flex justify-center md:justify-end">
          <div
            className="transition-transform duration-300 ease-in-out animate-float hover:animate-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTransform}
            ref={imageRef}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full shadow-lg border-4 border-primary transition-all duration-500 hover:rotate-[360deg]"
            />
          </div>
        </div>

        {/* 💬 Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Uan</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Jimenez</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            I'm a BSIT student who's passionate about Data Analytics and Back-End Development
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
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
