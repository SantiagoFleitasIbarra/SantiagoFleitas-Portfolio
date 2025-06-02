"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, Users, MessageCircle, Brain, Compass, CheckCircle } from 'lucide-react'; // Using CheckCircle for English

interface SkillCardProps {
  icon: React.ElementType;
  titleKey: keyof typeof import('@/lib/translations').translations;
  descriptionKey: keyof typeof import('@/lib/translations').translations;
}

const SkillCard = ({ icon: Icon, titleKey, descriptionKey }: SkillCardProps) => {
  const { t } = useLanguage();
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-xl hover:shadow-accent/20 transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center gap-3 pb-3">
        <Icon className="w-8 h-8 text-accent" />
        <CardTitle className="text-xl font-headline text-foreground">{t(titleKey)}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{t(descriptionKey)}</p>
      </CardContent>
    </Card>
  );
};

export function AboutSection() {
  const { t } = useLanguage();

  const skills = [
    { icon: MessageCircle, titleKey: 'skillEffectiveCommunication', descriptionKey: 'skillEffectiveCommunicationDesc' },
    { icon: Users, titleKey: 'skillTeamManagement', descriptionKey: 'skillTeamManagementDesc' },
    { icon: Compass, titleKey: 'skillProblemSolving', descriptionKey: 'skillProblemSolvingDesc' },
    { icon: Brain, titleKey: 'skillMathematicalThinking', descriptionKey: 'skillMathematicalThinkingDesc' },
    { icon: CheckCircle, titleKey: 'skillTechnicalEnglish', descriptionKey: 'skillTechnicalEnglishDesc' },
  ] as const;


  return (
    <SectionWrapper id="about">
      <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12">
        {t('aboutMeTitle')}
      </h2>
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-6">
          <p className="text-lg text-foreground/80 leading-relaxed">
            {t('aboutMeDescription')}
          </p>
          <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/20 hover:text-accent-foreground font-semibold shadow-lg">
            <Download className="mr-2 w-5 h-5" />
            {t('downloadCV')}
          </Button>
          <div className="grid sm:grid-cols-1 gap-6 pt-6">
            {skills.map(skill => (
              <SkillCard key={skill.titleKey} icon={skill.icon} titleKey={skill.titleKey} descriptionKey={skill.descriptionKey} />
            ))}
          </div>
        </div>
        <div className="md:col-span-1 space-y-6">
          <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl border-2 border-accent/50">
            <Image 
              src="https://placehold.co/600x600.png" 
              alt="Santiago Fleitas Portrait 1" 
              layout="fill" 
              objectFit="cover"
              data-ai-hint="professional portrait" 
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </div>
           <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl border-2 border-accent/50">
            <Image 
              src="https://placehold.co/600x600.png" 
              alt="Santiago Fleitas Portrait 2" 
              layout="fill" 
              objectFit="cover" 
              data-ai-hint="developer coding"
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
