
"use client";

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Orbit, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-background/50 border-t border-border/50">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="mb-6">
          <Button variant="outline" asChild className="border-accent/70 text-accent/90 hover:bg-accent/20 hover:text-accent-foreground">
            <Link href="#home">
              <ArrowUp className="mr-2 h-4 w-4" />
              {t('footerBackToTop')}
            </Link>
          </Button>
        </div>
        <Separator className="my-6 bg-border/30" />
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

    