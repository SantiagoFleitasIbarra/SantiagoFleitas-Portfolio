
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { TechnicalSkillsSection } from '@/components/sections/TechnicalSkillsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <TechnicalSkillsSection />
      {/* Placeholder for future Projects and Contact sections */}
      <div id="projects" className="h-20"></div> {/* Simple spacer for nav link */}
      <div id="contact" className="h-20"></div> {/* Simple spacer for nav link */}
    </>
  );
}
