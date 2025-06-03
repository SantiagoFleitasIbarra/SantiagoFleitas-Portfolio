
"use client";

import { SectionWrapper } from '@/components/common/SectionWrapper';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/lib/projectsData';

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="projects" className="bg-background"> {/* Ensures space-like background */}
      <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground to-accent">
        {t('projectsTitle')}
      </h2>
      <p className="text-lg text-foreground/80 text-center max-w-3xl mx-auto mb-12">
        {t('projectsDescription')}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}

    