
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { TechnicalSkillsSection } from '@/components/sections/TechnicalSkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection'; // Import new section

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <TechnicalSkillsSection />
      <ProjectsSection /> {/* Add new section here */}
      {/* Placeholder for future Contact section */}
      <div id="contact" className="h-20"></div> {/* Simple spacer for nav link */}
    </>
  );
}

    