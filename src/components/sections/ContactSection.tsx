
"use client";

import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageSquareQuote } from 'lucide-react';

interface ContactInfoCardProps {
  icon: React.ElementType;
  labelKey: keyof typeof import('@/lib/translations').translations;
  valueKey: keyof typeof import('@/lib/translations').translations;
  href?: string;
}

const ContactInfoCard = ({ icon: Icon, labelKey, valueKey, href }: ContactInfoCardProps) => {
  const { t } = useLanguage();
  const value = t(valueKey);

  const content = (
    <Card className="bg-card/70 backdrop-blur-md border-border/50 shadow-xl hover:shadow-accent/20 transition-shadow duration-300 w-full text-left">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <Icon className="w-6 h-6 text-accent" />
        <CardTitle className="text-lg font-headline text-foreground">{t(labelKey)}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground break-words">{value}</p>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
        {content}
      </a>
    );
  }
  return content;
};

export function ContactSection() {
  const { t } = useLanguage();

  const socialLinks = [
    { Icon: Github, hrefKey: 'contactGithubLink', label: 'GitHub' },
    { Icon: Linkedin, hrefKey: 'contactLinkedInLink', label: 'LinkedIn' },
    { Icon: Instagram, hrefKey: 'contactInstagramLink', label: 'Instagram' },
  ] as const;

  return (
    <SectionWrapper id="contact" className="bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground to-accent">
          {t('contactTitle')}
        </h2>
        <p className="text-xl text-foreground/90 mb-3">{t('contactIntroQuestion')}</p>
        <p className="text-md text-foreground/80 mb-12 max-w-xl mx-auto">
          {t('contactIntroAvailability')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ContactInfoCard icon={Mail} labelKey="contactEmailLabel" valueKey="contactEmailValue" href={`mailto:${t('contactEmailValue')}`} />
          <ContactInfoCard icon={Phone} labelKey="contactPhoneLabel" valueKey="contactPhoneValue" href={`tel:${t('contactPhoneValue').replace(/\s/g, '')}`} />
          <ContactInfoCard icon={MapPin} labelKey="contactLocationLabel" valueKey="contactLocationValue" />
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-headline font-semibold text-accent mb-6">{t('contactSocialMediaLabel')}</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map(social => (
              <Button key={social.label} variant="outline" size="icon" asChild className="border-primary hover:bg-primary/10 rounded-full w-12 h-12">
                <a href={t(social.hrefKey)} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.Icon className="w-6 h-6 text-primary" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/30 p-6 md:p-8 shadow-lg">
          <CardHeader className="flex-row items-center justify-center gap-3 mb-2">
            <MessageSquareQuote className="w-8 h-8 text-accent" />
            <CardTitle className="text-xl font-headline text-foreground">Cita Inspiradora</CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="text-lg italic text-foreground/80 mb-2">
              "{t('contactMotivationalQuote')}"
            </blockquote>
            <p className="text-sm text-muted-foreground">- {t('contactMotivationalQuoteAuthor')}</p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}

    