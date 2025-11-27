import { ThemeToggle } from "../components/ThemeToggle";
import { StartBackground } from "../components/StartBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme togle */}
      <ThemeToggle />

      {/* Background effect */}
      <StartBackground />

      {/* navbar */}
      <Navbar />

      {/* main container */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};
