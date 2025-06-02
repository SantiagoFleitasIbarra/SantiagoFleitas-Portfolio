"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TypingAnimation } from '@/components/common/TypingAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Rocket } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();
  const jobTitles = [t('heroTitle1'), t('heroTitle2')];

  return (
    <SectionWrapper id="home" className="relative text-center">
      <div className="absolute inset-0 -z-10 opacity-10">
        {/* Placeholder for a large background nebula or galaxy image */}
        {/* <Image src="/placeholder-nebula.png" layout="fill" objectFit="cover" alt="Nebula background" /> */}
      </div>
      <Rocket className="w-16 h-16 text-accent mx-auto mb-6 animate-pulse" />
      <h1 className="text-5xl md:text-7xl font-headline font-bold mb-4">
        {t('heroName')}
      </h1>
      <div className="h-12 md:h-16 flex items-center justify-center mb-6">
        <TypingAnimation texts={jobTitles} className="text-2xl md:text-3xl font-headline text-accent" />
      </div>
      <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
        {t('heroWelcome')}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg transform transition-transform hover:scale-105">
          <Link href="#projects">
            {t('heroViewProjects')} <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary font-semibold shadow-lg transform transition-transform hover:scale-105">
          <Link href="#contact">
            {t('heroContact')}
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
