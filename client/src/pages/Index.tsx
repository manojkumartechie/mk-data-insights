
import { PageTransition } from "@/components/PageTransition";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Interactive3DCTA } from "@/components/Interactive3DCTA";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <Navigation />
        <section id="home">
          <HeroSection />
          <Interactive3DCTA />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="skills">
          <EducationSection />
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
