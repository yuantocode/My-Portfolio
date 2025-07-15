import {AboutSection} from "../components/AboutSection";
import CertsSection from "../components/CertsSection";
import { ContactSection } from "../components/ContactSection";
import { CosmicBackground } from "../components/CosmicBackground";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { PracticumSection } from "../components/PracticumSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SeminarsSection } from "../components/SeminarsSection";
import { SkillsSection } from "../components/SkillSection";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
            <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />
        <CosmicBackground />
        

        {/* NavBar */}
        <Navbar />
        
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <CertsSection />
            <SeminarsSection />
            <PracticumSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
    </div>
};