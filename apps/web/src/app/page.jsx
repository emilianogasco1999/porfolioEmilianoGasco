import { HeaderNavbar } from "@/components/HeaderNavbar";
import { HeroSection } from "@/components/HeroSection";
import { TechEcosystemStrip } from "@/components/TechEcosystemStrip";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { DividerBanner } from "@/components/DividerBanner";
import { UiDesignSkillsSection } from "@/components/UiDesignSkillsSection";
import { FrontendSkillsSection } from "@/components/FrontendSkillsSection";
import { BackendSkillsSection } from "@/components/BackendSkillsSection";
import { InfraSkillsSection } from "@/components/InfraSkillsSection";
import { InDevelopmentSection } from "@/components/InDevelopmentSection";
import { DevQuickstartCLI } from "@/components/DevQuickstartCLI";
import { ContactCardsSection } from "@/components/ContactCardsSection";
import { FooterSection } from "@/components/FooterSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#D1D6D9] overflow-x-clip selection:bg-[#DDFF46] selection:text-[#0C0C0C]">
      {/* 01 • Floating Header / Navbar */}
      <HeaderNavbar />

      <main>
        {/* 02 • Hero Section + Telemetry Widget */}
        <HeroSection />

        {/* 03 • Tech Ecosystem Strip (Infinite Marquee) */}
        <TechEcosystemStrip />

        {/* 04 • Sobre Mí & PowerLink Technology */}
        <AboutSection />

        {/* 05 • Mis Proyectos Showcase (Sticky Scroll) */}
        <ProjectsShowcase />

        {/* 06 • 4 Pillars Transition Banner */}
        <DividerBanner />

        {/* 07 • Pillar 01: UX/UI & Product Design */}
        <UiDesignSkillsSection />

        {/* 08 • Pillar 02: Frontend Engineering */}
        <FrontendSkillsSection />

        {/* 09 • Pillar 03: Backend & Data Architecture */}
        <BackendSkillsSection />

        {/* 10 • Pillar 04: Infrastructure, DevOps & Networking */}
        <InfraSkillsSection />

        {/* 11 • Proyectos en Desarrollo (Mi Alberdi + Chapatita) */}
        {/* <InDevelopmentSection /> */}

        {/* 12 • Dev Quickstart & Contact CLI */}
        <DevQuickstartCLI />

        {/* 13 • Contact Cards (4 Cards Grid) */}
        <ContactCardsSection />
      </main>

      {/* 14 • Portfolio Footer */}
      <FooterSection />
    </div>
  );
}
