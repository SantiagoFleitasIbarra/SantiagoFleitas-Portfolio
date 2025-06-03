
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
    <SectionWrapper id="home" className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
        {/* Left Column: Text Content */}
        <div className="md:text-left text-center order-2 md:order-1">
          <Rocket className="w-10 h-10 md:w-12 text-accent mx-auto md:mx-0 mb-3 md:mb-4 animate-pulse" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold mb-2 md:mb-3">
            {t('heroName')}
          </h1>
          <div className="h-8 md:h-10 lg:h-12 flex items-center justify-center md:justify-start mb-3 md:mb-4">
            <TypingAnimation texts={jobTitles} className="text-lg sm:text-xl lg:text-2xl font-headline text-accent" />
          </div>
          <p className="max-w-xl mx-auto md:mx-0 text-sm md:text-base text-foreground/80 mb-5 md:mb-6">
            {t('heroWelcome')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
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
        </div>

        {/* Right Column: Impact Phrase */}
        <div className="flex justify-center items-center order-1 md:order-2 px-4 md:px-0 min-h-[250px] sm:min-h-[300px] md:min-h-0">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-center">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
              {t('heroImpactPhrase')}
            </span>
          </h2>
        </div>
      </div>
    </SectionWrapper>
  );
}
