"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import { ParticlesBackground } from "@/components/background/particlesBackground";
import "./globals.css";
import Footer from "./components/footer";
import Section from "@/components/ui/Section";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsCertSection from "./sections/SkillsCertSection";
import ContactSection from "./sections/ContactSection";
export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <main>
      <Navbar lng={lng} />
      <ParticlesBackground />
      <Section id="about">
        <HeroSection lng={lng} />
      </Section>
      <Section id="experience">
        <ExperienceSection lng={lng} />
      </Section>
      <Section id="projects">
        <ProjectsSection lng={lng} />
      </Section>
      <Section id="skills">
        <SkillsCertSection lng={lng} />
      </Section>
      <Section id="contact">
        <ContactSection lng={lng} />
      </Section>
      <Footer />
    </main>
  );
}
