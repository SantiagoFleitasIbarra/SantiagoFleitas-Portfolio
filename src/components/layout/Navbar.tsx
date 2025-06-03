
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Moon, Sun, Orbit } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: '#home', labelKey: 'navHome' },
    { href: '#about', labelKey: 'navAbout' },
    { href: '#education', labelKey: 'navEducation' },
    { href: '#technical-skills', labelKey: 'navSkills' },
    { href: '#projects', labelKey: 'navProjects' },
    { href: '#contact', labelKey: 'navContact' },
  ] as const;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 text-xl font-headline text-accent hover:text-accent/80 transition-colors">
          <Orbit className="w-7 h-7" />
          <span>{t('appName')}</span>
        </Link>
        
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <Button key={item.href} variant="ghost" asChild className="text-foreground hover:text-accent hover:bg-accent/10">
                <Link href={item.href}>{t(item.labelKey)}</Link>
              </Button>
            ))}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="border-primary hover:bg-primary/10">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border">
              <DropdownMenuItem onClick={() => setLanguage('es')} className={cn(language === 'es' && 'bg-accent/20 text-accent-foreground')}>
                Español
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')} className={cn(language === 'en' && 'bg-accent/20 text-accent-foreground')}>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Future theme toggle example
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          */}
        </div>
      </div>
    </nav>
  );
}

    