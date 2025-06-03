
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { TechnicalSkillsSection } from '@/components/sections/TechnicalSkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection'; // Import new section

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <TechnicalSkillsSection />
      <ProjectsSection />
      <ContactSection /> {/* Add new section here */}
    </>
  );
}

    