
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Project, ProjectTech } from '@/lib/projectsData';
import { cn } from '@/lib/utils';
import { Github, ExternalLink, Youtube } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);

  const getTechDisplayName = (tech: ProjectTech) => {
    // Simple mapping for now, can be expanded or moved to translations
    return tech;
  };

  return (
    <div className="flip-card-container" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={cn("flip-card-inner", isFlipped && "flipped")}>
        {/* Front Side */}
        <div className="flip-card-front">
          <Card className="w-full h-full flex flex-col bg-transparent border-0 shadow-none">
            <CardHeader className="p-0 relative aspect-video w-full">
              <Image
                src={project.imageUrl}
                alt={t(project.titleKey)}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                data-ai-hint={project.imageAiHint}
              />
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-center items-center p-4">
              <h3 className="text-xl font-headline font-semibold text-accent mb-2">{t(project.titleKey)}</h3>
              <p className="text-sm text-muted-foreground">{t('projectClickForDetails')}</p>
            </CardContent>
             {project.statusKey && (
              <CardFooter className="p-2 justify-center">
                <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-300 border-green-500/30">
                  {t(project.statusKey)}
                </Badge>
              </CardFooter>
            )}
          </Card>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <Card className="w-full h-full flex flex-col bg-transparent border-0 shadow-none text-left p-1">
            <CardHeader className="pb-2 pt-2">
              <CardTitle className="text-lg font-headline text-accent">{t(project.titleKey)}</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-foreground/80 flex-grow space-y-2 overflow-y-auto pr-1">
              <p>{t(project.longDescriptionKey)}</p>
              <div className="pt-1">
                <h4 className="text-sm font-semibold text-muted-foreground mb-1">{t('projectTechStack')}</h4>
                <div className="flex flex-wrap gap-1">
                  {project.techStackRaw.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs border-primary/50 text-primary/80 bg-primary/10">
                      {getTechDisplayName(tech)}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 pt-2 pb-1 justify-start">
              {project.repoUrl && (
                <Button variant="outline" size="sm" asChild className="border-accent text-accent hover:bg-accent/20 hover:text-accent-foreground text-xs">
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <Github className="mr-1.5 h-3.5 w-3.5" /> {t('projectViewRepo')}
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button variant="outline" size="sm" asChild className="border-accent text-accent hover:bg-accent/20 hover:text-accent-foreground text-xs">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> {t('projectViewDemo')}
                  </a>
                </Button>
              )}
              {project.demoDayUrl && (
                 <Button variant="outline" size="sm" asChild className="border-accent text-accent hover:bg-accent/20 hover:text-accent-foreground text-xs">
                  <a href={project.demoDayUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <Youtube className="mr-1.5 h-3.5 w-3.5" /> {t('projectDemoDay')}
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

    