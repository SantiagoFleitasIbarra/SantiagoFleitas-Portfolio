
"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'; // Keep for structure if needed, but might simplify
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Project, ProjectTech } from '@/lib/projectsData';
import { Github, ExternalLink, Youtube } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();

  const getTechDisplayName = (tech: ProjectTech) => {
    return tech;
  };

  return (
    <article className="group relative flex flex-col rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] bg-card border border-border/40 overflow-hidden">
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={t(project.titleKey)}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out group-hover:scale-110"
          data-ai-hint={project.imageAiHint}
        />
        {project.statusKey && (
          <div className="absolute top-2 right-2 z-10">
            <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-300 border-green-500/30">
              {t(project.statusKey)}
            </Badge>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-headline font-semibold text-accent mb-2">{t(project.titleKey)}</h3>
        
        <p className="text-sm text-foreground/80 mb-3 h-20 overflow-hidden"> {/* Approx 4-5 lines of text-sm */}
          {t(project.longDescriptionKey)}
        </p>

        <div className="mt-auto"> {/* Pushes tech stack and buttons to the bottom if content above is short */}
          <div className="mb-3">
            <h4 className="text-xs font-semibold text-muted-foreground mb-1.5">{t('projectTechStack')}</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStackRaw.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs border-primary/50 text-primary/80 bg-primary/10 px-1.5 py-0.5">
                  {getTechDisplayName(tech)}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-start pt-1 border-t border-border/20 mt-3">
            {project.repoUrl && (
              <Button variant="outline" size="sm" asChild className="border-accent/70 text-accent/90 hover:bg-accent/20 hover:text-accent-foreground text-xs">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1.5 h-3.5 w-3.5" /> {t('projectViewRepo')}
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button variant="outline" size="sm" asChild className="border-accent/70 text-accent/90 hover:bg-accent/20 hover:text-accent-foreground text-xs">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> {t('projectViewDemo')}
                </a>
              </Button>
            )}
            {project.demoDayUrl && (
              <Button variant="outline" size="sm" asChild className="border-accent/70 text-accent/90 hover:bg-accent/20 hover:text-accent-foreground text-xs">
                <a href={project.demoDayUrl} target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-1.5 h-3.5 w-3.5" /> {t('projectDemoDay')}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
