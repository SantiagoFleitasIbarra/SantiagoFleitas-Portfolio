"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Orbit } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background/50 border-t border-border/50">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center items-center mb-2">
          <Orbit className="w-5 h-5 mr-2 text-accent" />
          <p className="text-sm">
            &copy; {currentYear} {t('heroName')}. {t('appName')}.
          </p>
        </div>
        <p className="text-xs">
          Designed with a cosmic touch.
        </p>
      </div>
    </footer>
  );
}
