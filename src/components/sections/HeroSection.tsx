
"use client";

import Link from 'next/link';
import Image from 'next/image';
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
          <Rocket className="w-12 h-12 md:w-14 text-accent mx-auto md:mx-0 mb-4 md:mb-5 animate-pulse" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold mb-3 md:mb-4">
            {t('heroName')}
          </h1>
          <div className="h-10 md:h-12 lg:h-14 flex items-center justify-center md:justify-start mb-4 md:mb-5">
            <TypingAnimation texts={jobTitles} className="text-xl sm:text-2xl lg:text-3xl font-headline text-accent" />
          </div>
          <p className="max-w-xl mx-auto md:mx-0 text-base md:text-lg text-foreground/80 mb-6 md:mb-8">
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

        {/* Right Column: Image */}
        <div className="flex justify-center items-center order-1 md:order-2 px-4 md:px-0">
          <Image
            src="https://placehold.co/500x500.png"
            alt={t('heroSpaceImageAlt')}
            width={500}
            height={500}
            priority
            data-ai-hint="planet nebula"
            className="rounded-lg shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

    