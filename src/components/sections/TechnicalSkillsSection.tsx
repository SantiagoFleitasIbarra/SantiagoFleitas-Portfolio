
"use client";

import type { ReactNode } from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  MonitorSmartphone,
  ServerCog,
  Database,
  Wrench,
  Smartphone,
  Palette,
  Braces,
  GitFork,
  Container,
  FigmaIcon,
  ListChecks,
  Flame,
  FileCode2,
  DatabaseZap,
} from 'lucide-react';

// Specific Tech SVGs as React Components
const ReactJsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" className="w-full h-full">
    <circle cx="0" cy="0" r="2.05" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const TailwindCssIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 154" fill="currentColor" className="w-full h-full">
    <path d="M128 0C102.4 0 82.6667 11.2 72.5333 28.8C62.4 11.2 42.6667 0 17.0667 0C6.93333 0 0 4.8 0 12.8C0 32 17.0667 44.8 17.0667 44.8C17.0667 44.8 6.93333 48 0 56C0 64 6.93333 68.8 17.0667 68.8C42.6667 68.8 62.4 57.6 72.5333 40C82.6667 57.6 102.4 68.8 128 68.8C138.133 68.8 145.067 64 145.067 56C145.067 48 138.133 44.8 138.133 44.8C138.133 44.8 155.2 32 155.2 12.8C155.2 4.8 148.267 0 138.133 0H128Z" transform="translate(50.3999)"/>
    <path d="M128 84.8C102.4 84.8 82.6667 96 72.5333 113.6C62.4 96 42.6667 84.8 17.0667 84.8C6.93333 84.8 0 89.6 0 97.6C0 116.8 17.0667 129.6 17.0667 129.6C17.0667 129.6 6.93333 132.8 0 140.8C0 148.8 6.93333 153.6 17.0667 153.6C42.6667 153.6 62.4 142.4 72.5333 124.8C82.6667 142.4 102.4 153.6 128 153.6C138.133 153.6 145.067 148.8 145.067 140.8C145.067 132.8 138.133 129.6 138.133 129.6C138.133 129.6 155.2 116.8 155.2 97.6C155.2 89.6 148.267 84.8 138.133 84.8H128Z"/>
  </svg>
);

const NodeJsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M11.988 19.524c-1.028.005-2.032-.146-2.982-.444l-.677 2.125a9.783 9.783 0 003.667.676c1.06 0 2.095-.175 3.074-.523l-.666-2.131c-.94.28-1.924.427-2.934.426zm7.802-3.687c.528-.904.836-1.943.836-3.034 0-1.083-.297-2.11-.823-3.005l1.806-1.213a7.03 7.03 0 011.3 4.218c0 1.68-.599 3.205-1.576 4.427l-1.543-1.393zm-15.612 0l-1.543 1.393c-.977-1.222-1.576-2.748-1.576-4.427a7.03 7.03 0 011.3-4.218l1.806 1.213c-.526.895-.823 1.922-.823 3.005 0 1.09.308 2.13.836 3.034zM12 14.21a2.762 2.762 0 002.717-2.204c.005-.22.005-.44-.002-.66l-2.113.68a.618.618 0 01-.778-.535l.684-2.123a2.72 2.72 0 00-1.017-.082 2.77 2.77 0 00-2.718 2.205c-.005.22-.005.44.002.66l2.114-.68a.618.618 0 01.778.535l-.684 2.122a2.724 2.724 0 001.017.083zm.002-11.815C6.473 2.395 2.02 6.625 2.02 12.006c0 4.186 3.006 7.788 7.014 9.146l.685-2.122a7.032 7.032 0 01-5.18-6.997c0-4.413 3.62-7.98 8.15-7.98s8.15 3.567 8.15 7.98A7.032 7.032 0 0114.3 19.056l.685 2.122c4.008-1.358 7.014-4.96 7.014-9.146 0-5.38-4.452-9.611-9.998-9.611z" />
  </svg>
);

const PythonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M14.134 21.726H9.866c-.618 0-1.021-.41-.979-.981.105-1.409.77-2.283 1.891-2.996V15.45c-1.586-.473-2.379-1.713-2.379-3.485V9.546c0-1.772.793-3.012 2.379-3.485V3.256c1.35-.093 2.143-.712 2.143-1.955S14.082 0 12.001 0H7.395c-.618 0-1.063.504-1.021 1.122.189 2.629 1.807 4.081 4.492 4.955v2.542c-2.685.874-4.303 2.326-4.492 4.955-.042.618.403 1.122 1.021 1.122h2.472c.702 0 1.105.452 1.063 1.023-.105 1.493-.854 2.411-2.101 3.124v2.827c.042.618-.403 1.064-1.021 1.064H2.274c-.702 0-1.105-.453-1.063-1.024.105-1.493.854-2.411 2.101-3.124V15.45c-.042-.618.403-1.064 1.021-1.064h2.514c.618 0 1.021-.41.979-.981-.105-1.409-.77-2.283-1.891-2.996V7.993c1.586-.473 2.379-1.713 2.379-3.485V2.089c0-1.772-.793-3.012-2.379-3.485V-2.704c-1.35-.093-2.143-.712-2.143-1.955S9.918-6 11.999-6h4.606c.618 0 1.063.504 1.021 1.122-.189 2.629-1.807 4.081-4.492 4.955V2.61c2.685.874 4.303 2.326 4.492 4.955.042.618-.403 1.122-1.021 1.122h-2.472c-.702 0-1.105.452-1.063 1.023.105 1.493.854 2.411 2.101 3.124v2.827c-.042.618.403 1.064 1.021 1.064h4.648c.702 0 1.105-.453 1.063-1.024-.105-1.493-.854-2.411-2.101-3.124V10.08c.042-.618-.403-1.064-1.021-1.064H16.52c-.618 0-1.021-.41-.979-.981.105-1.409.77-2.283 1.891-2.996V2.827c-1.586-.473-2.379-1.713-2.379-3.485V-3.077c0-1.772.793-3.012 2.379-3.485V-7.87c1.35-.093 2.143-.712 2.143-1.955S14.082-11 12.001-11H7.395c-.618 0-1.063.504-1.021 1.122.189 2.629 1.807 4.081 4.492 4.955v13.848c-2.685.874-4.303 2.326-4.492 4.955-.042.618.403 1.122 1.021 1.122h4.738z" transform="translate(0 11)"/>
  </svg>
);

const FlutterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M13.528 2.446l-9.056 9.056h5.312L13.528 7.76zm-9.056 9.056l5.312 5.312L22.056 4.56l-5.312-2.114zM7.68 16.774l-5.234-5.234L1.02 12.966l6.66 6.66 6.66-6.66-1.426-1.426z"/>
  </svg>
);


interface Skill {
  name: string;
  icon: ReactNode;
}

interface SkillCategory {
  titleKey: keyof typeof import('@/lib/translations').translations;
  icon: ReactNode;
  skills: Skill[];
}

const SkillItem = ({ name, icon }: Skill) => (
  <div className="skill-item">
    <div className="skill-item-icon">{icon}</div>
    <span className="skill-item-name">{name}</span>
  </div>
);

const SkillCategoryCard = ({ titleKey, icon, skills }: SkillCategory) => {
  const { t } = useLanguage();
  return (
    <Card className="bg-card/70 backdrop-blur-md border-border/50 shadow-xl hover:shadow-accent/20 transition-shadow duration-300 flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <div className="w-10 h-10 text-accent">{icon}</div>
        <CardTitle className="text-2xl font-headline text-foreground">{t(titleKey)}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow">
        {skills.map(skill => (
          <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </CardContent>
    </Card>
  );
};

export function TechnicalSkillsSection() {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      titleKey: 'skillsFrontendTitle',
      icon: <MonitorSmartphone className="w-full h-full" />,
      skills: [
        { name: 'HTML5', icon: <FileCode2 /> },
        { name: 'CSS3', icon: <Palette /> },
        { name: 'JavaScript', icon: <Braces /> },
        { name: 'React.js', icon: <ReactJsIcon /> },
        { name: 'Tailwind CSS', icon: <TailwindCssIcon /> },
      ],
    },
    {
      titleKey: 'skillsBackendTitle',
      icon: <ServerCog className="w-full h-full" />,
      skills: [
        { name: 'Node.js', icon: <NodeJsIcon /> },
        { name: 'Python', icon: <PythonIcon /> },
      ],
    },
    {
      titleKey: 'skillsDatabasesTitle',
      icon: <Database className="w-full h-full" />,
      skills: [
        { name: 'MySQL', icon: <Database /> },
        { name: 'MongoDB', icon: <DatabaseZap /> },
      ],
    },
    {
      titleKey: 'skillsToolsTitle',
      icon: <Wrench className="w-full h-full" />,
      skills: [
        { name: 'Git', icon: <GitFork /> },
        { name: 'Docker', icon: <Container /> },
        { name: 'Figma', icon: <FigmaIcon /> },
        { name: 'Jira', icon: <ListChecks /> },
        { name: 'Firebase', icon: <Flame /> },
      ],
    },
    {
      titleKey: 'skillsMobileTitle',
      icon: <Smartphone className="w-full h-full" />,
      skills: [
        { name: 'Flutter', icon: <FlutterIcon /> },
      ],
    },
  ];

  return (
    <SectionWrapper id="technical-skills" className="bg-planet-surface">
      <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-foreground">
        {t('skillsTechTitle')}
      </h2>
      <p className="text-lg text-foreground/80 text-center max-w-3xl mx-auto mb-12">
        {t('skillsTechDescription')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map(category => (
          <SkillCategoryCard
            key={category.titleKey.toString()}
            titleKey={category.titleKey}
            icon={category.icon}
            skills={category.skills}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
